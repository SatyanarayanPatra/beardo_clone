
//afer Prize above video
var aboveVid = document.getElementById("afterprize");
var aboveVidData = JSON.parse(localStorage.getItem("hotSeller"));
showProd(aboveVidData, aboveVid);

// sk next image1
var skFlex1 = document.getElementById("sk_flex1");
var skFlex1Data = JSON.parse(localStorage.getItem("hotSeller"));
showProd(skFlex1Data, skFlex1);

// // sk next image1
var skFlex2 = document.getElementById("prodcontainer2");
var skFlex2Data = JSON.parse(localStorage.getItem("topsellers"));
showProd(skFlex2Data, skFlex2);

// sk next image1
var skFlex3 = document.getElementById("prodcontainer3");
var skFlex3Data = JSON.parse(localStorage.getItem("hotSeller"));
showProd(skFlex3Data, skFlex3);

// // sk next image1
var skFlex4 = document.getElementById("prodcontainer4");
var skFlex4Data = JSON.parse(localStorage.getItem("topsellers"));
showProd(skFlex4Data, skFlex4);

var skFlex5 = document.getElementById("prodcontainer5");
var skFlex5Data = JSON.parse(localStorage.getItem("topsellers"));
showProd(skFlex5Data, skFlex5);

var skFlex6 = document.getElementById("prodcontainer6");
var skFlex6Data = JSON.parse(localStorage.getItem("hotSeller"));
showProd(skFlex6Data, skFlex6);


//starter kit
var topSellers = JSON.parse(localStorage.getItem("topsellers"));
var startercontainer = document.getElementById("starter_container");
showProd(topSellers, startercontainer);

//hot seller
var hotSellerData = JSON.parse(localStorage.getItem("hotSeller"));
var hhotSeller_container = document.getElementById("hotSeller_container");
showProd(hotSellerData, hotSeller_container);


//top seller appending

var topSellers = JSON.parse(localStorage.getItem("topsellers"));
var tscontainer = document.getElementById("tscontainer");
showProd(topSellers, tscontainer);


function showProd(prod, loc) {
    prod.forEach((el) => {
        var pdiv = document.createElement("div");
        pdiv.setAttribute("class", "pdiv");
        var mdiv = document.createElement("div");
        mdiv.setAttribute("class", "main");
        var mimg = document.createElement("img")
        mimg.setAttribute("class", "mi");
        var ddiv = document.createElement("div");
        ddiv.setAttribute("class", "disc");
        var dimg = document.createElement("img")
        dimg.setAttribute("class", "di");
        var ndiv = document.createElement("div");
        ndiv.setAttribute("class", "ndiv");
        var name = document.createElement("p");
        name.setAttribute("class", "name");
        // var prdiv=document.createElement("div");
        // prdiv.setAttribute("id","prdiv");
        var cp = document.createElement("span");
        cp.setAttribute("class", "cp");
        var mp = document.createElement("span");
        mp.setAttribute("class", "mp");
        var btn = document.createElement("button");
        btn.setAttribute("class", "cartButton")
        mimg.src = el.imageUrl;
        mdiv.append(mimg);

        dimg.src = el.discountSticker;
        ddiv.append(dimg);

        name.innerText = el.name;
        ndiv.append(name);

        cp.innerText = el.cutPrice;
        mp.innerText = el.price;


        btn.innerText = "ADD TO CART";
        // console.log(el.imageUrl, el.name, el.price, el.cutPrice);

        pdiv.append(mdiv, ddiv, ndiv, cp, mp, btn);
        // console.log(pdiv);
        loc.append(pdiv);

    });
}



// most wanted combo

var comboData = JSON.parse(localStorage.getItem("combo"));
// console.log(comboData);
let comboCount = 1;

var viewBtn = document.getElementById("viewBtn");

showComboData(comboData, comboCount);

function showComboData(prod, count) {
    prod.forEach((el) => {
        if (count <= 3) {

            var div = document.createElement("div");
            div.setAttribute("id", "comboProduct");

            var imgdiv = document.createElement("div");
            imgdiv.setAttribute("id", "combo_img");
            var datadiv = document.createElement("div");
            datadiv.setAttribute("id", "combo_data");

            var mimg = document.createElement("img")
            mimg.setAttribute("id", "comboImg");

            var nameP = document.createElement("p");
            nameP.setAttribute("id", "combo_name");
            var otherdiv = document.createElement("div");
            otherdiv.setAttribute("id", "comboOther");


            var disdiv = document.createElement("div");
            disdiv.setAttribute("id", "combo_dis_div");
            var pricediv = document.createElement("div");
            pricediv.setAttribute("id", "combo_price_cart");

            var disimg = document.createElement("img")
            disimg.setAttribute("id", "combo_dis");

            var cp = document.createElement("span");
            cp.setAttribute("class", "combo_cp");
            var mp = document.createElement("span");
            mp.setAttribute("class", "combo_mp");
            var btn = document.createElement("button");
            btn.setAttribute("class", "comboCartButton");

            mimg.src = el.imageUrl;
            nameP.innerText = el.name;
            disimg.src = el.discountSticker;
            cp.innerText = el.cutPrice;
            mp.innerText = el.price;
            btn.innerText = "ADD TO CART";

            pricediv.append(cp, mp, btn);
            disdiv.append(disimg);
            otherdiv.append(disdiv, pricediv);
            datadiv.append(nameP, otherdiv);
            imgdiv.append(mimg);
            div.append(imgdiv, datadiv);

            comboDisplay.append(div);
            count++;
            // console.log(count);
        }
        else {
            return;
        }
    });

};
viewBtn.addEventListener("click", function () {
    var Count = 1;
    showComboData(comboData, Count);
});


var single_bg_img = JSON.parse(localStorage.getItem("single_bg_images"));
var singleImages = JSON.parse(localStorage.getItem("single_images"));
// console.log(singleImages);

image1.src = singleImages.imageUrl1;
image2.src = singleImages.imageUrl2;
image3.src = singleImages.imageUrl3;
image4.src = singleImages.imageUrl4;
image5.src = singleImages.imageUrl5;
image6.src = singleImages.imageUrl6;




// slider
