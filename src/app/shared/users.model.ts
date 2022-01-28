export class User {
  name: string;
  username: string;
  email: string;
  address: Address;
  website: string;
  company: Company;

  constructor(data: any) {
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.address = new Address(data.address);
    this.website = data.website;
    this.company = new Company(data.company);
  }
}

export class Address {
  city: string;
  constructor(data: any) {
    this.city = data.city;
  }
}

export class Company {
  name: string;
  constructor(data: any) {
    this.name = data.name;
  }
}

