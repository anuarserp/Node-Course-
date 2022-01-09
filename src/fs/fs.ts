import fs from 'fs';

const leer = (ruta: string, callback?: () => void) => {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  });
};

const escribir = (ruta: string, contenido: string, callback?: () => void) => {
  fs.writeFile(ruta, contenido, (err) => {
    err ? console.error(new Error('Bad')) : console.log('Se ha escrito');
  });
};

escribir(__dirname + '/fs/hello.txt', 'Esto viene de la funcion escribir 1');
leer(__dirname + '/fs/hello.txt');
escribir(__dirname + '/fs/hello.txt', 'Esto viene de la funcion escribir 2');
