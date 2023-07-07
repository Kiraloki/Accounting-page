import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Result from "./Result";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./grid.css";

const Grid = ({}) => {
  const [query, setQuery] = useState("");
  const rowData = [
    {
      name: "16'' V/d GM",
      code: 8437,
      gst: "18%",
      qt: "1.0 Pair",
      ratein: 4800.0,
      rate: 4067.8,
      per: "Pair",
      dis: "",
      amt: 4067.8,
    },
    {
      name: "Belt fastener 2.5/8''",
      code: 7326,
      gst: "18%",
      qt: "40.0 Pcs",
      ratein: 9.99,
      rate: 8.47,
      per: "Pcs",
      dis: "",
      amt: 338.8,
    },
    {
      name: "Belt Fastener 3/8''",
      code: 7326,
      gst: "18%",
      qt: "3.0 Pcs",
      ratein: 12.33,
      rate: 10.45,
      per: "Pcs",
      dis: "",
      amt: 31.35,
    },
    {},
    {
      amt: 4437,
    },
    { name: "CGST", amt: 399.41 },
    { name: "SCST", amt: 399.41 },
    { name: "Round Off", amt: 0.23 },
  ];

  const columnDefs = [
    {
      field: "name",
      headerName: "Name of Item",
      width: 520,
    },
    {
      field: "code",
      headerName: "HSN/SAC Code",
      width: 200,
    },
    {
      field: "gst",
      headerName: "GST%",
      width: 100,
    },
    {
      field: "qt",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "ratein",
      headerName: "Rate (Incl. of Tax)",
      width: 200,
    },
    {
      field: "rate",
      headerName: "Rate",
      width: 100,
    },
    {
      field: "per",
      headerName: "per",
      width: 100,
    },
    {
      field: "dis",
      headerName: "Disc %",
      width: 100,
    },
    {
      field: "amt",
      headerName: "Amount",
      width: 100,
    },
  ];

  function handleSearch(event) {
    if (event.rowIndex === 3) {
      if (event.newValue) {
        setQuery(event.newValue);
      }
    }
    console.log(event);
  }

  const defaultColDef = useMemo(() => ({
    editable: true,
  }));

  return (
    <div style={{ position: "relative" }}>
      <div
        className="ag-theme-alpine"
        style={{ height: "70vh", width: "100%" }}
      >
        <AgGridReact
          onCellEditingStopped={handleSearch}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
      {query && <Result query={query} />}
      <div style={{ display: "flex", height: "20vh" }}>
        <div style={{ marginLeft: "20px" }}>Narration:</div>
        <div style={{ marginLeft: "1350px" }}>5237.00</div>
      </div>
    </div>
  );
};

export default Grid;
