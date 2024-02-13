import { AccessTime, AddTask, AutoAwesome, CalculateOutlined, CalendarViewWeek, ChatBubble, CloudQueue, Create, CurrencyExchange, Dehaze, DeveloperBoard, EditCalendar, EditNote, ErrorOutline, HelpCenter, InsertEmoticon, List, LockOpen, MailOutline, Payments, PeopleOutline, PeopleOutlineOutlined, PermIdentity, PieChart, PlayArrow, School, SchoolOutlined, Search, Settings, SettingsInputComponent, ShoppingCart, SpaceDashboard, TaskAlt, Textsms, WarningAmber, WarningAmberOutlined, Widgets } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography, colors } from '@mui/material'
import React, { useState } from 'react'
import { Application } from './Application'
import { DashboardItem } from './DashboardItem'
import { PageComp, Pages } from './PageComp'
import { UserInterface } from './UserInterface'
import { Documentation } from './Documentation'
import { Navbar } from '../Navsection/Navbar'
import logoImage from '../../Assets/Images/brian-hughes.jpg';

export const Asidebar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        console.log("cancel")
        setOpen((prev) => !prev)
    }
    return (
        <div>
            {/* Aside */}
            
            <Box sx={{display:"flex"}}>
            <Box sx={{ width: '20%', background: "#111827" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <p>Logo</p>
                        <p>React</p>
                    </Box>

                    <Box >
                        <Dehaze style={{ color: 'white' }} onClick={handleOpen} />
                    </Box>
                </Box>

                {/* Card Section */}

                <Box sx={{ textAlign: "center" }} >
                    <img
                        src={logoImage}
                        alt=""
                        style={{ width: '90px', height: '90px', borderRadius: "100%" }}
                    />
                </Box>
                <Box sx={{ textAlign: 'center', fontWeight: "500", color: "white", fontSize: '1rem', }}>
                    {/* <p>Abbott Keitch</p> */}
                    <Typography
                        style={{
                            fontSize: '14px',
                            paddingTop: "6px",
                            color: 'white',
                            fontWeight: 500,
                            letterSpacing: '.05em',
                            lineHeight: '20px',
                            fontWeight: "bold"
                        }}
                    >
                        Abbott Keitch
                    </Typography>
                    <Typography
                        style={{
                            fontSize: '14px',
                            color: '#94a3b8',
                            fontWeight: 500,
                            letterSpacing: '.05em',
                            lineHeight: '20px',
                        }}
                    >
                        admin@fusetheme.com
                    </Typography>

                </Box>

                {/* Dashboard */}
                <DashboardItem />
                {/* Appllication */}
                <Application />
                {/* Pages */}
                <PageComp />
                {/* User INterface */}
                <UserInterface />
                {/* Documantiaion  */}
                <Documentation />


            </Box>

            <Box sx={{width:"80%"}}>
                <Navbar/>
            </Box>
            </Box>
            

        </div>
    )
}
