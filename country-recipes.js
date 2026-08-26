const worldCountries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
    "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

worldCountries.sort((firstCountry, secondCountry) => firstCountry.localeCompare(secondCountry));

const culturalFoods = {
    Afghanistan: ["Kabuli Pulao", "Mantu", "Ashak", "Bolani", "Qorma", "Shorwa", "Kebab", "Borani Banjan", "Firni", "Sheer Yakh"],
    Albania: ["Tave Kosi", "Byrek", "Fergese", "Tavë Elbasani", "Qofte", "Flia", "Lakror", "Speca me Gjize", "Baklava", "Trilece"],
    Algeria: ["Couscous", "Chakhchoukha", "Rechta", "Tajine Zitoun", "Harira", "Merguez", "Mahjouba", "Dolma", "Makroud", "Baghrir"],
    Andorra: ["Escudella", "Trinxat", "Canelons", "Formatge", "Conill", "Coca", "Embotits", "Caragols", "Crema", "Bunyols"],
    Angola: ["Muamba de Galinha", "Calulu", "Funge", "Moamba de Peixe", "Feijoada", "Mufete", "Kizaca", "Cabidela", "Cocada", "Doce de Ginguba"],
    Argentina: ["Asado", "Empanadas", "Locro", "Milanesa", "Choripan", "Humita", "Carbonada", "Provoleta", "Alfajores", "Mate"],
    Armenia: ["Khorovats", "Dolma", "Harissa", "Lavash", "Khash", "Spas", "Ghapama", "Manti", "Gata", "Sujukh"],
    Australia: ["Meat Pie", "Barramundi", "Pavlova", "Chicken Parmigiana", "Lamingtons", "Damper", "Sausage Roll", "Anzac Biscuits", "Prawn Cocktail", "Vegemite Toast"],
    Austria: ["Wiener Schnitzel", "Tafelspitz", "Gulasch", "Kasnocken", "Apfelstrudel", "Sachertorte", "Knödel", "Kaiserschmarrn", "Backhendl", "Linzer Torte"],
    Azerbaijan: ["Plov", "Dolma", "Qutab", "Dushbara", "Piti", "Kebab", "Lavangi", "Kufta Bozbash", "Pakhlava", "Shekerbura"],
    Bangladesh: ["Hilsa Curry", "Kacchi Biryani", "Bhuna Khichuri", "Panta Bhat", "Chingri Malai", "Shorshe Ilish", "Fuchka", "Dal Pitha", "Roshogolla", "Mishti Doi"],
    Belgium: ["Moules-Frites", "Carbonnade", "Waterzooi", "Stoemp", "Vol-au-Vent", "Waffles", "Belgian Endive", "Boulets", "Speculoos", "Chocolate Mousse"],
    Bhutan: ["Ema Datshi", "Phaksha Paa", "Jasha Maru", "Hoentay", "Momos", "Red Rice", "Kewa Datshi", "Goep", "Suja", "Zow Shungo"],
    Bolivia: ["Salteñas", "Sopa de Mani", "Pique Macho", "Silpancho", "Fricasé", "Anticuchos", "Majadito", "Chairo", "Api", "Buñuelos"],
    Brazil: ["Feijoada", "Moqueca", "Pão de Queijo", "Coxinha", "Vatapá", "Churrasco", "Acarajé", "Pastel", "Brigadeiro", "Quindim"],
    Bulgaria: ["Banitsa", "Shopska Salad", "Kavarma", "Tarator", "Kebapche", "Musaka", "Lyutenitsa", "Sarmi", "Mekitsi", "Baklava"],
    Cambodia: ["Amok", "Lok Lak", "Kuy Teav", "Bai Sach Chrouk", "Nom Banh Chok", "Samlor Korko", "Prahok", "Cha Kroeung", "Num Ansom", "Khao Tom"],
    Cameroon: ["Ndole", "Poulet DG", "Achu Soup", "Eru", "Koki", "Suya", "Ndambe", "Pepper Soup", "Fufu", "Puff-Puff"],
    Canada: ["Poutine", "Tourtière", "Bannock", "Nanaimo Bars", "Montreal Bagel", "Butter Tarts", "Peameal Bacon", "Halifax Donair", "Maple Salmon", "Split Pea Soup"],
    Chile: ["Empanada de Pino", "Pastel de Choclo", "Cazuela", "Curanto", "Completo", "Humitas", "Porotos Granados", "Pebre", "Sopaipillas", "Machas a la Parmesana"],
    China: ["Peking Duck", "Mapo Tofu", "Kung Pao Chicken", "Xiaolongbao", "Chow Mein", "Hot Pot", "Char Siu", "Congee", "Mooncake", "Dan Dan Noodles"],
    Colombia: ["Bandeja Paisa", "Ajiaco", "Arepas", "Sancocho", "Tamales", "Empanadas", "Mote de Queso", "Lechona", "Pandebono", "Buñuelos"],
    "Costa Rica": ["Gallo Pinto", "Casado", "Olla de Carne", "Chifrijo", "Ceviche", "Tamales", "Sopa Negra", "Picadillo", "Tres Leches", "Arroz con Leche"],
    Croatia: ["Peka", "Štrukli", "Pašticada", "Black Risotto", "Sarma", "Fritule", "Buzara", "Zagorska Soup", "Čobanac", "Rožata"],
    Cuba: ["Ropa Vieja", "Picadillo", "Moros y Cristianos", "Lechón Asado", "Vaca Frita", "Yuca con Mojo", "Arroz a la Cubana", "Tostones", "Flan", "Pastelitos"],
    Cyprus: ["Halloumi", "Kleftiko", "Souvla", "Sheftalia", "Kolokasi", "Flaounes", "Trahanas", "Meze", "Loukoumades", "Pastitsio"],
    "Czech Republic": ["Svíčková", "Goulash", "Vepřo Knedlo Zelo", "Bramboráky", "Kulajda", "Smažený Sýr", "Knedlíky", "Chlebíčky", "Koláče", "Trdelník"],
    Denmark: ["Smørrebrød", "Frikadeller", "Stegt Flæsk", "Æbleskiver", "Rødgrød", "Fiskefrikadeller", "Flæskesteg", "Boller i Karry", "Kanelsnegle", "Risalamande"],
    Ecuador: ["Locro de Papa", "Fanesca", "Llapingachos", "Encebollado", "Hornado", "Ceviche", "Seco de Chivo", "Fritada", "Bolón", "Morocho"],
    Egypt: ["Koshari", "Ful Medames", "Molokhia", "Mahshi", "Ta'ameya", "Shawarma", "Fatteh", "Hamam Mahshi", "Basbousa", "Umm Ali"],
    Ethiopia: ["Doro Wat", "Injera", "Tibs", "Kitfo", "Shiro", "Beyaynetu", "Misir Wat", "Firfir", "Gored Gored", "Genfo"],
    Finland: ["Karjalanpiirakka", "Lohikeitto", "Hernekeitto", "Poronkäristys", "Kalakukko", "Ruisleipä", "Karelian Stew", "Lihapullat", "Salmiakki", "Pulla"],
    France: ["Coq au Vin", "Ratatouille", "Bouillabaisse", "Quiche Lorraine", "Cassoulet", "Crêpes", "Beef Bourguignon", "Croque Monsieur", "Tarte Tatin", "Crème Brûlée"],
    Georgia: ["Khachapuri", "Khinkali", "Lobio", "Chakapuli", "Mtsvadi", "Badrijani", "Pkhali", "Chikhirtma", "Churchkhela", "Tklapi"],
    Germany: ["Sauerbraten", "Bratwurst", "Schnitzel", "Currywurst", "Rouladen", "Kartoffelpuffer", "Spätzle", "Pretzel", "Black Forest Cake", "Stollen"],
    Ghana: ["Jollof Rice", "Fufu", "Waakye", "Banku", "Red Red", "Kenkey", "Groundnut Soup", "Kelewele", "Light Soup", "Bofrot"],
    Greece: ["Moussaka", "Souvlaki", "Spanakopita", "Dolmades", "Pastitsio", "Fasolada", "Gemista", "Tzatziki", "Baklava", "Loukoumades"],
    Guatemala: ["Pepian", "Kak-Ik", "Tamales", "Chiles Rellenos", "Jocón", "Fiambre", "Hilachas", "Tostadas", "Rellenitos", "Atol de Elote"],
    Haiti: ["Griot", "Soup Joumou", "Tassot", "Diri Kole", "Legim", "Poulet Creole", "Bannann Peze", "Pikliz", "Akra", "Pain Patate"],
    Honduras: ["Baleadas", "Carne Asada", "Sopa de Caracol", "Pastelitos", "Plato Típico", "Tamales", "Yuca con Chicharrón", "Catrachas", "Atol Chuco", "Rosquillas"],
    Hungary: ["Goulash", "Chicken Paprikash", "Lángos", "Fisherman's Soup", "Stuffed Cabbage", "Pörkölt", "Lecho", "Nokedli", "Dobos Torte", "Somlói Galuska"],
    Iceland: ["Kjötsúpa", "Plokkfiskur", "Hákarl", "Lamb Roast", "Pylsur", "Skyr", "Rúgbrauð", "Kleinur", "Hangikjöt", "Klein"],
    India: ["Biryani", "Masala Dosa", "Butter Chicken", "Palak Paneer", "Chole Bhature", "Samosa", "Rogan Josh", "Idli", "Gulab Jamun", "Jalebi"],
    Indonesia: ["Nasi Goreng", "Rendang", "Satay", "Gado-Gado", "Soto Ayam", "Nasi Padang", "Bakso", "Pempek", "Gudeg", "Martabak"],
    Iran: ["Ghormeh Sabzi", "Tahdig", "Fesenjan", "Chelo Kebab", "Ash Reshteh", "Kashk-e Bademjan", "Zereshk Polo", "Abgoosht", "Kuku Sabzi", "Sohan"],
    Ireland: ["Irish Stew", "Boxty", "Coddle", "Colcannon", "Soda Bread", "Shepherd's Pie", "Barmbrack", "Black Pudding", "Seafood Chowder", "Blaa"],
    Israel: ["Shakshuka", "Falafel", "Hummus", "Sabich", "Cholent", "Malabi", "Jerusalem Mixed Grill", "Bourekas", "Kugel", "Jachnun"],
    Italy: ["Pizza Margherita", "Lasagna", "Risotto", "Pesto Genovese", "Carbonara", "Osso Buco", "Arancini", "Polenta", "Tiramisu", "Cannoli"],
    Jamaica: ["Jerk Chicken", "Ackee and Saltfish", "Curry Goat", "Rice and Peas", "Oxtail", "Escovitch Fish", "Patties", "Callaloo", "Festival", "Bammy"],
    Japan: ["Sushi", "Ramen", "Tempura", "Okonomiyaki", "Tonkatsu", "Yakitori", "Miso Soup", "Soba", "Onigiri", "Mochi"],
    Jordan: ["Mansaf", "Maqluba", "Falafel", "Maklouba", "Musakhan", "Zarb", "Galayet Bandora", "Warak Enab", "Kanafeh", "Qatayef"],
    Kenya: ["Nyama Choma", "Ugali", "Pilau", "Sukuma Wiki", "Githeri", "Chapati", "Samaki wa Kupaka", "Irio", "Mandazi", "Matoke"],
    Laos: ["Laap", "Sticky Rice", "Khao Piak Sen", "Tam Mak Hoong", "Mok Pa", "Or Lam", "Khao Soi", "Sai Oua", "Nam Khao", "Khanom Krok"],
    Lebanon: ["Tabbouleh", "Kibbeh", "Fattoush", "Shawarma", "Manakish", "Kafta", "Mujaddara", "Baba Ghanoush", "Baklava", "Maamoul"],
    Malaysia: ["Nasi Lemak", "Laksa", "Char Kway Teow", "Rendang", "Roti Canai", "Satay", "Hainanese Chicken Rice", "Nasi Kerabu", "Assam Laksa", "Cendol"],
    Mexico: ["Tacos", "Mole", "Tamales", "Pozole", "Enchiladas", "Chiles Rellenos", "Ceviche", "Quesadillas", "Churros", "Tres Leches"],
    Mongolia: ["Buuz", "Khuushuur", "Bansh", "Tsuivan", "Khorkhog", "Boodog", "Guriltai Shol", "Aaruul", "Boortsog", "Airag"],
    Morocco: ["Tagine", "Couscous", "Pastilla", "Harira", "Rfissa", "Mechoui", "Bastilla", "Zaalouk", "Msemen", "Chebakia"],
    Nepal: ["Dal Bhat", "Momos", "Thukpa", "Sel Roti", "Gundruk", "Yomari", "Chatamari", "Newari Khaja", "Aloo Tama", "Juju Dhau"],
    Netherlands: ["Stamppot", "Bitterballen", "Poffertjes", "Erwtensoep", "Haring", "Oliebollen", "Pannenkoeken", "Hutspot", "Kroket", "Appeltaart"],
    "New Zealand": ["Hāngi", "Pavlova", "Meat Pie", "Whitebait Fritters", "Lamb Roast", "Kūmara", "Anzac Biscuits", "Lolly Cake", "Green-Lipped Mussels", "Afghan Biscuits"],
    Nigeria: ["Jollof Rice", "Egusi Soup", "Suya", "Pounded Yam", "Pepper Soup", "Moi Moi", "Efo Riro", "Ofada Rice", "Akara", "Chin Chin"],
    Norway: ["Fårikål", "Lutefisk", "Kjøttboller", "Raspeballer", "Fiskesuppe", "Lapskaus", "Rakfisk", "Smørbrød", "Skillingsbolle", "Krumkake"],
    Pakistan: ["Biryani", "Nihari", "Haleem", "Karahi", "Seekh Kebab", "Chicken Tikka", "Saag", "Pulao", "Samosa", "Gulab Jamun"],
    Peru: ["Ceviche", "Lomo Saltado", "Ají de Gallina", "Causa", "Anticuchos", "Pachamanca", "Papa a la Huancaína", "Tacu Tacu", "Chifa", "Picarones"],
    Philippines: ["Adobo", "Sinigang", "Lechon", "Kare-Kare", "Pancit", "Lumpia", "Tinola", "Sisig", "Bibingka", "Halo-Halo"],
    Poland: ["Pierogi", "Bigos", "Żurek", "Borscht", "Kielbasa", "Placki Ziemniaczane", "Gołąbki", "Barszcz", "Sernik", "Pączki"],
    Portugal: ["Bacalhau", "Caldo Verde", "Francesinha", "Cataplana", "Sardinhas", "Cozido", "Pastéis de Nata", "Arroz de Marisco", "Bifana", "Açorda"],
    Romania: ["Sarmale", "Mămăligă", "Ciorbă", "Mici", "Tochitură", "Papanași", "Zacuscă", "Drob", "Cozonac", "Papanasi"],
    Russia: ["Pelmeni", "Borscht", "Beef Stroganoff", "Blini", "Olivier Salad", "Shchi", "Pirozhki", "Solyanka", "Syrniki", "Medovik"],
    Senegal: ["Thieboudienne", "Yassa", "Mafé", "Thiou", "Pastels", "Ceebu Yapp", "Soupikandia", "Fataya", "Lakh", "Bissap"],
    Singapore: ["Hainanese Chicken Rice", "Laksa", "Chilli Crab", "Char Kway Teow", "Nasi Lemak", "Satay", "Bak Kut Teh", "Kaya Toast", "Roti Prata", "Ice Kachang"],
    "South Africa": ["Bobotie", "Bunny Chow", "Boerewors", "Potjiekos", "Biltong", "Chakalaka", "Pap", "Koeksisters", "Malva Pudding", "Braai"],
    "South Korea": ["Bibimbap", "Kimchi", "Bulgogi", "Japchae", "Tteokbokki", "Samgyeopsal", "Jajangmyeon", "Sundubu-jjigae", "Kimbap", "Hotteok"],
    Spain: ["Paella", "Gazpacho", "Tortilla Española", "Patatas Bravas", "Croquetas", "Fabada", "Pulpo a la Gallega", "Pisto", "Churros", "Crema Catalana"],
    "Sri Lanka": ["Rice and Curry", "Kottu", "Hoppers", "Dhal", "Lamprais", "Pol Sambol", "Fish Ambul Thiyal", "String Hoppers", "Watalappam", "Kiribath"],
    Sweden: ["Meatballs", "Gravlax", "Jansson's Temptation", "Raggmunk", "Toast Skagen", "Ärtsoppa", "Kroppkakor", "Smörgåstårta", "Kanelbulle", "Semla"],
    Switzerland: ["Fondue", "Raclette", "Rösti", "Zürcher Geschnetzeltes", "Älplermagronen", "Rivella", "Bündnerfleisch", "Bircher Muesli", "Basler Läckerli", "Nusstorte"],
    Taiwan: ["Beef Noodle Soup", "Lu Rou Fan", "Gua Bao", "Oyster Omelette", "Three Cup Chicken", "Scallion Pancake", "Stinky Tofu", "Pineapple Cake", "Bubble Tea", "Hot Pot"],
    Thailand: ["Pad Thai", "Green Curry", "Tom Yum", "Som Tam", "Massaman Curry", "Khao Soi", "Pad Kra Pao", "Mango Sticky Rice", "Satay", "Tom Kha"],
    Tunisia: ["Couscous", "Brik", "Shakshuka", "Lablabi", "Ojja", "Mechouia", "Chorba", "Bambalouni", "Harissa", "Makroudh"],
    Turkey: ["Döner", "Kebab", "Manti", "Lahmacun", "Menemen", "Pide", "Imam Bayildi", "Mercimek Çorbası", "Baklava", "Lokum"],
    Ukraine: ["Borscht", "Varenyky", "Holubtsi", "Deruny", "Banush", "Salo", "Syrnyky", "Kholodets", "Pampushky", "Kutia"],
    "United Kingdom": ["Fish and Chips", "Shepherd's Pie", "Sunday Roast", "Beef Wellington", "Cornish Pasty", "Bangers and Mash", "Chicken Tikka Masala", "Scotch Egg", "Sticky Toffee Pudding", "Eton Mess"],
    "United States": ["Barbecue Ribs", "Gumbo", "Clam Chowder", "Mac and Cheese", "Fried Chicken", "Jambalaya", "Hamburger", "Cornbread", "Apple Pie", "Pecan Pie"],
    Venezuela: ["Arepas", "Pabellón Criollo", "Hallaca", "Cachapa", "Asado Negro", "Tequeños", "Sancocho", "Empanadas", "Tres Leches", "Quesillo"]
};

