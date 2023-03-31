import axios from "axios";
class MovieService{

    createMovie(formData){
        return axios.post("http://localhost:8080/api/movie/createMovie", formData);
    }

    getAllMovies(){
        return axios.get("http://localhost:8080/api/movie/getAllMovies");
    }

    updateMovie(movie){
        return axios.put("http://localhost:8080/api/movie/updateMovie", movie);
    }

    deleteMovie(movieId){
        return axios.delete("http://localhost:8080/api/movie/deleteMovie/" + movieId)
    }
}

export default new MovieService();