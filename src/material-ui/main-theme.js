import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: '#264B5D',
            fontSize: '12px',
            color: '#FFFFFF'
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            fontSize: '12px',
            color: '#000000',
            border: '1px solid #EDEDED !important',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF'
          },
        },
      ]
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        }
      }
    }
  },
});

export default theme;