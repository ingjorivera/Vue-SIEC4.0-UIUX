
export default class CountryService {

    getCountries() {
        return fetch('../store/countries.json').then(res => res.json())
            .then(d => d.data);
    }
}