export default function validateCreateAccount(values:any){

    let errors:any = {};
    
    if(!values.name){
        errors.name = "El nombre es obligatorio"
    }
    
    if(!values.email){
        errors.email = "El email es obligatorio"
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email = "Email no valido"
    }
    
    if(!values.password){
        errors.password = "El password es obligatorio"
    }else if(values.password.length < 6){
        errors.password = "El password debe ser mayor a 6 caracteres"
    }
    
    return errors
    }