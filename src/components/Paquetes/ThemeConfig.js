import { createTheme } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[50],
        }
    },
});
export default theme;