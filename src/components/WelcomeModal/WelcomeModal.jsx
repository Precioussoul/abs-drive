import { Close } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Modal, Tooltip } from "@mui/material";
import React from "react";
import "./WelcomeModal.scss";

const WelcomeModal = ({ open, handleClose, mode }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,.7)" } }}
    >
      <Box
        sx={{
          width: { xs: "90vw", sm: "80vw", xl: "50vw" },
          height: { xs: "80vh", sm: "60vh", md: "70vh", xl: "65vh" },
          padding: 2,
          backgroundColor: "background.default",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <div className="welcome-logo">
          <img src="images/hbs-logo.png" alt="abs-logo" />
        </div>
        <div className="welcome-text-box">
          <p className={`welcome-text ${mode}`}>
            This project is developed by&nbsp;
            <strong>
              <a href="https://www.linkedin.com/in/sofiyullah-abdullah/">
                Abdullah Sofiyullah Folorunsho
              </a>
            </strong>
            &nbsp;under the supervision of&nbsp;
            <strong>
              <a href="https://scholar.google.com/citations?user=QaKXHeQAAAAJ&hl=en">
                Engr. Dr. Abdulahi. Abiodun. Badrudeen
              </a>
            </strong>
            &nbsp;in the department of computer engineering, Federal polytechnic
            Ede, 2020/2021 Session.
          </p>
        </div>
        <div className="welcome-pointers">
          <div className="welcome-image">
            <img src="images/FPE_Logo.png" alt="Federal Polytechnic Ede" />
          </div>
          <div className="welcome-avatar">
            <AvatarGroup>
              <Tooltip title="Abdullah Sofiyullah">
                <Avatar
                  alt="Abdullah Sofiyullah folorunsho"
                  src="images/sofiyullah-abs.png"
                  sx={{
                    width: { xs: 80, sm: 120, md: 180 },
                    height: { xs: 80, sm: 120, md: 180 },
                  }}
                />
              </Tooltip>

              <Tooltip title="Eng.Dr. Badrudeen A.A">
                <Avatar
                  alt="Eng.Dr.badrudeen.A.A"
                  src="images/badr-abs.jpg"
                  sx={{
                    width: { xs: 60, sm: 90, md: 150 },
                    height: { xs: 60, sm: 90, md: 150 },
                  }}
                />
              </Tooltip>
            </AvatarGroup>
          </div>
          <Close
            className={`welcome-close-btn ${mode}`}
            fontSize="large"
            onClick={handleClose}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default WelcomeModal;
