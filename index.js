// function Mensaje(){
//     Swal.fire({
//         title: 'Bienvenido',
//         text: 'Hola, soy un mensaje de alerta',
//         icon: 'success',
//         confirmButtonText: 'Aceptar'
//     })

// }

function Mensaje() {
    //debe generar mensajes de amor random
    var mensajes = [
        'Te quiero mucho',
        'Eres lo mejor que me ha pasado',
        'Tu carita toda hermosa siempre me enamora cuando la veo',
        'Perdoname por ser tan celoso',
        'Disculpa si aveces te trato mal pero sabes que te quiero mucho',
        'Eres la mujer mas hermosa del mundo',
        'Quiereme mucho por favor',
        'Necesito verte para poder ser feliz',
        'Necesito que me quieras mucho',

    ]

    var apodos = [
        'Lisa',
        'Mi amor',
        'Mi vida',
        'Mi cielo',
        'Mi reina',
        'Mi princesa',
        'Mi hermosa',
        'Mi linda',
    ]

    //urls de imagenes de amor random de internet 

    var imagenes = [
        'https://i.pinimg.com/564x/71/8f/6c/718f6ca9ad0087a489c78fcb4a96dda3.jpg',
        'https://i.pinimg.com/564x/fc/bc/94/fcbc9479269f0e813343d8162117ad92.jpg',
        'https://i.pinimg.com/564x/45/c7/9e/45c79e28c83406f2c497eb2d91c5657b.jpg',
        'https://i.pinimg.com/564x/b2/3a/a9/b23aa93a9d91c4006bcd45c29cefbc51.jpg',
        'https://i.pinimg.com/originals/0f/d6/75/0fd675d90a3118a155a23de3528af17f.gif',
        'https://i.pinimg.com/564x/55/b6/5f/55b65f567a2366ea3506720075717027.jpg',
        'https://i.pinimg.com/564x/64/13/54/64135470209ecab50d471cdf9b432b54.jpg',
        'https://i.pinimg.com/564x/3d/f2/d5/3df2d5e91aa14362a75acca3d1518d44.jpg',
        'https://i.pinimg.com/736x/c5/a6/dd/c5a6dd150b4a2e794b3adbcf93d1dd69.jpg'



    ]


    var mensaje = mensajes[Math.floor(Math.random(3) * mensajes.length)];

    var apodo = apodos[Math.floor(Math.random(2) * apodos.length)];

    var imagen = imagenes[Math.floor(Math.random(1) * imagenes.length)];


    Swal.fire({
        title: 'Hola ' + apodo,
        text: mensaje,
        imageUrl:  imagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText: 'Aceptar :3'
      })


    
}