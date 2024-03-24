import fs from "fs/promises";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);

async function LeerArchivo() {
  try {
    const ruta = "datos.json";
    console.log("Leyendo archivo JSON...");
    const datos = await readFileAsync("datos.json", "utf-8");
    console.log("Archivo JSON leído con éxito");
    const contenidoJson = JSON.parse(datos);
    return contenidoJson;
  } catch (error) {
    throw new Error(`Error al leer archivo JSON: ${error.message}`);
  }
}

async function LaIguana() {
  try {
    const contenJson = await LeerArchivo();
    if (contenJson && contenJson.nombre) {
      console.log("Nombre:", contenJson.nombre);
    } else {
      console.log("El archivo JSON no tiene la propiedad 'nombre'.");
    }
  } catch (error) {
    console.error(error.message);
  }
  nsole.error(error);
}

LaIguana();
