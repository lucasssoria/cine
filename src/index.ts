let cantidadButacas = Number(prompt("¿Cuantas butacas tiene su sala de cine?: "));
let butacas: boolean[] = new Array(cantidadButacas);
let butacasOcupadas: number = 0;
let butacasDesocupadas: number = 0;

// se le asigna a 0 el valor de true
for (let i = 0; i < cantidadButacas; i++) {
  butacas[i] = Math.random() < 0.5;
  if (butacas[i] === true) {
    butacasOcupadas = butacasOcupadas + 1;
  } else {
    butacasDesocupadas = butacasDesocupadas + 1;
  }
}

console.log("Total butacas: ", cantidadButacas);
console.log("Butacas ocupadas: ", butacasOcupadas);
console.log("Butacas desocupadas: ", butacasDesocupadas);
