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
          title="Number of People Age Range"
          chartData={[
            { age: 20, noOfPeople: 40 },
            { age: 22, noOfPeople: 80 },
          ]}
          barKeysColors={[{ key: "age", color: "red" }]}
          compareKey="noOfPeople"
        />
      </div>
    </div>
  );
}
