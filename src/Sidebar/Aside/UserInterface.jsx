import { AutoAwesome, Create, InsertEmoticon, SpaceDashboard } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const UserInterface = () => {
  return (
    <div>
        <Box sx={{ marginLeft: "25px", marginTop: "26px" }}>
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
                            USER INTERFACE
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
                            Building blocks of the UI & UX
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center', marginLeft: "15px" }}>
                        <Typography component="div" display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', }}>
                                <AutoAwesome fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px" >
                                    TailwindCSS
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginLeft: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <InsertEmoticon fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Icons
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <SpaceDashboard fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Page Layouts
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Create fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Typographys
                                </Typography>
                            </Typography>
                        </Typography>
                    </Box>
    </div>
  )
}
