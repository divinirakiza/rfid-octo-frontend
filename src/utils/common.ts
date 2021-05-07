export function formatDate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = date.getUTCFullYear();
    const day = date.getUTCFullYear();
    const hours = date.getUTCFullYear();
    const minutes = date.getUTCFullYear();

    return `${hours}:${minutes} ${day}${month}${year}`
}