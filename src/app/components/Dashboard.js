

export default function Dashboard() {
  const cards = [
    {
      id: 1,
      title: "Total Wallets Scored",
      value: "12,750",
      color: "bg-[#ede9fe]",
      textColor: "text-[#8b5cf6]", 
      icon: (
        <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="#8b5cf6" 
          >
            <path d="M2 6a2 2 0 012-2h14a4 4 0 010 8H4a2 2 0 01-2-2V6zm0 8a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </div>
      ),
    },
    
    {
      id: 2,
      title: "Total Transactions Tracked",
      value: "40.12K",
      color: "bg-pink-100",
      textColor: "text-[#e960ec]",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="#e960ec"
          >
            <path d="M12 3l4 4H8l4-4zm-1 4v8h2V7h-2zM4 15l4 4H4v-4zm16 4h-4l4-4v4z" />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: "Total Chains Scored",
      value: "110",
      color: "bg-blue-100",
      textColor: "text-blue-600",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.06 10.94a4 4 0 015.66 5.66l-3 3a4 4 0 11-5.66-5.66l1.41-1.41-1.41-1.41a4 4 0 115.66-5.66l3 3a4 4 0 01-5.66 5.66l-1.41 1.41 1.41 1.41z" />
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      title: "zkTLS Real World Scores",
      value: "8,654",
      color: "bg-teal-100",
      textColor: "text-[#34d399]",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-teal-600"
            viewBox="0 0 24 24"
            fill="#34d399"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13.93v3.09a1 1 0 01-2 0V6.07a6.004 6.004 0 00-4.664 4.664h3.09a1 1 0 010 2h-3.09a6.004 6.004 0 004.664 4.664v-3.09a1 1 0 012 0v3.09a6.004 6.004 0 004.664-4.664h-3.09a1 1 0 010-2h3.09A6.004 6.004 0 0013 6.07z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="p-10 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-8 rounded-2xl shadow-xl ${card.color} 
            hover:shadow-2xl transition duration-300 transform hover:-translate-y-2`}
          >
            {card.icon}
            <p className={`mt-6 text-4xl font-bold ${card.textColor}`}>
              {card.value}
            </p>
            <p className="mt-2 text-lg text-gray-600">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

