import payload from './payload';
 
export default () => {
  let token = localStorage.getItem('sindelantalToken')
  return (token == null) ? false : payload(token).iat < new Date() ? true : false
  //payload(token).iat nos dice cuando caduca el token y compararla con la fecha de ahora (new Date())
}