export function Hora(salario, dias) {
  var hora = salario / dias;
  return Math.ceil(hora);
}

export function HoraExtraDiurna(hora, totalHoras, porcentaje) {
  let horaextra = hora * porcentaje * totalHoras;
  return horaextra;
}

export function HoraExtraNocturna(hora, totalHoras, porcentaje) {
  let horaExtraNocturna = hora * porcentaje * totalHoras;
  return horaExtraNocturna;
}

export function HoraExtraDiurnaDF(hora, totalHoras, porcentaje) {
  let horaExtraDiurnaDF = hora * porcentaje * totalHoras;
  return horaExtraDiurnaDF;
}

export function HoraExtraNocturnaDF(hora, totalHoras, porcentaje) {
  let horaExtraNocturnaDF = hora * porcentaje * totalHoras;
  return horaExtraNocturnaDF;
}

export function RecargoNocturnoOrdinario(hora, totalHoras, porcentaje) {
  let recargoNocturnoOrdinario = hora * porcentaje * totalHoras;
  return recargoNocturnoOrdinario;
}

export function HoraDominicalyFestivaDiurna(hora, totalHoras, porcentaje) {
  let horaDominicalDiurna = hora * porcentaje * totalHoras;
  return horaDominicalDiurna;
}

export function HoraDominicalyFestivaNocturna(hora, totalHoras, porcentaje) {
  let ValorHoraDominicalFestivaNocturna = hora * porcentaje * totalHoras;
  return ValorHoraDominicalFestivaNocturna;
}

export function Deducciones(salario, pension, salud) {
  let deduccion = salario * pension + salario * salud;
  return deduccion;
}
