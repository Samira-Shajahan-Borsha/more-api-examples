document.getElementById('error-message').style.display = 'none';

const searchCocktail = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);
    searchField.value = '';

    document.getElementById('error-message').style.display = 'none';

    if (searchFieldText == '') {
        document.getElementById('error-message').style.display = 'block';
    }

    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchDrinks(data.drinks));
    }
}

const displaySearchDrinks = drinks => {
    // console.log(drinks);
    const drinksContainer = document.getElementById('drinks-container');
    drinksContainer.textContent = '';
    drinks.forEach(drink => {
        // console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadDrinkDetail('${drink.idDrink}')" class="card h-100" style="width: 18rem;">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${drink.strCategory}</li>
                    <li class="list-group-item">${drink.strIngredient1}</li>
                    <li class="list-group-item">${drink.strIngredient2}</li>
                </ul>
            </div>
        `;
        drinksContainer.appendChild(div);
    });
}

const loadDrinkDetail = drinkId => {
    // console.log(drinkId);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinkDetail(data.drinks[0]));
}

const displayDrinkDetail = drink => {
    // console.log(drink);
    const detailContainer = document.getElementById('drink-detail-container');
    detailContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 class="card-title text-center">${drink.strDrink}</h5>
            <p class="card-text w-50">${drink.strInstructions}</p>
        </div>
    `;
    detailContainer.appendChild(div);
}


