import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

 const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password:'',
 });

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />

        <input type="text" name="username" className="form-control" placeholder="UserName" value={ username } onChange={ onInputChange } />
        <input type="email" name="email" className="form-control mt-2" placeholder="gaboleal123@gmail.com" value={ email }  onChange={ onInputChange }/>
        <input type="password" name="password" className="form-control mt-2" placeholder="Contraseña" value={ password } onChange={ onInputChange } />
        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
    </>
  )
}