const culturalAnchors = {
    "Antigua and Barbuda": "Fungee and Pepper", Bahamas: "Conch Salad", Bahrain: "Machboos", Barbados: "Cou-Cou and Flying Fish", Belarus: "Draniki", Belize: "Rice and Beans", Benin: "Pâte Rouge", "Bosnia and Herzegovina": "Ćevapi", Botswana: "Seswaa", Brunei: "Ambuyat", "Burkina Faso": "Riz Gras", Burundi: "Boko Boko Harees", "Cape Verde": "Cachupa", "Central African Republic": "Kanda", Chad: "Jarret de Boeuf", Comoros: "Langouste a la Vanille", Congo: "Moambe Chicken", Djibouti: "Skoudehkaris", Dominica: "Mountain Chicken", "Dominican Republic": "La Bandera", "El Salvador": "Pupusas", "Equatorial Guinea": "Pepper Soup", Eritrea: "Zigni", Estonia: "Verivorst", Eswatini: "Emasi emabele", Fiji: "Kokoda", Gabon: "Poulet Nyembwe", Gambia: "Domoda", Grenada: "Oil Down", Guinea: "Poulet Yassa", Guyana: "Pepperpot", Iraq: "Masgouf", Kazakhstan: "Beshbarmak", Kuwait: "Mandi", Kyrgyzstan: "Beshbarmak", Latvia: "Grey Peas with Bacon", Lesotho: "Papa and Moroho", Liberia: "Jollof Rice", Libya: "Bazeen", Liechtenstein: "Käsknöpfle", Lithuania: "Cepelinai", Luxembourg: "Judd mat Gaardebounen", Madagascar: "Romazava", Malawi: "Nsima", Maldives: "Mas Huni", Mali: "Tiguadege Na", Malta: "Pastizzi", "Marshall Islands": "Bwiro", Mauritania: "Thieboudienne", Mauritius: "Dholl Puri", Micronesia: "Pohnpei Sashimi", Moldova: "Mămăligă", Monaco: "Barbajuan", Montenegro: "Njeguški Pršut", Mozambique: "Peri-Peri Prawns", Myanmar: "Mohinga", Namibia: "Kapana", Nauru: "Coconut Fish", Nicaragua: "Nacatamales", Niger: "Dambou", "North Korea": "Naengmyeon", "North Macedonia": "Tavče Gravče", Oman: "Shuwa", Palau: "Ulkoy", Panama: "Sancocho", "Papua New Guinea": "Mumu", Paraguay: "Sopa Paraguaya", Qatar: "Machboos", Rwanda: "Brochettes", "Saint Kitts and Nevis": "Goat Water", "Saint Lucia": "Green Fig and Saltfish", "Saint Vincent and the Grenadines": "Roasted Breadfruit", Samoa: "Palusami", "San Marino": "Torta Tre Monti", "Sao Tome and Principe": "Calulu", "Saudi Arabia": "Kabsa", Serbia: "Pljeskavica", Seychelles: "Ladob", "Sierra Leone": "Cassava Leaf Stew", Slovakia: "Bryndzové Halušky", Slovenia: "Kranjska Klobasa", "Solomon Islands": "Poi", Somalia: "Bariis Iskukaris", "South Sudan": "Ful Medames", Sudan: "Ful Medames", Suriname: "Pom", Syria: "Kibbeh", Tajikistan: "Qurutob", Tanzania: "Pilau", "Timor-Leste": "Batar Da'an", Togo: "Fufu", Tonga: "Lu Pulu", "Trinidad and Tobago": "Doubles", Turkmenistan: "Plov", Tuvalu: "Pulaka", Uganda: "Matoke", "United Arab Emirates": "Harees", Uruguay: "Chivito", Uzbekistan: "Plov", Vanuatu: "Laplap", "Vatican City": "Cacio e Pepe", Vietnam: "Pho", Yemen: "Saltah", Zambia: "Nshima", Zimbabwe: "Sadza"
};

