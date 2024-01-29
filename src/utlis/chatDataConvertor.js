import moment from "moment";

export default function chatDataConventor(priceData) {
return priceData.map((data) => ({
    ...data, 
    hour: moment.unix(data.timestamp).format('hh'),
}));
}