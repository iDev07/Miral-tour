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
            <Link href={"/about-us"}>About Us</Link>
          </p>
          <p
            style={{
              textAlign: "right",
              color: "#0073DB",
            }}
          >
            <Link href={"/become-partner"}>Become a partner</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;
