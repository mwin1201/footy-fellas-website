import React from "react";
import nameCheck from "../../utils/helpers";


const StandingList = ({ apiData }) => {

    return (
        <section className="clubContainer">
            {apiData.length === 1 &&
            apiData[0].map((club) => (
            <div className="clubCard" key={club.team.id}>
                <div className="clubTitle">
                    <h3>{nameCheck(club.team.name)}</h3>
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
            
            {apiData.length > 1 &&
            apiData.map((club) => (
                <div className="clubCard" key={club.team.id}>
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
                )
            )}
        </section>
    );
};

export default StandingList;