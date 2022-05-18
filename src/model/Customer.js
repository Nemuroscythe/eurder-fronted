export default class Customer{

    id;
    firstname;
    lastname;
    email;
    address;
    phoneNumber;

    constructor(id, firstname, lastname, email, address, phoneNumber) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}