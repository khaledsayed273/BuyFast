import React, { useContext } from 'react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Store } from '../../store/store'
import Wait from '../Wait'


const Cards = ({ Data ,Refrance} ) => {

    const { AdditemFun } = useContext(Store)


    const FirstBtn = {
        padding: "11px", width: "45%", borderRadius: "20px", color: "white", background: "#bb0101", marginBottom: "10px",
        "&:hover": {
            color: "red !important",
            background: "trasparent",
            fontWeight: "500",
            border: "1px solid #bb0101 "
        }
    }

    // const SecoundBtn = {
    //     padding: "11px", width: "45%", borderRadius: "20px", color: "white", background: "black", marginTop: "20px",
    //     "&:hover": {
    //         background: "trasparent",
    //         color: "black",
    //         fontWeight: "500",
    //         border: "1px solid black "
    //     }
    // }

    return (
        <aside ref={Refrance}>
            <Container>
                <Typography className='forBefore' sx={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
                    <Typography sx={{ fontWeight: "bold" }} variant='h4' component="span">
                        Our <Typography sx={{ color: "#f7444e", fontWeight: "bold" }} variant='h4' component="span">products</Typography>
                    </Typography>
                </Typography>
                {Data.length > 0 ?
                    <Grid container spacing={4}>
                        {Data.map((item) => {
                            return (
                                <Grid key={item.id} item xs={12} sm={6} md={4}>
                                    <Card className='card' sx={{ boxShadow: '0px 0px 15px 1px #a3a1a1', borderRadius: "10px", position: "relative" }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="170"
                                                image={item.image}
                                                alt="green iguana"
                                                sx={{ objectFit: "contain", padding: "20px 20px 0" }}
                                            />
                                            <CardContent >
                                                <Typography sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }} gutterBottom component="div">
                                                    <Typography sx={{ fontWeight: "bold", fontSize: "20px", textTransform: "capitalize" }} variant='h5'>{item.category.length <= 10 ? item.category : item.category.slice(0, 16)}</Typography>
                                                    <Typography variant='h5'>${item.price}</Typography>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <Typography component='p' display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{ position: "absolute", background: "#ffffff78", top: "100%", bottom: "0", width: "100%", overflow: "hidden", transition: "200ms" }}>
                                            <Button onClick={() => AdditemFun(item)} variant='outlined' sx={FirstBtn} size="lg">
                                                Add To Cart
                                            </Button>
                                            
                                        </Typography>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid> : 
                    <Grid container>
                        <Wait />
                    </Grid>}

            </Container>
        </aside>
    )
}


export default Cards; 