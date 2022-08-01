import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Box, Button, Grid} from "@mui/material";



export default function ProductCard(props) {
    return (
        <Card sx={{ maxWidth: 345,height:415 }} style={{paddingBottom:80,marginBottom:20}}  >
            <CardMedia
                component="img"
                style={{ marginLeft:"20%",padding:10,height: 'auto', width: 'auto',maxHeight:250,maxWidth:250}}
                image={props.result.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h6" style={{color:"black"}}>
                    {props.result.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container alignItems={"center"}>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        display={{ xs: "none", sm: "block" }}
                    >
                        <Typography variant="h5" style={{color:"red"}}>
                            {props.result.price}$
                        </Typography>
                    </Box>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        md={6}
                        lg={4}
                        xl={3}
                        display={{ xs: "none", sm: "block" }}
                    >
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </Box>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        md={6}
                        lg={4}
                        xl={3}
                        display={{ xs: "none", sm: "block" }}
                    >
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </CardActions>
            <div style={{backgroundColor:"red",padding:5,width:"10vw",marginLeft:"30%"}}>
                <Button style={{color:"yellow"}}>
                    Add to cart
                </Button>
            </div>
        </Card>
    );
}
