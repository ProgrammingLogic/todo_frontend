import { useState } from "react";
import { nanoid } from "nanoid";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});


export default function App() {
  return (
    <>
      <h1>Hello, world!</h1>
    </>
  )
}