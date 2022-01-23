fetch("https://restcountries.com/v3.1/all")
.then((value) => {
return value.json();
})
.then((listofall) => {
    console.log(listofall); 
    listofall.forEach(country => {
        let details = document.createElement("div");
        details.setAttribute("class","container")
        details.innerHTML=`  
        <img 
            src=${country.flags.svg}
            alt=${country.name}
             class="flag"/>
            <div class="info">
        <h2>${country.name.common}</h2>
        <p><span>Population:</span>${country.population}</p>
        <p><span>Region:</span>${country.region}</p>
        <p><span>Capital:</span>${country.capital}</p>
        <p><span>Continents:</span>${country.continents}</p>
        <button>Click for weather</button>
        </div>
        `
        document.body.append(details);
    });
})