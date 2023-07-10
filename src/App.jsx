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

  //Función para realizar la peticion por get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const { data: { results }, } = await axios.get(`${API_URL}/${type}/movie?api_key=9076d9db918bca7952195c7fa46f29af`
    )
    setMovies(results)
  };

 //Funciòn de busqueda de peliculas
  const searchMovies = (e)=>{
    e.preventDefault();
    fetchMovies(searchMovies)
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div>
      <h2 className='text-center'>Movie Magic</h2>
      {/*Buscador*/}
      <form className='container mb-4' onSubmit={searchMovies}>
        <input type="text" placeholder='search' onChange={(e)=> setSearchKey(e.target.value)} />
        <button className='btn btn-primary'>Search</button>
      </form>

      {/*contenedor que muestra peli actual*/}
      <div className='container mt-3'>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <img src={`${URL_image + movie.poster_path}`} alt="" height={600} width="100%" />
              <h4 className='text-center'>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
