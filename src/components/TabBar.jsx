import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function TabBar() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={12}
    >
      <BottomNavigation>
        <BottomNavigationAction
          label="Homepage"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Gallery"
          icon={<CollectionsIcon />}
          component={Link}
          to="/gallery"
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          component={Link}
          to="/search"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default TabBar;
