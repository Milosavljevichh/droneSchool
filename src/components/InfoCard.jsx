import React from "react";

const InfoCard = ({title,description,icon}) => {
  const styles = {
    card: {
      boxSizing: "border-box",
      maxWidth: "360px",
      padding: "24px",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      color: "#1f2937",
    },
    icon: {
      fontSize: "36px",
      color: "#2563eb", // blue icon color
      marginBottom: "12px",
    },
    title: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "#2563eb",
      marginBottom: "8px",
      textDecoration: "underline",
    },
    description: {
      fontSize: "0.95rem",
      color: "#374151",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <div style={styles.title}>{title}</div>
      <div style={styles.description}>
        {description}
      </div>
    </div>
  );
};

export default InfoCard;
