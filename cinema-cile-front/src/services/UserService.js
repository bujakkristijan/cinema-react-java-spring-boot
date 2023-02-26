import axios from "axios";
class UserService{

    register(user){
        return axios.post("http://localhost:8080/api/user/registration", user);
    }

}

export default new UserService();