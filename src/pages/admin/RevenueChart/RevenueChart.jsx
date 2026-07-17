import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    month: "Jan",
    amount: 50000,
  },

  {
    month: "Feb",
    amount: 80000,
  },

  {
    month: "Mar",
    amount: 120000,
  },

  {
    month: "Apr",
    amount: 180000,
  },
];

function RevenueChart() {
  return (
    <div className="box">
      <h2>Revenue Analytics</h2>

      <LineChart width={650} height={300} data={data}>
        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line type="monotone" dataKey="amount" />
      </LineChart>
    </div>
  );
}

export default RevenueChart;
