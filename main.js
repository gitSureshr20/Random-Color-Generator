let hexContainer = document.querySelector(".hexContainer");
let hexValue = document.querySelector(".hexValue");
let hexValueChange = document.querySelector(".hexValueChange");
let hexValueCopy = document.querySelector(".hexValueCopy");

hexValueChange.addEventListener("click", () => {
  let hexCharacter = "0123456789ABCDEF";
  let hexaoutput = "";
  for (let i = 0; i < 6; i++) {
    let characterLength = hexCharacter.length;
    hexaoutput += hexCharacter.charAt(
      Math.floor(Math.random() * characterLength)
    );
  }
  hexValue.textContent = `#${hexaoutput}`;
  hexValueChange.style.color=`#${hexaoutput}`;
  hexValue.style.color=`#${hexaoutput}`;
  hexValueCopy.style.color=`#${hexaoutput}`;
  hexContainer.style.background=`#${hexaoutput}`;
  navigator.clipboard.writeText(`#${hexaoutput}`);
});



// Rgb color

let rgbContainer = document.querySelector(".rgbContainer");
let rgbValue = document.querySelector(".rgbValue");
let rgbValueChange = document.querySelector(".rgbValueChange");
let rgbValueCopy = document.querySelector(".rgbValueCopy");


rgbValueChange.addEventListener('click',()=>{
  let red = document.getElementById("red").value;
    red=red<10?"00"+red:red<100?"0"+red:red;
  let green = document.getElementById("green").value;
  green=green<10?"00"+green:green<100?"0"+green:green;
  let blue = document.getElementById("blue").value;
  blue=blue<10?"00"+blue:blue<100?"0"+blue:blue;
  console.log(`rgb(${red},${green},${blue})`)
  // let changeColor = 0;
  // changeColor += 
  let finalColor = `rgb(${red},${green},${blue})`;
  rgbContainer.style.background=finalColor;
  rgbValue.textContent=finalColor;
  navigator.clipboard.writeText(finalColor);
})