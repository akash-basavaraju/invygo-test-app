interface IRegistrationType {
  name: string;
  age: number;
  dob: string;
  profession: string;
  locality: string;
  noOfGuests: number;
  address: string;
  [key: string]: string | number;
}

export default IRegistrationType;
