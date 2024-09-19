import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Banner from "../assets/logo.png";

const pages = [
  { id: 1, name: "Process" },
  { id: 2, name: "Benefits" },
  { id: 3, name: "Services" },
  { id: 4, name: "Portfolio" },
  { id: 5, name: "FAQ" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#111204" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <a href="/">
            <img
              className="d-block"
              src={Banner}
              alt="First slide"
              width={"100%"}
            />
          </a>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "3%",
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.url}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#ccc",
                  display: "block",
                  fontWeight: "600",
                  textTransform: "none",
                  fontSize: "16px",
                  margin: "10px",
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              variant="contained"
              className="d-view"
              sx={{
                display: { xs: "none", md: "block" },
                color: "#000",
                textTransform: "none",
                fontSize: "16px",
                margin: "10px",
                background: "#b9fd50",
              }}
            >
              Get Started
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#b9fd50" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none"  },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "black", fontWeight: "600" }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
