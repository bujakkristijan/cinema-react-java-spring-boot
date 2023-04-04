import Swal from "sweetalert2";
class AlertService{

    alertSuccessSignIn = () =>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Successfully signed in!',
          showConfirmButton: false,
          timer: 1500
        });
      }

      alertSuccessSignOut = () =>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Successfully signed out!',
          showConfirmButton: false,
          timer: 1500
        });
      }

}
export default new AlertService();