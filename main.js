import { error, log } from "node:console";

import { ColorTexto, FormatearMoneda, LeerArchivo } from "./herramientas.js";

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
  log(
    `TOTAL HORAS EXTRAS DIURNAS -----------------> ${ColorTexto(
      FormatearMoneda(HED),
      "33"
    )}`
  );
  log(
    `TOTAL HORAS EXTRAS NOCTURNAS ---------------> ${ColorTexto(
      FormatearMoneda(HEN),
      "33"
    )}`
  );
  log(
    `TOTAL HORAS EXTRAS DIURNA DF ---------------> ${ColorTexto(
      FormatearMoneda(HEDDF),
      "33"
    )}`
  );
  log(
    `TOTAL HORAS EXTRAS NOCTURNA DF -------------> ${ColorTexto(
      FormatearMoneda(HENDF),
      "33"
    )}`
  );
  log(
    `TOTAL RECARGOS NOCTURNO ORDINARIOS ---------> ${ColorTexto(
      FormatearMoneda(RNO),
      "33"
    )}`
  );
  log(
    `TOTAL HORAS DOMINICAL Y FESTIVAS DIURNAS ---> ${ColorTexto(
      FormatearMoneda(HDDF),
      "33"
    )}`
  );
  log(
    `TOTAL HORAS DOMINICAL Y FESTIVAS NOCTURNAS -> ${ColorTexto(
      FormatearMoneda(HNDF),
      "33"
    )}`
  );
  log(
    `TOTAL HORAS EXTRAS Y RECARGOS --------------> ${ColorTexto(
      FormatearMoneda(TotalHorasRecargos),
      "32"
    )}`
  );
  log(
    `AUXILIO DE TRANSPORTE ----------------------> ${ColorTexto(
      FormatearMoneda(auxilioTransporte),
      "32"
    )}`
  );
  log(
    `TOTAL SALUD Y PENSION ----------------------> ${ColorTexto(
      FormatearMoneda(descuentos),
      "31"
    )}`
  );
  log(
    `NETO A PAGAR ----------------------------->  ${ColorTexto(
      FormatearMoneda(netoPagar),
      "32"
    )}`
  );
}

LaIguana();
