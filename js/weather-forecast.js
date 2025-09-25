// function weather(){
    // const url = `https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    // fetch(url).then(rs=>rs.json())
    // .then(function(data){
    //     // napj  dữ liệu vào giao diện
    //     // document.getElementById("city").innerText = data.name;

    //     // 0
    //     document.getElementById("temp").innerText = data.list[0].main.temp;
    //     document.getElementById("date-time").innerText = data.list[0].dt_txt;
    //     document.getElementById("comment").innerText = data.list[0].weather[0].description;
    //     document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    // });
// }

// in vào box bên html
    
        // 0
        // document.getElementById("temp").innerText = data.list[0].main.temp;
        // document.getElementById("date-time").innerText = data.list[0].dt_txt;
        // document.getElementById("comment").innerText = data.list[0].weather[0].description;
        // document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

// function forecast(){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(rs=>rs.json())
    .then(function(data){
        // napj  dữ liệu vào giao diện
        // document.getElementById("city").innerText = data.name;
        var list = data.list;// giả sử là danh sách thời tiết
        var box_html = "";
        
        for(var i=0;i<list.length;i++){

            // mở 1 row mới khi bắt đầu
            if (i % 4 === 0) {
            box_html += `<div class="row">`;
            }

           box_html += `<div class="item">
                            <div class="item-comment">
                                <p>${data.list[i].dt_txt}</p>
                                <h1>${data.list[i].main.temp}<sup>o</sup>C</h1>
                                <h3>${data.list[i].weather[0].description}</h3>
                            </div>
                            <div class="item-icon">
                                <img class="item-icon-img" src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"/>
                            </div>
                        </div>`;

            // đóng row sau mỗi 4 item hoặc cuối danh sách
            if (i % 4 === 3 || i === list.length - 1) {
                 box_html += `</div>`;
            }
            document.getElementById("box").innerHTML = box_html;
        }
    });
// }
    

    
    
