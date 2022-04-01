import React from "react";
import StandingList from "../components/EPLStandings";

const EPL = () => {
    const pullEPLData = async () => {
        var apiURL = "https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39";
        const response = await fetch(apiURL, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
            }
        });

        return response.json();
    };

    return (
        <section>
            <h1>HELLO I AM HERE</h1>
            <StandingList apiData={pullEPLData} />
        </section>
    );
};

export default EPL;