function inverterString(str) {
  let invertedString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    invertedString += str[i]
  }
  return invertedString
}

let stringOriginal = prompt("Digite uma string para inverter:")
let stringInvertida = inverterString(stringOriginal)

console.log("String original:", stringOriginal)
console.log("String invertida:", stringInvertida)
