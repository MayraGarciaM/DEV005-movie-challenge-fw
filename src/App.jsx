import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Component/Serch'
import './App.css';


function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '9076d9db918bca7952195c7fa46f29af'
  const image_Path = 'https://image.tmdb.org/t/p/original'
  const URL_image = 'https://image.tmdb.org/t/p/original'

  // estados
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  

  //Función para realizar la peticion por get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const { data: { results }, } = await axios.get(`${API_URL}/${type}/movie?api_key=9076d9db918bca7952195c7fa46f29af`)
    setLoading(false)
    setMovies(results)
    setSearch(results);
  };
  
  useEffect(() => { 
    fetchMovies();
  },[])
  
  const getMoviesSearched = (textToSearch) => {
   const resultSearch = movies.filter((movie) =>{
    return movie.title.toLowerCase().includes(textToSearch);
   })
   setSearch(resultSearch)
  }
  
  return (
    <div>
      <Search getMoviesSearched={getMoviesSearched}/>

      <div className='container mt-3'>
        <div className='row'>
          {!loading && search ? search.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <img src={`${URL_image + movie.poster_path}`} alt="" height={600} width="100%" />
              <a href={"/movie/" + movie.id}>{movie.title}</a>
            </div>
          )): loading ? "loadig" : "no se encontraron peliculas"}
        </div>
      </div>
    </div>
  )
}

export default App
