export default class Address {
    streetName;
    houseNumber;
    postalCode;
    country;

    constructor(streetName, houseNumber, postalCode, country) {
        this.streetName = streetName;
        this.houseNumber = houseNumber;
        this.postalCode = postalCode;
        this.country = country;
    }
}