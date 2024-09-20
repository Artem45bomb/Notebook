type TimeNote = "Just" | "Day" | "Month" | "Year" | "Hour" | "Minutes";

const minutesInCount = (minutes:number) => new Date(minutes * 60 *1000);

const TimeNumber:Record<TimeNote, (minutes:number,month?:string) => ResultTime | boolean> =  {
    "Just":(minutes) => minutes < 2 && {time:"Just",count:0},
    "Minutes":(minutes) => minutes > 1 && minutes < 60 && {time:"Minutes",count:minutesInCount(minutes).getMinutes()},
    "Hour":(minutes) => minutes >= 60 && minutes < 1440 && {time:"Hour",count:minutesInCount(minutes).getHours()},
    "Day":(minutes) => minutes >= 1440 && minutes < 43200 && {time:"Day",count:minutesInCount(minutes).getDay()},
    "Month":(minutes) => minutes >= 43200 && minutes < 15768000 && {time:"Month",count:minutesInCount(minutes).getMonth()},
    "Year":(minutes) => minutes >= 15768000 && {time:"Year",count:1}
}

type ResultTime = {
    time:TimeNote,
    count:number,
}

export const timeSinceCreation = (timeCreation:Date,month?:string):ResultTime => {
    const timeSinceCreationMin = new Date().getMinutes()-timeCreation.getMinutes()
    let time:ResultTime = {time:"Just",count:0};

    Object.keys(TimeNumber).forEach((value)  =>{
        const check = TimeNumber[value as TimeNote](timeSinceCreationMin,month);

        if(typeof check !== "boolean" ) time = check;
    })

    return time
}