let cine = Number(prompt("¿Cuantas butacas tiene su sala de cine?: "));
let butacas: number[] | boolean[] = new Array(cine);
// se le asigna a 0 el valor de true
for (let i = 0; i < cine; i++) {
  butacas[i] = Math.floor(Math.random() * 2);
  if (butacas[i] === 0) {
    butacas[i] = true;
  } else {
    butacas[i] = false;
  }
}
console.log(butacas);
