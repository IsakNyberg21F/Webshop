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



function addToList(product){
    console.log(product);
    // Create a new div element
    const newDiv = document.createElement('div');

    // Set some properties of the new element
    newDiv.id = product;

    // Add the new element to the document
    const container = document.getElementById('listContent');
    container.appendChild(newDiv);

    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Create an img element
        const imgElement = document.createElement("img");
        const textElement = document.createElement("p");
        const descriptionElement = document.createElement("p");
        if(product === data[0].product1.id){
            // Set the src attribute to the image URL
            imgElement.src = "Images/pexels-erik-mclean-4140943.jpg";
            // Set the alt and title attributes
            imgElement.alt = "wheelsImage";
            imgElement.title = "wheelsImage";
            imgElement.id = data[0].product1.id;

            textElement.id = data[0].product1.textId;
            textElement.innerText = data[0].product1.name;

            descriptionElement.id = data[0].product1.descriptionId;
            descriptionElement.innerText = data[0].product1.description;
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

            descriptionElement.id = data[0].product2.descriptionId;
            descriptionElement.innerText = data[0].product2.description;
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

            descriptionElement.id = data[0].product3.descriptionId;
            descriptionElement.innerText = data[0].product3.description;
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
            }
            else if(product === data[0].product2.id){
                document.getElementById(data[0].product2.id).remove();
            }
            else if(product === data[0].product3.id){
                document.getElementById(data[0].product3.id).remove();
            }
        });
        // Add the elements to the div
        newDiv.appendChild(closeButton);
        newDiv.appendChild(imgElement);
        newDiv.appendChild(textElement);
        newDiv.appendChild(descriptionElement);

        // create a new span element
        const spanElement = document.createElement('span');

        // set the id attribute of the span element
        if(product === data[0].product1.id){
            spanElement.setAttribute('id', 'quantity1');
        }
        else if(product === data[0].product2.id){
            spanElement.setAttribute('id', 'quantity2');
        }
        else if(product === data[0].product3.id){
            spanElement.setAttribute('id', 'quantity3');
        }

        // set the text content of the span element to "0"
        spanElement.textContent = '0';

        // add the span element to the DOM (e.g., as a child of another element)
        newDiv.appendChild(spanElement);
        })
        .catch(error => console.error(error));
		
}
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;

function addProduct(product) {
    if(product === "wheels"){
        quantity1++;
        document.getElementById("quantity1").innerHTML = quantity1;

    }
    else if(product === "cleaningKit"){
        quantity2++;
        document.getElementById("quantity2").innerHTML = quantity2;
    }
    else if(product === "carTools"){
        quantity3++;
        document.getElementById("quantity3").innerHTML = quantity3;
    }

}

function removeProduct(product) {
    if(product === "wheels"){
        if (quantity1 > 0) {
            quantity1--;
            document.getElementById("quantity1").innerHTML = quantity1;
        }
    }
    else if(product === "cleaningKit"){
        if (quantity2 > 0) {
            quantity2--;
            document.getElementById("quantity2").innerHTML = quantity2;
        }
    }
    else if(product === "carTools"){
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



