export class User {
    constructor(
        private email: string,
        private token: string,
        private localId: string,
        private expirationDate: Date
    ){}
    
    //expirationDate is a private variable in the call, we can't excess outside,so, lets create a get method to return the data.

    get expiryDate() {
        return this.expirationDate;
    }

}