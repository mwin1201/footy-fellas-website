import React, { useEffect, useState } from "react";
import StandingList from "../components/EPLStandings";

const PremierLeague = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect( async () => {
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
    }, []);

    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
        }
        console.log(data);
    }, [data]);

    return (
        <section>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                data.map((club) => (
                    <h2 key={club.team.id}>
                        {club.team.points}
                    </h2>
                ))
            )}
        </section>
    );
};

export default PremierLeague;