import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@mui/material";

function ShareButton({ url }) {
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard
      text={url}
      onCopy={() => {
        setCopied(true);
        console.log("URL copied to clipboard:", url);
      }}
    >
      <Button
        variant="contained"
        color={copied ? "success" : "primary"}
        sx={{ margin: "0.5rem 0" }}
      >
        {copied ? "Copied!" : "Share"}
      </Button>
    </CopyToClipboard>
  );
}
export default ShareButton;
