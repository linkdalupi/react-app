export const handler = async(event) => {
    
    let message;
    if (event.queryStringParameters.ingredient === "tomato") {
        message = [
            {"recipe": "Tomato Pasta"}
        ]
    } else {
        message = [
            {"recipe": "Cupcakes"}
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
