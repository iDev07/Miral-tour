import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

function TopHeader() {
  const { t } = useTranslation();
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
            <Link href={"/about-us"}>{t("menu.about_us")}</Link>
          </p>
          <p
            style={{
              textAlign: "right",
              color: "#0073DB",
            }}
          >
            <Link href={"/become-partner"}>{t("menu.partnership")}</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;
