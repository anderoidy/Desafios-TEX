console.log("Desafio-1-Js")


function pegaNumeroAleat()  {
    var array = [0, 0, 0]
    
    for(i = 0; i<3; i++) {
        array[i] = parseInt(Math.random() * 3) + 1
    }
    return array
}
console.log(pegaNumeroAleat())



// function gerar()
// {
//   var resp = document.getElementById('resp');
//   resp.innerHTML = Math.floor(3* Math.random() + 1);
// }



// function numAleatorio() {
   
// let numero
//     numero = parseInt(Math.random() * 10)
//     return numero
// }

// console.log(numAleatorio())

