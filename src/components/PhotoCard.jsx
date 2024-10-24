import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import ShareButton from "./ShareButton";

function PhotoCard({ url, title, copyright }) {
  const getYoutubeThumbnail = (url) => {
    if (!url.includes("youtube.com/embed/")) {
      return null;
    }
    const videoId = url?.split("embed/")[1].split("?")[0];
    console.log(videoId);
    return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : null;
  };
  const thumbnailUrl = url ? getYoutubeThumbnail(url) : url;

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
          image={thumbnailUrl || url}
          title={title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {copyright}
          </Typography>
        </CardContent>
        <CardActions>
          <ShareButton url={thumbnailUrl || url} />
        </CardActions>
      </Card>
    </Box>
  );
}

export default PhotoCard;
