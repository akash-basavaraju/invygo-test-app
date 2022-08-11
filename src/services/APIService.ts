import IRegistrationType from "../types/IRegistrationType";
import IReportsDataType from "../types/IReportsDataType";

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
        resolve(
          new Array(20).fill({
            name: "Akash Basavaraju",
            age: 27,
            dob: "12/10/1995",
            profession: "Engineer",
            locality: "Bangalore",
            noOfGuests: 1,
            address: "bangalore",
          })
        );
      }, 2000);
    });
  }

  getRegistrationReport(): Promise<IReportsDataType> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ageCompare: [
            { age: 20, noOfPeople: 40 },
            { age: 22, noOfPeople: 80 },
          ],
          localityCompare: [
            { locality: "bangalore", noOfPeople: 40 },
            { locality: "chennai", noOfPeople: 80 },
          ],
          guestsCompare: [
            { group: "0", noOfPeople: 40 },
            { group: "1", noOfPeople: 80 },
            { group: "2", noOfPeople: 100 },
          ],
          professionCompare: [
            { profession: "Students", noOfPeople: 40 },
            { profession: "Professionals", noOfPeople: 80 },
          ],
        });
      }, 2000);
    });
  }
}

export default new APIService();
