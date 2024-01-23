import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";

function TopHeader() {
  return (
    <div className="TopHeader">
      <Container>
        <p
          style={{
            textAlign: "right",
            color: "#0073DB",
          }}
        >
          <Link href={"/"}>Become a partner</Link>
        </p>
      </Container>
    </div>
  );
}

export default TopHeader;
