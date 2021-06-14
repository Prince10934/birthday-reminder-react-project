import React from "react";
import Header from "./Components/Header";
import data from "./Temporary Data/data";
import List from "./Components/List";
const App = () => {
  return (
    <>
      <Header />
      <List data={data} />
    </>
  );
};
export default App;
