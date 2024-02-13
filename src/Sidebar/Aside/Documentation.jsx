import { AutoAwesome, CloudQueue, Create, DeveloperBoard, PlayArrow, Settings, SettingsInputComponent, Widgets } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const Documentation = () => {
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
                            DOCUMENTATION
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
                            Everything you need to know about Fuse
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center', marginLeft: "15px" }}>
                        <Typography component="div" display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', }}>
                                <AutoAwesome fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px" >
                                    Changelog
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginLeft: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <PlayArrow fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Getting Started
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <DeveloperBoard fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Development
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <CloudQueue fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Mock API
                                </Typography>
                            </Typography>

                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Create fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Theming
                                </Typography>
                            </Typography>



                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Settings fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Configuration
                                </Typography>
                            </Typography>




                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Create fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Authentication
                                </Typography>
                            </Typography>




                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Widgets fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Fuse Components
                                </Typography>
                            </Typography>




                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Create fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    Material UI Components
                                </Typography>
                            </Typography>




                            <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <SettingsInputComponent fontSize="14px" />
                                <Typography component="div" variant="body1" fontSize="14px">
                                    3rd Party Components
                                </Typography>
                            </Typography>

                        </Typography>
                    </Box>

    </div>
  )
}
