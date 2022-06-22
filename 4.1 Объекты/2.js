function isEmpty(schedule) {
    for(let key in schedule) {
        return false;
    }
    return true;
}

let schedule = {};
alert ( isEmpty(schedule) );
shedule["8:30"] = "get up";
alert( isEmpty(schedule));