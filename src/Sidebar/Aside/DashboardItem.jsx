import React from 'react'
import { AddTask, CurrencyExchange, Payments, PieChart } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

export const DashboardItem = () => {
  return (
    <div>
    <Box>


<Box sx={{ marginLeft: "25px" ,marginTop:"26px"}}>
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
   DASHBOARD
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
   Unique dashboard designs
</Typography>
</Box>

<Box sx={{ textAlign: 'center', marginLeft: "15px" }}>
<Typography component="div" display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
   <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', }}>
       <AddTask fontSize="14px" />
       <Typography component="div" variant="body1" fontSize="14px" >
           Project
       </Typography>
   </Typography>

   <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginLeft: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
       <PieChart fontSize="14px" />
       <Typography component="div" variant="body1" fontSize="14px">
           Analytics
       </Typography>
   </Typography>

   <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
       <Payments fontSize="14px" />
       <Typography component="div" variant="body1" fontSize="14px">
           Finance
       </Typography>
   </Typography>

   <Typography component="div" display="flex" alignItems="center" textAlign="center" gap={2} sx={{ marginRight: 1, textDecoration: 'none!important', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', boxSizing: 'border-box', padding: '10px', width: '100%', borderRadius: '6px', margin: '0 0 4px 0', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
       <CurrencyExchange fontSize="14px" />
       <Typography component="div" variant="body1" fontSize="14px">
           Crypto
       </Typography>
   </Typography>
</Typography>
</Box>



</Box>
</div>
  )
}
