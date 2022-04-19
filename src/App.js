import React, {useEffect} from 'react';
import MatchCard from "./MatchCard";

import searchIcon from './search.svg';
import './App.css';

const App = () => {
    const [match, setMatches] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const options = {
        method: 'GET', headers: {
            'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com',
            'X-RapidAPI-Key': 'f95915d8efmsh61b0b93bd34a86fp103135jsn266ba236ad5d'
        }
    };

    const fetchMatches = () => {
        fetch(`https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&${Date.now()}&federation=UEFA`, options)
            .then(response => response.json())
            .then(response => setMatches(response.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchMatches()
    }, []);

    return (<div className="app">
        <h1>Betlucky</h1>
        <br/>
        <br/>
        <h2>
            Betlucky is a web application that predicts the results of football matches.
            The application is based on the football prediction API. The application is developed by <a
            href="https://github.com/MartiPuigGinebro">Martí Puig</a>.</h2>
        <div
            className="search">
            <input
                type="text"
                placeholder="Search for a match"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img
                src={searchIcon}
                alt='search'
                onClick={() => {
                    fetchMatches(search);
                }}
            />
        </div>

        {match?.length > 0 ? (<div
            className="container">
            {match.map(match => <MatchCard match={match}/>)}
        </div>) : (<div
            className="empty">
            <h2>
                No matches found
            </h2>
        </div>)}
        <br/>
        <br/>
        <div>
            <h2>
                Powered by RapidAPI
            </h2>
        </div>
    </div>);
};

export default App;
