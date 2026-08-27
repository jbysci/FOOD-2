const calculatorForm = document.getElementById("calculatorForm");
const resultPanel = document.getElementById("resultPanel");

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function formatNumber(value) {
    return Math.round(value).toLocaleString("en-US");
}

let calculationNumber = 0;
let currentPlan = [];
let currentTarget = 0;
let currentPreferences = {};

function renderDietPlan(target, goal, preferences) {
    const planOptions = preferences.diet === "vegan"
        ? [
            ["Overnight oats with berries and chia seeds", "Lentil quinoa bowl with roasted vegetables", "Tofu stir-fry with brown rice and greens", "An apple with sunflower seed butter"],
            ["Avocado toast with white beans and tomato", "Chickpea wrap with crunchy salad", "Three-bean chilli with baked sweet potato", "Coconut yogurt with fruit"],
            ["Tofu scramble with mushrooms and whole-grain toast", "Edamame grain bowl with sesame vegetables", "Black bean tacos with cabbage slaw", "Carrot sticks with hummus"]
        ]
        : preferences.diet === "vegetarian"
            ? [
                ["Greek yogurt, berries, oats, and chia seeds", "Grilled halloumi, quinoa, roasted vegetables, and greens", "Lentil curry with brown rice and cucumber salad", "Cottage cheese with pineapple"],
                ["Two eggs, whole-grain toast, and sliced tomato", "Chickpea and feta salad with whole-grain pita", "Vegetable pasta with white beans and parmesan", "A pear with pumpkin seeds"],
                ["Overnight oats with banana and walnuts", "Tofu rice bowl with avocado and vegetables", "Bean burrito with salsa and Greek yogurt", "Carrot sticks with hummus"]
            ]
            : preferences.diet === "high-protein"
                ? [
                    ["Eggs, Greek yogurt, berries, and whole-grain toast", "Chicken breast, quinoa, edamame, and greens", "Baked salmon, sweet potato, and steamed broccoli", "Cottage cheese with berries"],
                    ["Protein oats with banana and peanut butter", "Turkey, avocado, and bean whole-grain wrap", "Lean beef, rice, and roasted vegetables", "A tuna and cucumber snack plate"],
                    ["Egg and cottage cheese scramble with fruit", "Chicken salad with chickpeas and pita", "Turkey meatballs, lentil pasta, and tomato sauce", "Greek yogurt with pumpkin seeds"]
                ]
                : goal < 0
        ? [
            ["Greek yogurt, berries, oats, and chia seeds", "Grilled chicken, quinoa, roasted vegetables, and greens", "Baked salmon, sweet potato, and steamed broccoli", "An apple with a small handful of almonds"],
            ["Overnight oats with banana and walnuts", "Turkey, avocado, and bean whole-grain wrap", "Lentil curry with brown rice and cucumber salad", "Cottage cheese with pineapple"],
            ["Two eggs, whole-grain toast, and sliced tomato", "Tuna and white bean salad with lemon dressing", "Chicken stir-fry with vegetables and cauliflower rice", "Carrot sticks with hummus"]
        ]
        : goal > 0
            ? [
                ["Oats with banana, peanut butter, milk, and two eggs", "Chicken rice bowl with avocado, beans, and vegetables", "Turkey pasta with tomato sauce, spinach, and parmesan", "A smoothie with yogurt, berries, oats, and nut butter"],
                ["Whole-grain pancakes with yogurt, berries, and honey", "Salmon, couscous, roasted vegetables, and avocado", "Lean beef burrito bowl with rice, beans, and salsa", "Trail mix with dried fruit and nuts"],
                ["Egg and cheese breakfast sandwich with fruit", "Chicken pesto pasta with spinach and tomatoes", "Baked cod, potatoes, peas, and whole-grain bread", "Banana with peanut butter and milk"]
            ]
            : [
                ["Vegetable omelette, whole-grain toast, and fruit", "Tuna and chickpea salad with whole-grain pita", "Lean chicken, brown rice, and roasted vegetables", "Greek yogurt with berries and pumpkin seeds"],
                ["Apple cinnamon porridge with yogurt", "Turkey quinoa bowl with greens and roasted peppers", "Bean and vegetable chilli with brown rice", "A pear with a small handful of almonds"],
                ["Scrambled eggs, avocado toast, and berries", "Grilled salmon salad with new potatoes", "Chicken and vegetable whole-grain noodles", "Cottage cheese with sliced peach"]
            ];
    const selectedMeals = planOptions[calculationNumber % planOptions.length];
    const mealNames = preferences.mealsPerDay === "3" ? ["Breakfast", "Lunch", "Dinner"] : preferences.mealsPerDay === "5" ? ["Breakfast", "Morning snack", "Lunch", "Dinner", "Evening snack"] : ["Breakfast", "Lunch", "Dinner", "Snack"];
    const mealDescriptions = preferences.mealsPerDay === "3" ? selectedMeals.slice(0, 3) : preferences.mealsPerDay === "5" ? [selectedMeals[0], "A piece of fruit with a handful of seeds", selectedMeals[1], selectedMeals[2], selectedMeals[3]] : selectedMeals;
    const shares = preferences.mealsPerDay === "3" ? [0.25, 0.4, 0.35] : preferences.mealsPerDay === "5" ? [0.22, 0.10, 0.33, 0.25, 0.10] : [0.25, 0.35, 0.30, 0.10];
    currentPlan = mealDescriptions.map((description, index) => [mealNames[index], description, shares[index]]);
    currentTarget = target;
    currentPreferences = preferences;
    renderMealCards();
    renderShoppingList();
}

