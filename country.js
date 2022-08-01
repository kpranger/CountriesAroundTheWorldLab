class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban bialealam", ["blue", "yellow", "red"])
let senegal = new Country("Senegal", "Wolof", "Salaam alaikum", ["green", "yellow", "red"])
let france = new Country("France", "French", "Bonjour le monde", ["blue", "white", "red"])

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayColors(usa);
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayColors(mexico);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(algeria);
    }
    else if(input === "Senegal"){
        country = senegal;
        DisplayColors(senegal);
    }
    else if(input === "France"){
        country = france;
        DisplayColors(france);
    }
}

function DisplayColors(Country) {

    let color1 = document.getElementById("Color1");
    color1.style.backgroundColor = Country.colors[0];

    let color2 = document.getElementById("Color2");
    color2.style.backgroundColor = Country.colors[1];

    let color3 = document.getElementById("Color3");
    color3.style.backgroundColor = Country.colors[2];

    let countryName = document.getElementById("CountryName");
    countryName.innerText = Country.name;

    let officialLanguage = document.getElementById("OfficialLanguage");
    officialLanguage.innerText = Country.lang;

    let helloWorld = document.getElementById("HelloWorld");
    helloWorld.innerText = Country.greeting;
}