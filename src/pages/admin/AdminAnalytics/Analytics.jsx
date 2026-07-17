// import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import "./Analytics.css";

const Analytics = () => {
  const revenueData = [
    {
      month: "Jan",
      revenue: 50000,
    },

    {
      month: "Feb",
      revenue: 80000,
    },

    {
      month: "Mar",
      revenue: 120000,
    },

    {
      month: "Apr",
      revenue: 150000,
    },

    {
      month: "May",
      revenue: 210000,
    },
  ];

  const studentData = [
    {
      month: "Jan",
      students: 400,
    },

    {
      month: "Feb",
      students: 700,
    },

    {
      month: "Mar",
      students: 1200,
    },

    {
      month: "Apr",
      students: 1800,
    },

    {
      month: "May",
      students: 2500,
    },
  ];

  const courseData = [
    {
      name: "React",
      students: 1200,
    },

    {
      name: "Physics",
      students: 900,
    },

    {
      name: "Math",
      students: 700,
    },

    {
      name: "DSA",
      students: 500,
    },
  ];

  const categoryData = [
    {
      name: "Programming",
      value: 45,
    },

    {
      name: "Science",
      value: 30,
    },

    {
      name: "Math",
      value: 25,
    },
  ];

  return (
    <div className="analytics">
      <h1>📊 Analytics</h1>

      <p className="subtitle">Track your academy growth</p>

      <div className="analytics-cards">
        <div>
          <h2>₹6.5L</h2>
          <p>Total Revenue</p>
        </div>

        <div>
          <h2>12.4K</h2>
          <p>Students</p>
        </div>

        <div>
          <h2>86</h2>
          <p>Courses</p>
        </div>

        <div>
          <h2>92%</h2>
          <p>Completion</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-box">
          <h2>Revenue Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                strokeWidth={4}
                dot={{
                  r: 5,
                }}
                activeDot={{
                  r: 8,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2>Student Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={studentData}>
              <CartesianGrid />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="students" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2>Course Categories</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {categoryData.map((item, index) => (
                  <Cell key={index} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2>Top Courses</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseData} layout="vertical">
              <XAxis type="number" />

              <YAxis dataKey="name" type="category" />

              <Tooltip />

              <Bar dataKey="students" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
