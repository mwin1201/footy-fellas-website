import React from "react";


const StandingList = ({ apiData }) => {

    return (
        <>
        {apiData.map((club) => (
        <div className="card">
            <div className="team">
                {club.team.name}
            </div>
            <div className="club-logo">
                <img src={club.team.logo} />
            </div>

        </div>
        ))}
        </>
    );
};

export default StandingList;