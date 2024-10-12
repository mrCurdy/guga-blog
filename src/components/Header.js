import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from "./HeaderStyles";

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar >
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <Typography variant='h6' className={classes.title}>Guga Blog</Typography>
            

            <IconButton>
                <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
                </Badge>
            </IconButton>

            <IconButton>
                <AccountCircleIcon />
            </IconButton>
            </Toolbar>
            <Divider />

            <Toolbar className={classes.tagline}>Express your emotions through words</Toolbar>
        </>
    )
}

export default Header