//phai lay duoc du lieu tu file product.json ve
const url = "http://127.0.0.1:5500/data/product.json?gidzl=MR_V4efyLYvHeDeHXcfIBL2jtnASPWOkI_U35Ciq2oGOzuLEcpKC94xmq1oTPbGcI_MCJJ7Yyhq8YdzMAG"; // dia chi file json
fetch(url).then(rs=>rs.json()) // rs: response
.then(function(data){
    //doan nay can suy nghi
    var sp = data;

    var spname = document.getElementById("p-name");
    spname.innerHTML = sp.name;

    document.getElementById("p-img").src = sp.image;
    document.getElementById("p-price").innerHTML = sp.price;
    document.getElementById("p-desc").innerHTML = sp.description; 
    document.getElementById("p-qty").innerHTML = sp.stock.qty; // chu y cach doc thuoc tinh trong object cau truc JSON

    var rvHtml = "";
    for(var i=0; i<sp.reviews.length; i++) {
    var rate = sp.reviews[i].rate;
    var review = sp.reviews[i].review;
     rvHtml += `<li> ${rate} sao - ${review} </li>`;
  // rvHtml =rvHtml + <li> + ${sp.reviews.rate} sao  - ${sp.reviews[i].review + </li>; //rvHtml = rvHtml + ...
    }   
    document.getElementById("rv").innerHTML = rvHtml;
});
// doan tren can hoc thuoc





// can suy nghi
// ca doan ben duoi la su dung du lieu
