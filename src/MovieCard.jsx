import React from 'react';

const MovieCard = ({ movie: { imdbID, year, Poster, Title, Type } }) => {
    return (
        <div className="movie">
            <div>
                <p>{year}</p>
            </div>
            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
