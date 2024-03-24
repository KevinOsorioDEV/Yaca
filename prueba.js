import { error, log } from "node:console";
import { readFileSync } from "node:fs";

function LeerArchivo() {
  try {
    const datos = readFileSync("datos.json");
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

function HoraExtraDiurna(hora) {
  const porcentajeHoraExtra = 1.25;
  let horaextra = hora * porcentajeHoraExtra;
  return horaextra;
}

function HoraExtraNocturna(hora) {
  const porcentajeHoraExtra = 1.75;
  let horaExtraNocturna = hora * porcentajeHoraExtra;
  return horaExtraNocturna;
}

function HoraExtraDiurnaDF(hora) {
  const porcentajeHoraExtra = 2;
  let horaExtraDiurnaDF = hora * porcentajeHoraExtra;
  return horaExtraDiurnaDF;
}

function HoraExtraNocturnaDF(hora) {
  const porcentajeHoraExtra = 2.5;
  let horaExtraNocturnaDF = hora * porcentajeHoraExtra;
  return horaExtraNocturnaDF;
}

function RecargoNocturnoOrdinario(hora) {
  const porcentajeRecargo = 0.35;
  let recargoNocturnoOrdinario = hora * porcentajeRecargo;
  return recargoNocturnoOrdinario;
}

function HoraDominicalyFestivaDiurna(hora) {
  const PorcentajeHoraDominicalDiurna = 1.75;
  let horaDominicalDiurna = hora * PorcentajeHoraDominicalDiurna;
  return horaDominicalDiurna;
}

function HoraDominicalyFestivaNocturna(hora) {
  const PorcentajeHoraDominicalNocturna = 2.1;
  let ValorHoraDominicalFestivaNocturna =
    hora * PorcentajeHoraDominicalNocturna;
  return ValorHoraDominicalFestivaNocturna;
}

function LaIguana() {
  const datosJson = LeerArchivo();
  const ValorHora = Hora(datosJson.salariobase, datosJson.dias);
  let HED = HoraExtraDiurna(ValorHora);
  let HEN = HoraExtraNocturna(ValorHora);
  let HEDDF = HoraExtraDiurnaDF(ValorHora);
  let HENDF = HoraExtraNocturnaDF(ValorHora);
  let RNO = RecargoNocturnoOrdinario(ValorHora);
  let HDFD = HoraDominicalyFestivaDiurna(ValorHora);
  let HDFN = HoraDominicalyFestivaNocturna(ValorHora);

  let Total = HED + HEN + HEDDF + HENDF + RNO + HDFD + HDFN;

  log("Valor Hora Extra: ", HoraExtraDiurna(ValorHora));
  log("Valor Hora Extra Nocturna: ", HoraExtraNocturna(ValorHora));
  log("Valor Hora Extra Diurna DyF: ", HoraExtraDiurnaDF(ValorHora));
  log("Valor Hora Extra Nocturna DyF: ", HoraExtraNocturnaDF(ValorHora));
  log(
    "Valor Recargo Nocturno Ordinario: ",
    RecargoNocturnoOrdinario(ValorHora)
  );
  log(
    "Valor Hora Dominical y Festiva Diurna: ",
    HoraDominicalyFestivaDiurna(ValorHora)
  );
  log(
    "Valor Hora Dominical y Festiva Nocturna: ",
    HoraDominicalyFestivaNocturna(ValorHora)
  );

  log(`Total: ${Total}`);
}

LaIguana();
