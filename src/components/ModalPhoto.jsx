import { Modal, Box } from "@mui/material";
import PhotoCard from "./PhotoCard";

function ModalPhoto({ open, handleClose, photo }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          maxHeight: "90vh",
          width: "auto",
          bgcolor: "transparent",
          boxShadow: 24,
          p: 4,
        }}
      >
        <PhotoCard
          url={photo.url}
          title={photo.title}
          copyright={photo.copyright}
          media_type={photo.media_type}
        />
      </Box>
    </Modal>
  );
}

export default ModalPhoto;
