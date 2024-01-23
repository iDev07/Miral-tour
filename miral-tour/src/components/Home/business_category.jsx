import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Modal, Box } from "@mui/material";

function Business_category() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="business_category category">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="business_form">
            <div className="form_wrapper">
              {/* <div className="intro">
                <h1>Fill the form!</h1>
              </div> */}
              <form>
                <div className="labels">
                  <div className="label">
                    <p>{t("businessForm.heading1")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading2")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading3")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading4")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label date_form">
                    <p>{t("businessForm.heading5")}</p>
                    <div className="dates">
                      <input type="date" />
                      <input type="date" />
                    </div>
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading6")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading7")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading8")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading9")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading10")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading11")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                  <div className="label">
                    <p>{t("businessForm.heading12")}</p>
                    <input type="text" autoComplete="true" />
                  </div>
                </div>
                <div className="submit_form">
                  <button type="submit">{t("businessForm.submitForm")}</button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="business_wrapper">
        <Container maxWidth="lg">
          <div className="intro">
            <h1>{t("business.title")}</h1>
          </div>
          <div className="this_wrap">
            <div className="left_box">
              <img src="/img/business.png" alt="Business tourism" />
            </div>
            <div className="right_box">
              <div>
                <h2>{t("business.heading")}</h2>
                <Button onClick={handleOpen}>{t("business.formBtn")}</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Business_category;
