import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";

function TopHeader() {
  return (
    <div className="TopHeader">
      <Container>
        <div className="right_links">
          <p
            style={{
              textAlign: "right",
              color: "#0073DB",
            }}
          >
            <Link href={"/"}>Become a partner</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;
