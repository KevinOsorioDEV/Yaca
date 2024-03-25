import { error, log } from "node:console";
import { readFileSync } from "node:fs";

function LeerArchivo(ruta) {
  try {
    const datos = readFileSync(ruta);
    const contenidoJson = JSON.parse(datos);
    return contenidoJson;
  } catch (err) {
    error(`Se ha producido un error al leer el archivo ${err}`);
  }
}
function Hora(salario, dias) {
  var hora = salario / dias;
  return Math.ceil(hora);
}

function HoraExtraDiurna(hora, totalHoras, porcentaje) {
  let horaextra = hora * porcentaje * totalHoras;
  return horaextra;
}

function HoraExtraNocturna(hora, totalHoras, porcentaje) {
  let horaExtraNocturna = hora * porcentaje * totalHoras;
  return horaExtraNocturna;
}

function HoraExtraDiurnaDF(hora, totalHoras, porcentaje) {
  let horaExtraDiurnaDF = hora * porcentaje * totalHoras;
  return horaExtraDiurnaDF;
}

function HoraExtraNocturnaDF(hora, totalHoras, porcentaje) {
  let horaExtraNocturnaDF = hora * porcentaje * totalHoras;
  return horaExtraNocturnaDF;
}

function RecargoNocturnoOrdinario(hora, totalHoras, porcentaje) {
  let recargoNocturnoOrdinario = hora * porcentaje * totalHoras;
  return recargoNocturnoOrdinario;
}

function HoraDominicalyFestivaDiurna(hora, totalHoras, porcentaje) {
  let horaDominicalDiurna = hora * porcentaje * totalHoras;
  return horaDominicalDiurna;
}

function HoraDominicalyFestivaNocturna(hora, totalHoras, porcentaje) {
  let ValorHoraDominicalFestivaNocturna = hora * porcentaje * totalHoras;
  return ValorHoraDominicalFestivaNocturna;
}

function Deducciones(salario, pension, salud) {
  let deduccion = salario * pension + salario * salud;
  return deduccion;
}

function LaIguana() {
  const datosJson = LeerArchivo("datos.json");
  const horasJson = LeerArchivo("totalhoras.json");
  const ValorHora = Hora(datosJson.salariobase, datosJson.dias);
  let HED = HoraExtraDiurna(
    ValorHora,
    horasJson.HED,
    datosJson.porcentajes.HED
  );
  let HEN = HoraExtraNocturna(
    ValorHora,
    horasJson.HEN,
    datosJson.porcentajes.HEN
  );
  let HEDDF = HoraExtraDiurnaDF(
    ValorHora,
    horasJson.HEDDF,
    datosJson.porcentajes.HEDDF
  );
  let HENDF = HoraExtraNocturnaDF(
    ValorHora,
    horasJson.HENDF,
    datosJson.porcentajes.HENDF
  );
  let RNO = RecargoNocturnoOrdinario(
    ValorHora,
    horasJson.RNO,
    datosJson.porcentajes.RNO
  );
  let HDDF = HoraDominicalyFestivaDiurna(
    ValorHora,
    horasJson.HDDF,
    datosJson.porcentajes.HDDF
  );
  let HNDF = HoraDominicalyFestivaNocturna(
    ValorHora,
    horasJson.HNDF,
    datosJson.porcentajes.HNDF
  );
  let descuentos = Deducciones(
    datosJson.salariobase,
    datosJson.deducciones.pension,
    datosJson.deducciones.salud
  );
  let salarioBase = datosJson.salariobase;
  let auxilioTransporte = datosJson.auxilios.transporte;
  let TotalHorasRecargos = HED + HEN + HEDDF + HENDF + RNO + HDDF + HNDF;
  let netoPagar =
    salarioBase + auxilioTransporte + TotalHorasRecargos - descuentos;
  log(`Total Horas Extra: ${HED}`);
  log(`Total Horas Extra Nocturna: ${HEN}`);
  log(`Total Horas Extra Diurna DyF: ${HEDDF}`);
  log(`Total Horas Extra Nocturna DyF: ${HENDF}`);
  log(`Total Recargos Nocturno Ordinario: ${RNO}`);
  log(`Total Horas Dominical y Festiva Diurna: ${HDDF}`);
  log(`Total Horas Dominical y Festiva Nocturna: ${HNDF}`);
  log(`Total Horas y Recargos: ${TotalHorasRecargos}`);
  log(`Auxilio de transporte: ${auxilioTransporte}`);
  log(
    `\x1b[31m%s\x1b[0m`,
    `Total deducciones en salud y pension: ${descuentos}`
  );
  log(`NETO A PAGAR -> \x1b[32m${netoPagar.toLocaleString()}\x1b[0m `);
}

LaIguana();
