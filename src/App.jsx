import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import SearchInput from "./component/SearchInput";
import Card from "./component/Card";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SearchInput data={data} setData={setData} />
      <Card data={data} />
    </>
  );
};

export default App;
