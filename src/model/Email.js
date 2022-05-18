export default class Email{
    localPart;
    domain;
    complete;


    constructor(localPart, domain) {
        this.localPart = localPart;
        this.domain = domain;
        this.complete = localPart + '@' + domain;
    }

    get getEmail(){
        return this.complete;
    }
}