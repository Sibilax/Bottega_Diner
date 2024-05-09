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

dinner();