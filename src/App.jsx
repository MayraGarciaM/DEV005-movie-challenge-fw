import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '9076d9db918bca7952195c7fa46f29af'
  const image_Path = 'https://image.tmdb.org/t/p/original'
  const URL_image = 'https://image.tmdb.org/t/p/original'

  //variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  //Función para realizar para realizar la peticion por get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const { data: { results }, } = await axios.get(`${API_URL}/${type}/movie?api_key=9076d9db918bca7952195c7fa46f29af`
    )
    console.log("entro")
    setMovies(results)
  };


  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div>
      {/*contenedor que muestra peli actual*/}
      <div className='container'>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={`${URL_image + movie.poster_path}`} alt="" />
              <h4>{movie.tittle}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
