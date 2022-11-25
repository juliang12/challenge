import { setNoteToEdit } from 'actions/actionsNotes'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


interface Errors{
    name?: string
    password?: string
    email?: string
    titulo?: string
    tipo?: string
    descripcion?: string
}

const useForm = (initialState:any, validate:any, fn:any) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState<Errors>({})
    const [submit, setSubmit] = useState(false)


    useEffect(() => {
    if(submit){
        const noErrors = Object.keys(errors).length === 0;
        if(noErrors){
            fn()   
        }
        setSubmit(false)

    }
    dispatch(setNoteToEdit(null))
    }, [errors])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any )=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const errorValidations = validate(values);
        setErrors(errorValidations)
        setSubmit(true)
       

    }

    const reset = ()=>{
      
        setValues(initialState)
        
    }
    
  return {
    values,
    setValues,
    errors,
    submit,
    handleChange,
    handleSubmit,
    reset
  }
}

export default useForm