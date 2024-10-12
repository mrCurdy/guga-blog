import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const FeaturedPost = () => {
  return (
    <Card
      sx={{
        backgroundImage:
          "url(https://static01.nyt.com/images/2022/11/03/travel/03travel-dark-tourism-woods/merlin_159465762_7eb7a6eb-85c5-427c-b5b1-3547cb7e208c-jumbo.jpg?quality=75&auto=webp)",
        backgroundPosition: "center",
        padding: "35px 25px",
      }}
    >
      <CardContent>
        <Typography
          // gutterBottom
          sx={{
            fontSize: 40,
            fontFamily: "Montserrat",
          }}
        >
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Read more...</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
