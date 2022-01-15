const fs = require('fs');

//Global const
const archivo = './dbtest/data.json'

const guardarBD = ( data ) => {

    //Graba data en la ruta especifica
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerBD = () => {
    //TODO: Si no existe el archivo
    if ( ! fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync ( archivo, { encoding: 'utf-8'})
    const data = JSON.parse(info)
    //console.log(data);

    return data

}


module.exports = { guardarBD, leerBD }