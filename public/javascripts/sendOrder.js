//sendOrder function (vegan check, and order submission function)

function sendOrder() {
	//gets the textbox value after the user has entered any special instructions
	var checker=document.getElementById("myText").value;
    
	//checks the text box if it contains the word "vegan", if so it sends an alert to the user
	if (checker.indexOf("vegan") > -1){ 
		alert("Warning! Cheesecake contains dairy! :)"); 
	} 
	//if vegan is not present, collect data of # of toppings, and check if the user has typed any instructions
	//if they havent typed any instructions, it will replace the base textbox value with "no special instructions."
	if(checker.indexOf("vegan") == -1){
    	var radioCheck = document.getElementById("toppings").value;
        if ( document.getElementById("myText").value == "Enter any special instructions here." ) {
			var textCheck = "No special instructions.";
		} else {
			var textCheck = document.getElementById("myText").value;
		}
		
		//checks if plain, cherry, or chocolate is checked, and assigns a value to a variable for later
		//this variable will be pushed later after the order is complete
        if ( document.getElementById("plain").checked ) {
        	var checkedIs = 1;
        } else if ( document.getElementById("cherry").checked ) {
        	var checkedIs = 2;
        } else if ( document.getElementById("chocolate").checked ) {
        	var checkedIs = 3;
        } else {
            var checkedIs = 0;
        }
        var quantityVal = document.getElementById("toppings").value;
        
		//if no radio button is checked, send an alert to the user telling them to check the type at the point
		//when an order is pressed
        if ( checkedIs == 0 ) {
			alert("Please select the type of cheesecake you want to order ");
		} else {
        
		//removing each item from the page that we dont need after order is pressed
		var itemToRemove = document.getElementById("myText");
        itemToRemove.parentNode.removeChild(itemToRemove);
        var itemToRemove2 = document.getElementById("cherry");
        itemToRemove2.parentNode.removeChild(itemToRemove2);
        var itemToRemove3 = document.getElementById("chocolate");
        itemToRemove3.parentNode.removeChild(itemToRemove3);
        var itemToRemove4 = document.getElementById("plain");
        itemToRemove4.parentNode.removeChild(itemToRemove4);
        itemToRemove44 = document.getElementById("Plain-Label");
        itemToRemove44.parentNode.removeChild(itemToRemove44);
        var itemToRemove444 = document.getElementById("Cherry-Label");
        itemToRemove444.parentNode.removeChild(itemToRemove444);
        var itemToRemove4444 = document.getElementById("Chocolate-Label");
        itemToRemove4444.parentNode.removeChild(itemToRemove4444);
        var itemToRemove5 = document.getElementById("toppings");
        itemToRemove5.parentNode.removeChild(itemToRemove5);
        var itemToRemove6 = document.getElementById("quantity");
        itemToRemove6.parentNode.removeChild(itemToRemove6);
        var itemToRemove7 = document.getElementById("NotesText");
        itemToRemove7.parentNode.removeChild(itemToRemove7);
        var itemToRemove8 = document.getElementById("orderButton");
        itemToRemove8.parentNode.removeChild(itemToRemove8);
        
        
        
		//displays the output for a completed order, telling the user their order is placed, how many they bought, what type, and any notes
        document.getElementById("displayThis").innerHTML = "Thank you! Your order has been placed";
        if ( checkedIs == 1 ) {
        	document.getElementById("displayTopping").innerHTML = "Topping: Plain";
        } else if ( checkedIs == 2 ) {
        	document.getElementById("displayTopping").innerHTML = "Topping: Cherry";
        } else if ( checkedIs == 3 ) {
        	document.getElementById("displayTopping").innerHTML = "Topping: Chocolate";
        }
        document.getElementById("displayAmount").innerHTML = "Quantity: " + quantityVal;
        document.getElementById("displayNotes").innerHTML = "Notes: " + textCheck;
		}
        
	}
}
