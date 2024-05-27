// Calcular edad para las opciones de viaje disponibles con TakeOff.

let edadUsuario;
let edadMinima;

do{
    edadUsuario = prompt("INGRESA TU EDAD");
    edadMinima = parseInt(edadUsuario);

    if (isNaN(edadMinima)){
        console.log("Por favor, ingrese un número");
    }
}while(isNaN(edadMinima));

if (edadMinima >= 18){
    console.log("¡¡Eres mayor para viajar con takeOff!! :)");
    
    let opcionDeViaje;
    do{
        opcionDeViaje = prompt("Ingresa la opcion de viaje que te interesa: Snow/Wake/Surf").toLowerCase();
        if(opcionDeViaje !=="snow" && opcionDeViaje !=="wake" && opcionDeViaje !=="surf"){
            alert("Opción no válida. Por favor, elige entre Snow, Wake o Surf")
            console.log("Por favor, ingrese alguna de las 3 opciones de viaje");
        }
    }while (opcionDeViaje !== "snow" && opcionDeViaje !== "wake" && opcionDeViaje !== "surf");

    console.log("¡Gracias! A la brevedad te compartimos la información necesaria del viaje seleccionado.");

}else if (edadMinima >= 15 && edadMinima <= 17){
    let permisoAutorizado = prompt("¿Tienes el permiso de tus padres para viajar?").toLowerCase();
    if (permisoAutorizado === "si") {
        console.log("¡Tenemos una opción junior de viaje para ti! Comunícate con nosotros a través de takeOff@gmail.com");
    } else {
        console.log("¡Pídele permiso a tus padres y comunícate con nosotros!");
    }
} else {
    console.log("Lo sentimos, no cumples con la edad mínima requerida para viajar con TakeOff.");
}