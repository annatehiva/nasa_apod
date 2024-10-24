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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        {media_type === "image" ? (
          <CardMedia
            sx={{ height: 140 }}
            image={url}
            title={title}
            component="img"
          />
        ) : media_type === "video" ? (
          <video width="100%" height="140" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {copyright}
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
