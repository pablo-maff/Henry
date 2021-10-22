/*
function capToFront(string) {
    upper = []
    lower = []
    for (let i = 0; string.length(); i++) {
        if string[i] === string[i].toUpperCase() {
            upper += string[i]
    } else {
          lower += string[i]
    }
  }
    return upper + lower
}





*/

function asAmirror(str) {

    let array = str.split(' ').map(function(letras) {
        array.split("".reverse().join(""))
    }).join(" ");
    return array
}

let to_rev = 'oit'

console.log(asAmirror(to_rev))


/*
function capicua(numero) {
  var numStr = numero.toString()
}


*/
