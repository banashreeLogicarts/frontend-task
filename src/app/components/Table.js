"use client";
import { useState } from "react";

export default function Table() {
  return (
    <main className="main-content w-full">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 bg-white shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Assets" data={assetsData} columns={assetsColumns} />
            <Card title="Chains" data={chainsData} columns={chainsColumns} />
          </div>
        </div>
      </div>
    </main>
  );
}

const Card = ({ title, data, columns }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 3;
  
 
    const filteredData = data.filter((row) =>
      columns.some((col) =>
        row[col.accessor].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
    const paginatedData = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-gray-800 text-lg font-semibold mb-4">{title}</h2>
  
        <input
  type="text"
  placeholder="🔍 Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full px-5 py-4 text-lg border border-gray-400 rounded-lg shadow-sm bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-gray-700">
            <thead>
              <tr className="border-b bg-gray-100">
                {columns.map((col, i) => (
                  <th key={i} className="py-3 px-4 font-medium">{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    {columns.map((col, j) => (
                      <td key={j} className="py-3 px-4">{row[col.accessor]}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                    No matching results
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 rounded-lg transition ${
                num === currentPage ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

const assetsColumns = [
  { header: "Assets", accessor: "name" },
  { header: "Borrow Volume", accessor: "borrowVolume" },
  { header: "Collateral Volume", accessor: "collateralVolume" },
  { header: "Total Volume", accessor: "totalVolume" },
];

const chainsColumns = [
  { header: "Chain", accessor: "name" },
  { header: "Volume", accessor: "volume" },
  { header: "UAW", accessor: "uaw" },
  { header: "Transactions", accessor: "transactions" },
];

const assetsData = [
  { name: "USDC", borrowVolume: "$20B", collateralVolume: "100M", totalVolume: "1B" },
  { name: "USDT", borrowVolume: "$15B", collateralVolume: "150M", totalVolume: "1.5B" },
  { name: "ETH", borrowVolume: "$12B", collateralVolume: "200M", totalVolume: "2B" },
  { name: "BASE", borrowVolume: "$10B", collateralVolume: "10M", totalVolume: "100M" },
  { name: "ARB", borrowVolume: "$8B", collateralVolume: "50M", totalVolume: "500M" },
];

const chainsData = [
  { name: "Ethereum", volume: "$20B", uaw: "100M", transactions: "1B" },
  { name: "Base", volume: "$16B", uaw: "150M", transactions: "1.5B" },
  { name: "Bera", volume: "$12B", uaw: "200M", transactions: "2B" },
  { name: "Polygon", volume: "$10B", uaw: "10M", transactions: "100M" },
  { name: "Arbitrum", volume: "$8B", uaw: "50M", transactions: "500M" },
];


  