document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    getRecipes(query);
});

function getRecipes(query) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            const recipes = data.meals;
            let output = '';
            if (recipes) {
                recipes.forEach(recipe => {
                    output += `
                        <div class="recipe">
                            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                            <h3>${recipe.strMeal}</h3>
                        </div>
                    `;
                });
            } else {
                output = '<p>No recipes found.</p>';
            }
            document.getElementById('recipe-container').innerHTML = output;
        })
        .catch(error => console.error('Error fetching recipes:', error));
}
