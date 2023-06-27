import React from "react";
import Sidebar from "../../components/sidebar";
import Main from "../../components/main";

const Home = () => {
  return (
    <div>
      <div className="flex justify-start items-start">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-9/12">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
