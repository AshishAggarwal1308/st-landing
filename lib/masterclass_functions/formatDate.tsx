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

    const pad = (n: number) => n.toString().padStart(2, '0');

    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1); // Months are 0-indexed
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = pad(hours);

    return `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
}