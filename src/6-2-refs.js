/**
 * Objetos con referencia.
 */
let propiedades = {
  nombre: "Andrew",
  curso: "Esenciales de JavaScript",
};

function tomarCurso(propiedades) {
  propiedades.curso = "Phyton";
  console.log(
    `Hola! ${propiedades.nombre}, has tomado el curso de ${propiedades.curso}`
  );
}

/**
 * Playground.
 */
tomarCurso(propiedades);

console.log(propiedades.curso);
