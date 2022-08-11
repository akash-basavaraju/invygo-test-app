import { useEffect, useState } from "react";
import BarChartRenderer from "../../components/BarChartRenderer";
import Loader from "../../components/Loader";
import APIService from "../../services/APIService";
import IReportsDataType from "../../types/IReportsDataType";
import "./Reports.css";

export default function Reports() {
  const [reportsData, setReportsData] = useState<IReportsDataType>();

  useEffect(() => {
    const getData = async () => {
      const data = await APIService.getRegistrationReport();
      setReportsData(data);
    };

    getData();
  }, []);

  if (!reportsData) {
    return <Loader />;
  }

  return (
    <div className="reports-container">
      <div className="reports-header">Reports</div>
      <div className="reports-charts">
        <BarChartRenderer
          title="Number of People in Age Range"
          chartData={reportsData.ageCompare}
          barKeysColors={[{ key: "noOfPeople", color: "red" }]}
          compareKey="age"
        />
        <BarChartRenderer
          title="Number of People by Locality"
          chartData={reportsData.localityCompare}
          barKeysColors={[{ key: "noOfPeople", color: "blue" }]}
          compareKey="locality"
        />
        <BarChartRenderer
          title="Number of People by Guests Count"
          chartData={reportsData.guestsCompare}
          barKeysColors={[{ key: "noOfPeople", color: "green" }]}
          compareKey="group"
        />
        <BarChartRenderer
          title="Number of People by Profession"
          chartData={[
            { profession: "Students", noOfPeople: 40 },
            { profession: "Professionals", noOfPeople: 80 },
          ]}
          barKeysColors={[{ key: "noOfPeople", color: "purple" }]}
          compareKey="profession"
        />
      </div>
    </div>
  );
}
