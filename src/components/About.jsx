import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Store } from '../store/store'


function CardsAdded() {
  
  const { Added } = useContext(Store)
  
  return (
    <>
      {Added.length > 0 ? <>
        <Typography variant='h5' sx={{ margin: "20px 0", fontWeight: "bold" }} textAlign="center">All Added Cards</Typography>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ background: "#dfdfdf" }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Qnt</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Added.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell sx={{p: 0}}  scope="row">
                      <Tooltip title={item.title} placement="right" >
                        <TableCell component="td">
                          {item.title.length < 15 ? item.title : item.title.slice(0, 15) + "..."}
                        </TableCell>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="center">{item.price}</TableCell>
                    <TableCell align="center">{item.qut}</TableCell>
                    <TableCell align="center">{item.price * item.qut}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </> : <Typography variant='h5' sx={{ margin: "20px 0", fontWeight: "bold" }} textAlign="center">No Added Items</Typography>}
    </>
  )
}

export default CardsAdded
