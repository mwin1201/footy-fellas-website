import React from "react";

const F1Standings = ({ apiData }) => {

    console.log(apiData);

    return (
        <section className="f1Container">
        {apiData.driver === undefined &&
        <div className="teamContainer">
            {apiData.map((constructor) => (
                <div className="teamCard" key={constructor.team.id}>
                    <div className="teamName">
                        <h3>{constructor.team.name}</h3>
                        <p>{constructor.points}pts</p>
                    </div>
                    <div className="teamLogo">
                        <img src={constructor.team.logo} alt="team logo" />
                    </div>
                </div>
            ))}
        </div>}

        {apiData.driver !== undefined &&
        <div className="driverContainer">
            {apiData.map((club) => (
                <div className="driverCard" key={club.driver.id}>
                    <div className="driverName">
                        <h3>{club.driver.name}</h3>
                        <p>{club.points}pts</p>
                    </div>
                    <div className="driverLogo">
                        <img src={club.driver.logo} alt="driver logo" />
                    </div>
                </div>
            ))}
        </div>
        }
        </section>
    );
};

export default F1Standings;