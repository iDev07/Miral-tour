import React, { useState } from "react";
import { Container, Modal, Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "1px solid transparent",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

function Autorent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <div className="autorent category">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            align="center"
            variant="h4"
            component="h2"
          >
            {t("callBack.title")}
          </Typography>
          <form id="myForm" className="book_now_form">
            <ul>
              <li>
                <label for="name">
                  <span>
                    {t("callBack.name")} <span class="required-star">*</span>
                  </span>
                </label>
                <input type="text" id="name" name="user_name" required />
              </li>
              <li>
                <label for="mail">
                  <span>
                    {t("callBack.mail")} <span class="required-star">*</span>
                  </span>
                </label>
                <input type="email" id="mail" name="user_email" required />
              </li>
              <li>
                <label for="phone-number">
                  <span>
                    {t("callBack.phone")} <span class="required-star">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  id="phone-number"
                  required
                  name="user_phone_number"
                />
              </li>

              <li>
                <input type="submit" value={t("callBack.submit")} />
              </li>
            </ul>
          </form>
        </Box>
      </Modal>
      <div className="autorent_wrapper">
        <Container maxWidth="lg">
          <div className="this_wrap">
            <div className="intro">
              <h1>{t("autorent.title")}</h1>
            </div>
            <div className="autorent_wrap">
              <div className="these_wrapper">
                <div className="left_box">
                  <h1>{t("autorent.heading")}</h1>
                  {/* <button onClick={handleOpen}>{t("autorent.formBtn")}</button> */}
                </div>
                <div className="right_box">
                  <img src="/img/autorent.png" alt="Autorent ALL4U Tourism" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Autorent;
