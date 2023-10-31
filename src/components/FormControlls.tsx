import React from 'react'
import {FormField, useFormValidation} from '../hooks/useFormValidation'
const fields: FormField[] =[
    {name:'name',lable:"label",type:'text',required:true},
    {
        name:'email',
        lable:'Email',
        type:'email',
        required:true,
        validatior:(value)=>{
            if(!value.includes("@")){
                return 'فرمت ایمیل ایراد دارد'
            }
            return undefined
        }
    },
    {name:'firstName',lable:'firstName', type:'text',required:false}
]

const FormControlls = () => {

    const {
        value,
        errors,
        handleChangeValidationForms,
        handleSubmitValidationForms,
        isSubmit
    } = useFormValidation(fields);
  return (
  <form onSubmit={handleSubmitValidationForms}>
   <div> 
    {fields.map((field)=>(
        <div key={field.name}>
            <label>{field.lable}</label>
            <input
            type={field.name}
            name={field.name}
            value={value[field.name] || ""}
            onChange={handleChangeValidationForms}/>
            {errors[field.name] && <div>{errors[field.name]}</div>}
        </div>
    ))}
    <button type='submit' disabled={isSubmit}>submit form</button>
    </div>
  </form>
  )
}

export default FormControlls