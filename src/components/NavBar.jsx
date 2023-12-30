import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              component=""
              sx={{ flexGrow: 1, color: "blue" }}>
              Bank of People
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
