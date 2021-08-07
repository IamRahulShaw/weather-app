import React from 'react';

const Search = ({ cityName, setCityName, fetchFucntion }) => {
    const handleButtonClick = () => {
        fetchFucntion();
    }
    return (
        <div className="middle" >
            <input type="search" value={cityName} onChange={(event) => setCityName(event.target.value)} name="search" id="search" placeholder="enter city name..." autoFocus autoComplete="off" />
            <button onClick={handleButtonClick}>Search</button>
        </div>
    )
}

export default Search;
