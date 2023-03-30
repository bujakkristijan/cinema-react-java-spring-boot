import React, {useState, useEffect} from 'react'
import MovieService from '../../services/MovieService';
import CreateMovieModalComponent from './CreateMovieModalComponent';
import { Modal, Button } from 'react-bootstrap';
import './ListMovieComponent.css';
import './CreateMovieModalComponent.css';
import { Link } from 'react-router-dom';

const ListMovieComponent = () => {

    const [movies, setMovies] = useState([]);
    const formData = new FormData();

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [actors, setActors] = useState('');
    const [distributor, setDistributor] = useState('');
    const [year, setYear] = useState(1);
    const [duration, setDuration] = useState(1);
    const [genre, setGenre] = useState('Sci-fi');
    const [description, setDescription] = useState('');
    

    const [selectedFile, setSelectedFile] = useState(undefined);

    const movie = {id, name, description, director, genre, actors, distributor, year, duration, setDescription, setName, setGenre, setDirector, setActors, setDistributor, setYear, setDuration }
    const file = {selectedFile, setSelectedFile};
    const genres = ["Sci-fi", "Action", "Thriller", "Drama", "Mystery", "Comedy"];

    useEffect(() => {
      getAllMovies();
    }, [])
    


    const [showModal, setShowModal] = useState(false);

    const handleShowCreateMovieModal = () =>{
        setShowModal(true);
    }

    const handleCloseCreateMovieModal = () =>{
        setShowModal(false);
        setActors('');
        setDirector('');
        setDistributor('');
        setName('');
        setDuration(1);
        setActors('');
        setDescription('');
        setYear(1);
    }

    const handleSubmit = () =>{

        if(selectedFile != null && selectedFile!=undefined) {
            formData.append('image', selectedFile);
            formData.append('movie', JSON.stringify(movie));
        }
        else{
            formData.append('image', '');
            formData.append('movie', JSON.stringify(movie));
        }
        MovieService.createMovie(formData).then((response) =>{
            let responseFromServer = response.data.toString();
            if(responseFromServer == "valid"){
                alert("Uspesno dodat");
                handleCloseCreateMovieModal();
            }
        })

    }

    const getAllMovies = () =>{
        MovieService.getAllMovies().then((response) =>{
            setMovies(response.data);
            console.log(movies);
            console.log("provera ")
            alert(JSON.stringify(movies));
        });
        console.log("check kad se izvrsi")
    }
    

// className='container', vec po defaultu ima margine auto i width nije 100% kao sto bi trebalo
  return (
    <>
    
    <div className='container'>
        <button className='createMovieBtn' onClick={handleShowCreateMovieModal}>Create new movie</button>
        <h1 className='h1-movies'>Movies</h1>
        <div className='movie-main-container'>
            {
                movies.map((movie) =>{
                    return(
                    <div className='layer-container'>
                        <div className='movie-item-container' key={movie.id}>
                            <div className='movie-image-container'>
                                <img className='movie-image' src={"data:image/png;base64," + movie.image} alt=''></img> 
                            </div>
                            <div className='movie-info-container'>
                                <div className='container-box-1'>
                                    <label>Name: {movie.name}</label>
                                    <label>Actors: {movie.actors}</label>
                                    <label>Distributor: {movie.distributor}</label>
                                    <label>Duration: {movie.duration} mins</label>
                                </div>
                                <div className='container-box-2'>
                                    <label>Year: {movie.year}</label>
                                    <label>Director: {movie.director}</label>
                                    <label>Description: {movie.description}</label>
                                </div>
                            </div>
                            <div className='movie-action-container'>
                                <label className='actionLabel'>Action</label>
                                <div className='action-fa-container'>
                                    <i id="fa-trash" class="fa fa-trash" aria-hidden="true"></i>
                                    <i id="fa-pencil" class="fa fa-pencil" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        
    </div>

    <Modal size='lg' className='modal' show={showModal} onHide={handleCloseCreateMovieModal}>
    <Modal.Header closeButton>
        <Modal.Title className='modal-title'>Create new movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <CreateMovieModalComponent movie={movie} file={file} genres={genres}/>
    </Modal.Body>

    <Modal.Footer>
        <button id="closeModalBtn" onClick={handleCloseCreateMovieModal}>Close</button>
        <button id="submitModalBtn" onClick={handleSubmit}>Submit</button>
    </Modal.Footer>
    </Modal>
    </>
  )
}

export default ListMovieComponent