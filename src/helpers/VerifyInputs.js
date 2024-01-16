import swal from 'sweetalert'

const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/

const nameRegex = /^[A-Za-z0-9 ]+$/

export const verifyRegisterInputs = (inputs, setWarningName, setWarningEmail, setWarningPassword) => {
  if (inputs.name === '' && inputs.email.toLowerCase() === '' && inputs.password === '') {
    setWarningEmail(true)
    setWarningPassword(true)
    setWarningName(true)
    swal('Completar!', 'Nombre, Correo Electronico y Contraseña.', 'warning')
    return 'Completar!, Nombre, Correo Electronico y Contraseña.'
  } else if (inputs.name === '' && inputs.email.toLowerCase() === '') {
    setWarningName(true)
    setWarningEmail(true)
    swal('Completar!', 'Nombre y Correo Electronico', 'warning')
    return 'Completar!, Nombre y Correo Electronico'
  } else if (inputs.email.toLowerCase() === '' && inputs.password === '') {
    setWarningEmail(true)
    setWarningPassword(true)
    swal('Completar!', 'Email y Correo Electronico.', 'warning')
    return 'Completar!, Email y Correo Electronico.'
  } else if (inputs.name === '' && inputs.password === '') {
    setWarningName(true)
    setWarningPassword(true)
    swal('Completar!', 'Nombre y Contraseña.', 'warning')
    return 'Completar!, Nombre y Contraseña.'
  } else if (inputs.name === '') {
    setWarningName(true)
    swal('Completar!', 'Nombre.', 'warning')
    return 'Completar!, Nombre.'
  } else if (inputs.email.toLowerCase() === '') {
    setWarningEmail(true)
    swal('Completar!', 'Correo.', 'warning')
    return 'Completar!, Correo.'
  } else if (inputs.password === '') {
    setWarningPassword(true)
    swal('Completar!', 'Contraseña.', 'warning')
    return 'Completar!, Contraseña.'
  } else if (inputs.name.length > 50) {
    setWarningName(true)
    swal('Nombre Invalido!', 'No sobrepasar los 50 caracteres.', 'warning')
    return 'Nombre Invalido!, No sobrepasar los 50 caracteres.'
  } else if (inputs.email.length > 50) {
    setWarningEmail(true)
    swal('Correo Invalido!', 'No sobrepasar los 50 caracteres.', 'warning')
    return 'Correo Invalido!, No sobrepasar los 50 caracteres.'
  } else if (inputs.password.length > 50) {
    setWarningPassword(true)
    swal('Password Invalido!', 'No sobrepasar los 50 caracteres.', 'warning')
    return 'Password Invalido!, No sobrepasar los 50 caracteres.'
  } else if (!nameRegex.test(inputs.name)) {
    setWarningName(true)
    swal('Nombre Invalido!', 'Recuerda usar solo letras y espacios.', 'warning')
    return 'Nombre Invalido!, Recuerda usar solo letras y espacios.'
  } else if (!emailRegex.test(inputs.email.toLowerCase())) {
    setWarningEmail(true)
    swal('Correo Invalido!', 'Recuerda que el correo solo puede tener: mayúsculas, minúsculas, números, puntos, guiones bajos (_) y guiones medios (-)', 'warning')
    return 'Correo Invalido!, Recuerda que el correo solo puede tener: mayúsculas, minúsculas, números, puntos, guiones bajos (_) y guiones medios (-)'
  } else if (!passwordRegex.test(inputs.password)) {
    setWarningPassword(true)
    swal('Contraseña Invalida!', 'Recuerda incluir: numeros, letras y almenos un caracter especial.', 'warning')
    return 'Contraseña Invalida!, Recuerda incluir: numeros, letras y almenos un caracter especial.'
  }
}

export const verifyLoginInputs = (inputs, setWarningEmail, setWarningPassword) => {
  if (inputs.email.toLowerCase() === '' && inputs.password === '') {
    setWarningEmail(true)
    setWarningPassword(true)
    return swal('Completar!', 'Correo Electronico y Contraseña.', 'warning')
  } else if (inputs.email.toLowerCase() === '') {
    setWarningEmail(true)
    return swal('Completar!', 'Correo Electronico.', 'warning')
  } else if (inputs.password === '') {
    setWarningPassword(true)
    return swal('Completar!', 'Contraseña.', 'warning')
  } else if (inputs.email.length > 50) {
    setWarningEmail(true)
    return swal('Correo Invalido!', 'No sobrepasar los 50 caracteres.', 'warning')
  } else if (inputs.password.length > 50) {
    setWarningPassword(true)
    return swal('Password Invalido!', 'No sobrepasar los 50 caracteres.', 'warning')
  } else if (!emailRegex.test(inputs.email.toLowerCase())) {
    setWarningEmail(true)
    return swal('Correo Invalido!', 'Recuerda que el correo solo puede tener: mayúsculas, minúsculas, números, puntos, guiones bajos (_) y guiones medios (-)', 'warning')
  } else if (!passwordRegex.test(inputs.password)) {
    setWarningPassword(true)
    return swal('Contraseña Invalida!', 'Recuerda incluir: numeros, letras y almenos un caracter especial.', 'warning')
  }
}
