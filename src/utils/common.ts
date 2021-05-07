export function formatDate(date: Date): string {
    const year = (date.getUTCFullYear() > 10) ? (date.getUTCFullYear()) : `0${(date.getUTCFullYear())}`;
    const month = (date.getUTCMonth() > 10) ? (date.getUTCMonth()) : `0${(date.getUTCMonth())}`;
    const day = (date.getUTCDay() > 10) ? (date.getUTCDay()) : `0${(date.getUTCDay())}`;
    const hours = (date.getUTCHours() > 10) ? (date.getUTCHours()) : `0${(date.getUTCHours())}`;
    const minutes = (date.getUTCMinutes() > 10) ? (date.getUTCMinutes()) : `0${(date.getUTCMinutes())}`;
  

    return `${hours}:${minutes} ${day}${month}${year}`
}