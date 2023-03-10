import axios from "axios";
class MovieService{

    createMovie(formData){
        return axios.post("http://localhost:8080/api/movie/createMovie", formData);
    }

    getAllMovies(){
        return axios.get("http://localhost:8080/api/movie/getAllMovies");
    }
}

export default new MovieService();