//phai lay duoc du lieu tu file product.json ve
const url = "http://localhost:5500/data/weather.json"; // dia chi file json
fetch(url).then(rs=>rs.json()) // rs: response
.then(function(data){
    var weather = data; 
    document.getElementById("nhietdo").innerHTML = weather.main.temp;
    document.getElementById("doam").innerHTML = weather.main.humidity;
    document.getElementById("mua").innerHTML = weather.clouds.all;
    document.getElementById("gio").innerHTML = weather.wind.speed;
});
