export const handler = async(event) => {
    
    /*
    recipe list: [[recipe1], [recipe2], [recipe3]]
    recipe: name, description, [ingredient1, ingredient2, ...]
    */

    const recipes = [
        {name: "omelette", description: "break the eggs", ingredients: ["eggs", "cheese", "spinach", "garlic_powder", "butter"]},
        {name: "tacos", description: "cut meat and season", ingredients: ["beef", "rice", "guacamole", "pita_bread", "lemon"]},
        {name: "stuffed bell peppers", description: "stuff the peppers", ingredients: ["peppers", "pork", "rice", "tomatoh_sauce", "onion"]},
        {name: "chicken noodle soup", description: "add noodles to soup", ingredients: ["noodles", "chicken", "peppers", "carrot", "onion"]},
        {name: "schnitzel", description: "fry meat", ingredients: ["bread_crumbs", "chicken", "eggs", "olive_oil"]},
        {name: "crêpe", description: "flip crêpe", ingredients: ["flour", "eggs", "butter", "milk"]},
        {name: "potatoh stew", description: "mix potatohs with tomatoh sauce", ingredients: ["potatoh", "peppers", "beef", "paprika", "tomatoh_sauce"]},
        {name: "Pizza", description: "add any topping", ingredients: ["pizza_dough", "tomatoh_sauce", "cheese", "olive_oil"]},
        {name: "Bread", description: "mix water and flour", ingredients: ["flour", "eggs", "yeast", "olive_oil"]}
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
