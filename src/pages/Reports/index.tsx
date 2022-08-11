import BarChartRenderer from "../../components/BarChartRenderer";
import "./Reports.css";

export default function Reports() {
  return (
    <div className="reports-container">
      <div className="reports-header">Reports</div>
      <div className="reports-charts">
        <BarChartRenderer
          title="People Age Range"
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
