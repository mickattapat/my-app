export interface IUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressModel;
  phone: string;
  website: string;
  company: ICompanyModel;
}

export interface ICompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoModel;
}

export interface IGeoModel {
  lat: string;
  lng: string;
}