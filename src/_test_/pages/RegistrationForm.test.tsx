/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationForm from "../../pages/RegistrationForm";
import APIService from "../../services/APIService";

jest.mock("../../services/APIService.ts", () => {
  return {
    __esModule: true,
    default: { putRegistration: jest.fn() },
  };
});

describe("Registration Form Page checks", () => {
  test("checks RegistrationForm Heading", async () => {
    render(<RegistrationForm />);

    const registrationFormHeading = await screen.findByText(
      "Registration Form"
    );
    expect(registrationFormHeading).toBeTruthy();
  });

  test("checks Some RegistrationForm Fields", async () => {
    render(<RegistrationForm />);

    const nameField = await screen.findByPlaceholderText("Enter Name");
    expect(nameField).toBeTruthy();

    const ageField = await screen.findByPlaceholderText("Enter Age in years");
    expect(ageField).toBeTruthy();

    const dobField = await screen.findByPlaceholderText(
      "Date of Birth in DD/MM/YYYY format"
    );
    expect(dobField).toBeTruthy();

    const professionField = await screen.findByDisplayValue(
      "Select a profession"
    );
    expect(professionField).toBeTruthy();

    const localityField = await screen.findByPlaceholderText("Enter Locality");
    expect(localityField).toBeTruthy();

    const guestsField = await screen.findByPlaceholderText(
      "Enter Number of Guests"
    );
    expect(guestsField).toBeTruthy();

    const addressField = await screen.findByPlaceholderText("Enter Address");
    expect(addressField).toBeTruthy();
  });

  test("checks Registration Truthy Submit", async () => {
    render(<RegistrationForm />);

    const nameField = await screen.findByPlaceholderText("Enter Name");
    userEvent.type(nameField, "Akash");

    const ageField = await screen.findByPlaceholderText("Enter Age in years");
    userEvent.type(ageField, "27");

    const dobField = await screen.findByPlaceholderText(
      "Date of Birth in DD/MM/YYYY format"
    );
    userEvent.type(dobField, "12/10/1995");

    const professionField = await screen.findByTestId("dropdown-profession");
    userEvent.selectOptions(professionField, "Engineer");
    expect(professionField.querySelectorAll("option")[4].selected).toBeTruthy();

    const localityField = await screen.findByPlaceholderText("Enter Locality");
    userEvent.type(localityField, "Bangalore");

    const guestsField = await screen.findByPlaceholderText(
      "Enter Number of Guests"
    );
    userEvent.type(guestsField, "2");

    const addressField = await screen.findByPlaceholderText("Enter Address");
    userEvent.type(addressField, "bangalore");

    const submitButton = await screen.findByText("Submit");
    submitButton.click();

    await waitFor(() => {
      expect(APIService.putRegistration).toBeCalled();
    });
  });
});
