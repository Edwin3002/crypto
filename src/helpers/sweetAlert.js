import Swal from "sweetalert2/dist/sweetalert2";

  export const peticionErronea = (msg = "Error inesperado!" ) => Swal.fire({
    title: '¡Fallo del sistema!',
    text: msg,
    icon: 'error',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#bc544b',
    timer: 2000,
  })