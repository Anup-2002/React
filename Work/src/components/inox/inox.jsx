import axios from "axios";
import React, { useState, useEffect } from "react";
export function Inox() {
   const [movies, setMovies] = useState([{title:null,poster:null,language:null,certificate:null}]);
   function LoadData()
   {
    axios.get("movies.json")
    .then(response => setMovies(response.data))
    .catch(error => console.error('Error fetching movie data:', error))
    .finally(() => console.log('Request completed'));
   }
   useEffect(()=>{
     LoadData();
   },[]);
    return (
        <>
            <div className="container-fluid p-3 text-center fs-3">
                Inox - Experience the Magic of Movies
                <header>
                    <div className="text-center fw-bold">Inox Movies</div>
                </header>
                <section className="mt-3 d-flex flex-row flex-wrap ">
                    {
                        movies.map(movie=> 
                            <div key={movie.title} className="card m-2 p-2 w-25 ">
                                <img src={movie.poster} className="card-img-top" height="100%" alt={movie.title} />
                                <div className="card-header text-center fw-bold">{movie.title}</div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Language</dt>
                                        <dd>{movie.language}</dd>
                                        <dt>Certificate</dt>
                                        <dd>{movie.certificate}</dd>
                                    </dl>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-warning w-100">Book Ticket</button>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </>
    );
}