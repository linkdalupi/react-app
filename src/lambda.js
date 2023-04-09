export const handler = async(event) => {
    
    let message;
    const ingredients = event.queryStringParameters.ingredients.split(',')
    console.log(ingredients)
    if (ingredients.includes("eggs") && 
        ingredients.includes("cheese") &&
        ingredients.includes("spinach") &&
        ingredients.includes("garlic_powder") &&
        ingredients.includes("butter")) {
        message = [
            {"recipe": "Omellete"}
        ]
    } else if (ingredients.includes("beef") && 
    ingredients.includes("rice") &&
    ingredients.includes("guacamole") &&
    ingredients.includes("pita_bread") &&
    ingredients.includes("lemon")) {
        message = [
            {"recipe": "Tacos"}
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