const culturalRecipeForms = ["Platter", "Soup", "Stew", "Rice", "Grill", "Salad", "Flatbread", "Dumplings", "Breakfast", "Sweet" ];

Object.entries(culturalAnchors).forEach(([country, anchor]) => {
    culturalFoods[country] = culturalRecipeForms.map(form => `${anchor} ${form}`);
});

const worldRecipeStyles = [
    { name: "Herb and Grain Bowl", ingredients: "whole grains, seasonal vegetables, herbs and a lemon dressing", calories: 360, time: 25 },
    { name: "Garden Vegetable Stew", ingredients: "fresh vegetables, beans, tomatoes and fragrant spices", calories: 310, time: 35 },
    { name: "Citrus Chicken Plate", ingredients: "tender chicken, greens, roasted vegetables and citrus", calories: 430, time: 30 },
    { name: "Roasted Vegetable Flatbread", ingredients: "warm flatbread, roasted vegetables, herbs and yogurt", calories: 390, time: 25 },
    { name: "Spiced Lentil Soup", ingredients: "lentils, carrots, tomatoes and warming spices", calories: 280, time: 30 },
    { name: "Fresh Market Salad", ingredients: "crisp vegetables, chickpeas, seeds and a light dressing", calories: 240, time: 15 },
    { name: "Coconut Fish Curry", ingredients: "white fish, coconut milk, greens and aromatic spices", calories: 450, time: 35 },
    { name: "Tomato Garlic Pasta", ingredients: "pasta, tomatoes, garlic, vegetables and fresh herbs", calories: 420, time: 20 },
    { name: "Honey Nut Breakfast Bowl", ingredients: "natural yogurt, fruit, oats, nuts and a little honey", calories: 330, time: 10 },
    { name: "Street-Style Rice Wrap", ingredients: "seasoned rice, vegetables, beans and a bright herb sauce", calories: 400, time: 25 }
];

