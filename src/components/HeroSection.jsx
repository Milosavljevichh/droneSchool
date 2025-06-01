import { Box } from "@mui/material";
import SocialMediaBar from "./SocialMediaBar";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: "url('/Images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "900px",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: 1.6,
    marginBottom: "30px",
  },
  link: {
    color: "#69b6ff",
    textDecoration: "underline",
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  },
  button: {
    padding: "12px 24px",
    width:'220px',
    borderRadius: "25px",
    border: "none",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease",
  },
  primary: {
    backgroundColor: "#5C9BE5",
    color: "white",
  },
  secondary: {
    backgroundColor: "#5C9BE5",
    color: "white",
  },
};

const HeroSection = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.overlay}></Box>
      <Box style={styles.content}>
        <h1 style={styles.title}>Celestial Solutions Drone School</h1>
        <p style={styles.subtitle}>
          Master the skies with professional drone training - Learn about{" "}
          <a href="lessons" style={styles.link}>drone types and selection</a>,{" "}
          <a href="lessons" style={styles.link}>flight regulations</a>, and{" "}
          <a href="lessons" style={styles.link}>aerial photography</a>.
        </p>
        <Box style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.primary }}>
            Start Your Journey
          </button>
          <button style={{ ...styles.button, ...styles.secondary }}>
            Meet the Experts
          </button>
          <button style={{ ...styles.button, ...styles.secondary }}>
            Need Help?
          </button>
        </Box>
      </Box>
      <SocialMediaBar />
    </Box>
  );
};

export default HeroSection;
