import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Box, Grid} from "@mui/material";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProductCard(props) {

    return (
        <Card sx={{ maxWidth: 345 }} style={{width: "60vw", margin: 'auto'}}  >
            <CardMedia
                component="img"
                style={{marginLeft:"5rem",height: '50%', width: '50%'}}
                image={props.result.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.result.description}
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
        </Card>
    );
}
