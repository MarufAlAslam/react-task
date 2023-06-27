import React from "react";
import Sidebar from "../../components/sidebar";
import Main from "../../components/main";

const Home = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-start items-start">
        <div className="md:w-2/12 w-full">
          <Sidebar />
        </div>
        <div className="md:w-9/12 w-full">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
