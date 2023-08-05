let btn = document.getElementById("btn");
let result = document.getElementById("result");

let country = () => {
    let name = document.getElementById("inp").value;
    let url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        result.innerHTML = `
        <img src="${data[0].flags.svg}" alt="Flag Image" class="flag-image">
            
        <div class="wrapper">
            <div class="data-wrapper">
                <h2>${data[0].name.common}</h2>
            </div>
        </div>
        
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Language:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        `
    })
    .catch(() => {
        if(name.length == 0) {
            result.innerHTML = `<h2 class="error">The input field is empty</h2>`;
        }
        else{
            result.innerHTML = `<h2 class="error">Please enter a valid country name</h2>`;         
        }
    })
}

btn.addEventListener("click", country);