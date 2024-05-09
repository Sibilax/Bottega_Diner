const breakfastSpecials = ['coffee and scrambled eggs', 'tea and avocado toast', 'latte and pancakes'];
const breakfastDrinks = ['coffee', 'orange juice', 'chocolate milk'];

const breakfastWelcome = alert("Hi! I'm Mindy!");
let price = 0;

function selectBreakfast() {
    let validBreakfast = false;

    while (!validBreakfast) {
        let breakfastOffer = prompt(`What would you like to order? Our Breakfast Specials are: ${breakfastSpecials.join(', ')}. We also have ${breakfastDrinks.join(', ')}`);

        if (breakfastSpecials.includes(breakfastOffer) || breakfastDrinks.includes(breakfastOffer)) {
            validBreakfast = true;
            return breakfastOffer;
        } else {
            alert("I'm afraid we don't have that. Please choose from the Breakfast Specials or Drinks.");
        }
    }
}

function breakfast() {
    const selectedBreakfast = selectBreakfast();

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

breakfast();