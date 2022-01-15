require('colors')

const mostrarMenu = () => {
   
    return new Promise ( resolve => {
        console.clear()

        console.log();
        console.log("===========================".green);
        console.log(" Seleccione una Opción ".red);
        console.log("===========================\n".green);
    
        console.log("1 ".green + "Crear una tarea");
        console.log("2 ".green + "Listar tareas");
        console.log("3 ".green + "Listar Tareas complementarias");
        console.log("4 ".green + "Listar tareas pendientes");
        console.log("5 ".green + "Completar tareas");
        console.log("6 ".green + "Borrar tarea");
        console.log("0 ".green + "Salir")
    
        //Declaro
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Seleccione una Opción: ', (o) => {
            //console.log({o});
            readLine.close();
            resolve(o)
        })

    })

}

const pausa = () => {
    
    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
       readLine.question('Presione ENTER para continuar', () => { 
            readLine.close();
            resolve()
       })

    })
}

module.exports = { mostrarMenu , pausa  }