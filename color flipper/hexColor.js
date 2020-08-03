const hexValue = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

const color = document.getElementById('color');

var changeColor = document.getElementById('content');

var color1, color2, color3;



function colorPicker(){

    var randNumber1 = Math.floor(Math.random() * hexValue.length);
    var randNumber2 = Math.floor(Math.random() * hexValue.length);
    var randNumber3 = Math.floor(Math.random() * hexValue.length);
    var randNumber4 = Math.floor(Math.random() * hexValue.length);
    var randNumber5 = Math.floor(Math.random() * hexValue.length);
    var randNumber6 = Math.floor(Math.random() * hexValue.length);
    
    
    console.log("color changed : " +"#"+randNumber1 + randNumber2 + randNumber3);

    

    // // check the randNumber1 values 
    // if(hexValue[randNumber1] <= 9){
    //     color1 = "0"+hexValue[randNumber1]; 
    // } else{
    //     color1 = hexValue[randNumber1];
    // } 

    // // check the randNumber1 values 
    // if(hexValue[randNumber2] <= 9){
    //     color2 = "0"+hexValue[randNumber2]; 
    // } else{
    //     color2 = hexValue[randNumber2];
    // }
    
    // // check the randNumber1 values 
    // if(hexValue[randNumber3] <= 9){
    //     color3 = "0"+hexValue[randNumber3]; 
    // } else{
    //     color3 = hexValue[randNumber3];
    // }

    color1 = hexValue[randNumber1];
    color2 = hexValue[randNumber2];
    color3 = hexValue[randNumber3];
    color4 = hexValue[randNumber4];
    color5 = hexValue[randNumber5];
    color6 = hexValue[randNumber6];

    var newColor = "#"+color1+color2+color3+color4+color5+color6;
    

    color.innerHTML = newColor;
    changeColor.style.backgroundColor = newColor;
}