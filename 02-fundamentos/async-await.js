// let getNombre = async () => {

//   return "Rodrigo";
// };

// console.log(getNombre());

let getNombre = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Rodrigo");
      }, 3000);
  });
};

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${nombre}`
}

// getNombre()
//   .then(nombre => {
//     console.log(nombre);
//   })
//   .catch(err => {
//     console.log("#### ASYNC ERROR ####", err);
//   });

saludo().then(msje => {
    console.log(msje);
})
