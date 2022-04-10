const nameCheck = (team) => {
    if (team === "Manchester United") {
        return "Man United";
    }
    else if (team === "Manchester City") {
        return "Man City";
    }
    else { return team }
};

export default nameCheck;