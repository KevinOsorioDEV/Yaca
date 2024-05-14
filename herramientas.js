import { readFileSync } from "node:fs";
import { error } from "node:console";

export function ColorTexto(str, codigo) {
  return `\x1b[${codigo}m${str}\x1b[0m`;
}

export function FormatearMoneda(valor) {
  const formatCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  const valorFormateado = formatCOP.format(valor);
  return valorFormateado;
}

export function LeerArchivo(ruta) {
  try {
    const datos = readFileSync(ruta);
    const contenidoJson = JSON.parse(datos);
    return contenidoJson;
  } catch (err) {
    error(`Se ha producido un error al leer el archivo ${err}`);
  }
}