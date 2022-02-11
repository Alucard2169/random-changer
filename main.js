
const changerButton = document.getElementById("changer");

changerButton.addEventListener('click', function () {
    changeColor();
    
})


function changeColor() {
   let  color1 = Math.floor(Math.random() * 256);
   let  color2 = Math.floor(Math.random() * 256);
   let color3 = Math.floor(Math.random() * 256);
    let color = `rgb(${color1},${color2},${color3})`;


    document.body.style.backgroundColor = color;
    document.getElementById("color").style.background = color;
    rgbToHex(color1,color2,color3);

}


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(color1, color2, color3) {
    let current_color = "#" + componentToHex(color1) + componentToHex(color2) + componentToHex(color3);
    document.getElementById("color").innerHTML = current_color;
}
