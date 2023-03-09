import React, {useState, useEffect} from 'react'
import MovieService from '../../services/MovieService';
import CreateMovieModalComponent from './CreateMovieModalComponent';
import { Modal, Button } from 'react-bootstrap';
import './ListMovieComponent.css';
import './CreateMovieModalComponent.css';

const ListMovieComponent = () => {

    const [movies, setMovies] = useState([]);
    const formData = new FormData();

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [actors, setActors] = useState('');
    const [distributor, setDistributor] = useState('');
    const [year, setYear] = useState(0);
    const [duration, setDuration] = useState(0);
    const [genre, setGenre] = useState('');
    

    const [selectedFile, setSelectedFile] = useState(undefined);

    const movie = {id, name, director, actors, distributor, year, duration, setName, setGenre, setDirector, setActors, setDistributor, setYear, setDuration }
    const file = {selectedFile, setSelectedFile};
    const genres = ["Sci-fi", "Action", "Thriller", "Drama", "Mystery", "Comedy"];




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
        setDuration(0);
        setYear(0);
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
    


  return (
    <>
    
    <div className='container'>
        <h1>Movies</h1>
        <button className='createMovieBtn' onClick={handleShowCreateMovieModal}>Create new movie</button>
    </div>

    <Modal className='modal' show={showModal} onHide={handleCloseCreateMovieModal}>
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