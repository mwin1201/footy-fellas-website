import React, { useEffect, useState } from "react";
import F1Standings from "../components/F1Standings";

const Formula1 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [teamData, setTeamData] = useState([]);
    const [driverData, setDriverData] = useState([]);

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
                <div className="teamData">
                    <h1>Constructors' Cup Standings</h1>
                    <F1Standings apiData={teamData} />
                </div>
                <div className="driverData">
                    <h1>Driver Standings:</h1>
                    <F1Standings apiData={driverData} />
                </div>

        </section>
    );
};

export default Formula1;