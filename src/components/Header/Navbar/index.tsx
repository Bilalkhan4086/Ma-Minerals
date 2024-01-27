import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import logo from "../../../Images/logo.webp"
import logo2 from "../../../Images/logo2.webp"
import "./styles.css"
import { Link } from "@mui/material"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children: any
  window?: () => Window
}

const drawerWidth = 240
const navItems = [
  { name: "Home", link: "/" },
  { name: "Gems", link: "/gems" },
  { name: "About", link: "/about" },
  { name: "Teams", link: "/about#teams" },
  { name: "Gallery", link: "/gallery" },
]

export default function DrawerAppBar(props: Props) {
  const { window, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          flex: 1,
          py: 2,
          background:
            "linear-gradient(90deg, rgba(0,42,76,1) 19%, rgba(203,175,34,1) 72%)",
          boxShadow: "none",
        }}
      >
        <img src={logo} style={{ width: "100px", height: "50px" }} alt="Logo" />
        <img
          src={logo2}
          className="logoText"
          style={{ width: "130px", height: "35px" }}
          alt="Logo"
        />
      </Box>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              href={item?.link}
              sx={{ textAlign: "center", color: "white" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,42,76,1) 19%, rgba(203,175,34,1) 72%)",
          boxShadow: "none",
        }}
        component="nav"
      >
        <Toolbar>
          <Box sx={{ flex: 1, my: 2 }}>
            <img
              src={logo}
              style={{ width: "100px", height: "50px" }}
              alt="Logo"
            />
            <img
              src={logo2}
              className="logoText"
              style={{ width: "130px", height: "35px" }}
              alt="Logo"
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(item => (
              <Link
                href={item.link}
                key={item.link}
                sx={{
                  color: "rgba(0,42,76,1)",
                  textDecoration: "none",
                  mx: 2,
                  "@media (max-width:700px)": {
                    mx: 1,
                  },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "rgba(0,42,76,1)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
