

// -----------------------------------
// Global Variables Go Here

//Var I = [ <a href=#><img src = "http://munsellb.people.cofc.edu/img/pound.jpeg"></a>,
              //<a href=#><img src = "http://munsellb.people.cofc.edu/img/euro.jpeg"></a>,
              // <a href=#><img src = "http://munsellb.people.cofc.edu/img/kroon.jpeg"></a>,
              // <a href=#><img src = "http://munsellb.people.cofc.edu/img/canadian.jpeg"></a>,
              // <a href=#><img src = "http://munsellb.people.cofc.edu/img/yuan.jpeg"></a>
              //];
			  
Var I = imageArray[];
imageArray[0] = http://munsellb.people.cofc.edu/img/pound.jpeg;
imageArray[1] = http://munsellb.people.cofc.edu/img/euro.jpeg;
imageArray[2] = http://munsellb.people.cofc.edu/img/kroon.jpeg;
imageArray[3] = http://munsellb.people.cofc.edu/img/canadian.jpeg;
imageArray[4] = http://munsellb.people.cofc.edu/img/yuan.jpeg;

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
console.out(updateExchange(dollar,exchangeRate,currency,index));


// -----------------------------------
// Calculate Function Goes Here

function calculate(dollar, exchangeRate) {
				var calc =dollar*exchangeRate;
				return calc;
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





