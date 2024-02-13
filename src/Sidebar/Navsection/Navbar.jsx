import { BookmarkBorder, CalendarTodayOutlined, FullscreenOutlined, Groups2Outlined, MailOutlineOutlined, MapsUgcSharp, NotificationsOutlined, Search, StarOutlineOutlined, TextFieldsOutlined, } from '@mui/icons-material'
import { Box, Typography, createTheme } from '@mui/material'
import React from 'react'
import logoImage from '../../Assets/Images/brian-hughes.jpg';
const theme = createTheme({
    spacing: 4,
});
export const Navbar = () => {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                minHeight: '4rem',
                position: 'relative',
                alignItems: 'center',
                boxSizing: 'border-box',
                borderWidth: 0,
                borderStyle: 'solid',
                borderColor: '#EEEEEE',
                boxShadow: 2,
                spacing: 4
            }}>
                <Typography sx={{ display: 'flex', gap: 2, fontSize: '24px' }}>
                    <CalendarTodayOutlined />
                    <MailOutlineOutlined />
                    <Groups2Outlined />
                    <StarOutlineOutlined />
                </Typography>
                <Typography>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Typography sx={{ display: 'flex', gap: 2, fontSize: '24px' }}>
                            <TextFieldsOutlined />
                            <MapsUgcSharp />
                            <FullscreenOutlined />
                            <Search />
                            <BookmarkBorder />
                            <NotificationsOutlined />
                        </Typography>
                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box
                                style={{
                                    marginRight: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography>
                                    <Typography
                                        variant="body1"
                                        style={{
                                            margin: 0,
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            lineHeight: 1.5,
                                            boxSizing: 'border-box',
                                            borderWidth: 0,
                                            borderStyle: 'solid',
                                            borderColor: '#EEEEEE',
                                            color: '#111827',
                                        }}
                                    >
                                        Abbott Keitch
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        style={{
                                            margin: 0,
                                            fontSize: '0.7rem',
                                            fontWeight: '600',
                                            lineHeight: 1.5,
                                            boxSizing: 'border-box',
                                            borderWidth: 0,
                                            borderStyle: 'solid',
                                            marginLeft: '8px', // Adjusted the margin here
                                            color: '#6b7280',
                                        }}
                                    >
                                        Admin
                                    </Typography>
                                </Typography>
                            </Box>

                            <Typography>
                                <img
                                    src={logoImage}
                                    alt=""
                                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                />
                            </Typography>
                        </Box>
                    </Box>


                </Typography>
            </Box>
        </div>
    )
}
