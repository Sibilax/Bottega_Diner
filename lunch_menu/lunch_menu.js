       
function lunch() {

let entreesList = ['steak', 'grilled salmon', 'vegan burger'];
let sidesList = ['chips and salad', 'onion rings and mashed potatoes', 'salad and stuffed tomatoes'];
let drinksList = ['water', 'lemonade', 'wine'];
const lunchWelcome = alert(`Welcome to Bottega Diner!\nOur meal deal today incudes an entree, two complimentary sides and a drink.\nHere's our menu:\nEntrees: ${entreesList.join(', ')}.\nSides: ${sidesList.join(', ')}.\nDrinks: ${drinksList.join(', ')}. `);
const comments = ['Great choice!', 'Excellent selection!','Perfect!', 'Very well!'];
const randomComment = comments[Math.floor(Math.random() * comments.length)];

let entreeOffer = "";
let validEntree = false;

while (!validEntree) {
    entreeOffer = prompt(`For the entrees you may choose: ${entreesList.join(', ')}.`);
    if (entreesList.includes(entreeOffer)) {
        validEntree = true;
    } else {
        alert(`Sorry, we don't have ${entreeOffer} today.`);
    }
}


if (entreeOffer == 'steak' || entreeOffer == 'grilled salmon' || entreeOffer == 'vegan burger') {

        const entreePrice = 15
        let sideOffer = '';
        let validSide = false;
        while (!validSide) {
            sideOffer = prompt(`${randomComment} That'll be $${entreePrice}, and you get two complimentary sides and a drink. For the sides you may choose from these: ${sidesList.join(', ')}.`);
            if (sidesList.includes(sideOffer)) {
                validSide = true;
            } else {
                alert(`Sorry, we don't have ${sideOffer} today. Please choose one of our sides: ${sidesList.join(', ')}`);
            }
        }

        const sidePrice = 0;
        let drinksOffer = '';
        let validDrink = false;
        while (!validDrink) {
            drinksOffer = prompt(`${randomComment}. What would you like to drink: ${drinksList.join(', ')}?`);
            if (drinksList.includes(drinksOffer)) {
                validDrink = true;
            } else {
                alert(`Sorry, we don't have ${drinksOffer} today. Please choose one of our drinks: ${drinksList.join(', ')}`);
            }
        }

        switch(drinksOffer) {
            case 'water':  
            case 'wine':
            case 'lemonade':
                const drinkPrice = 0;
                total = drinkPrice + sidePrice + entreePrice ;
                alert(`Alright, that'll be $${total}. I'll be back with your order in a moment.`); 
            break;
            default:
                alert(`I'm afraid we don't have that drink.`);
        }
        
        
}
};

lunch();
    