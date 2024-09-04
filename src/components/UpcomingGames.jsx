import React, { useEffect, useState } from 'react';
import './UpcomingGames.css';
import { PlusIcon } from "../BIcons.jsx";

const leagues = {
    EPL: 'https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json',
    LaLiga: 'https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/es.1.json'
    // Add more leagues here in the future
};

export const UpcomingGames = () => {
    const [matches, setMatches] = useState([]);
    const [visibleMatches, setVisibleMatches] = useState(5); // Initially show 5 matches
    const [selectedLeague, setSelectedLeague] = useState('EPL'); // Default league is EPL
    const [leagueName, setLeagueName] = useState('Premier League'); // Default league name

    useEffect(() => {
        fetchMatches(selectedLeague);
    }, [selectedLeague]);

    const fetchMatches = (league) => {
        fetch(leagues[league])
            .then((response) => response.json())
            .then((data) => {
                const now = new Date();

                const upcomingMatches = data.matches
                    .filter((match) => {
                        // Set a default time if time is not provided (e.g., in La Liga data)
                        const matchTime = match.time ? `${match.time}:00` : '00:00:00';  // Default time if not available
                        const matchDateTime = new Date(`${match.date}T${matchTime}`);

                        console.log(`Parsing match: ${match.team1} vs ${match.team2} - DateTime: ${matchDateTime}`);
                        return matchDateTime > now;
                    })
                    .map((match) => ({
                        round: match.round,
                        date: match.date,
                        time: match.time || 'TBD',  // Set 'TBD' if time is not available
                        team1: match.team1,
                        team2: match.team2,
                    }));

                setMatches(upcomingMatches);
                setVisibleMatches(5); // Reset the number of visible matches
                setLeagueName(league === 'EPL' ? 'Premier League' : 'La Liga'); // Update league name
            })
            .catch((error) => console.error('Error fetching data:', error));
    };

    const loadMore = () => {
        setVisibleMatches((prevVisibleMatches) => prevVisibleMatches + 5);
    };

    const handleLeagueChange = (event) => {
        setSelectedLeague(event.target.value);
    };

    return (
        <div className="upcoming-games-container">
            <div className="select-league">
                <label htmlFor="league-select">Choose League: </label>
                <select id="league-select" value={selectedLeague} onChange={handleLeagueChange}>
                    <option value="EPL">Premier League</option>
                    <option value="LaLiga">La Liga</option>
                    {/* Add more leagues as options here in the future */}
                </select>
            </div>

            <div className="leagueName">
                Upcoming games in {leagueName}
            </div>

            {matches.length > 0 ? (
                <>
                    {matches.slice(0, visibleMatches).map((match, index) => (
                        <div key={index} className="match-item">
                            <div className="match-round">{match.round}</div>
                            <div className="team-container">
                                <div className="team-name">{match.team1}</div>
                                <div className="vs">vs</div>
                                <div className="team-name">{match.team2}</div>
                            </div>
                            <div className="match-time">
                                {new Date(match.date).toLocaleDateString()} {match.time}
                            </div>
                        </div>
                    ))}

                    {visibleMatches < matches.length && (
                        <div className="load-more-container">
                            <button className="load-more-btn" onClick={loadMore}>
                                <PlusIcon />
                                More Matches
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p className="no-game">No upcoming games at the moment</p>
            )}
        </div>
    );
};