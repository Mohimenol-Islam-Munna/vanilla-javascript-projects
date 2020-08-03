var colorArray = ["blueviolet", "palegreen", "salmon", "indigo","blue", "red", "green"];
var color = document.getElementById('color');
var randNumber = Math.floor(Math.random());


function colorPicker(){

    if(randNumber < colorArray.length){
        
        console.log("color changed : "+ randNumber);
        color.innerHTML= colorArray[randNumber];

        changeColor = document.getElementById("content");

        changeColor.style.backgroundColor =  colorArray[randNumber];

        randNumber++;
    }
    else{

        color.innerHTML= "rgb(188, 143, 143)";
        changeColor.style.backgroundColor =  "rgb(188, 143, 143)";
        console.log("new turn");
        randNumber = 0;

    }

}


