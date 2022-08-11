interface IReportsDataType {
  ageCompare: { age: number; noOfPeople: number }[];
  localityCompare: { locality: string; noOfPeople: number }[];
  guestsCompare: { group: string; noOfPeople: number }[];
  professionCompare: { profession: string; noOfPeople: number }[];
}

export default IReportsDataType;
