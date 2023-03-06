import axios from "axios";
class UserService{

    register(user){
        return axios.post("http://localhost:8080/api/user/registration", user);
    }

    getAllUsers(){
        return axios.get("http://localhost:8080/api/user/getAllUsers");
    }

}

export default new UserService();