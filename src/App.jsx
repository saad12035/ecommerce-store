import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import './App.css';
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(0,0,0)',
            dark: '#a20989',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ffffff'
        }
    },
    typography: {
        button: {
            fontWeight: "bold",
            fontSize: "1.1rem",
            textTransform:"capitalize",
            lineHeight:"0"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
