import IRegistrationType from "../types/IRegistrationType";
import IReportsDataType from "../types/IReportsDataType";

class APIService {
  async putRegistration(data: IRegistrationType) {
    const response = await fetch("https://invygoput.free.beeceptor.com", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "655a9b40",
      },
      body: JSON.stringify(data),
    });
    const resp = await response.json();
    return resp;
  }

  async getRegistrations(): Promise<IRegistrationType[]> {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(
    //       new Array(20).fill({
    //         name: "Akash Basavaraju",
    //         age: 27,
    //         dob: "12/10/1995",
    //         profession: "Engineer",
    //         locality: "Bangalore",
    //         noOfGuests: 1,
    //         address: "bangalore",
    //       })
    //     );
    //   }, 2000);
    // });

    const response = await fetch(
      "https://my.api.mockaroo.com/registrations.json?key=655a9b40",
      {
        method: "GET",
      }
    );
    const resp = await response.json();
    return resp;
  }

  async getRegistrationReport(): Promise<IReportsDataType> {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       ageCompare: [
    //         { age: 20, noOfPeople: 40 },
    //         { age: 22, noOfPeople: 80 },
    //       ],
    //       localityCompare: [
    //         { locality: "bangalore", noOfPeople: 40 },
    //         { locality: "chennai", noOfPeople: 80 },
    //       ],
    //       guestsCompare: [
    //         { group: "0", noOfPeople: 40 },
    //         { group: "1", noOfPeople: 80 },
    //         { group: "2", noOfPeople: 100 },
    //       ],
    //       professionCompare: [
    //         { profession: "Students", noOfPeople: 40 },
    //         { profession: "Professionals", noOfPeople: 80 },
    //       ],
    //     });
    //   }, 2000);
    // });

    const response = await fetch(
      "https://my.api.mockaroo.com/reportsdata.json?key=655a9b40",
      {
        method: "GET",
      }
    );
    const resp = await response.json();
    return resp;
  }
}

export default new APIService();
