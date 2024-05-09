function mealChooser() {
    let meals = ['breakfast', 'lunch', 'dinner'];
    let welcome = prompt("Welcome to Bottega Diner. Are you here for breakfast, lunch, or dinner?");

    if (welcome !== null) { 
        while (!meals.includes(welcome.toLowerCase())) { 
            alert("Sorry, I didn't catch that."); 
            welcome = prompt('Are you here for breakfast, lunch, or dinner?'); 
        } 
        
        switch (welcome.toLowerCase()) { 
            case 'breakfast': 
                selectBreakfast(); 
                break; 
            case 'lunch': 
                lunch();
                break; 
            case 'dinner': 
                dinner();
                break; 
            default: 
                alert("Sorry, I didn't catch that."); 
        } 
    }
}

function selectBreakfast() {
    const selectedBreakfast = prompt(`What would you like to order? Our Breakfast Specials are: ${breakfastSpecials.join(', ')}. We also have ${breakfastDrinks.join(', ')}`);

    if (breakfastSpecials.includes(selectedBreakfast) || breakfastDrinks.includes(selectedBreakfast)) {
        breakfast(selectedBreakfast);//porqué
    } 
    else {
        alert("I'm afraid we don't have that. Please choose from the Breakfast Specials or Drinks.");
    }
}

const breakfastSpecials = ['coffee and scrambled eggs', 'tea and avocado toast', 'latte and pancakes'];
const breakfastDrinks = ['coffee', 'orange juice', 'chocolate milk'];
let price = 0;

function breakfast(selectedBreakfast) {
    switch (selectedBreakfast) {
        case 'coffee and scrambled eggs':
            price += 4.00;
            alert(`Great, that'll be $${price}. I'll be back with your order in a moment.`);
            break;
        case 'tea and avocado toast':
            price += 5.00;
            alert(`Great, that'll be $${price}. I'll be back with your order in a moment.`);
            break;
        case 'latte and pancakes':
            price += 3.50;
            alert(`Great, that'll be $${price}. I'll be back with your order in a moment.`);
            break;
        case 'coffee':
        case 'chocolate milk':
        case 'orange juice':
            price += 3.00;
            alert(`Great, that'll be $${price}. I'll be back with your order in a moment.`);
            break;
        default:
            alert("Sorry, I didn't get that.");
    }
}

       
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

function dinner() {

    let dinnerEntrees = ['steak', 'grilled salmon', 'vegan burger'];
    let dinnerSides = ['chips and salad', 'onion rings and mashed potatoes', 'salad and stuffed tomatoes'];
    let dinnerDrinks = ['water', 'lemonade', 'wine'];
    const dinnerWelcome = alert(`Welcome to Bottega Diner!\nHere's our dinner menu:\nEntrees $10: ${dinnerEntrees.join(', ')}.\nSides $5: ${dinnerSides.join(', ')}.\nDrinks $3: ${dinnerDrinks.join(', ')}. `);
    const dinnerComments = ['Great choice!', 'Excellent selection!','Perfect!', 'Very well!'];
    const randomDinnerComment = dinnerComments[Math.floor(Math.random() * dinnerComments.length)];
    let dinnerEntreeOffer = "";
    let validDinnerEntree = false;

    while (!validDinnerEntree) {
        dinnerEntreeOffer = prompt(`For the entrees you may choose: ${dinnerEntrees.join(', ')}.`);
        if (dinnerEntrees.includes(dinnerEntreeOffer)) {
            validDinnerEntree = true;
        } else {
            alert(`Sorry, we don't have ${dinnerEntreeOffer} today.`);
        }
    }

    
    if (dinnerEntreeOffer == 'steak' || dinnerEntreeOffer == 'grilled salmon' || dinnerEntreeOffer == 'vegan burger') {

        switch(dinnerEntreeOffer) {
            case 'steak':
            case 'grilled salmon':
            case 'vegan burger':
                const dinnerEntreePrice = 10
                let dinnerSideOffer = '';
                let validDinnerSide = false;
                while (!validDinnerSide) {
                    dinnerSideOffer = prompt(`${randomDinnerComment} That'll be $${dinnerEntreePrice}. For the sides you may choose from these: ${dinnerSides.join(', ')}.`);
                    if (dinnerSides.includes(dinnerSideOffer)) {
                        validDinnerSide = true;
                    } else {
                        alert(`Sorry, we don't have ${dinnerSideOffer} today. Please choose one of our sides: ${dinnerSides.join(', ')}`);
                    }
                }
                dinnerSidePrice = 5;
                let dinnerDrinksOffer = '';
                let validDinnerDrink = false;
                while (!validDinnerDrink) {
                    dinnerDrinksOffer = prompt(`${randomDinnerComment} What would you like to drink: ${dinnerDrinks.join(', ')}?`);
                    if (dinnerDrinks.includes(dinnerDrinksOffer)) {
                        validDinnerDrink = true;
                    } else {
                        alert(`Sorry, we don't have ${dinnerDrinksOffer} today. Please choose one of our drinks: ${dinnerDrinks.join(', ')}`);
                    }
                }

                switch(dinnerDrinksOffer) {
                    case 'water':  
                    case 'wine':
                    case 'lemonade':
                        dinnerDrinkPrice = 3;
                        total = dinnerDrinkPrice + dinnerSidePrice + dinnerEntreePrice;
                        alert(`Alright, that'll be $${total}. I'll be back with your order in a moment.`); 
                    break;
                    default:
                        alert(`I'm afraid we don't have that drink.`);
                }
            break;
            default:
                alert(`Sorry, we don't have that today. We have: ${dinnerEntrees.join(', ')}. I'll give you a moment to decide.`);
        }
    }
};



mealChooser();