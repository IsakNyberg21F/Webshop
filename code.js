function toggleMenuPopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && document.getElementById("popup-1").classList.contains('active')){
        document.getElementById("popup-1").classList.toggle("active")
	}
});

function toggleModelsPopup(){
   document.getElementById("popup-2").classList.toggle("active");
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && document.getElementById("popup-2").classList.contains('active')){
document.getElementById("popup-2").classList.toggle("active");
	}
});

let isInCart1 = false
let isInCart2 = false
let isInCart3 = false


function addToList(product){
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        if(product === data[0].product1.id && quantity1 === 0){
            return;
        }
        else if(product === data[0].product2.id && quantity2 === 0){
            return;
        }
        else if(product === data[0].product3.id && quantity3 === 0){
            return;
        }

        if(product === data[0].product1.id && isInCart1 === true){
            return;
        }
        else if(product === data[0].product2.id && isInCart2 === true){
            return;
        }
        else if(product === data[0].product3.id && isInCart3 === true){
            return;
        }

        const container = document.getElementById('listContent');

        const line = document.createElement('div');
        line.id = "line";
    
        line.style.borderBottom = "2px solid black";
    
        // Create a new div element
        const newDiv = document.createElement('div');
    
        // Set some properties of the new element
        newDiv.id = product;
    
        // Add the new element to the document
        container.appendChild(newDiv);   
        container.appendChild(line) 

        // Create an img element
        const imgElement = document.createElement("img");
        const textElement = document.createElement("p");
        if(product === data[0].product1.id){
            // Set the src attribute to the image URL
            imgElement.src = "Images/pexels-erik-mclean-4140943.jpg";
            // Set the alt and title attributes
            imgElement.alt = "wheelsImage";
            imgElement.title = "wheelsImage";
            imgElement.id = data[0].product1.id;

            textElement.id = data[0].product1.textId;
            textElement.innerText = data[0].product1.name;
        }
        else if(product === data[0].product2.id){
            // Set the src attribute to the image URL
            imgElement.src = "Images/pexels-erik-mclean-4140943.jpg";
            // Set the alt and title attributes
            imgElement.alt = "cleaningKitImage";
            imgElement.title = "cleaningKitImage";
            imgElement.id = data[0].product2.id;

            textElement.id = data[0].product2.textId;
            textElement.innerText = data[0].product2.name;
        }
        else if(product === data[0].product3.id){
            // Set the src attribute to the image URL
            imgElement.src = "Images/pexels-erik-mclean-4140943.jpg";
            // Set the alt and title attributes
            imgElement.alt = "toolsImage";
            imgElement.title = "toolsImage";
            imgElement.id = data[0].product3.id;

            textElement.id = data[0].product3.textId;
            textElement.innerText = data[0].product3.name;
        }
        // create a new button element
        const closeButton = document.createElement('button');

        // set the text content of the button to "x" or "close"
        closeButton.textContent = 'x';

        // set the styles of the button to make it look like a button
        closeButton.id = "closeButton";

        // add an event listener to the button to handle the click event
        
        closeButton.addEventListener('click', function() {
            // code to close or hide something goes here
            if(product === data[0].product1.id){
                document.getElementById(data[0].product1.id).remove();
                isInCart1 = false;
            }
            else if(product === data[0].product2.id){
                document.getElementById(data[0].product2.id).remove();
                isInCart2 = false;
            }
            else if(product === data[0].product3.id){
                document.getElementById(data[0].product3.id).remove();
                isInCart3 = false;
            }
            document.getElementById("line").remove();
        });
        // Add the elements to the div
        newDiv.appendChild(closeButton);
        newDiv.appendChild(imgElement);
        newDiv.appendChild(textElement);

        // create a new span element
        var spanElement = document.createElement('span');
        console.log(isInCart3);
        // set the id attribute of the span element
        if(product === data[0].product1.id && isInCart1 === false){
            spanElement.setAttribute('id', 'quantity1');
            spanElement.textContent = quantity1;
            isInCart1 = true;
        }
        else if(product === data[0].product2.id && isInCart2 === false){
            spanElement.setAttribute('id', 'quantity2');
            spanElement.textContent = quantity2;
            isInCart2 = true;
        }
        else if(product === data[0].product3.id && isInCart3 === false){
            spanElement.setAttribute('id', 'quantity3');
            spanElement.textContent = quantity3;
            isInCart3 = true;
        }
        console.log(isInCart3);

        var amountText = document.createElement("p");
        amountText.innerText = "Amount: ";
        newDiv.appendChild(amountText);

        // add the span element to the DOM (e.g., as a child of another element)
        newDiv.appendChild(spanElement);
        })
        .catch(error => console.error(error));
		
}
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;

function addProduct(product) {
    if(product === "wheels" && isInCart1 === false){
        quantity1++;
        document.getElementById("quantity1").innerHTML = quantity1;

    }
    else if(product === "cleaningKit" && isInCart2 === false){
        quantity2++;
        document.getElementById("quantity2").innerHTML = quantity2;
    }
    else if(product === "carTools" && isInCart3 === false){
        quantity3++;
        document.getElementById("quantity3").innerHTML = quantity3;
    }

}

function removeProduct(product) {
    if(product === "wheels" && isInCart1 === false){
        if (quantity1 > 0) {
            quantity1--;
            document.getElementById("quantity1").innerHTML = quantity1;
        }
    }
    else if(product === "cleaningKit" && isInCart2 === false){
        if (quantity2 > 0) {
            quantity2--;
            document.getElementById("quantity2").innerHTML = quantity2;
        }
    }
    else if(product === "carTools" && isInCart3 === false){
        if (quantity3 > 0) {
            quantity3--;
            document.getElementById("quantity3").innerHTML = quantity3;
        }
    }
}


/*console.log(
JSON.parse(productDescriptions)[0].name)*/


function toggleShopPopup(){
        document.getElementById("popup-3").classList.toggle("active");
    }
    
    document.addEventListener('keydown', function(event){
        if(event.key === "Escape" && document.getElementById("popup-3").classList.contains('active')){
            document.getElementById("popup-3").classList.toggle("active")
        }
});



