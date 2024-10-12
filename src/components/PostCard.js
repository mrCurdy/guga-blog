import { CardActionArea, Hidden, CardContent, Card, Grid, Typography, CardMedia } from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({});

const PostCard = ({post}) => {
    const classes = useStyles()

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.descreption}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>

                    <Hidden xsDown>
                        <CardMedia 
                            className={classes.CardMedia} 
                            image={post.image} 
                            title={post.imageTitle}>

                        </CardMedia>
                    </Hidden>

                </Card>
            </CardActionArea>
        </Grid>
    )
}
export default PostCard;