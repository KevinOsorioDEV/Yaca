export function Hora(salario, dias) {
  var hora = salario / dias;
  return Math.ceil(hora);
}

export function Deducciones(salario, pension, salud) {
  let deduccion = salario * pension + salario * salud;
  return deduccion;
}

export function CalcularMonto(valorHora, totalHora, porcentaje) {
  let valorTotalHora = valorHora * porcentaje * totalHora;
  return valorTotalHora;
}
