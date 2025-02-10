import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const onChainData = [
    { name: "BTC Inflows", value: 500 },
    { name: "BTC Outflows", value: 300 },
    { name: "Active Wallets", value: 700 },
  ];

  const handleLogin = () => {
    alert("Login functionality coming soon!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Crypto AI Dashboard</h1>
        <p className="text-lg text-gray-600">تحلیل حرفه‌ای و لحظه‌ای بازار کریپتو</p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">ورود به داشبورد</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="ایمیل یا شماره تلفن"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          ورود
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">تحلیل آنچین</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={onChainData}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;