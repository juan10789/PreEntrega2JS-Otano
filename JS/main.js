let codigo = prompt(
  "ingrese el codigo del producto(Escriba ESC para finalizar la compra)"
);

let total = 0;
let precio = 0;

if (codigo == "001" || codigo == "002" || codigo == "003" || codigo == "004") {
  while (codigo !== "ESC") {
    switch (codigo) {
      case "001":
        precio = 57;
        break;
      case "002":
        precio = 28;
        break;
      case "003":
        precio = 120;
        break;
      case "004":
        precio = 70;
        break;
      default:
        precio = 0;
        break;
    }
    total = total + precio;
    codigo = prompt(
      "ingrese el codigo del producto(Escriba ESC para finalizar la compra"
    );
  }

  alert("el precio total a pagar es de $" + total);

  let formaDePago = prompt("Ingrese cantidad de cuotas(1/6/12)");
  let cuotas = 0;

  switch (formaDePago) {
    case "1":
      cuotas = 1;
      total = total;
      break;
    case "6":
      cuotas = 6;
      total = total * 1.2;
      break;
    case "12":
      cuotas = 12;
      total = total * 1.4;
      break;
    default:
      cuotas = 1;
      total = total;
      alert("numero de cuotas incorrecto - se realizara el pago en 1 cuota");
      break;
  }

  alert("El precio total a pagar es $" + total + " en " + cuotas + " cuotas");
  alert("GRACIAS POR SU COMPRA");
} else if (codigo == "ESC") {
  alert("COMPRA CANCELADA");
} else {
  codigo = prompt("CODIGO INVALIDO");
}
