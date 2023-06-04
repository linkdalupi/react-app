export const handler = async(event) => {
    
    /*
    recipe list: [[recipe1], [recipe2], [recipe3]]
    recipe: name, description, [ingredient1, ingredient2, ...]
    */

    const recipes = [
        {name: "Omelette", description: 
        "Beat the eggs: Use two or three eggs per omelette, depending on how hungry you are. Beat the eggs lightly with a fork. Melt the butter: Use an 8-inch nonstick skillet for a 2-egg omelette, a 9-inch skillet for 3 eggs. Melt the butter over medium-low heat, and keep the temperature low and slow when cooking the eggs so the bottom doesn’t get too brown or overcooked. Add the eggs: Let the eggs sit for a minute, then use a heatproof silicone spatula to gently lift the cooked eggs from the edges of the pan. Tilt the pan to allow the uncooked eggs to flow to the edge of the pan. Fill the omelette: Add the filling—but don’t overstuff the omelette—when the eggs begin to set. Cook for a few more seconds. Fold and serve: Fold the omelette in half. Slide it onto a plate with the help of a silicone spatula. Season with garlic powder.", ingredients: ["eggs", "cheese", "spinach", "garlic_powder", "butter"]},
        {name: "Tacos", description: 
        "Cook beef in 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until brown; drain. Pour beef mixture into large serving bowl. Cook rice, then heat pita bread. Serve pita bread with beef , guacamole, and rice. Season with lemon.", ingredients: ["beef", "rice", "guacamole", "pita_bread", "lemon"]},
        {name: "Stuffed bell peppers", description: "Preheat the oven to 350 degrees F. Cut the tops off the peppers. Remove and discard the stems, then finely chop the tops; set aside. Scoop out the seeds and as much of the membrane as you can. Place the peppers cut-side up in a baking dish just large enough to hold them upright. Heat 2 tablespoons of the olive oil in a large skillet over medium-high heat. Add the pork, season with salt and pepper and cook, breaking up the lumps, until the meat is cooked through and just beginning to brown, 8 to 10 minutes. Remove to a paper towel-lined plate to get rid of the fat. Wipe out the skillet. Add the onions and chopped peppers and cook until beginning to soften, 3 to 4 minutes. Add the tomatoh sauce and season with salt. Cook until everything is heated through, then stir in the pork. Taste and adjust the seasoning. Pour a small amount of water into the bottom of the baking dish and drizzle the peppers with a little olive oil. Cover with foil and bake for 30 minutes. Uncover and bake until the peppers are soft, another 15 to 20 minutes.", ingredients: ["peppers", "pork", "rice", "tomatoh_sauce", "onion"]},
        {name: "Chicken Noodle Soup", description: "Heat the olive oil in a large soup pot over medium heat until shimmering. Add the onion, carrots, salt + pepper, and peppers. Cook, stirring frequently, until the vegetables are very soft, about 15 minutes. Add the garlic and cook until fragrant, about 1 minute. Add the stock and bring to a boil.IF MAKING AHEAD: Do not add the noodles or parsley. Cool and store the soup in an airtight container in the refrigerator for up to 4 days, or in the freezer for up to 2 months. Reheat on the stovetop and add the noodles and parsley just before serving. Add the noodles and cook for 6 minutes, then add the chicken and cook for about 2 minutes more, until the noodles are tender and the chicken is warmed through. Season to taste with more salt and pepper, then stir in the parsley.(optional)", ingredients: ["noodles", "chicken", "peppers", "carrot", "onion"]},
        {name: "Schnitzel", description: "Cut meat into small chunks, Mix 3 eggs with bread crumbs, then spread egg crumb mixture evenly on both sides of the chicken. fill pan with oil and lay the chicken in it. Fry for 20 min. Take out of pan and lay on a plate with napkins.", ingredients: ["bread_crumbs", "chicken", "eggs", "olive_oil"]},
        {name: "Crêpe", description: "Whisk flour and eggs together in a large mixing bowl; gradually add in milk and water, stirring to combine. Add salt and melted butter; beat until smooth. Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crêpe. Tilt the pan with a circular motion so that the batter coats the surface evenly. Cook until the top of the crêpe is no longer wet and the bottom has turned light brown, 1 to 2 minutes. Run a spatula around the edge of the skillet to loosen the crêpe; flip and cook until the other side has turned light brown, about 1 minute more. Serve hot.", ingredients: ["flour", "eggs", "butter", "milk"]},
        {name: "Potatoh stew", description: "mix potatohs with tomatoh sauce", ingredients: ["potatoh", "peppers", "beef", "paprika", "tomatoh_sauce"]},
        {name: "Pizza", description: "Stretch and roll pizza dough until even on a lightly floured cutting board. Add a bit of oil on dough. Take tomatoh sauce and spread on pizza dough. Grate cheese and spread on top of tomatoh sauce. Add toppings if wanted. Transition to a pizza pan with wax paper. Put in oven for 20 min until cheese is melted and the crust is a light brown. Cut and serve. ", ingredients: ["pizza_dough", "tomatoh_sauce", "cheese", "olive_oil"]},
        {name: "Bread", description: "Proof the yeast: In a large bowl or stand mixer add the yeast, water and a pinch of the sugar or honey. Allow to rest for 5-10 minutes until foaming and bubbly. (This is called “proofing” the yeast, to make sure it is active. If it doesn’t foam, the yeast is not good, and you need to start over with fresh yeast). Prepare the dough: Add remaining sugar or honey, salt, oil, and 3 cups of flour. Mix to combine. Add another cup of flour and mix to combine. With the mixer running add more flour, ½ cup at a time, until the dough begins to pull away from the sides of the bowl.Knead the dough: Mix the dough for 5 minutes on medium speed (or knead with your hands on a lightly floured surface, for 5-8 minutes). The dough should be smooth and elastic, and slightly stick to a clean finger, but not be overly sticky.First Rise: Grease a large bowl with oil or cooking spray and place the dough inside. Cover with a dish towel or plastic wrap and allow to rise in a warm place* until doubled in size (about 1 ½ hours).Punch the dough down really well to remove air bubbles. Divide into two equal portions. Shape each ball into long logs and place into greased loaf pans.Second rise: Spray two pieces of plastic wrap with cooking spray and lay them gently over the pans. Allow dough to rise again for about 45 minutes to one hour, or until risen 1 inch above the loaf pans. Bake: Adjust oven racks to lower/middle position. Preheat the oven to 350 F. Bake bread for about 30-33 minutes, or until golden brown on top. Give the top of a loaf a gentle tap; it should sound hollow. Invert the baked loaves onto a wire cooling rack. Allow to cool for at least 15 minutes before slicing.", ingredients: ["flour", "eggs", "yeast", "olive_oil"]}
    ] 

    let message;
    const ingredientsInRequest = event.queryStringParameters.ingredients.split(',')
    console.log("request:", ingredientsInRequest)
    
    let result = recipes.filter(recipe => {
        let ingredientsInRecipe = recipe.ingredients
        return ingredientsInRecipe.every(ingredient => {
            return ingredientsInRequest.includes(ingredient)
        })
    })
    
    if (result.length > 0) {
        message = result.map(recipe => {
            return {"recipe": recipe.name + " - " + recipe.description}
        })
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
