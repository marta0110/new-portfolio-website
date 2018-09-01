let float1 = document.querySelector(".float1");
let float2 = document.querySelector(".float2");
let float4 = document.querySelector(".float4");
let float5 = document.querySelector(".float5");



window.onload = floatPortfolio();


function floatPortfolio() {

    float1.classList.add("moveFloat1");
    float2.classList.add("moveFloat2");
     float4.classList.add("moveFloat4");
     float5.classList.add("moveFloat5");
}



window.addEventListener("scroll",function(){
  var target = document.getElementsByTagName('float1');
    var target2 = document.getElementsByTagName('float2');
    
  if(window.pageYOffset > 1000){
   float1.src = "images/float_1_1.png"
   float2.src = "images/float_2_2.png"
  }
  else if(window.pageYOffset < 1000){
    changeImg()
  }
},false);

function changeImg() { 
    float1.src = "images/float1.png"
    float2.src = "images/float2.png"
    console.log("I'm here color red")
}


