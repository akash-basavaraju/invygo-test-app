import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./BarChartRenderer.css";

interface IBarGraphRendererProps {
  chartData: any[];
  barKeysColors: { key: string; color: string }[];
  compareKey: string;
  title: string;
}

export default function BarChartRenderer(props: IBarGraphRendererProps) {
  const { chartData, barKeysColors, compareKey, title } = props;
  return (
    <div className="barchart-container">
      <div className="barchart-graph">
        <BarChart width={350} height={150} data={chartData}>
          <XAxis dataKey={compareKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {barKeysColors.map((keyColor) => {
            return <Bar dataKey={keyColor.key} fill={keyColor.color} />;
          })}
        </BarChart>
      </div>
      <div className="barchart-title">{title}</div>
    </div>
  );
}
