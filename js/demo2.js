var hx = document.getElementById("box");
hx.innerHTML = "<i>luon chao don moi dieu</i>";
// setInterval(function(){
//     hx.innerText = "Hay Luon Ruc Ro nhe!";
// },3000);  // sau moi 3 giay se chay moi
hx.style.color = "purple";
hx.style.marginBottom = "20px";

hx.classList.remove("xyz"); // xoa class xyz
hx.classList.add("abc"); // them class abc
//     hx.classList.toggle("abc"); // neu co class abc thi xoa, neu khong co thi them




// cu sau 1 giay co chu se to len 2px
// var hop = document.getElementById("dv"); //
// var f=14;     
// var d=setInterval(function(){
//     hop.style.fontSize = f + "px";
//     f+=2;
//     if(f>40) clearInterval(d);
// },1000); // sau moi 1 giay se chay moi


// Quay quat
// var fan = document.getElementById("fan");
// var dg=0;
// var fanbox = null;

// function startFan() {
//     if (fanbox) return; // tránh tạo nhiều vòng lặp
//     fanbox = setInterval(function(){
//         fan.style.transform = "rotate(" + dg + "deg)";
//         dg += 10;
//         if (dg >= 360) dg = 0; // reset lại
//     }, 100); // 0.1 giây tăng 10 độ
// }

// function stopFan() {
//     clearInterval(fanbox); // Dừng vòng lặp
//     fanbox = null; // reset
// }