function renderMealCards() {
    const mealPlan = document.getElementById("mealPlan");
    const scale = Number(document.getElementById("servingScale").value) / 100;
    const mealCalories = currentPlan.map(([, , share], index) => index === currentPlan.length - 1
        ? Math.round(currentTarget * scale) - currentPlan.slice(0, -1).reduce((total, [, , mealShare]) => total + Math.round(currentTarget * scale * mealShare), 0)
        : Math.round(currentTarget * scale * share));
    document.getElementById("servingValue").value = `${Math.round(scale * 100)}%`;
    mealPlan.innerHTML = currentPlan.map(([meal, description], index) => `
        <article class="meal-card">
            <div><span class="meal-label">${meal}</span><p>${description}</p></div>
            <strong>${formatNumber(mealCalories[index])} kcal</strong>
        </article>`).join("");
}

function renderShoppingList() {
    const avoided = (currentPreferences.allergies || "").toLowerCase().split(",").map(item => item.trim()).filter(Boolean);
    const ingredients = currentPreferences.diet === "vegan"
        ? ["Oats", "Tofu", "Lentils and beans", "Brown rice or quinoa", "Leafy greens", "Seasonal vegetables", "Fruit", "Seeds", "Olive oil", "Herbs and spices"]
        : currentPreferences.diet === "vegetarian"
            ? ["Oats", "Eggs", "Greek yogurt", "Lentils and beans", "Brown rice or quinoa", "Leafy greens", "Seasonal vegetables", "Fruit", "Olive oil", "Herbs and spices"]
            : currentPreferences.diet === "high-protein"
                ? ["Eggs", "Greek yogurt", "Chicken or fish", "Cottage cheese", "Quinoa", "Leafy greens", "Seasonal vegetables", "Fruit", "Olive oil", "Herbs and spices"]
                : ["Oats", "Eggs or tofu", "Greek yogurt or dairy-free yogurt", "Chicken or beans", "Brown rice or quinoa", "Leafy greens", "Seasonal vegetables", "Fruit", "Olive oil", "Herbs and spices"];
    const budgetAdjustedIngredients = currentPreferences.budget === "budget"
        ? ingredients.map(item => item === "Chicken or fish" ? "Beans and lentils" : item)
        : ingredients;
    const filteredIngredients = budgetAdjustedIngredients.filter(item => !avoided.some(food => item.toLowerCase().includes(food)));
    document.getElementById("shoppingList").innerHTML = filteredIngredients.map(item => `<label class="shopping-item"><input type="checkbox"> <span>${item}</span></label>`).join("");
}

function calculateCalories(event) {
    event.preventDefault();
    calculationNumber += 1;

    const formData = new FormData(calculatorForm);
    const age = Number(formData.get("age"));
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));
    const sex = formData.get("sex");
    const activity = Number(formData.get("activity"));
    const goal = Number(formData.get("goal"));
    const preferences = {
        diet: formData.get("diet"),
        mealsPerDay: formData.get("mealsPerDay"),
        budget: formData.get("budget"),
        allergies: formData.get("allergies") || ""
    };

    const bmr = sex === "male"
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;
    const maintenance = bmr * activity;
    const target = Math.max(1200, maintenance + goal);
    const protein = (target * 0.3) / 4;
    const carbs = (target * 0.4) / 4;
    const fats = (target * 0.3) / 9;
    const bmi = weight / ((height / 100) ** 2);

    document.getElementById("targetCalories").textContent = formatNumber(target);
    document.getElementById("maintenanceCalories").textContent = `${formatNumber(maintenance)} kcal`;
    document.getElementById("bmrCalories").textContent = `${formatNumber(bmr)} kcal`;
    document.getElementById("proteinAmount").textContent = `${formatNumber(protein)} g`;
    document.getElementById("carbsAmount").textContent = `${formatNumber(carbs)} g`;
    document.getElementById("fatsAmount").textContent = `${formatNumber(fats)} g`;
    document.getElementById("bmiValue").textContent = bmi.toFixed(1);
    document.getElementById("resultNote").textContent = goal < 0
        ? "A gentle calorie deficit can support gradual weight loss."
        : goal > 0
            ? "A modest calorie surplus can support gradual weight gain."
            : "This target is designed to maintain your current weight.";
    renderDietPlan(target, goal, preferences);
    localStorage.setItem("nutrilifeProfile", JSON.stringify({ target, maintenance, bmr, goal, preferences }));

    resultPanel.classList.add("is-visible");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

calculatorForm.addEventListener("submit", calculateCalories);
document.getElementById("servingScale").addEventListener("input", renderMealCards);