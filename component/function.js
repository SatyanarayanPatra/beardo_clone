function move_to_next() {

    document.querySelector("#logoHeader").addEventListener("click", () => {
        window.location.href = "./landingpage.html";
    });

    document.querySelector("#check").addEventListener("click", () => {
        window.location.href = "../cart/cart.html"
    })
}

export default move_to_next