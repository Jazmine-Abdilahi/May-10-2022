/* VIDEO 113 */
/* May 10 2022 */



const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavati 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startermenu: ['Forcaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this. mainMenu[mainIndex]];
    }
};

orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
};

if (resturant.openingHours?.mon.open) console.log(resturant.openinghours.mon.open);

if (resturant.openingHours?.fri.open) console.log(resturant.openinghours.fri.open);

const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun' ];

for (const day of days) {
    console.log(day);
    const open = resturant.openHours[day]?.open
    console.log(`On ${day}, we open at ${open}`);
}