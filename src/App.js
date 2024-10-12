import { Container, Grid } from "@mui/material";
import "./App.css";
import FeaturedPost from "./components/FeaturedPost";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { featuredPosts } from "./data/Data";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container spacing={4}>
            {
              featuredPosts.map((post) => (
                <PostCard post={post} key={post.title} />
              ))
            }
          </Grid>
        </Container>
    </ThemeProvider>
  );
}

export default App;
