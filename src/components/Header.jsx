import React from "react";

function Header() {
  return (
    <div>
      <div>
        <div class="first" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#2b67ab",
                height: "25px",
                width: "100px",
                margin: "2px",
              }}
            >
              {" "}
              Sales Manual
            </div>

            <div>No. </div>
            <div>16</div>
          </div>
          <p style={{ margin: "-2px" }}>6-Apr-23</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "auto", visibility: "hidden" }}> </div>
          <div style={{ fontWeight: "normal" }}>Voucher class : Sales</div>
          <div style={{ marginLeft: "auto" }}>Wednesady</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "grid", justifyContent: "start" }}>
            <div>Party A/c name : Online Transfer Customer</div>
            <div style={{ fontWeight: "normal" }}>
              {" "}
              Current balance : 30,72,124.97 Dr{" "}
            </div>
            <div> Sales ledger : GST Sales </div>
            <div style={{ fontWeight: "normal" }}>
              {" "}
              Current balance : 82,71,260.99 Cr{" "}
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              fontWeight: "normal",
              marginRight: "250px",
            }}
          >
            Price Level :
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
