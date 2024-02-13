
import { CalendarViewWeek, ChevronRight, CloudQueue, EditCalendar, EditNote, HelpCenter, MailOutline, PeopleOutline, PermIdentity, SchoolOutlined, ShoppingCart, TaskAlt, Textsms } from '@mui/icons-material'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Application = () => {
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box>
                <Box sx={{ marginLeft: "25px" }}>
                    <Typography
                        style={{
                            fontSize: '12px',
                            color: '#818cf8',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '.05em',
                            lineHeight: '20px',
                        }}
                    >
                        APPLICATIONS
                    </Typography>
                    <Typography
                        style={{
                            fontSize: '11px',
                            color: 'rgb(156, 163, 175)',
                            letterSpacing: '.06px',
                            fontWeight: 500,
                            lineHeight: 1.5,
                        }}
                    >
                        Custom made application designs
                    </Typography>
                </Box>




                <Box sx={{ textAlign: 'center', marginLeft: "15px" }}>
                    <Typography component="div" display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', }}>
                            <SchoolOutlined fontSize='14px' />
                            <Typography component="div" variant="body1" fontSize="14px" >
                                Academy
                            </Typography>
                        </Typography>

                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginLeft: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <EditCalendar fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Calender
                            </Typography>
                        </Typography>

                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <Textsms fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Chat
                            </Typography>
                        </Typography>

                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <PeopleOutline fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Contacts
                            </Typography>
                        </Typography>

                        {/* <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <ShoppingCart fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                E-Commerce
                            </Typography>
                            <Box>

                            <ChevronRight onClick={handleChange}/>
                            
                            </Box>
                        </Typography> */}

                        <Typography
                            component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}
                            onClick={handleClick}
                        >
                            <ShoppingCart fontSize="small" />
                            <Typography variant="body1" fontSize="14px">
                                E-Commerce
                            </Typography>
                            <ChevronRight />
                        </Typography>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={
                                {
                                    mt: "1px", "& .MuiMenu-paper":
                                        { backgroundColor: "#111827", color: 'rgba(255, 255, 255, 0.7)', width: '18%' },
                                }
                            }

                        >
                            <MenuItem onClick={handleClose}>Products</MenuItem>
                            <MenuItem onClick={handleClose}>Prouduct Details</MenuItem>
                            <MenuItem onClick={handleClose}>New Proudct</MenuItem>
                            <MenuItem onClick={handleClose}>Order</MenuItem>
                            <MenuItem onClick={handleClose}>Order Details</MenuItem>
                        </Menu>


                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <CloudQueue fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                File Manager
                            </Typography>
                        </Typography>

                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <HelpCenter fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Help Center
                            </Typography>
                        </Typography>



                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <MailOutline fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Mail
                            </Typography>
                        </Typography>



                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <EditNote fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Notes
                            </Typography>
                        </Typography>




                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <CalendarViewWeek fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Scrumboard
                            </Typography>
                        </Typography>

                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <TaskAlt fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Tasks
                            </Typography>
                        </Typography>

                        <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                            <PermIdentity fontSize="14px" />
                            <Typography component="div" variant="body1" fontSize="14px">
                                Profile
                            </Typography>
                        </Typography>
                    </Typography>
                </Box>





            </Box>
        </div>
    )
}
