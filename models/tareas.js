const Tarea = require("./tarea")

class Tareas {
    
    _listado = {}

    constructor(){
        this._listado = {} // Lo inicializo
    }

    get getListadoArr(){
        const listado = []

        //TODO: retorna un array de string => Object.Keys()
        Object.keys(this._listado).forEach( (key) => {
            const tarea = this._listado[key]
            listado.push(tarea) // lo guardo en el array
            //console.log(key) 
        })
           
        return listado
    }

    cargarTareasFromArray( tareas = [] ){
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea ;
        })

    } 

    crearTarea (desc = '' ){
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea

    }

    listadoCompleto ( data ) {

        // o data    
        this.getListadoArr.forEach( (e, i ) => { 
           
           const { completadoEn } = e;
           //console.log(e);
           const estado = (completadoEn) ? 'Completado'.green : "Pendiente".red
           console.log(`${i + 1}`.green + "  Descripcion:  " +  e.desc.green + ' :: ' + estado );
           
        })
    }

    listarCompletado(){
        let cont = 1

        this.getListadoArr.forEach( (e, i ) => { 
           
            const { completadoEn } = e;
            //const estado = (completadoEn == null) ? 'Completado'.green : "Pendiente".red
            
            
            if( completadoEn != null ){
                console.log("Tareas:  " + e.desc.green );
                cont++ 
            }

         })

         if (cont == 1){
            console.log('No hay tareas completadas');
         } 
            
    }

    listarNoCompletado(){
        let cont = 1

        this.getListadoArr.forEach( (e, i ) => { 
           
            const { completadoEn } = e;
            //const estado = (completadoEn == null) ? 'Completado'.green : "Pendiente".red
            
            
            if( completadoEn == null ){
                console.log("Tareas Incompletas:  " + e.desc.green );
                cont++ 
            }

         })

         if (cont == 1){
            console.log('No hay tareas incompletadas');
         } 
            
    }

    borrarTarea ( id = '') {
        if ( this._listado[id] ){
            delete this._listado[id]
        }
    }

    toggleCompletadas ( ids = [] ){

        ids.forEach (id => {
            const tarea = this._listado[id]
           
            if( ! tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.getListadoArr.forEach ( tarea => {

            if( ! ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }
        })

    }




}

module.exports = Tareas