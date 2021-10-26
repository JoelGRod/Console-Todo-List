

export const getDayMonthYear = ( dateText: string ): string => {
    const date = new Date(dateText);
    return `${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() }`;
}