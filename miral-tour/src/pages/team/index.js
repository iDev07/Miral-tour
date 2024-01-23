import Head from "next/head";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
const teamMembers = [
  {
    id: 1,
    name: "User",
    role: "Travel",
    image: "/img/user.png",
  },
  {
    id: 2,
    name: "User",
    role: "Travel",
    image: "/img/user.png",
  },
  {
    id: 3,
    name: "User",
    role: "Travel",
    image: "/img/user.png",
  },
  // {
  //   id: 4,
  //   name: "Test User",
  //   role: "Travel",
  //   image: "/img/user.png",
  // },
];

function Team() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("menu.team")}</title>
      </Head>
      <div className="team pt_100">
        <div className="team_wrapper">
          <Container maxWidth="lg">
            <div className="this_wrap">
              <div className="intro">
                <h1>{t("menu.team")}</h1>
              </div>
              <div className="persons_wrap">
                {teamMembers.map((teamMember) => (
                  <div className="col" key={teamMember.id}>
                    <img src={teamMember.image} alt="Our team" />
                    <h3>{teamMember.name}</h3>
                    <p>{teamMember.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Team;
