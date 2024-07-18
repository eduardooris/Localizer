import moment from "moment";

export const formatDate = (dateString: Date | string) => {
    const parsedDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss');
    const formattedDate = parsedDate.format('DD/MM/YYYY HH:mm:ss');
    return formattedDate;
}