const worldRecipes = {};

function stepsForDish(dish, country, countryIndex, recipeIndex) {
    const name = dish.toLowerCase();
    const origin = `${country} style`;
    const variation = (countryIndex + recipeIndex) % 3;
    const aromatics = ["onion, garlic, and ginger", "shallot, garlic, and fresh herbs", "onion, garlic, and a pinch of dried spices"][variation];
    const finish = ["fresh herbs and a squeeze of citrus", "a drizzle of the cooking sauce and chopped herbs", "a final pinch of spice and a little fresh garnish"][variation];

    if (name === "draniki soup") {
        return [
            "Wash your hands, clear the work surface, and set out a board, knife, measuring tools, and the pan or pot needed to make Draniki Soup.",
            "Measure every ingredient. Rinse the produce, trim any protein, and cut the vegetables into similar-sized pieces so they cook evenly.",
            "Keep the prepared ingredients in separate bowls. This makes the Belarus style flavours easier to layer without overcooking anything.",
            "Arrange the ingredients in the order they will be used, keeping delicate herbs, dairy, and garnishes separate until the end.",
            "Warm oil in a heavy pot over medium heat. Cook the shallot, garlic, and fresh herbs slowly until softened and fragrant, without letting them brown too quickly.",
            "Add the spices and stir for 30 seconds so the oil carries their aroma through the dish.",
            "Add the main ingredients, turning them carefully until coated in the seasoned base, then pour in the stock, water, or sauce.",
            "Bring the pot just to a simmer, reduce the heat, and cook partially covered until the vegetables and protein are tender; stir occasionally to prevent sticking.",
            "Taste the broth or sauce, adjust salt and seasoning, then let Draniki Soup stand for 5 minutes before serving with a drizzle of the cooking sauce and chopped herbs.",
            "Check Draniki Soup carefully before serving: the centre should be fully cooked, the vegetables should retain some texture, and the seasoning should taste balanced rather than overpowering."
        ];
    }

    if (name === "mantu") {
        return [
            "Wash your hands, clear the work surface, and set out a board, knife, measuring tools, and the pan or pot needed to make Mantu.",
            "Measure every ingredient. Rinse the produce, trim any protein, and cut the vegetables into similar-sized pieces so they cook evenly.",
            "Keep the prepared ingredients in separate bowls. This makes the Afghanistan style flavours easier to layer without overcooking anything.",
            "Arrange the ingredients in the order they will be used, keeping delicate herbs, dairy, and garnishes separate until the end.",
            "Heat oil in a pan or pot over medium heat. Cook the shallot, garlic, and fresh herbs gently until soft and aromatic, scraping the base if anything begins to stick.",
            "Add the main ingredients in batches if necessary, giving them space to brown lightly rather than steam.",
            "Stir in the remaining Afghanistan style seasonings, then add any liquid, vegetables, or sauce a little at a time.",
            "Lower the heat and cook until all components are tender and the flavours have combined; stir regularly and add a splash of water if the pan dries out.",
            "Taste Mantu, adjust the final seasoning, rest it for a few minutes, and finish with a drizzle of the cooking sauce and chopped herbs.",
            "Rest Mantu for 5 minutes so the juices, steam, or sauce settle. Taste one final bite and adjust with salt, acid, spice, or fresh herbs as appropriate."
        ];
    }

    const baseSteps = [
        `Wash your hands, clear the work surface, and set out a board, knife, measuring tools, and the pan or pot needed to make ${dish}.`,
        `Measure every ingredient. Rinse the produce, trim any protein, and cut the vegetables into similar-sized pieces so they cook evenly.`,
        `Keep the prepared ingredients in separate bowls. This makes the ${origin} flavours easier to layer without overcooking anything.`
    ];

    let cookingSteps;

    if (/(cake|torte|pie|pudding|cookie|biscuit|baklava|pastry|sweet|jamun|jalebi|mousse|flan|crepe|waffle|churro|dessert)/.test(name)) {
        cookingSteps = [
            `Preheat the oven or warm a non-stick pan. Grease or line the pan so the finished dish releases cleanly.`,
            `Whisk the dry ingredients together first, then add the wet ingredients gradually, mixing only until the ${origin} batter or dough is smooth.`,
            `Transfer the mixture to the prepared pan or shape it into even portions. Leave a little space between portions if they will spread.`,
            `Bake or cook over gentle heat until ${dish} is set in the centre, lightly golden at the edges, and fragrant; avoid opening the oven or turning it too early.`,
            `Cool or rest for a few minutes so the texture firms up, then finish with ${finish}.`
        ];
    } else if (/(soup|stew|curry|wat|chowder|broth|sauce|harira|sinigang|goulash)/.test(name)) {
        cookingSteps = [
            `Warm oil in a heavy pot over medium heat. Cook the ${aromatics} slowly until softened and fragrant, without letting them brown too quickly.`,
            `Add the spices and stir for 30 seconds so the oil carries their aroma through the dish.`,
            `Add the main ingredients, turning them carefully until coated in the seasoned base, then pour in the stock, water, or sauce.`,
            `Bring the pot just to a simmer, reduce the heat, and cook partially covered until the vegetables and protein are tender; stir occasionally to prevent sticking.`,
            `Taste the broth or sauce, adjust salt and seasoning, then let ${dish} stand for 5 minutes before serving with ${finish}.`
        ];
    } else if (/(rice|biryani|pulao|pilau|risotto|paella|jollof|nasi|fried rice)/.test(name)) {
        cookingSteps = [
            `Rinse the rice in cool water until the water is mostly clear, then drain it well while you prepare the remaining ingredients.`,
            `Heat a heavy pan over medium heat and cook the ${aromatics} until soft. Stir in the ${origin} spices for 30 seconds.`,
            `Add the rice and stir gently for 1 minute, coating each grain in the seasoned oil before adding the measured cooking liquid.`,
            `Bring the liquid to a light boil, cover tightly, reduce to the lowest heat, and cook undisturbed until the liquid has absorbed and the rice is tender.`,
            `Remove ${dish} from the heat and keep it covered for 10 minutes. Fluff with a fork, fold through any delicate ingredients, and finish with ${finish}.`
        ];
    } else if (/(bread|flatbread|pizza|pide|roti|naan|bun|roll|pancake|dosa|arepa|taco|wrap|sandwich)/.test(name)) {
        cookingSteps = [
            `Combine the base ingredients and mix until a soft dough or pourable batter forms. Knead dough until smooth, or rest batter until it thickens slightly.`,
            `While it rests, prepare the ${origin} filling or topping and season it well. Keep wet fillings drained so the base stays crisp.`,
            `Divide the dough or batter into even portions and shape or spread each portion to an even thickness for reliable cooking.`,
            `Cook on a preheated griddle, pan, or oven tray until both sides are cooked through and lightly golden; adjust the heat if the surface colours before the centre cooks.`,
            `Add the filling or topping, fold or slice ${dish} as needed, and serve immediately with ${finish}.`
        ];
    } else if (/(fish|salmon|shrimp|prawn|seafood|tuna|cod|crab|mussel|oyster)/.test(name)) {
        cookingSteps = [
            `Pat the seafood dry and season it evenly. Keep it chilled until the pan is hot, which helps it cook quickly without becoming tough.`,
            `Prepare the vegetables and sauce separately, since seafood cooks faster than most other ingredients.`,
            `Heat a pan, grill, or pot over medium-high heat, add a small amount of oil, and cook the seafood in a single layer until opaque and just firm.`,
            `Remove the seafood briefly if needed, cook the ${aromatics} and sauce, then return it only long enough to coat and warm through.`,
            `Check that ${dish} is hot throughout, finish with ${finish}, and serve straight away.`
        ];
    } else {
        cookingSteps = [
            `Heat oil in a pan or pot over medium heat. Cook the ${aromatics} gently until soft and aromatic, scraping the base if anything begins to stick.`,
            `Add the main ingredients in batches if necessary, giving them space to brown lightly rather than steam.`,
            `Stir in the remaining ${origin} seasonings, then add any liquid, vegetables, or sauce a little at a time.`,
            `Lower the heat and cook until all components are tender and the flavours have combined; stir regularly and add a splash of water if the pan dries out.`,
            `Taste ${dish}, adjust the final seasoning, rest it for a few minutes, and finish with ${finish}.`
        ];
    }

    const dishPreparation = /salad|tabbouleh|fattoush|pico|sambol|slaw/.test(name)
        ? `Wash and dry the fresh ingredients completely, then cut each one into a size that gives every bite a balanced mix.`
        : /dumpling|manti|momo|pierogi|ravioli|gyoza|pelmeni/.test(name)
            ? `Keep the filling cool and fairly dry. Place one measured portion in each wrapper, press out air pockets, and seal the edges firmly.`
            : /grill|kebab|kofte|meat|chicken|beef|lamb|pork|goat|steak|sausage/.test(name)
                ? `Trim the protein, make shallow cuts where helpful, and coat every surface with the ${origin} seasoning before cooking.`
                : `Arrange the ingredients in the order they will be used, keeping delicate herbs, dairy, and garnishes separate until the end.`;

    const finishingSteps = [
        `Check ${dish} carefully before serving: the centre should be fully cooked, the vegetables should retain some texture, and the seasoning should taste balanced rather than overpowering.`,
        `Rest ${dish} for 5 minutes so the juices, steam, or sauce settle. Taste one final bite and adjust with salt, acid, spice, or fresh herbs as appropriate.`,
        `Serve ${dish} in a warm dish with the traditional accompaniments kept separate where possible, so the textures remain distinct.`,
        `Record the final texture and seasoning while it is fresh; this makes it easier to adjust the cooking time the next time you prepare this ${origin} recipe.`
    ];

    return [...baseSteps, dishPreparation, ...cookingSteps, finishingSteps[(countryIndex + recipeIndex) % finishingSteps.length]];
}

