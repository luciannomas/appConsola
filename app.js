require('colors')

const { guardarBD, leerBD } = require('./helpers/guardarArchivo')
const { inquirerMenu,
        pausa2,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
 } = require('./helpers/inquirer')

const { mostrarMenu, pausa } = require('./helpers/mensajes')
const Tareas = require('./models/Tareas')

//console.clear()

const main = async () => {
    
    let opt = ''
    const tareas = new Tareas()

    if ( leerBD() ){
        const data = JSON.stringify(leerBD() )
        tareas.cargarTareasFromArray(leerBD())
        
    }

    await pausa2()

    do {
       //const opt = await mostrarMenu()
       //TODO: Funcion que imprime el menu
       opt = await inquirerMenu()
       console.log({ opt })
       //const tareas = new Tareas()
       //const tarea = new Tarea('buenas')
       //console.log(tareas);
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc) // crea las tareas 
                break;
            case '2':
                //console.log(tareas.getListadoArr);
                tareas.listadoCompleto( leerBD() )
                break;
            case '3':
                tareas.listarCompletado()
                break;
            case '4':
                tareas.listarNoCompletado()
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.getListadoArr)
                tareas.toggleCompletadas(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.getListadoArr)

                if( id !== '0'){
                    const res = await confirmar('Estas Seguro')
                    if(res){
                        tareas.borrarTarea(id)
                        console.log("Tarea borrada");
                    }
                }
                break;
        }


       //if (opt !=='0') await pausa() 
       guardarBD(tareas.getListadoArr)
       await pausa2()
        
        
    } while( opt !=='0' );



}

main()
