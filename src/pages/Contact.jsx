import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";

const ImageContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100dvh",
  backgroundImage: "url(images/background-image.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: { width: "30%" },
  [theme.breakpoints.up("lg")]: { width: "50%" },
}));

const FormContainer = styled("div")(({ theme }) => ({
  mt: 1,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "10px",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const Form = styled("form")(({ theme }) => ({
  variant: "form",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
export default function Contact() {
  const theme = useTheme();

  return (
    <Box width="100%" height="100vh" display="flex">
      <ImageContainer
        width="50%"
        height="100%"
        sx={{
          backgroundImage: "url(images/background-image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></ImageContainer>
      <FormContainer>
        <Form>
          <TextField
            id="username"
            label="Username"
            variant="filled"
            fullWidth
            sx={{ borderRadius: "8px" }}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            fullWidth
            sx={{ borderRadius: "8px" }}
          />
          <textarea
            rows="7"
            placeholder="Your message"
            style={{
              borderRadius: "8px",
              padding: "10px",
              outline: "none",
              border: `1px solid ${theme.palette.primary.linkColor}`,
              background: theme.palette.primary.main,
              fontWeight: "bold",
            }}
          ></textarea>

          <Button
            border="none"
            sx={{
              background: "linear-gradient(to left,#45DAC3,#28A491)",
              fontWeight: "bold",
              p: "10px 20px",
              borderRadius: "4px",
            }}
          >
            Submit
          </Button>
        </Form>
      </FormContainer>
    </Box>
  );
}
