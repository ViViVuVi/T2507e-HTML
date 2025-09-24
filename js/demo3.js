function demoOne(){
    alert("ViVi VuVi that Ruc Ro nhe!!!");
}

function demoTwo(){
    alert("ViVi VuVi that Nhiet nhe!!!");
}

// startFan va stopFan
// dat co trang thai ngoai pham vi ham
var flag = false; // ban dau la dung
var fanbox = null; // bien luu vong lap
function startFan(phap) {
    if (flag==false) {
    var fan = document.getElementById("fan");
    var dg = 0;
    fanbox = setInterval(function(){
    fan.style.transform = `rotate(${dg}deg)`;
    dg+=2;
    },1);

    //    document.getElementById("stop").innerText = "stops"; // dat id cho button de doi chu strat thanh stop
    //dung this de truyen button
    //onclick="startFan(this)"
    // phap chi la bien truyen vao khi han startFan onclick
    phap.innerText= "Stop";
    flag = true; //  bao da chay
    }else {
        clearInterval(fanbox); // Dừng vòng lặp co nghia la dung quat
        fanbox = null;
        phap.innerText= "Start";
        flag = false; // bao da dung
    }
}

