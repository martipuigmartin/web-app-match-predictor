import React from 'react';
import ball from "./ball.svg";

const MatchCard = ({match}) => {
    const startDateBeforeParse = new Date(match.start_date);
    startDateBeforeParse.setHours(startDateBeforeParse.getHours() + 1);
    const startDate = startDateBeforeParse.toLocaleString();

    return (<div className="match">
        <div>
            <img src={ball}
                 alt="ball"
            />
        </div>
        <div className="match-info">
            <h3>{match.home_team} VS {match.away_team}</h3>
        </div>
        <div className="match-prediction">
            <h4 className="competition-cluster">{match.competition_cluster}</h4>
            <h4 className="competition-name">{match.competition_name}</h4>
            <h4 className="start-date">Start Date: {startDate}</h4>
            <h4 className="prediction">Prediction: {match.prediction}</h4>
        </div>
    </div>)
};

export default MatchCard;
