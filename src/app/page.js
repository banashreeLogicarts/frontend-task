import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Table from "./components/Table";

export default function Home() {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="flex flex-col gap-0">
        <Orders />
</div>
      <Table />

      
  
    </div>
  );
}
