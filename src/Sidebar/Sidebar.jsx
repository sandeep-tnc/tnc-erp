import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AddTask, CalendarToday, CalendarViewWeek, CloudQueue, CurrencyExchange, Dehaze, EditCalendar, EditNote, Email, HelpCenter, MailOutline, Payments, People, PeopleOutline, PermIdentity, PieChart, SchoolOutlined, ShoppingCart, TaskAlt, Textsms } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <CalendarToday/>
                    <Email/>
                    <People/> */}
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <a href="your-link-here" style={{ textDecoration: 'none', color: 'inherit' }}>


                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <p>Logo</p>
                        <p>React</p>
                        <Dehaze onClick={handleDrawerClose} />
                    </Box>
                    <Box sx={{ textAlign: "center" }} >
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                        style={{ width: '90px', height: '90px', borderRadius: "100%" }}
                    />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <p>Abbott Keitch</p>
                    <p>admin@fusetheme.com</p>
                </Box>



                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <p >DASHBOARD</p>
                        <p > Unique dashboard designs</p>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography component="div" display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 0.5 }} >
                                <AddTask />
                                <Typography component="div" variant="body1">
                                    Project
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginLeft: 1 }}>
                                <PieChart />
                                <Typography component="div" variant="body1">
                                    Analytics
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} >
                                <Payments />
                                <Typography component="div" variant="body1">
                                    Finance
                                </Typography>
                            </Typography>


                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1 }}>
                                <CurrencyExchange />
                                <Typography component="div" variant="body1">
                                    Crypto
                                </Typography>
                            </Typography>

                        </Typography>
                    </Box>



                </Box>





                <Box>
                    


                  





                </Box>
                    </a>
                    


                </DrawerHeader>


            </Drawer>
            <Main open={open}>
                <DrawerHeader />

            </Main>
        </Box>
    )
}


