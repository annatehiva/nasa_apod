import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import ShareButton from "./ShareButton";

function PhotoCard({ url, title, copyright, media_type }) {
  let imageSrc;

  // Set image source based on media type
  if (media_type === "video") {
    imageSrc = "src/assets/video_type.png";
  } else if (media_type === "other") {
    imageSrc = "src/assets/nasa.png";
  } else {
    imageSrc = url;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageSrc}
          title={title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {copyright
              ? copyright
              : "National Aeronautics and Space Administration"}
          </Typography>
        </CardContent>
        <CardActions>
          <ShareButton url={url} />
        </CardActions>
      </Card>
    </Box>
  );
}

export default PhotoCard;
