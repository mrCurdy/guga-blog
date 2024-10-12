import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,  // Makes the title grow to occupy remaining space
  },
  tagline: {
    fontSize: 20, // Sets the font size for the tagline
    textTransform: 'uppercase', // Makes text uppercase
    justifyContent: 'center', // Centers the content
    fontFamily: 'Montserrat', // Sets the font family
  },
}));

export default useStyles;