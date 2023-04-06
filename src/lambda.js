export const handler = async(event) => {
    const message = [
        {"recipe": "You take 1 cup of rice and 1 cup of water. You then grate the skin of an orange. You mix these up and boil it. Add 1 spoon of sugar. When done, season with cinammon."},
        {"recipe": "2nd"}
    ]
    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(message)
    };

    return response;
};
