var x;
x=10; //x:number
console.log(x);
x="xin chao";//string
console.log(x);
x=true;//boolean
console.log(x);

var n=20;
var s="hello";
var t=n+n;//40
var k=n+s;//"20hello"
var m=s+n;//hello20

if(t>30){

}else{

}

var xyz=t>30?"A":"B";//toan tu 3 ngoi

for(var i=0;i<10;i++){
    console.log("i="+i);
}


var arr = [];//array mang.bien arr co gia tri la mang
var abc=[1,2,"xin chao"];

arr[0]=10;
arr[1]=15;
arr.push(18);//nghia la: arr[2]=18; 
arr.push(18);
arr.push(18);

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

function tinhtong(a,b){
    //return a+b;
    console.log(a+b);
}

tinhtong(5,7);
tinhtong("a",9);
tinhtong("a","b");
tinhtong([1,7,9],8);

//ham co san tren js

//ham noi len giao dien

// alert("cam nguoi duoi 18 tuoi"); //ham 1
//  var check= confirm("bạn đã đủ tuổi chưa?"); //ham 2 ///return true/false
//  if(check==true){
 //    alert("bạn đã chọn Yes");
//  }else{
//    alert("bạn đã chọn No");
//   }

// var age= prompt("bạn bao nhiêu tuổi?"); //ket qua tra ve la string
//age= age+10;// chuỗi 2010
//alert(age);


// age =parseInt (age);//chuyen chuoi thành số
//"20"=>20
//"20af90"=>20
//"a20"=> NaN: not a number


// var lk=Math.random(); // tạo 1 số thực ngẫu nhiên từ 0-->1
// lk=lk*100;
// lk=parseInt(lk);
// console.log("số trúng thưởng là:"+lk);

// var num = prompt("bạn chọn số nào?");
// num= parseInt(num);
// if(num==lk){
//     alert("chúc mừng, bạn trúng 1 tỷ");
// }else{
//     alert("bạn không trúng");
// }

//ham thoi gian
// setTimeout(function(){
//     alert("hết giờ");
// },3000);//3 giây.tinh bang mm s (mini giây)


//ham thoi gian lap di lap lai cho den khi refresh trang
//cu het 3 giay thi bao het gio
// setInterval(function(){
//     alert("phap vui ve");
// },3000);//3giây


//dem nguoc
var c=10;
var bom=setInterval(function(){
    alert(c); //hien thi so c
    c--;
    if(c<0){
        clearInterval(bom); //dung ham bom
    }
},1000);//1giây