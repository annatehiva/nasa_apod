import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Snackbar, Slide, Fade } from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function ShareButton({ url }) {
  const [copied, setCopied] = useState(false);
  const [state, setState] = useState({ open: false, Transition: Fade });

  const handleClick = (Transition) => {
    setState({ open: true, Transition });
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <>
      <CopyToClipboard
        text={url}
        onCopy={() => {
          setCopied(true);
          console.log("URL copied to clipboard:", url);
        }}
      >
        <Button
          onClick={() => handleClick(SlideTransition)}
          variant="contained"
          color={copied ? "success" : "primary"}
          sx={{ margin: "0.5rem 0" }}
        >
          {copied ? "Copied!" : "Share"}
        </Button>
      </CopyToClipboard>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={"Link copied to clipboard !"}
        key={state.Transition.name}
        autoHideDuration={2000}
      />
    </>
  );
}
export default ShareButton;
