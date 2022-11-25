export default function validateNotes(values:any){

    let errors:any = {};
    
    if(!values.titulo){
        errors.titulo = "El titulo es obligatorio"
    }
    
    if(!values.tipo){
        errors.tipo = "El tipo es obligatorio"
    }
    
    
    return errors
    }