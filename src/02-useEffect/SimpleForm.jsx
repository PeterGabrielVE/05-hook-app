import { useEffect, useState } from "react"

export const SimpleForm = () => {

 const [formState, setFormState] = useState({
    username: 'gabo',
    email: 'gaboleal123@gmail.com'
 });

 const { username, email } = formState;

 const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [name] : value
    })
 }

 useEffect( () => {
     console.log('UseEfect called')
 } )

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text" name="username" className="form-control" placeholder="UserName" value={ username } onChange={ onInputChange } />
        <input type="email" name="email" className="form-control mt-2" placeholder="gaboleal123@gmail.com" value={ email }  onChange={ onInputChange }/>
    </>
  )
}
