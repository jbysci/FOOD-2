const calculatorForm = document.getElementById("calculatorForm");
const resultPanel = document.getElementById("resultPanel");

function formatNumber(value) {
    return Math.round(value).toLocaleString("en-US");
}

function calculateCalories(event) {
    event.preventDefault();

    const formData = new FormData(calculatorForm);
    const age = Number(formData.get("age"));
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));
    const sex = formData.get("sex");
    const activity = Number(formData.get("activity"));
    const goal = Number(formData.get("goal"));

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

    resultPanel.classList.add("is-visible");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

calculatorForm.addEventListener("submit", calculateCalories);