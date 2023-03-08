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

function toggleShopPopup(){
    document.getElementById("popup-3").classList.toggle("active");
}

document.addEventListener('keydown', function(event){
    if(event.key === "Escape" && document.getElementById("popup-3").classList.contains('active')){
        document.getElementById("popup-3").classList.toggle("active")
    }
});


let isInCart1 = false;
let isInCart2 = false;
let isInCart3 = false;

let totalPrice = 0;

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
        line.id = "line" + product;
    
        line.style.borderBottom = "2px solid black";
    
        // Create a new div element
        const newDiv = document.createElement('div');
    
        // Set some properties of the new element
        newDiv.id = product;
    
        // Add the new element to the document
        container.appendChild(newDiv);   
        container.appendChild(line);
        
        if(document.getElementById("totalPrice")){
        document.getElementById("totalPrice").remove();
        }

        var totalPrice = document.createElement("p");
        totalPrice.id = "totalPrice";

        let text = "Total price: " + (price1 + price2 + price3) + "$";
        totalPrice.innerText = text;
        container.appendChild(totalPrice);

        // Create an img element
        const imgElement = document.createElement("img");
        const textElement = document.createElement("p");
        if(product === data[0].product1.id){
            // Set the src attribute to the image URL
            imgElement.src = data[0].product1.src;
            // Set the alt and title attributes
            imgElement.alt = data[0].product1.title;
            imgElement.title = data[0].product1.title;
            imgElement.id = data[0].product1.id;

            textElement.id = data[0].product1.textId;
            textElement.innerText = data[0].product1.name;
        }
        else if(product === data[0].product2.id){
            // Set the src attribute to the image URL
            imgElement.src = data[0].product2.src;
            // Set the alt and title attributes
            imgElement.alt = data[0].product2.title;
            imgElement.title = data[0].product2.title;
            imgElement.id = data[0].product2.id;

            textElement.id = data[0].product2.textId;
            textElement.innerText = data[0].product2.name;
        }
        else if(product === data[0].product3.id){
            // Set the src attribute to the image URL
            imgElement.src = data[0].product3.src;
            // Set the alt and title attributes
            imgElement.alt = data[0].product3.title;
            imgElement.title = data[0].product3.title;
            imgElement.id = data[0].product3.id;

            textElement.id = data[0].product3.textId;
            textElement.innerText = data[0].product3.name;
        }
        // create a new button element
        const closeButton = document.createElement('button');

        // set the text content of the button to "x"
        closeButton.textContent = 'x';

        // set the styles of the button to make it look like a button
        closeButton.id = "closeButtons";

        // add an event listener to the button to handle the click event
        closeButton.addEventListener('click', function() {
            // code to close or hide something goes here
            if(product === data[0].product1.id){
                document.getElementById(data[0].product1.id).remove();
                isInCart1 = false;
                price1 = 0;
                quantity1 = 0;
                document.getElementById("quantity1").innerHTML = quantity1;
                document.getElementById("line" + data[0].product1.id).remove();
            }
            else if(product === data[0].product2.id){
                document.getElementById(data[0].product2.id).remove();
                isInCart2 = false;
                price2 = 0;
                quantity2 = 0;
                document.getElementById("quantity2").innerHTML = quantity2;
                document.getElementById("line" + data[0].product2.id).remove();
            }
            else if(product === data[0].product3.id){
                document.getElementById(data[0].product3.id).remove();
                isInCart3 = false;
                price3 = 0;
                quantity3 = 0;
                document.getElementById("quantity3").innerHTML = quantity3;
                document.getElementById("line" + data[0].product3.id).remove();
            }

            text = "Total price: " + (price1 + price2 + price3) + "$";
            document.getElementById("totalPrice").innerText = text;

            if(isInCart1 === false && isInCart2 === false && isInCart3 === false){
                document.getElementById("totalPrice").remove();
            }
            
        });
        // Add the elements to the div
        newDiv.appendChild(closeButton);
        newDiv.appendChild(imgElement);
        newDiv.appendChild(textElement);

        // create a new span element
        var spanElement = document.createElement('span');
        var price = document.createElement("p");
        price.id = "prices";

        // set the id attribute of the span element
        if(product === data[0].product1.id && isInCart1 === false){
            spanElement.setAttribute('id', 'quantity1');
            spanElement.textContent = quantity1;
            isInCart1 = true;
            let text = "price: " + price1 + "$";
            price.innerText = text;
        }
        else if(product === data[0].product2.id && isInCart2 === false){
            spanElement.setAttribute('id', 'quantity2');
            spanElement.textContent = quantity2;
            isInCart2 = true;
            let text = "price: " + price2 + "$";
            price.innerText = text;
        }
        else if(product === data[0].product3.id && isInCart3 === false){
            spanElement.setAttribute('id', 'quantity3');
            spanElement.textContent = quantity3;
            isInCart3 = true;
            let text = "Price: " + price3 + "$";
            price.innerText = text;
        }

        var amountText = document.createElement("p");
        amountText.innerText = "Amount: ";

        newDiv.appendChild(amountText);

        // add the span element to the DOM (e.g., as a child of another element)
        newDiv.appendChild(spanElement);
        newDiv.appendChild(price);
        })
        .catch(error => console.error(error));
		
}
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;

let price1 = 0;
let price2 = 0;
let price3 = 0;

function addProduct(product) {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        if(product === data[0].product1.id && isInCart1 === false){
            quantity1++;
            document.getElementById("quantity1").innerHTML = quantity1;
            price1 += data[0].product1.price;
        }
        else if(product === data[0].product2.id && isInCart2 === false){
            quantity2++;
            document.getElementById("quantity2").innerHTML = quantity2;
            price2 += data[0].product2.price;
        }
        else if(product === data[0].product3.id && isInCart3 === false){
            quantity3++;
            document.getElementById("quantity3").innerHTML = quantity3;
            price3 += data[0].product3.price;
        }
    })

}

function removeProduct(product) {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
    if(product === data[0].product1.id && isInCart1 === false){
        if (quantity1 > 0) {
            quantity1--;
            document.getElementById("quantity1").innerHTML = quantity1;
            price1 -= data[0].product1.price;
        }
    }
    else if(product === data[0].product2.id && isInCart2 === false){
        if (quantity2 > 0) {
            quantity2--;
            document.getElementById("quantity2").innerHTML = quantity2;
            price2 -= data[0].product2.price;
        }
    }
    else if(product === data[0].product3.id && isInCart3 === false){
        if (quantity3 > 0) {
            quantity3--;
            document.getElementById("quantity3").innerHTML = quantity3;
            price3 -= data[0].product3.price;
        }
    }
})
}


