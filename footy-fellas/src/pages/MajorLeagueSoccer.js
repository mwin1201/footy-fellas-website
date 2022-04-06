import React, {useEffect, useState} from "react";
import StandingList from "../components/EPLStandings";

const MajorLeagueSoccer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            const apiURL = "https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=253";
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
    }, [data])

    return (
        <section>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <StandingList apiData={data} />
            )}
        </section>
    )
};


export default MajorLeagueSoccer;