export function formatDate_(date: any) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateOrdinal = (d: any) => {
        return d + (31 == d || 21 == d || 1 == d ? "st" : 22 == d || 2 == d ? "nd" : 23 == d || 3 == d ? "rd" : "th")
    };

    const getTime = (date: any) => {
        var hrs = date.getHours();
        var mnts = date.getMinutes();
        var AMPM = hrs >= 12 ? 'PM' : 'AM';
        hrs = hrs % 12;
        hrs = hrs ? hrs : 12;
        mnts = mnts < 10 ? '0' + mnts : mnts;
        var result = hrs + ':' + mnts + ' ' + AMPM;
        //         var result = hrs +' '+ AMPM;
        return result;
    }

    return ` ${dateOrdinal(date.getDate())} ${months[date.getMonth()]}, ${days[date.getDay()]} |  ${getTime(date)}`;

}


export function timestamp() {
    const now = new Date();
    const formattedTimestamp = now.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    return formattedTimestamp;
}