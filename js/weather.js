//phai lay duoc du lieu tu file product.json ve
// const url = "http://localhost:5500/data/weather.json"; // dia chi file json


    const url = `https://api.openweathermap.org/data/2.5/weather?q=haiphong&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json()) // rs: response
    .then(function(data){
            var weather = data; 
            document.getElementById("nhietdo").innerHTML = weather.main.temp;
             document.getElementById("doam").innerHTML = weather.main.humidity;
          document.getElementById("mua").innerHTML = weather.clouds.all;
             document.getElementById("gio").innerHTML = weather.wind.speed;
              document.getElementById("pic").src=`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    });


