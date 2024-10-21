import { ImageList, ImageListItem} from '@mui/material';

function PhotoList({photos}){
  return (
    <ImageList cols={5}>
        {photos.map((photo) =>
        <ImageListItem key={photo.url}>
            <img 
            src={photo.url}
            alt={photo.title}
            />
        </ImageListItem>)}
    </ImageList>
  );
};

export default PhotoList;