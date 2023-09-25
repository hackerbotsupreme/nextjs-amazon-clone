"use client";
import React from "react";
import { Stats } from "./components/stats";
import { CategorySales } from "./components/charts/category-sales";
import DailyRevenue from "./components/charts/daily-revenue/daily-revenue";
import { MonthlySales } from "./components/charts/monthly-sales";
import { RecentOrders } from "./components/recent-orders";
import { Card, CardHeader } from "@nextui-org/react";

const Page = () => {
  const data = [
    { category: "Electronics", sales: 350 },
    { category: "Clothing", sales: 220 },
    { category: "Books", sales: 180 },
    // Add more category and sales data here
  ];
  const data1 = [
    { date: "2023-09-01", revenue: 1000 },
    { date: "2023-09-02", revenue: 1200 },
    { date: "2023-09-03", revenue: 800 },
    // Add more daily revenue data here
  ];

  const data3 = [
    { month: "January", sales: 1000 },
    { month: "February", sales: 1200 },
    { month: "March", sales: 800 },
    // Add more monthly sales data here
  ];

  return (
    <div className="m-10">
      <div className="flex justify-between gap-5">
        <Stats title="Total category" data={20} />
        <Stats title="Total products" data={20} />
        <Stats title="Total users" data={20} />
        <Stats title="Total orders" data={20} />
        <Stats title="Total revenue" data={20} />
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <div className="h-full min-h-[50vh]">
          <Card className="h-full px-5">
            <CardHeader className="text-lg m-2 font-semibold">
              Daily Revenue
            </CardHeader>
            <DailyRevenue data={data1} />
          </Card>
        </div>
        <div className="h-full">
          <Card className="h-full px-5">
            <CardHeader className="text-lg m-2 font-semibold">
              Monthly Sales
            </CardHeader>
            <MonthlySales data={data3} />
          </Card>
        </div>
        <div className="h-full">
          <Card className="h-full px-5">
            <CardHeader className="text-lg m-2 font-semibold">
              Sale by Category
            </CardHeader>
            <CategorySales data={data} />
          </Card>
        </div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default Page;