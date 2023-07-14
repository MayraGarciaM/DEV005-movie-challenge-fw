import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function DetailComponent() {
  const API_URL = 'https://api.themoviedb.org/3';
  const URL_image = 'https://image.tmdb.org/t/p/original';

  const {idMovie} = useParams();
  // estados
  const [movie, setMovie] = useState([]);
  
  //Función para realizar la peticion por get a la api
  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/movie/${idMovie}?api_key=9076d9db918bca7952195c7fa46f29af`)
    setMovie(data);
  };
  
  useEffect(() => { 
    fetchMovies();
  },[]);

  return (
    <div>
        <img src={`${URL_image + movie.poster_path}`} alt="" height={600} width="100%" />
        <h4 className='text-center'>{movie.title}</h4>
    </div>
  );
}

export default DetailComponent
