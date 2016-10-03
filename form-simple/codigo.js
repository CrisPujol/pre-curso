




function rebre(){

    var vehicle=document.getElementsByName("transport");
    var vehicle_ok="";
    for(var i=0; i<vehicle.length; i++){
        if(vehicle[i].checked == true){
        vehicle_ok = vehicle[i].value;
      }
    }

    console.log(document.getElementById("nom").value + " " + document.getElementById("cognom").value);

    console.log("Hola " + document.getElementById("nom").value + " " + document.getElementById("cognom").value + ". Tens " +
    document.getElementById("edat").value + "anys, vius a " + document.getElementById("ciutat").value + " i la teva feina és "
    + document.getElementById("job").value + ". T'agrada anar amb " + vehicle_ok);

    console.log("Has escrit " + document.getElementById("text").value.length + " caracters");

    document.getElementById("disabled-field").value="We have all valors";


    return false;
}

function colorBlau(){
    document.getElementById("nom").style.color="blue";
    document.getElementById("cognom").style.color="blue";
    document.getElementById("edat").style.color="blue";
    document.getElementById("ciutat").style.color="blue";
    document.getElementById("job").style.color="blue";
}

function colorVerd(){
    document.getElementById("nom").style.color="green";
    document.getElementById("cognom").style.color="green";
    document.getElementById("edat").style.color="green";
    document.getElementById("ciutat").style.color="green";
    document.getElementById("job").style.color="green";
}





  
