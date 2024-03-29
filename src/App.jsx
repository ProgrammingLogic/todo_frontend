import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";
import Tasks from "./components/Tasks";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Stack alignItems="center" spacing={1}>
          <Tasks />
        </Stack>
    </ThemeProvider>
  )
}