worldCountries.forEach((country, countryIndex) => {
    const dishes = culturalFoods[country] || worldRecipeStyles.map(style => `${country} ${style.name}`);
    dishes.forEach((dish, recipeIndex) => {
        const style = worldRecipeStyles[recipeIndex];
        const name = `${country} ${dish}`;
        worldRecipes[name] = {
            country,
            cal: `🔥 ${style.calories + (countryIndex % 5) * 10} kcal`,
            time: `⏱ ${style.time} min`,
            ingredients: [dish, style.ingredients],
            steps: stepsForDish(dish, country, countryIndex, recipeIndex)
        };
    });
});

function countryRecipeDescription(country, dish, style, recipeIndex) {
    const countryName = country.toLowerCase();
    const dishName = dish.toLowerCase();
    const descriptions = [
        `${dish} brings a ${countryName} welcome to the table, pairing its signature flavours with ${style.ingredients}.`,
        `Built around ${dishName}, this ${countryName} favourite balances ${style.ingredients} in a generous, comforting serving.`,
        `For a taste of ${country}, try ${dish}: a dish shaped by ${style.ingredients} and an inviting homemade finish.`,
        `${dish} takes centre stage here, with ${style.ingredients} adding colour, texture, and depth to the ${countryName} plate.`,
        `This ${countryName} recipe turns ${dishName} into a memorable meal, layering ${style.ingredients} from first bite to last.`,
        `A fragrant serving of ${dish}, lifted by ${style.ingredients} and the warm character of ${countryName} cooking.`,
        `Discover ${dish} through a lighter everyday lens, with ${style.ingredients} gathered into a distinctly ${countryName} combination.`,
        `${dish} offers a rustic ${countryName} moment: ${style.ingredients}, brought together with care and served generously.`,
        `The appeal of ${dish} is its contrast between ${style.ingredients}, creating a colourful recipe inspired by ${country}.`,
        `Finish your culinary tour with ${dish}, where ${style.ingredients} give this ${countryName} specialty its own character.`
    ];

    return descriptions[recipeIndex % descriptions.length];
}

function renderCountryRecipes(country) {
    const grid = document.getElementById("countryRecipeGrid");
    if (!grid) return;

    const dishes = culturalFoods[country] || worldRecipeStyles.map(style => `${country} ${style.name}`);
    grid.innerHTML = dishes.map((dish, recipeIndex) => {
        const style = worldRecipeStyles[recipeIndex];
        const name = `${country} ${dish}`;
        const recipe = worldRecipes[name];
        return `
            <div class="recipe-card international-card">
                <div class="recipe-body">
                    <span class="country-tag">${country}</span>
                    <h3>${dish}</h3>
                    <p>${countryRecipeDescription(country, dish, style, recipeIndex)}</p>
                    <div class="recipe-info"><span>${recipe.cal}</span><span>${recipe.time}</span></div>
                    <button class="btn btn-primary" onclick="showRecipe('${name.replace(/'/g, "\\'")}')">View Recipe</button>
                </div>
            </div>`;
    }).join("");
}

const countrySelect = document.getElementById("countrySelect");
if (countrySelect) {
    countrySelect.innerHTML = worldCountries.map(country => `<option value="${country}">${country}</option>`).join("");
    renderCountryRecipes(worldCountries[0]);
}

