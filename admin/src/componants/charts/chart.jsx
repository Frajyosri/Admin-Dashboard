import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import "./chart.css"
const Chart = ({ title, data}) => {
    return (
        <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <XAxis dataKey="Date_cmd" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="_count._all" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Chart;
