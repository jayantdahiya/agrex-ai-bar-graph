import { useState, useEffect, createContext } from "react";
import "./App.css";

import ValueRange from "./components/ValueRange";
import DateRange from "./components/DateRange";
import BarGraph from "./components/BarGraph";
import sampleData from "./data/data";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    console.log(sampleData);
    setData(sampleData);
    setFilteredData(sampleData);
    console.log(filteredData);
  }, []);

  const filterResult = () => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        startDate && endDate && itemDate >= startDate && itemDate <= endDate
      );
    });
    console.log(filtered);
    setFilteredData(filtered);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-auto">
        <AppContext.Provider
          value={{
            filteredData,
            setStartDate,
            setEndDate,
            startDate,
            endDate,
          }}
        >
          <div className="flex flex-col">
            <div className="border-2 border-gray-600 rounded-lg m-2  p-2 items-center">
              {/* <ValueRange /> */}
              <DateRange />
              <div className="text-right">
              <button
                className="border-2 border-green-500 bg-green-300 rounded-lg m-2 p-2 hover:bg-green-500 hover:text-white text-right"
                onClick={() => {
                  filterResult();
                }}
              >
                Filter Result
              </button>
              </div>
            </div>
            <div className="w-[80vw] h-[40vh] m-auto lg:w-[40vw] lg:h-[50vh] p-2">
              <BarGraph data={filteredData} />
            </div>
          </div>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
