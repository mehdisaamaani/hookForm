import React from 'react'
import { FormField, useFormValidation } from '../hooks/useFormValidation';
import '../App.css'
const fields: FormField[] = [
    { name: 'name', lable: "نام", type: 'text', required: true },
    {
        name: 'email',
        lable: 'ایمیل',
        type: 'email',
        required: true,
        validatior: (value) => {
            if (!value.includes("@")) {
                return 'فرمت ایمیل ایراد دارد'
            }
            return undefined
        }
    },

    { name: 'firstName', lable: 'نام خانوادگی', type: 'text', required: false }
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
        <form onSubmit={handleSubmitValidationForms} className='form-controll'>
            <div className='form-input'>
                {fields.map((field) => (
                    <div key={field.name} className='form-fields'>
                        <label>{field.lable}</label>
                        <input
                            type={field.name}
                            name={field.name}
                            value={value[field.name] || ""}
                            onChange={handleChangeValidationForms} />
                        {errors[field.name] && <div className='form-fields-error'>{errors[field.name]}</div>}
                    </div>
                ))}
                <button className={"form-button"} type='submit' disabled={isSubmit}>submit form</button>
            </div>
        </form>
    )
}

export default FormControlls