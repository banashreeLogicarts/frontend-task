"use client";
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer, 
    CartesianGrid, 
    LineChart, 
    Line,
    Legend,
    AreaChart,
    ComposedChart, 
    LabelList,
    Scatter,
    Area
} from 'recharts';


import { useState, useEffect } from 'react';
const sortedData = [
    {  value: 1500 },
    {  value: 1200 },
    {  value: 1000 },
    {  value: 900},
    {  value: 600 }
  ].sort((a, b) => a.value - b.value); 

const data = [
    { value: 500, lineValue: 500 },
    {  value: 400, lineValue: 450 },
    {  value: 300, lineValue: 400 },
    { value: 150, lineValue: 350 },
    {  value: 100, lineValue: 300 }
];

export default function OrderOverview() {
  const [activeTab, setActiveTab] = useState('bar');
  const [dotIndex, setDotIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex(prev => (prev + 1) % data.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="card col-span-12 lg:col-span-8 bg-white shadow-lg h-[500px] md:h-[600px] lg:h-[700px] p-4 relative">
     
      <button
       
        className="absolute top-2 left-4 z-10 flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition-shadow duration-200"
      >
        All Chains
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-3 w-3 text-slate-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

   
      <div className="flex space-x-4 h-full">
   
        <div className="w-1/6 h-[500px] bg-white dark:bg-navy-600 rounded-2xl p-2 shadow-md hover:shadow-lg transition-shadow duration-200 mt-12 flex flex-col justify-between">
        
          <div className="flex items-center justify-start mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-6 w-6 text-gray-500"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </div>
          </div>

        
          <div className="flex flex-col items-center space-y-2">
            <p className=" font-soliden text-lg text-gray-400 dark:text-navy-300">
              Wallet
            </p>
            <p className="text-3xl font-soliden  text-gray-400 dark:text-navy-100">
              7000
            </p>
          </div>
        </div>

      
        <div className="w-full bg-white dark:bg-navy-600 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="flex justify-end space-x-2 mb-4">
  {['Overview', 'Liquidations', 'loan-sizes'].map((tab, index) => {
    const buttonColors = ['bg-[#8b5cf6]', 'bg-[#e960ec]', 'bg-[#34d399]'];
    
    return (
      <button
        key={tab}
        onClick={() => setActiveTab(tab.toLowerCase())}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          activeTab === tab.toLowerCase()
            ? `${buttonColors[index]} text-white`
            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
        }`}
      >
        {tab}
      </button>
    );
  })}
</div>


       
          <div className="w-full h-[400px] relative">
  <ResponsiveContainer width="100%" height="100%">
    {activeTab === 'overview' && (
        <ComposedChart data={data}>
  <XAxis dataKey="name" tick={{ fill: '#a3a3a3' }} />
  <Tooltip />


  <Area
    type="monotone"
    dataKey="value"
    stroke="#8b5cf6"
    strokeWidth={2}
    fill="none"
    transform="translate(0, -30)"
  />


  <Bar dataKey="value" barSize={200} fill="#8b5cf6" radius={[25, 25, 25, 25]}>
    <LabelList 
      dataKey="value" 
      position="inside" 
      fill="white" 
      fontSize={16} 
      fontWeight="bold" 
      dy={10}  
    />
  </Bar>
</ComposedChart>

    )}

    {activeTab === 'liquidations' && (
        <ComposedChart data={sortedData}>
    <XAxis dataKey="name" tick={{ fill: '#a3a3a3' }} />
    <Tooltip />


    <Area type="monotone" dataKey="value" stroke="#e960ec" strokeWidth={2} fill="none" transform="translate(0, -30)" />

 
    <Bar dataKey="value" barSize={200} fill="#e960ec" radius={[25, 25, 25, 25]}>
      <LabelList dataKey="value" position="inside" fill="white" fontSize={14}  dy={60} />
    </Bar>
  </ComposedChart>
    )}

    {activeTab === 'loan-sizes' && (
        <ComposedChart 
  data={[...data]
    .map((d, i) => ({ ...d, value: d.value * (i % 2 === 0 ? 0.8 : 1.2) }))
    .sort((a, b) => a.value - b.value) 
  }
>
  <XAxis dataKey="name" tick={{ fill: '#a3a3a3' }} />
  <Tooltip />


  <Area 
    type="monotone" 
    dataKey="value" 
    stroke="#34d399" 
    strokeWidth={2} 
    fill="none" 
    transform="translate(0, -30)" 
  />

  <Bar dataKey="value" barSize={200} fill="#34d399" radius={[25, 25, 25, 25]}>

    <LabelList 
      dataKey="value" 
      position="inside" 
      fill="white" 
      fontSize={16} 
      fontWeight="bold" 
      dy={10}  
    />
  </Bar>
</ComposedChart>

    )}
  </ResponsiveContainer>
</div>

        </div>
      </div>
    </div>
  );
}
