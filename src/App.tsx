import { ThemeProvider, createTheme } from "@mui/material";
import FormPage from "./pages/FormPage";

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <FormPage />
    </ThemeProvider>
  )
}

export default App
