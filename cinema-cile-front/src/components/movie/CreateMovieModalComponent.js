import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import './CreateMovieModalComponent.css';

const CreateMovieModalComponent = (props) => {

    const movie = props.movie;
    const file = props.file;
    const genres = props.genres;

    const onChooseFile = (e) =>{
        console.log(e.target.files[0]);
        file.setSelectedFile(e.target.files[0]);
    }

  return (
    <div>
        <div className='container-add-movie'>
        <form className='movie-form'>
                  <div className='form-group mb-2'>
                    <label className='form-label'>Name: </label>
                    <input  
                        type="text"
                        placeholder="Insert name" 
                        name = "name" 
                        className="form-control" 
                        value={movie.name}
                        onChange = {(e) => movie.setName(e.target.value)}
                        > 
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Director: </label>
                    <input  
                        type="text"
                        placeholder="Insert director" 
                        name = "director" 
                        className="form-control" 
                        value={movie.director}
                        onChange = {(e) => movie.setDirector(e.target.value)} 
                        >   
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Distributor: </label>
                    <input  
                        type="text"
                        placeholder="Insert distributor" 
                        name = "distributor" 
                        className="form-control" 
                        value={movie.distributor}
                        onChange = {(e) => movie.setDistributor(e.target.value)} 
                        >   
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Year: </label>
                    <input  
                        type="number"
                        placeholder="Insert year" 
                        name = "year" 
                        className="form-control" 
                        value={movie.year}
                        onChange = {(e) => movie.setYear(+e.target.value)} 
                        >   
                    </input>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Duration - minutes: </label>
                    <input  
                        type="number"
                        placeholder="Insert duration" 
                        name = "duration" 
                        className="form-control" 
                        value={movie.duration}
                        onChange = {(e) => movie.setDuration(e.target.value)} 
                        >   
                    </input>
                  </div>
   
                 
                 <div className='form-group mb-2'>
                    <label className='form-label'>Genre: </label>
                    <Form.Select className='form-control' onChange={(e)=>movie.setGenre(e.target.value)}>
                    {genres.map((genre)=> {
                      return (
                        <option key={genre} value={genre}>{genre}</option>
                      )
                    })}
                    </Form.Select>
                  </div>
                  
                  <div className='form-group mb-2'>
                    <label className='form-label'>Upload image </label>
                    <input  
                        type="file"
                        placeholder="Choose image" 
                        name = "image" 
                        className="form-control" 
                        onChange = {(e) =>onChooseFile(e)}      
                        >        
                    </input>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default CreateMovieModalComponent