const inquirer = require('inquirer')
require('colors')


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: "¿ Que desea hacer ?",
        choices: [
            {
                value: '1',
                name: '1.'.yellow + 'Crear Tarea'
            },
            {
                value: '2',
                name: '2.'.yellow +'Listar Tarea'
            },
            {
                value: '3',
                name: '3.'.yellow + 'Tareas Completadas'
            },
            {
                value: '4',
                name: '4.'.yellow + 'Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5.'.yellow + 'Completar tarea(s)'
            },
            {
                value: '6',
                name: '6.'.yellow + 'Borrar Tarea'
            },
            {
                value: '0',
                name: '0.'.yellow +' Salir'
            },
       ]   
    },

]

const inquirerMenu = async () => {

    console.clear()

    console.log();        
    console.log("===========================".green);
    console.log(" Seleccione una Opción ".white);
    console.log("===========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion
   

}

const pausa2 = async () => {

    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: "¿" + "Enter".green + " para continuar ? "    
        }
    
    ]

    console.log('\n');
    const { enter } = await inquirer.prompt(pregunta)
    return enter


}

const leerInput = async (message) => {
    const question = [
    {
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if( value.length === 0) {
                return 'Por favor Ingrese un valor'
            }
            return true;
        }
    }
   ]

   const { desc } = await inquirer.prompt(question)
   return desc 



}

const listadoTareasBorrar = async (tareas = []) => {

    //map permite manipular la infomacion del objeto.
    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }

    } )

    //TODO: Metodo que añade elemento al inicio del array
    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar'
    })
    
    const questions = {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }

    const { id } = await inquirer.prompt(questions)
    return id

}

const confirmar = async ( message ) => {
    
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question)
    return ok 
}

const mostrarListadoChecklist = async ( tareas = []) => {
    
    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }

    } )

    
    const questions = {
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }

    const { ids } = await inquirer.prompt(questions)
    return ids
}




module.exports = { inquirerMenu, pausa2, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist  }

