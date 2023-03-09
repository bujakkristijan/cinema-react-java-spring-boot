import axios from "axios";
class MovieService{

    createMovie(formData){
        return axios.post("http://localhost:8080/api/movie/createMovie", formData);
    }
}

export default new MovieService();