//callbacks 

// No es mas que una funcion de otra
// Responde a el tiempo en que se ejecuta 

// setTimeout(function(){
//     console.log("hola mundo");
// }, 3000)

// setTimeout(() => {
//     console.log("informatica");
// }, 2000);

const getUserById = (id, callback) =>{

    const usuario ={
        id,
        nombre: "Jairo"
    }
// if (id === 20) {
//     callback(`el usuario con id: ${id}, no existe en la db`);
// } else {
//     console.log(null, usuario);
// }

id === 20
    ?  callback(`el usuario con id: ${id}, no existe en la db`)
    :  callback(null, usuario);

}

getUserById(20, (err, usuario) =>{
    if (err) {
        return console.log(err);
    }
    console.log("usuario en la base de datos "+ usuario)
});