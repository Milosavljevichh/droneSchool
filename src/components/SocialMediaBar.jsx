
export default function SocialMediaBar(){

const styles = {
  shareBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    padding: "12px 0",
    zIndex: 2,
  },
  shareBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "white",
    border: "none",
    cursor: "pointer",
    textDecoration: "none"
  },
  fb: { backgroundColor: "#3b5998" },
  li: { backgroundColor: "#0077b5" },
  tw: { backgroundColor: "#1da1f2" },
  yt: { backgroundColor: "#ff0000" },
  wa: { backgroundColor: "#25d366" },
  sh: { backgroundColor: "#0ea5e9" },
};
    return(
        <>
            <div style={styles.shareBar}>
                <a href="#" target="_blank" style={{ ...styles.shareBtn, ...styles.fb }}>f Share</a>
                <a href="#" target="_blank" style={{ ...styles.shareBtn, ...styles.li }}>in Share</a>
                <a href="#" target="_blank" style={{ ...styles.shareBtn, ...styles.tw }}>🐦 Tweet</a>
                <a href="#" target="_blank" style={{ ...styles.shareBtn, ...styles.yt }}>▶ Share</a>
                <a href="#" target="_blank" style={{ ...styles.shareBtn, ...styles.wa }}>📱 Share</a>
                <a href="#" target="_blank" style={{ ...styles.shareBtn, ...styles.sh }}>🔗 Share</a>
            </div>
        </>
    )
}