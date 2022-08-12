import { render, screen } from "@testing-library/react";
import Reports from "../../pages/Reports";
import APIService from "../../services/APIService";

jest.mock("../../services/APIService.ts", () => {
  return {
    __esModule: true,
    default: {
      getRegistrationReport: jest.fn(),
    },
  };
});

jest.mock("recharts", () => {
  return {
    __esModule: true,
    Bar: jest.fn(),
    BarChart: jest.fn(),
    Legend: jest.fn(),
    Tooltip: jest.fn(),
    XAxis: jest.fn(),
    YAxis: jest.fn(),
  };
});

describe("Reports Page", () => {
  test("renders reports page", async () => {
    (APIService.getRegistrationReport as any).mockResolvedValue({
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

    render(<Reports />);

    const headingDiv = await screen.findByText("Reports");
    expect(headingDiv).toBeTruthy();
  });

  test("top have 4 chart cards", async () => {
    (APIService.getRegistrationReport as any).mockResolvedValue({
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

    render(<Reports />);

    const chartCards = await screen.findAllByTestId("barchart-card");
    expect(chartCards).toHaveLength(4);
  });
});
