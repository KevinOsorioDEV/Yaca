import { error, log } from "node:console";

import { ColorTexto, FormatearMoneda, LeerArchivo } from "./herramientas.js";

import * as Calcular from "./calculoHorasRecargos.js";

function LaIguana() {
  const datosJson = LeerArchivo("datos.json");
  const horasJson = LeerArchivo("totalhoras.json");
  const ValorHora = Calcular.Hora(datosJson.salariobase, datosJson.dias);
  let HED = Calcular.CalcularMonto(
    ValorHora,
    horasJson.HED,
    datosJson.porcentajes.HED
  );
  let HEN = Calcular.CalcularMonto(
    ValorHora,
    horasJson.HEN,
    datosJson.porcentajes.HEN
  );
  let HEDDF = Calcular.CalcularMonto(
    ValorHora,
    horasJson.HEDDF,
    datosJson.porcentajes.HEDDF
  );
  let HENDF = Calcular.CalcularMonto(
    ValorHora,
    horasJson.HENDF,
    datosJson.porcentajes.HENDF
  );
  let RNO = Calcular.CalcularMonto(
    ValorHora,
    horasJson.RNO,
    datosJson.porcentajes.RNO
  );
  let HDDF = Calcular.CalcularMonto(
    ValorHora,
    horasJson.HDDF,
    datosJson.porcentajes.HDDF
  );
  let HNDF = Calcular.CalcularMonto(
    ValorHora,
    horasJson.HNDF,
    datosJson.porcentajes.HNDF
  );

  let salarioBase = datosJson.salariobase;
  let auxilioTransporte = datosJson.auxilios.transporte;
  let TotalHorasRecargos = HED + HEN + HEDDF + HENDF + RNO + HDDF + HNDF;

  let descuentos = Calcular.Deducciones(
    salarioBase + TotalHorasRecargos,
    datosJson.deducciones.pension,
    datosJson.deducciones.salud
  );

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
    `TOTAL DEVENGADO ----------------------------> ${ColorTexto(
      FormatearMoneda(salarioBase + auxilioTransporte + TotalHorasRecargos),
      "36"
    )}`
  );
  log(
    `DEDUCCIONES DE SALUD Y PENSION -------------> ${ColorTexto(
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
