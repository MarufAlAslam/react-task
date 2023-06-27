import React from "react";
import Sidebar from "../../components/sidebar";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12 p-2 bg-yellow-50"></div>
      </div>
    </div>
  );
};

export default Home;
