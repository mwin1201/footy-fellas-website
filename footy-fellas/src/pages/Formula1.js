import React, { useEffect, useState } from "react";

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
                    setDriverData(data.response[0]);
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

        </section>
    );
};

export default Formula1;