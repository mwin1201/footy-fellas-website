import React, { useEffect, useState } from "react";
import F1Standings from "../components/F1Standings";

const Formula1 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [teamData, setTeamData] = useState([]);
    const [driverData, setDriverData] = useState([]);
    const [curFilter, setCurFilter] = useState(2022);

    const filterYears = [
        2021,
        2019,
        2018,
        2017
    ];

    const getTeamRankings = async (year) => {
        const apiURL = "https://api-formula-1.p.rapidapi.com/rankings/teams?season=" + year;
            await fetch(apiURL, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
                    "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
                }
            })
            .then((response) => {
                response.json()
                .then((data) => {
                    setTeamData(data.response);
                    getDriverRankings(year);
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        const apiCall = async () => {
            const apiURL = "https://api-formula-1.p.rapidapi.com/rankings/teams?season=2022";
            await fetch(apiURL, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
                    "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
                }
            })
            .then((response) => {
                response.json()
                .then((data) => {
                    setTeamData(data.response);
                });
            })
            .catch(err => {
                console.log(err);
            });
        };
        apiCall();
    }, []);

    const getDriverRankings = async (year) => {
        const apiURL = "https://api-formula-1.p.rapidapi.com/rankings/drivers?season=" + year;
        await fetch(apiURL, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
                "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
            }
        })
        .then((response) => {
            response.json()
            .then((data) => {
                setDriverData(data.response);
                setCurFilter(year);
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        const apiCall = async () => {
            const apiURL = "https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2022";
            await fetch(apiURL, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
                    "X-RapidAPI-Key": "b0d923a5d2msh8e2d936f100abe3p1bbdaejsn960a7d4a1c91"
                }
            })
            .then((response) => {
                response.json()
                .then((data) => {
                    setDriverData(data.response);
                });
            })
            .catch(err => {
                console.log(err);
            });
        };
        apiCall();
    }, []);


    return (
        <section>
            <div className="filter">
                <div className="buttons">
                    <h1>Filters:</h1>
                    {filterYears.map((year) => (
                        <button key={year} onClick={() => getTeamRankings(year)}>{year}</button>
                    ))}
                </div>
            </div>
            <div className="curYear">
                <h1>{curFilter}</h1>
            </div>
            <div className="teamData">
                <h1>Constructors' Cup Standings</h1>
                <F1Standings apiData={teamData} />
            </div>
            <div className="driverData">
                <h1>Driver Standings</h1>
                <F1Standings apiData={driverData} />
            </div>

        </section>
    );
};

export default Formula1;