export const handler = async(event) => {
    
    /*
    recipe list: [[recipe1], [recipe2], [recipe3]]
    recipe: name, description, [ingredient1, ingredient2, ...]
    */

    const recipes = [
        {name: "omelette", description: "break the eggs", ingredients: ["eggs", "cheese", "spinach", "garlic_powder", "butter"]},
        {name: "tacos", description: "fry and spread", ingredients: ["beef", "rice", "guacamole", "pita_bread", "lemon"]},
        {name: "stuffed bell peppers", description: "stuff the peppers", ingredients: ["peppers", "pork", "rice", "tomatoh_sauce", "onion"]},
    ] 

    let message;
    const ingredientsInRequest = event.queryStringParameters.ingredients.split(',')
    console.log(ingredientsInRequest)
    
    let result = recipes.filter(recipe => {
        let ingredientsInRecipe = recipe.ingredients
        return (JSON.stringify(ingredientsInRequest.sort()) == JSON.stringify(ingredientsInRecipe.sort()))
    })
    
    if (result.length > 0) {
        message = [
            {"recipe": result[0].name + " - " + result[0].description}
        ]
    } else {
        message = [
            {"recipe": "Could not find a recipe"}
        ]
    }
    
    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(message)
    };

    return response;
};
