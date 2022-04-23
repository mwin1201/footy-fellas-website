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

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};