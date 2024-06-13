// Calcular edad para las opciones de viaje disponibles con TakeOff.

// INCIO PRIMERA ENTREGA COMENTADA
/*
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
FIN PRIMERA ENTREGA*/


//SEGUNDA PRE-ENTREGA
class Trips{
    constructor(trip, descripcion, precio, fecha){
        this.trip = trip;
        this.descripcion = descripcion;
        this.precio = precio;
        this.fecha = fecha;
    }
}

const VIAJES = [
    new Trips(  "Surftrips Chapadmalal", 
                "Hospedaje en TakeOFF House - Desayuno, Almuerzo y Cena(Experiencia gourmet) - Clases de surf y Yoga (Incluye Equipos) - Música en vivo - Fogón - Traslado",
                "300 USD", 
                "12 al 14 de febrero/3 días y 3 noches - 26 al 28 de febrero/3 días y 3 noches"
    ),
    new Trips(  "TakeOFF Bariloche",
                "7 días y 7 noches en la TakeOFF Snow House - Desayuno y Cena gourmet - Equipos y pases (optativos) - Transfer in-out al aeropuerto - Jacuzzi - After ski y música en vivo - Coaching de montaña",
                "A partir de 1100 USD y 2000 USD (dependiendo la fecha y habitación)",
                "6/7 al 27/7 - 7/9 al 21/9"
    ),
    new Trips(  "Wake Circuito",
                "Aventura de 3 días en nuestro circuito privado de Córdoba - Desayuno, Almuerzo y Cena gourmet - Equipos incluidos - Música en vivo - Traslado incluido",
                "350 USD",
                "2 al 5 de enero - 10 al 13 de enero"
    )
];

const CONTENEDOR_TRIPS = document.getElementById('containerTrips');

function estructuraTrips(viaje){
    viaje.forEach(trips =>{
        const card = document.createElement('div');
        card.classList.add('contenedor-trips');
        card.innerHTML = `
                        <h2 class="h2-viajes">${trips.trip}</h2>
                        <p class="p-uno">${trips.descripcion}</p>
                        <p class="p-uno">${trips.precio}</p>
                        <p class="p-uno">${trips.fecha}</p>
                        `; 
        CONTENEDOR_TRIPS.appendChild(card);      
    })
}

estructuraTrips(VIAJES);
//FIN SEGUNDA ENTREGA