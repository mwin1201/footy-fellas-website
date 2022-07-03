import React from "react";

const F1Standings = ({ apiData }) => {

    return (
        <section className="f1Container">
        {!apiData &&
            <div>Sorry No Data to Display...</div>
        }

        {apiData.length === 10 &&
        <div className="teamContainer">
            {apiData.map((constructor) => (
                <div className="teamCard col-2" key={constructor.team.id}>
                    <div className="teamName">
                        <h3>{constructor.team.name}</h3>
                        <p>{constructor.points}pts</p>
                    </div>
                    <div className="teamLogo">
                        <img src={constructor.team.logo} alt="team logo" />
                    </div>
                </div>
            ))}
        </div>
        }

        {apiData.length > 10 &&
        <div className="driverContainer">
            {apiData.map((club) => (
                <div className="driverCard col-2" key={club.driver.id}>
                    <div className="driverName">
                        <h3>{club.driver.name}</h3>
                        <p>{club.points ? club.points : 0}pts</p>
                    </div>
                    <div className="driverLogo">
                        <img src={club.driver.image} alt="driver logo" />
                    </div>
                </div>
            ))}
        </div>
        }
        </section>
    );
};

export default F1Standings;