//JACK VOLONTE

//monthPostRequest function


function monthPostRequest() {
	//remove the hardcorded values on function call
	//var itemToRemove = document.getElementById("yes");
    //itemToRemove.parentNode.removeChild(itemToRemove);
    //var itemToRemove2 = document.getElementById("yess");
    //itemToRemove2.parentNode.removeChild(itemToRemove2);
    //var itemToRemove3 = document.getElementById("yesss");
    //itemToRemove3.parentNode.removeChild(itemToRemove3);;
	
	
	//$("orderMonth").text($(this).val());
	//$.post("process.php", { q: $(this).val() }, function() {
	//	$('#form').slideUp('slow');
	//}
	var monthSelection = document.getElementById("orderMonth").val();
	var arrayOfOrders = [{
		"id": 0,
		"topping": "cherry",
		"quantity": "2"
		}, {
		"id": 1,
		"topping": "plain",
		"quantity": "6"
		}, {
		"id": 2,
		"topping": "chocolate",
		"quantity": "3"
		}];
	
			   $.post('/jquery/orders',   // url
			   { monthSelection }, // data to be submit
			   function(data, status, jqXHR) {// success callback
						$('p').append(arrayOfOrders);
				}
			}
	
	
	
	//test for function working
    //alert("Warning! Cheesecake contains dairy! :)"); 
  }

