import APIService from "../../services/APIService";

describe("API Service tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ foo: "bar" }),
    });
  });

  test("checks the api service putRegistration", async () => {
    const response = await APIService.putRegistration({
      name: "Akash",
      age: 27,
      dob: "12/10/1995",
      profession: "Engineer",
      locality: "Bangalore",
      noOfGuests: 2,
      address: "bangalore",
    });
    expect(response).toEqual({ foo: "bar" });
  });

  test("checks the api service getRegistrations", async () => {
    const response = await APIService.getRegistrations();
    expect(response).toEqual({ foo: "bar" });
  });

  test("checks the api service getRegistrationReport", async () => {
    const response = await APIService.getRegistrationReport();
    expect(response).toEqual({ foo: "bar" });
  });
});
