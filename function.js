

function changeColor(){

  var myheading=document.getElementById("myheading");

  var color=myheading.style.color;
  if(color == "blue"){

    myheading.style.color= "red"; 
    myheading.innerText= "ich bin rot"
  }
  else{
    myheading.style.color= "blue";
    myheading.innerText= "ich bin blau";
  }





}

