import React from "react";

function Home({ children }) {
  return (
    <div className="bg-white bg-opacity-25 m-2 rounded-xl border-2 border-opacity-25 border-white backdrop-blur-sm backdrop-filter w-full">
      {children}
    </div>
  );
}

export default Home;
