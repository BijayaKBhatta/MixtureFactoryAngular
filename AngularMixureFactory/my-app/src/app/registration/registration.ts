export class Registration {

    public name: string;
    public password: string;
    public shopName: string;
    public address: string;
    public role: string;
    public phoneNum1: string;
    public phoneNum2: string;
    public licenseNumber: string;
    public salesPerson: string;
    public typeOfUser: string;
    public email: string;

    constructor(
        name: string,
        password: string,
        shopName: string,
        address: string,
        role: string,
        phoneNum1: string,
        phoneNum2: string,
        licenseNumber: string,
        salesPerson: string,
        typeOfUser: string,
        email:string
    ) {
        this.name = name;
        this.password = password;
        this.shopName = shopName;
        this.address = address;
        this.role = role;
        this.phoneNum1 = phoneNum1;
        this.phoneNum2 = phoneNum2;
        this.licenseNumber = licenseNumber;
        this.salesPerson = salesPerson;
        this.typeOfUser = typeOfUser;
        this.email = email;

    }
}
