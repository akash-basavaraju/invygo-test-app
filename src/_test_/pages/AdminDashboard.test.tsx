import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminDashboard from "../../pages/AdminDashboard";
import APIService from "../../services/APIService";

jest.mock("../../services/APIService.ts", () => {
  return {
    __esModule: true,
    default: {
      getRegistrations: jest.fn(),
    },
  };
});

describe("Admin Dashboard Page Checks", () => {
  test("renders admin dashboard", async () => {
    (APIService.getRegistrations as any).mockResolvedValue(
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

    render(<AdminDashboard />);

    const searchInput = await screen.findByPlaceholderText("Search Here...");
    expect(searchInput).toBeTruthy();
  });

  test("search for a card", async () => {
    (APIService.getRegistrations as any).mockResolvedValue([
      {
        name: "Akash",
        age: 27,
        dob: "12/10/1995",
        profession: "Engineer",
        locality: "Bangalore",
        noOfGuests: 1,
        address: "bangalore",
      },
      {
        name: "Basavaraju",
        age: 27,
        dob: "12/10/1995",
        profession: "Engineer",
        locality: "Bangalore",
        noOfGuests: 1,
        address: "bangalore",
      },
    ]);

    render(<AdminDashboard />);

    const searchInput = await screen.findByPlaceholderText("Search Here...");
    userEvent.type(searchInput, "Akash");

    const registrationCards = await screen.findAllByTestId("dashboard-card");
    expect(registrationCards).toHaveLength(1);
  });

  test("check for registration modal opening", async () => {
    (APIService.getRegistrations as any).mockResolvedValue([
      {
        name: "Akash",
        age: 27,
        dob: "12/10/1995",
        profession: "Engineer",
        locality: "Bangalore",
        noOfGuests: 1,
        address: "bangalore",
      },
      {
        name: "Basavaraju",
        age: 27,
        dob: "12/10/1995",
        profession: "Engineer",
        locality: "Bangalore",
        noOfGuests: 1,
        address: "bangalore",
      },
    ]);

    render(<AdminDashboard />);

    const registrationCards = await screen.findAllByTestId("dashboard-card");
    userEvent.click(registrationCards[0]);

    const modalDiv = await screen.findByTestId("details-modal");
    expect(modalDiv).toBeTruthy();
  });
});
