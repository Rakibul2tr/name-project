function focusfunc(f){
    f.style.background= "Yellow";
}
function blurfunc(f){
    f.style.background= "";
}
function inputfunc(element){
   let inpval = element.value;

   var test1 =document.getElementById('p1').innerHTML = inpval;
   p1.style.color = "blue";
   p1.style.fontSize = "22px";
   p1.style.fontFamily = 'Fredericka the Great';

   document.getElementById('p2').innerHTML = inpval;
   p2.style.color = "green";
   p2.style.fontSize = "20px";
   p2.style.fontFamily = 'Anton';

   document.getElementById('p3').innerHTML = inpval;
   p3.style.color = "bleck";
   p3.style.fontSize = "20px";
   p3.style.fontFamily = 'Lobster Two';

   document.getElementById('p4').innerHTML = inpval;
   p4.style.color = "tomato";
   p4.style.fontSize = "20px";
   p4.style.fontFamily = 'Tourney';

   document.getElementById('p5').innerHTML = inpval;
   p5.style.color = "brown";
   p5.style.fontSize = "20px";
   p5.style.fontFamily = 'Zen Tokyo Zoo';


   document.getElementById('p6').innerHTML = inpval;
   p6.style.color = "blueviolet";
   p6.style.fontSize = "20px";
   p6.style.fontFamily = 'Monoton';
}
