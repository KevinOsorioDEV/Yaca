import { error, log } from "node:console";

import { ColorTexto, FormatearMoneda, LeerArchivo } from "./herramientas.js";

import * as Calcular from "./calculoHorasRecargos.js";

function LaIguana() {
  const datosJson = LeerArchivo("datos.json");
  const horasJson = LeerArchivo("totalhoras.json");
  const ValorHora = Calcular.Hora(datosJson.salariobase, datosJson.dias);
  let HED = Calcular.HoraExtraDiurna(
    ValorHora,
    horasJson.HED,
    datosJson.porcentajes.HED
  );
  let HEN = Calcular.HoraExtraNocturna(
    ValorHora,
    horasJson.HEN,
    datosJson.porcentajes.HEN
  );
  let HEDDF = Calcular.HoraExtraDiurnaDF(
    ValorHora,
    horasJson.HEDDF,
    datosJson.porcentajes.HEDDF
  );
  let HENDF = Calcular.HoraExtraNocturnaDF(
    ValorHora,
    horasJson.HENDF,
    datosJson.porcentajes.HENDF
  );
  let RNO = Calcular.RecargoNocturnoOrdinario(
    ValorHora,
    horasJson.RNO,
    datosJson.porcentajes.RNO
  );
  let HDDF = Calcular.HoraDominicalyFestivaDiurna(
    ValorHora,
    horasJson.HDDF,
    datosJson.porcentajes.HDDF
  );
  let HNDF = Calcular.HoraDominicalyFestivaNocturna(
    ValorHora,
    horasJson.HNDF,
    datosJson.porcentajes.HNDF
  );
  let descuentos = Calcular.Deducciones(
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
