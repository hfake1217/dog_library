const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    var name = searchQuery;
$.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
        headers: { 'X-Api-Key': 'ca2zH5BTrK8BZXw+TEJZEQ==8XcLG3b47k3bjnZl'},
        contentType: 'application/json',
        success: function(result) {
            generateHTML(result);
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })
        function generateHTML(results){
            let generatedHTML = "";
            results.map(result => {
                generatedHTML +=
                `
                <div class="item">
                        <img src="${result.image_link}" alt="image of dog">
                        <div class="flex-container">
                            <h1 class="title">${result.name}</h1>
                        </div>
                        <p class="item-data">Good with Children: ${result.good_with_children}</p>
                        <p class="item-data">Good with Other Dogs: ${result.good_with_other_dogs}</p>
                        <p class="item-data">Shedding: ${result.shedding}</p>
                        <p class="item-data">Grooming: ${result.grooming}</p>
                        <p class="item-data">Drooling: ${result.drooling}</p>
                        <p class="item-data">Coat Length: ${result.coat_length}</p>
                        <p class="item-data">Good with Strangers: ${result.good_with_strangers}</p>
                        <p class="item-data">Playfulness: ${result.playfulness}</p>
                        <p class="item-data">Protectiveness: ${result.protectiveness}</p>
                        <p class="item-data">Trainability: ${result.trainability}</p>
                        <p class="item-data">Energy: ${result.energy}</p>
                        <p class="item-data">Barking: ${result.barking}</p>
                        <p class="item-data">Life Expectancy: ${result.min_life_expectancy} to ${result.max_life_expectancy} years</p>
                        <p class="item-data">Male Height: ${result.min_height_male} to ${result.max_height_male} inches</p>
                        <p class="item-data">Female Height: ${result.min_height_female} to ${result.max_height_female} inches</p>
                        <p class="item-data">Male Weight: ${result.min_weight_male} to ${result.max_weight_male} pounds</p>
                        <p class="item-data">Female Weight: ${result.min_weight_female} to ${result.max_weight_female} pounds</p>
                    </div>
                `
            })
        searchResultDiv.innerHTML = generatedHTML;
        }
    });