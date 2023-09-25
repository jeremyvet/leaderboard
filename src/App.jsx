import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid, Table } from "@mui/material";
import MaterialReactTable from "material-react-table";

function App() {
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    fetch("http://150.220.144.108:1337/score").then((res) => {
      res.json().then((json) => {
        setTableData(json);
      });
    });
  }, []);

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "score",
      header: "Score",
    },
    {
      accessorKey: "rank",
      header: "Rank",
    }
  ]

  return (
    <>
      <div class="wrapper">
        <h1 class="title">Jeremiah's Revenge Leaderboard</h1>

          <MaterialReactTable 
              columns={columns}
              data={tableData}
              enableClickToCopy={true}
              
          />

      </div>
    </>
  );
}

export default App;
