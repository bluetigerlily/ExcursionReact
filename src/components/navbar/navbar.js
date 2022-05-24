import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { useIdentityContext } from 'react-netlify-identity-widget'

export function Login() {
  const { loginUser, signupUser } = useIdentityContext()
  const formRef = React.useRef()
  const signup = () => {
    const email = formRef.current.email.value
    const password = formRef.current.password.value
    signupUser(email, password)
      .then((user) => console.log("Success! Signed up", user))
      .catch((err) => console.error(err))
  }

}

const pages = ['Products', 'Pricing', 'Booking' ];
const settings = ['Login', 'Logout'];
const preventDefault = (event) => event.preventDefault();


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const IdentityModal = React.lazy(() => import("react-netlify-identity-widget"))
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const isLoggedIn = identity && identity.isLoggedIn

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar sx={{ bgcolor: 'black' }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EXCURSION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} underline="hover">
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
  
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EXCURSION
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                onClick={preventDefault}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={[page]}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >           
                <Link style={{textDecoration: "none", color: "white"}}  to={`/${page}`}>
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Haley Moses" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                  <Link style={{textDecoration: "none", color: "white"}}  to={`/${setting}`}>
                      {setting}

                      <button className="btn" onClick={() => setDialog(isLoggedIn)}>
        {isLoggedIn ? "LOG OUT" : "LOG IN"}
      </button>
      <React.Suspense fallback="loading...">
        <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      </React.Suspense>
                  
                    </Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;