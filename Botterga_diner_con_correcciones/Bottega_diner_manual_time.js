function askUserTime() {
    let inputTime = prompt("Please, add current time (hh:mm):");
    let timeParts = inputTime.split(":");
    let hour = parseInt(timeParts[0]);
    let minute = parseInt(timeParts[1]);

    if (isNaN(hour) || isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        alert("Invalid entry. Please, add current time (hh:mm):");
        getUserTime();
    } else {

        currentTime = hour + minute / 60; 
    }
                
    if (currentTime >= 6 && currentTime < 12) {

        breakfast();
    } else if (currentTime >= 12 && currentTime < 18) {

        lunch();
    } else if (currentTime >= 18 && currentTime < 23) {

        dinner();
    }else { 
        alert('Sorry, we are closed.')
    }

}
askUserTime();

    function breakfast() {
        const breakfastEntrees = {
            'TOAST': 2,
            'OMELETTE': 3,
            'CROISSANT': 3,
            
        };
        
        const breakfastDrinks = {
            'COFFEE': 2,
            'ORANGE JUICE': 3,
            'TEA' : 1,
        };
    
        const breakfastWelcome = alert(`Welcome to Bottega Diner!`);
    
        const breakfastComments = ['Great choice!', 'Excellent selection!', 'Perfect!', 'Very well!'];
    
        let totalEntreePriceBreakfast = 0;
        let totalDrinkPriceBreakfast = 0;
    
        let entreeOptionsBreakfast = [];
    
        for (let entree in breakfastEntrees) {
            entreeOptionsBreakfast.push(`${entree} - $${breakfastEntrees[entree]}`);
        }
    
        let breakfastEntreesOffer = `\u2022 BREAKFAST:\n${Object.entries(breakfastEntrees).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
    
        let drinkOptionsBreakfast = [];
    
        for (let drink in breakfastDrinks) {
            drinkOptionsBreakfast.push(`${drink} - $${breakfastDrinks[drink]}`);
        }
    
        let breakfastDrinksOffer = `\u2022 DRINKS:\n${Object.entries(breakfastDrinks).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
    
        const breakfastMenu = alert(`Here's our breakfast menu:\n\n${breakfastEntreesOffer}\n\n${breakfastDrinksOffer}`);
        let selectedEntreeBreakfast = '';
        let selectedDrinkBreakfast = '';
    
        let validBreakfastEntree = false;
        while (!validBreakfastEntree) {    
            chooseBreakfastEntree = prompt(`What would you like?\n${entreeOptionsBreakfast.join('\n').toUpperCase()}`);
            if (chooseBreakfastEntree.toUpperCase() in breakfastEntrees) {
                validBreakfastEntree = true;
                const randomEntreeCommentBreakfast = breakfastComments[Math.floor(Math.random() * breakfastComments.length)];
                alert(randomEntreeCommentBreakfast);
                totalEntreePriceBreakfast = breakfastEntrees[chooseBreakfastEntree.toUpperCase()];
                selectedEntreeBreakfast = chooseBreakfastEntree.toUpperCase();
            } else {
                alert(`Sorry, we don't have that. Please choose one of our breakfasts:\n\n ${breakfastEntreesOffer}.`);
            }
        }
    
        let validBreakfastDrink = false;
        while (!validBreakfastDrink) {
            chooseBreakfastDrink = prompt(`What would you like to drink?\n${drinkOptionsBreakfast.join('\n')}`.toUpperCase());
            if (chooseBreakfastDrink.toUpperCase() in breakfastDrinks) {
                validBreakfastDrink = true;
                const randomDrinkCommentBreakfast = breakfastComments[Math.floor(Math.random() * breakfastComments.length)];
                alert(randomDrinkCommentBreakfast);
                totalDrinkPriceBreakfast = breakfastDrinks[chooseBreakfastDrink.toUpperCase()];
                selectedDrinkBreakfast = chooseBreakfastDrink.toUpperCase();
            } else {
                alert(`I'm afraid we don't have that. Please choose one of our drinks:\n\n ${breakfastDrinksOffer}.`);
            }
        }
    
        const breakfastOrderDetails = `Selected Items:\n\n${selectedEntreeBreakfast} - $${totalEntreePriceBreakfast}\n${selectedDrinkBreakfast} - $${totalDrinkPriceBreakfast}\n`;
        const breakfastTotal = totalEntreePriceBreakfast + totalDrinkPriceBreakfast;
        const totalBreakfastTicket = `TOTAL: $${breakfastTotal}`;
        alert(`Here is your check... \n${breakfastOrderDetails}\n${totalBreakfastTicket}\nEnjoy your breakfast.`);
    }

    function lunch() {

        const lunchEntrees = {
            'SALMON' : 12,
            'PASTA' : 8,
            'STEAK': 10,
        };
        const lunchSides = {
            'SALAD' : 4,
            'CHIPS' : 3,
            'CHEESE': 5,
        };
        const lunchDrinks = {
            'COKE' : 2,
            'WATER' : 1,
            'WINE': 3,
        };
        const lunchDesserts = {
            'ICE-CREAM' : 2,
            'FRUIT' : 1,
            'PUDDING': 3,
        };
        
        const lunchWelcome = alert(`Welcome to Bottega Diner!`);
        const lunchComments = ['Great choice!', 'Excellent selection!','Perfect!', 'Very well!'];
        let totalEntreePriceLunch = 0;
        let totalSidePriceLunch = 0;
        let totalDrinkPriceLunch = 0;
        let totalDessertPriceLunch = 0;
        
        let entreeOptionsLunch = [];
        
        for (let entree in lunchEntrees) {
            entreeOptionsLunch.push(`${entree} - $${lunchEntrees[entree]}`);
        }
        
        let lunchEntreesOffer = `\u2022 ENTREES:\n${ Object.entries(lunchEntrees).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
        
        let sideOptionsLunch = [];
        
        for (let side in lunchSides) {
            sideOptionsLunch.push(`${side} - $${lunchSides[side]}`);
        }
        
        let lunchSidesOffer = `\u2022 SIDES:\n${Object.entries(lunchSides).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
        
        let drinkOptionsLunch = [];
        
        for (let drink in lunchDrinks) {
            drinkOptionsLunch.push(`${drink} - $${lunchDrinks[drink]}`);
        }
        
        let lunchDrinksOffer = `\u2022 DRINKS:\n${Object.entries(lunchDrinks).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
        
        let dessertOptionsLunch = [];
        
        for (let dessert in lunchDesserts) {
            dessertOptionsLunch.push(`${dessert} - $${lunchDesserts[dessert]}`);
        }
        
        let lunchDessertsOffer = `\u2022 DESSERTS:\n${Object.entries(lunchDesserts).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
        
        const lunchMenu = alert(`Here's our lunch menu:\n\n${lunchEntreesOffer}\n\n${lunchSidesOffer}\n\n${lunchDrinksOffer}`);
        
        const randomLunchComment = lunchComments[Math.floor(Math.random() * lunchComments.length)];
        let selectedLunchEntree = '';
        let selectedLunchSide = '';
        let selectedLunchDrink = '';
        let selectedLunchDessert = '';
        
        let validLunchEntree = false;
        while (!validLunchEntree) {    
            chooseLunchEntree = prompt(`What entree would you like?\n${entreeOptionsLunch.join('\n')}`.toUpperCase());
            if (chooseLunchEntree.toUpperCase() in lunchEntrees) {
                validLunchEntree = true;
                const randomEntreeCommentLunch = lunchComments[Math.floor(Math.random() * lunchComments.length)];
                alert(randomEntreeCommentLunch);
                totalEntreePriceLunch += lunchEntrees[chooseLunchEntree.toUpperCase()];
                selectedLunchEntree = chooseLunchEntree.toUpperCase();
            } else {
                alert(`Sorry, we don't have that. Please choose one of our entrees:\n ${lunchEntreesOffer}.`);
            }
        }
        
        let validLunchSide = false;
        while (!validLunchSide) {
            chooseLunchSide = prompt(`What side would you like?\n${sideOptionsLunch.join('\n')}`.toUpperCase());
            if (chooseLunchSide.toUpperCase() in lunchSides) {
                validLunchSide = true;
                const randomSideCommentLunch = lunchComments[Math.floor(Math.random() * lunchComments.length)];
                alert(randomSideCommentLunch);
                totalSidePriceLunch += lunchSides[chooseLunchSide.toUpperCase()];
                selectedLunchSide = chooseLunchSide.toUpperCase();
            } else {
                alert(`I'm afraid we don't have that. Please choose one of our sides:\n${lunchSidesOffer}.`);
            }
        }
        
        let validLunchDrink = false;
        while (!validLunchDrink) {
            chooseLunchDrink = prompt(`What would you like to drink?\n${drinkOptionsLunch.join('\n')}`.toUpperCase());
            if (chooseLunchDrink.toUpperCase() in lunchDrinks) {
                validLunchDrink = true;
                const randomDrinkCommentLunch = lunchComments[Math.floor(Math.random() * lunchComments.length)];
                alert(randomDrinkCommentLunch);
                totalDrinkPriceLunch += lunchDrinks[chooseLunchDrink.toUpperCase()];
                selectedLunchDrink = chooseLunchDrink.toUpperCase();
            } else {
                alert(`I'm afraid we don't have that. Please choose one of our drinks:\n ${lunchDrinksOffer}.`);
            }
        }
        
        let validLunchDessert = false;
        while (!validLunchDessert) {
            chooseLunchDessert = prompt(`What would you like for dessert?\n${dessertOptionsLunch.join('\n')}`.toUpperCase());
            if (chooseLunchDessert.toUpperCase() in lunchDesserts) {
                validLunchDessert = true;
                const randomDessertCommentLunch = lunchComments[Math.floor(Math.random() * lunchComments.length)];
                alert(randomDessertCommentLunch);
                totalDessertPriceLunch += lunchDesserts[chooseLunchDessert.toUpperCase()];
                selectedLunchDessert= chooseLunchDessert.toUpperCase();
            } else {
                alert(`I'm afraid we don't have that. Please choose one of our desserts:\n ${lunchDessertsOffer}.`);
            }
        }
      
      
        const lunchOrderDetails = `Selected Items:\n\n${selectedLunchEntree} - $${lunchEntrees[selectedLunchEntree]}\n${selectedLunchSide} - $${lunchSides[selectedLunchSide]}\n${selectedLunchDrink} - $${lunchDrinks[selectedLunchDrink]}\n${selectedLunchDessert} - $${lunchDesserts[selectedLunchDessert]}\n`;
        const lunchTotal = totalEntreePriceLunch + totalSidePriceLunch + totalDrinkPriceLunch + totalDessertPriceLunch;
        const totalLunchTicket = `TOTAL: $${lunchTotal}`;
        alert(`Here is your check... \n${lunchOrderDetails}\n${totalLunchTicket}\nEnjoy your meal.`);
      
    }
    


    function dinner() {

        const dinnerEntrees = {
            'SALMON' : 12,
            'PASTA' : 8,
            'STEAK': 10,
        };
        const dinnerSides = {
            'SALAD' : 5,
            'CHIPS' : 4,
            'CHEESE': 6,
        };
        const dinnerDrinks = {
            'COKE' : 2,
            'WATER' : 1,
            'WINE': 3,
        };
        const dinnerDesserts = {
            'ICE-CREAM' : 3,
            'FRUIT' : 2,
            'PUDDING': 4,
        };
    
    
        const dinnerWelcome = alert(`Welcome to Bottega Diner!`);
        const dinnerComments = ['Great choice!', 'Excellent selection!','Perfect!', 'Very well!'];
        let totalEntreePriceDinner = 0;
        let totalSidePriceDinner = 0;
        let totalDrinkPriceDinner = 0;
        let totalDessertPriceDinner = 0;
    
    
    
        let entreeOptionsDinner = [];
    
        for (let entree in dinnerEntrees) {
            entreeOptionsDinner.push(`${entree} - $${dinnerEntrees[entree]}`);
        }
    
        let dinnerEntreesOffer = `\u2022 ENTREES:\n${ Object.entries(dinnerEntrees).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
    
    
        let sideOptionsDinner = [];
    
        for (let side in dinnerSides) {
            sideOptionsDinner.push(`${side} - $${dinnerSides[side]}`);
        }
    
        let dinnerSidesOffer = `\u2022 SIDES:\n${Object.entries(dinnerSides).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
    
    
        let drinkOptionsDinner = [];
    
        for (let drink in dinnerDrinks) {
            drinkOptionsDinner.push(`${drink} - $${dinnerDrinks[drink]}`);
        }
    
        let dinnerDrinksOffer = `\u2022 DRINKS:\n${Object.entries(dinnerDrinks).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
    
    
    
        let dessertOptionsDinner = [];
    
        for (let desserts in dinnerDesserts) {
            dessertOptionsDinner.push(`${desserts} - $${dinnerDesserts[desserts]}`);
        }
    
        let dinnerDessertsOffer = `\u2022 DESSERTS:\n${Object.entries(dinnerDesserts).map(([key, value]) => `${key} - $${value}`).join('\n')}`;
    
        const dinnerMenu = alert(`Here's our dinner menu:\n\n${dinnerEntreesOffer}\n\n${dinnerSidesOffer}\n\n${dinnerDrinksOffer}`);

        let selectedEntreeDinner = '';
        let selectedSideDinner = '';
        let selectedDrinkDinner = '';
        let selectedDessertDinner = '';
    
        let validDinnerEntree = false;
        while (!validDinnerEntree) {    chooseDinnerEntree = prompt(`What entree would you like?\n${entreeOptionsDinner.join('\n')}`.toUpperCase());
                if (chooseDinnerEntree.toUpperCase() in dinnerEntrees) {
                    validDinnerEntree = true;
                    const randomEntreeCommentDinner = dinnerComments[Math.floor(Math.random() * dinnerComments.length)];
                    alert(randomEntreeCommentDinner);
                    totalEntreePriceDinner += dinnerEntrees[chooseDinnerEntree.toUpperCase()];
                    selectedEntreeDinner = chooseDinnerEntree.toUpperCase();
    
                } else {
                    alert(`Sorry, we don't have that. Please choose one of our entrees:\n ${dinnerEntreesOffer}.`);
                }
            }
    
       
        let validDinnerSide = false;
        while (!validDinnerSide) {
            chooseDinnerSide = prompt(`What side would you like?\n${sideOptionsDinner.join('\n')}`.toUpperCase());
                if (chooseDinnerSide.toUpperCase() in dinnerSides) {
                    validDinnerSide = true;
                    const randomSideCommentDinner = dinnerComments[Math.floor(Math.random() * dinnerComments.length)];
                    alert(randomSideCommentDinner);
                    totalSidePriceDinner += dinnerSides[chooseDinnerSide.toUpperCase()];
                    selectedSideDinner = chooseDinnerSide.toUpperCase();
    
                } else {
                    alert(`I'm afraid we don't have that. Please choose one of our sides:\n${dinnerSidesOffer}.`);
                }
            }
    
        let validDinnerDrink = false;
        while (!validDinnerDrink) {
            chooseDinnerDrink = prompt(`What would you like to drink?\n${drinkOptionsDinner.join('\n')}`.toUpperCase());
            
                if (chooseDinnerDrink.toUpperCase() in dinnerDrinks) {
                    validDinnerDrink = true;
                    const randomDrinkCommentDinner = dinnerComments[Math.floor(Math.random() * dinnerComments.length)];
                    alert(randomDrinkCommentDinner);
                    totalDrinkPriceDinner += dinnerDrinks[chooseDinnerDrink.toUpperCase()];
                    selectedDrinkDinner = chooseDinnerDrink.toUpperCase();
    
    
                } else {
                    alert(`I'm afraid we don't have that. Please choose one of our drinks:\n ${dinnerdrinksOffer}.`);
                }
            }
    
        let validDinnerDessert = false;
        while (!validDinnerDessert) {
            chooseDinnerDessert = prompt(`What would you like for dessert?\n${dessertOptionsDinner.join('\n')}`.toUpperCase());
            
                if (chooseDinnerDessert.toUpperCase() in dinnerDesserts) {
                    validDinnerDessert = true;
                    const randomDessertCommentDinner = dinnerComments[Math.floor(Math.random() * dinnerComments.length)];
                    alert(randomDessertCommentDinner);
                    totalDessertPriceDinner += dinnerDesserts[chooseDinnerDessert.toUpperCase()];
                    selectedDessertDinner= chooseDinnerDessert.toUpperCase();
    
                } else {
                    alert(`I'm afraid we don't have that. Please choose one of our desserts:\n ${dinnerdessertsOffer}.`);
                }
            }
    
            const dinnerOrderDetails = `Selected Items:\n\n${chooseDinnerEntree.toUpperCase()} - $${dinnerEntrees[chooseDinnerEntree.toUpperCase()]}\n${chooseDinnerSide.toUpperCase()} - $${dinnerSides[chooseDinnerSide.toUpperCase()]}\n${chooseDinnerDrink.toUpperCase()} - $${dinnerDrinks[chooseDinnerDrink.toUpperCase()]}\n${chooseDinnerDessert.toUpperCase()} - $${dinnerDesserts[chooseDinnerDessert.toUpperCase()]}\n`;
            const dinnerTotal = totalEntreePriceDinner + totalSidePriceDinner + totalDrinkPriceDinner + totalDessertPriceDinner;
            const totalDinnerTicket = `TOTAL: $${dinnerTotal}`;
            alert(`Here is your check... \n${dinnerOrderDetails}\n${totalDinnerTicket}\nEnjoy your meal.`);
    }

askUserTime();

