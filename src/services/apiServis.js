const apiUrl = 'https://dashboard.elering.ee/api';

export const getPriceDate = async () => {
    const from = '2020-05-31T20:59:59.999Z';
    const until = '2020-06-30T20:59:59.999Z';

    const data = new URLSearchParams({
        start: from,
        end: until,
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`);

    return await response.json();
};

export const getCurrentPrice = async () => {
    const countryCode = 'EE';
    const response = await fetch(`${apiUrl}/nps/price/${countryCode}/current`);
    return await response.json();
};
