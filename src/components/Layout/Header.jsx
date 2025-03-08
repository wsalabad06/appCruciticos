import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionsBoat from '@mui/icons-material/DirectionsBoat';
import Tooltip from "@mui/material/Tooltip";
import MoreIcon from "@mui/icons-material/MoreVert";
import BuildIcon from "@mui/icons-material/Build"; // Ícono de mantenimiento

export default function Header() {
  // Estados para los menús
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElPrincipal, setAnchorElPrincipal] = useState(null);
  const [anchorElMaintenance, setAnchorElMaintenance] = useState(null);

  // Funciones para abrir/cerrar menús
  const handleUserMenuOpen = (event) => setAnchorElUser(event.currentTarget);
  const handleUserMenuClose = () => setAnchorElUser(null);
  const handleOpenPrincipalMenu = (event) => setAnchorElPrincipal(event.currentTarget);
  const handleClosePrincipalMenu = () => setAnchorElPrincipal(null);
  const handleOpenMaintenanceMenu = (event) => setAnchorElMaintenance(event.currentTarget);
  const handleCloseMaintenanceMenu = () => setAnchorElMaintenance(null);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Menú Principal */}
          <IconButton size="large" color="inherit" onClick={handleOpenPrincipalMenu}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorElPrincipal} open={Boolean(anchorElPrincipal)} onClose={handleClosePrincipalMenu}>
            <MenuItem component={Link} to="/catalog-cruise/">Cruceros</MenuItem>
            <MenuItem component={Link} to="/cruise-table/">Mantenimiento Crucero</MenuItem>
            <MenuItem component={Link} to="/room-table/">Mantenimiento Habitación</MenuItem>
            <MenuItem component={Link} to="/ship-table/">Mantenimiento Barco</MenuItem>
            <MenuItem component={Link} to="/reservation-table/">Mantenimiento Reserva</MenuItem>
          </Menu>

          {/* Logo */}
          <Tooltip title="Reserva de Cruceros">
            <IconButton size="large" edge="end" component="a" href="/" color="inherit">
              <DirectionsBoat />
            </IconButton>
          </Tooltip>

          {/* Texto "Cruceros" con funcionalidad */}
          <Button color="inherit" component={Link} to="/catalog-cruise/">
            <Typography variant="h6" component="div">
              Cruceros
            </Typography>
          </Button>

          <Box sx={{ flexGrow: 1 }} />

          {/* Ícono de Mantenimiento */}
          <IconButton size="large" color="inherit" onClick={handleOpenMaintenanceMenu}>
            <BuildIcon />
          </IconButton>

          {/* Menú de Mantenimiento */}
          <Menu anchorEl={anchorElMaintenance} open={Boolean(anchorElMaintenance)} onClose={handleCloseMaintenanceMenu}>
            <MenuItem component={Link} to="/cruise-table/" onClick={handleCloseMaintenanceMenu}>
              Mantenimiento Crucero
            </MenuItem>
            <MenuItem component={Link} to="/room-table/" onClick={handleCloseMaintenanceMenu}>
              Mantenimiento Habitación
            </MenuItem>
            <MenuItem component={Link} to="/ship-table/" onClick={handleCloseMaintenanceMenu}>
              Mantenimiento Barco
            </MenuItem>
            <MenuItem component={Link} to="/reservation-table/" onClick={handleCloseMaintenanceMenu}>
              Mantenimiento Reserva
            </MenuItem>
          </Menu>

          {/* Ícono de Compras */}
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Ícono de Notificaciones */}
          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Menú Usuario */}
          <IconButton size="large" color="inherit" onClick={handleUserMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleUserMenuClose}>
            <MenuItem component={Link} to="/user/login">Login</MenuItem>
            <MenuItem component={Link} to="/user/create">Registrarse</MenuItem>
            <MenuItem component={Link} to="/user/logout">Logout</MenuItem>
          </Menu>

          {/* Ícono de Menú Pequeño - NO FUNCIONAL */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
