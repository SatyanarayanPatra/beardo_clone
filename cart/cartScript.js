let cartArr = JSON.parse(localStorage.getItem("cartDataLocal")) || [];

cartArr.forEach((item) => {
    let prod = document.createElement("div");
    prod.class = container;
    let imDiv = document.createElement("div");
    imDiv.class = image - container;
    let detailsContainer = document.createElement("div");
    detailsContainer.class = detContainer;
    let img = document.createElement("img");
    img = item.imgUrl[0];
    imDiv.append(img);
    let name = document.createElement("h2");
    name.textContent = item.name;
    let discount = ((cutPrice - price) / cutPrice) * 100;
    let price = `<h2>${price}</h2> <h3 style="text-decoration:line-through">${cutPrice}</h3> <h3>${discount}% off</h3>`
    let Qty = 1;
    let qty = document.createElement("h3");
    let input = document.createElement('select');
    let option1 = document.createElement('option').value = 1;
    let option2 = document.createElement('option').value = 2;
    let option3 = document.createElement('option').value = 3;
    let option4 = document.createElement('option').value = 4;
    let option5 = document.createElement('option').value = 5;
    input.append(option1, option2, option3, option4, option5);
    Qty = input.value;
    let remove = document.createElement('h4').textContent = "Remove";
    remove.addEventListener("click", removeItems);
    qty.innerHTML = `QTY : ${input}  remove`;
    detailsContainer.append(name, price, qty, remove);
    button = document.createElement('button');
    button.textContent = " Placeholder "
    button.style.backgroundColor = 'red';
    button.addEventListener("click", placeOrder);

    function removeItems() {
        Qty--;
    }
    let YouPay = price * Qty;
    detailsContainer.append(name, price,)

    function placeOrder() {
        alert("Order Placed");
    }
})
