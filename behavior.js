

// -----------------------------------
// Global Variables Go Here
var dollar;
var selectElement;
var exchangeRate;
var index;
var currency;
			  
var I = []
I[0] = "http://munsellb.people.cofc.edu/img/pound.jpeg";
I[1] = "http://munsellb.people.cofc.edu/img/euro.jpeg";
I[2] = "http://munsellb.people.cofc.edu/img/kroon.jpeg";
I[3] = "http://munsellb.people.cofc.edu/img/canadian.jpeg";
I[4] = "http://munsellb.people.cofc.edu/img/yuan.jpeg";

// -----------------------------------
// Convert Function Goes Here

function convert() {
              var dollar = document.getElementsByName("dollars")[0].value;
              var selectElement = document.getElementById('currency');
              var exchangeRate = selectElement.value;
              var index = selectElement.selectedIndex;
              var currency = selectElement.options[index].txt;
			}
	//Call function	updateExchange
updateExchange.call(dollar,exchangeRate,currency,index);


// -----------------------------------
// Calculate Function Goes Here

function calculate(dollar, exchangeRate) {
				calculate =dollar*exchangeRate;
				return calculate;
			}

// -----------------------------------
// Functions that are given
// Do not modify

function updateImage( index ) { 
    
    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;
    
}

function updateExchange( dollar, exchangeRate, currency, index ) {
    
    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;
    
    updateImage( index );
    
}





