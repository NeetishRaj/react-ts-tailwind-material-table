import { createTheme } from "@mui/material";

const dropdownButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          justifyContent: "left",
          color: "#7E7E7E",
          fontSize: "12px",
          border: "1px solid #EDEDED !important",
          borderRight: 'none',
          borderRadius: "8px",
          textTransform: 'none',
          boxShadow: 'none',
          backgroundColor: '#FFFFFF'
        },
      },
    },
  },
});

export default dropdownButtonTheme;
