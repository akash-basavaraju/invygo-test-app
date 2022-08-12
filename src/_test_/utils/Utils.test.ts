import casmelToPascal from "../../utils/Utils";

test("checks util casmelToPascal function", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(casmelToPascal("noOfGuests")).toEqual("No Of Guests");
});
