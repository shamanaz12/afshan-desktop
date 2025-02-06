import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      {/* Dashboard Overview */}
      <section className="my-4">
        <h2 className="text-xl font-semibold">Dashboard Overview</h2>
        <div className="flex justify-between gap-6">
          <div className="bg-yellow-500 text-white p-4 rounded-md w-1/4">
            <h3>Total Orders</h3>
            <p>150 Orders</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-md w-1/4">
            <h3>Total Sales</h3>
            <p>$2,500</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-md w-1/4">
            <h3>Pending Orders</h3>
            <p>25 Orders</p>
          </div>
        </div>
      </section>
      
      {/* Product Management */}
      <section className="my-4">
        <h2 className="text-xl font-semibold">Product Management</h2>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Add New Dish
        </button>
      </section>

      {/* Order Management */}
      <section className="my-4">
        <h2 className="text-xl font-semibold">Order Management</h2>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
          View All Orders
        </button>
      </section>

      {/* Customer Management */}
      <section className="my-4">
        <h2 className="text-xl font-semibold">Customer Management</h2>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-md">
          View Customers
        </button>
      </section>

      {/* Analytics */}
      <section className="my-4">
        <h2 className="text-xl font-semibold">Sales & Analytics</h2>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-md">
          View Reports
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
