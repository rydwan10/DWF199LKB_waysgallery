import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      color: "white",
      backgroundColor: "transparent",
      fontSize: "1.2rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #26942b",
      width: "340px",
    },
    "& .MuiInputLabel-root": {
      display: "block",
      color: "white",
      fontWeight: "500",
    },
    "& .MuiInput-underline:before": {
      borderBottom: `2px solid black`,
      width: "0",
    },
  },

  heroTitle: {
    fontFamily: "Rokkitt !important",
    color: "#000000",
    fontWeight: "600",
    fontSize: "100px",
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "-2.2rem",
  },
  heroTitle2: {
    fontFamily: "Rokkitt !important",
    color: "#2FC4B2",
    fontSize: "100px",
  },

  joinButton: {
    backgroundColor: "#2FC4B2",
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "Nunito",
    fontSize: "18px",
    marginRight: "1rem",
    borderRadius: "6px",
  },
  loginButton: {
    backgroundColor: "#E7E7E7",
    color: "black",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "Nunito",
    fontSize: "18px",
    borderRadius: "6px",
  },
  subHeroWrapper: {
    marginBottom: "1rem",
  },
  subHero1: {
    fontFamily: "Nunito",
    fontSize: "2rem",
    fontWeight: "600",
  },
  subHero2: {
    fontFamily: "Nunito",
    fontSize: "1rem",
  },

  inputField: {
    display: "block",
    backgroundColor: "#E7E7E7 !important",
    borderRadius: "6px",
    border: "2px solid #2FC4B2",
    width: "350px",
    margin: "0 auto 1.1rem auto !important",
    fontSize: "1.2rem",
  },

  clickHere: {
    color: "#2FC4B2",
    cursor: "pointer",
  },

  // Login dialog

  loginTitle: {
    fontSize: "2.4rem",
    color: "#2FC4B2",
    fontWeight: "600",
    fontFamily: "Nunito",
  },
  loginForm: {
    minWidth: "320px",
  },

  dialogButton: {
    fontFamily: "Nunito",
    textTransform: "capitalize",
    fontSize: "1.2rem",
    fontWeight: "600",
    display: "block",
    margin: "0 auto 1rem auto",
    color: "#ffffff",
    backgroundColor: "#2FC4B2",
    width: "350px",
  },
  dontHaveAccount: {
    fontSize: "1.2rem",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },

  // End of Login dialog
}));
