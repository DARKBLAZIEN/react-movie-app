import React, { useEffect, useState } from 'react'
import Searchbar from './components/searchbar'
import './App.css'

const API_BASE_URL= 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {
  const[errormsg,seterrormsg]=useState('');
  const[search,setsearch]=useState('');
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchmovies = async () =>{
    setIsLoading(true);
    seterrormsg('');
    try{
        const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
        const reply = await fetch(endpoint,API_OPTIONS);
        if(!reply.ok){
          console.log('no response from API');
        }
        const data =await reply.json();
        if(data.Response === 'False'){
          seterrormsg(`Failed loading movies : ${error}`)
          setmovieList([]);
          return;
        }
        console.log(data);
        setmovieList(data.results || []);
    }
    catch(error){
        console.log(`Error fetching movies : ${error}`);
        seterrormsg(`Error in fetching movies : ${error} , please try again later`);
    }finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchmovies();
  },[]);
  return (
    <div className='bg container-fluid'>
      <img src="../public/hero-img.png" alt="" className='image'/>
      <h1 className='heading'>Search for your <span className='fav-mov'>Favourite Movies</span> stress free</h1>
      <Searchbar search={search} setsearch={setsearch} />
      <div className="movie-list-div row">
        {isLoading ? (<p>Loading...</p>) : errormsg ? (<p>{errormsg}</p>) : 
        (<ul>{
          
          movieList.map(movie => ( 
            <div key={movie.id} className=" col-md-3">
              <p  className='movie-names'>{movie.title}</p>
            </div>
              )
            )
          }  
        </ul>) }
      </div>
    </div>
  )
}

export default App