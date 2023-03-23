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
    


  return (
    <>
    
    <div className='container'>
        <h1>Movies</h1>
        <button className='createMovieBtn' onClick={handleShowCreateMovieModal}>Create new movie</button>
        
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
                                <h3 className='movie-name'>{movie.name}</h3>
                                <label>Actors: {movie.actors}</label>
                                <label>Distributor: {movie.distributor}</label>
                                <label>Duration: {movie.duration} mins</label>
                                <label>Year: {movie.year}</label>
                                <label>Director: {movie.director}</label>
                                <Link to='/' className="movieDetailsBtn">Read more</Link>
                            </div>
                            <div className='movie-description-container'>
                                <h4>Description</h4>
                                <label>{movie.description}</label>
                            </div>
                            <div className='movie-action-container'>
                                <h4>Action</h4>
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
        <Button variant="secondary" onClick={handleCloseCreateMovieModal}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </Modal.Footer>
    </Modal>
    </>
  )
}

export default ListMovieComponent