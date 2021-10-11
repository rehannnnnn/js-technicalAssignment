    function getObjectValue(obj, path) {
        let splitPath = path.split('.');
        let result = obj;
        for (let i = 0; i < splitPath.length; i++) {
            if (Object.keys(result).includes(splitPath[i])) {
                result = result[splitPath[i]];
            } else {
                result = null;
                break;
            }
        }
        return result;
    }

    const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
        },
        milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
        }
    },
    }

    const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
    const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
    const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

    console.log(espresso);
    console.log(coffeeBrand);
    console.log(isMilkVegan)