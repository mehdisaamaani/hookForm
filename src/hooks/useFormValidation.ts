import { useState, ChangeEvent } from "react";

export interface FormField {
    name:string;
    lable:string;
    type: "text" | "email" | "number";
    required:boolean;
    validatior?:(value:string) => string | undefined;
}
type FormValue = Record<string, string>;
export function useFormValidation(field:FormField[]){
    const [value,setValue] = useState<FormValue>({})
    const [errors,setErrors] = useState<Record <string , string>>({})
    const [isSubmit,setIsSubmit] = useState<boolean>(false);


    const handleChangeValidationForms = (event:ChangeEvent<HTMLInputElement>)=>{
const {name,value} = event.target;
setValue((prevValue)=>({...prevValue,[name]:value}));
setErrors((prevError)=>({...prevError,[name]:""}))
    }

    const handleSubmitValidationForms = (event:any)=>{
        event.preventDefault()
        setIsSubmit(true)

        const newErrors : Record<string, string> = {}
        field.forEach((fields)=>{
            if(fields.required && !value[fields.name]){
                newErrors[fields.name] = `${fields.lable} نامعتبر`
            }
        })
        setErrors(newErrors)

        if(Object.keys(newErrors).length === 0){
            console.log(value,'error Value')
        }
        setIsSubmit(false)
    }
return {
    value,
    errors,
    handleChangeValidationForms,
    handleSubmitValidationForms,
    isSubmit
}
}