




export const  getPlus7Day = (dateStart:Date) => {
    const dates:Date[] = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(dateStart);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    return dates;
}

export function getDay(date?:Date): {dateStart:Date, dateEnd:Date } | undefined {
    if(date === undefined) return undefined
    const dateStart = new Date(date);
    const dateEnd = new Date(date);
    dateStart.setHours(0, 0, 0, 0);
    dateEnd.setHours(23, 59, 59);
    return { dateStart,dateEnd}

}