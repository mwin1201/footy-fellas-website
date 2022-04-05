import React from "react";


const StandingList = ({ apiData }) => {

    return (
        <section className="clubContainer">
            {apiData.map((club) => (
            <div className="clubCard">
                <div className="clubTitle">
                    <h3>{club.team.name}</h3>
                    <p>{club.points}pts</p>
                </div>
                <div className="clubBreakdown">
                    <p>{club.all.win}W {club.all.draw}D {club.all.lose}L</p>
                </div>
                <div className="clubLogo">
                    <img src={club.team.logo} alt="team crest" />
                </div>
            </div>
            ))}
        </section>
    );
};

export default StandingList;