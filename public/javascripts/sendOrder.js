function sendOrder() {
	var checker=document.getElementById("myText").value;
    
	if (checker.indexOf("vegan") > -1){ 
		alert("Warning! Cheesecake contains dairy! :)"); 
	} 

	if(checker.indexOf("vegan") == -1){
    	var radioCheck = document.getElementById("toppings").value;
        var textCheck = document.getElementById("myText").value;
   
        if ( document.getElementById("Plain-radio").checked ) {
        	var checkedIs = 1;
        } else if ( document.getElementById("Cherry-radio").checked ) {
        	var checkedIs = 2;
        } else if ( document.getElementById("Chocolate-radio").checked ) {
        	var checkedIs = 3;
        } else {
            var checkedIs = 0;
        }
        var quantityVal = document.getElementById("toppings").value;
        
        
        
		var itemToRemove = document.getElementById("myText");
        itemToRemove.parentNode.removeChild(itemToRemove);
        var itemToRemove2 = document.getElementById("Cherry-radio");
        itemToRemove2.parentNode.removeChild(itemToRemove2);
        var itemToRemove3 = document.getElementById("Chocolate-radio");
        itemToRemove3.parentNode.removeChild(itemToRemove3);
        var itemToRemove4 = document.getElementById("Plain-radio");
        itemToRemove4.parentNode.removeChild(itemToRemove4);
        var itemToRemove44 = document.getElementById("Plain-Label");
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