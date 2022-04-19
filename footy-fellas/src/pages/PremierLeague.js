import React, { useEffect, useState } from "react";
import StandingList from "../components/EPLStandings";

const PremierLeague = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [curFilter, setCurFilter] = useState(2021);

    const filterYears = [
        2019,
        2018,
        2017,
        2016,
        2015
    ];

    useEffect(() => {
        const apiCall = async () => {
            const apiURL = "https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39";
            await fetch(apiURL, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                    "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
                }
            })
            .then((response) => {
                response.json()
                    .then((data) => {
                        setData(data.response[0].league.standings);
                    });
            })
            .catch(err => {
                console.log(err);
            });
        }
        apiCall();
    }, []);

    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
        }
    }, [data]);

    const getEPLRankings = async (year) => {
        const apiURL = "https://api-football-v1.p.rapidapi.com/v3/standings?season=" + year + "&league=39";
            await fetch(apiURL, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                    "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
                }
            })
            .then((response) => {
                response.json()
                    .then((data) => {
                        setData(data.response[0].league.standings);
                        setCurFilter(year);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <section className="standingContainer">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <div className="filter">
                        <div className="buttons">
                            <h1>Filters:</h1>
                            {filterYears.map((year) => (
                                <button key={year} onClick={() => getEPLRankings(year)}>{year}</button>
                            ))}
                        </div>
                    </div>
                    <div className="curYear">
                        <h1>{curFilter}</h1>
                    </div>
                    <h1>Current Standings</h1>
                    <StandingList apiData={data} />
                </>
            )
            }
        </section>
    );
};

export default PremierLeague;