export function formatDate(dt: Date): string {
    const date = new Date(dt);

    const year = (date.getUTCFullYear() > 10) ? (date.getUTCFullYear()) : `0${(date.getUTCFullYear())}`;
    const month = ((date.getUTCMonth() + 1) > 10) ? ((date.getUTCMonth() + 1)) : `0${((date.getUTCMonth() + 1))}`;
    const day = (date.getUTCDate() > 10) ? (date.getUTCDate()) : `0${(date.getUTCDate())}`;
    const hours = (date.getUTCHours() > 10) ? (date.getUTCHours()) : `0${(date.getUTCHours())}`;
    const minutes = (date.getUTCMinutes() > 10) ? (date.getUTCMinutes()) : `0${(date.getUTCMinutes())}`;
    const seconds = (date.getUTCSeconds() > 10) ? (date.getUTCSeconds()) : `0${(date.getUTCSeconds())}`;
  

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}