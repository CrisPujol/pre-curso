// JavaScript Document


// ENCRIPTA EL MENSAJE


var missatge="SKYLAB";
var missatge2=[];

for(var i=0; i<3;i++){

  missatge.split(",");
  missatge2.push(missatge[i]) + missatge2.push(missatge[i+3]);

}


console.log(missatge2);
console.log(missatge2.join(""));




// DESENCRIPTA EL MENSAJE

var missatge="SLKAYB";
var missatge2=[];

for(var i=0; i<missatge.length; i+=2){

   missatge.split(",");
   missatge2.push(missatge[i])

 }

 for(var i=1; i<missatge.length; i+=2){

   missatge.split(",");
   missatge2.push(missatge[i])
 }


console.log(missatge2);
console.log(missatge2.join(""));
