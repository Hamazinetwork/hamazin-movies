import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=d3a98e77';

const App = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const [movies, setmovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        if (data.Search) {
            setmovies(data.Search);
        } else {
            setmovies([]); // Clear movies if no results
        }
    };

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>HamazinMovies</h1>

            <div className="search">
                <input
                    value={searchTerm}
                    placeholder="Search for movies"
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
