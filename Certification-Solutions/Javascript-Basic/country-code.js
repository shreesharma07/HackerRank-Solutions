
const request = require('request');

const fetchResponse = (url) => {
    return new Promise((res, rej) => {
        request(url, (err, resp, data) => {
            if (err) rej(err);
            res(JSON.parse(data));
        })
    })
}

async function getCountryName(country_code) {
    let pgNo = 1;
    let country = null;

    while (country === null) {
        let url = `https://jsonmock.hackerrank.com/api/countries?page=${pgNo}`;
        const response = await fetchResponse(url);

        response.data.forEach((el, index) => {
            console.log({data:response.data[index]})
            if (response.data[index].alpha2Code + ''.toUpperCase() === country_code + ''.toUpperCase()) {
                country = response.data[index].name;
            }
        })
        if (response.total_pages == pgNo++) {
            break;
        }
    }


    if (country === null) {
        throw new Error("Country code not found.");
    } else {
        return country;
    }
}

