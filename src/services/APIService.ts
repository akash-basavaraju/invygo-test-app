import IRegistrationType from "../types/IRegistrationType";

class APIService {
  putRegistration(data: IRegistrationType) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

  getRegistrations(): Promise<IRegistrationType[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          },
          {
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          },
          {
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          },
          {
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          },
          {
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          },
          {
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          },
        ]);
      }, 2000);
    });
  }

  getRegistrationReport() {}
}

export default new APIService();
