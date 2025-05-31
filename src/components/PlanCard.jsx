import { Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faCalendarAlt, faHeadset, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const styles = {
  card: {
    position: 'relative',
    minWidth:'250px',
    maxWidth: '300px',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    margin: '32px'
  },
  badge: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '4px 16px',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    zIndex: 1,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '4px',
    margin: '16px 0'
  },
  features: {
    textAlign: 'left',
    marginTop: '24px',
    marginBottom: '24px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    color: '#222'
  },
  icon: {
    color: '#2563eb',
    fontSize: '18px'
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    borderRadius: '12px',
    padding: '12px',
    fontSize: '1rem',
    textTransform: 'none',
    width: '100%'
  }
};

export default function PlanCard({name, desc, price, droneCredits, isMostPopular}) {
  return (
    <Box sx={styles.card}>
      {isMostPopular && <Box sx={styles.badge}>Most Popular</Box>}

      <Typography component="h2" variant="h6" fontWeight="bold" gutterBottom>
        {name} Package
      </Typography>

      <Typography component="p" variant="body2" color="text.secondary">
        {desc}
      </Typography>

      <Box sx={styles.priceContainer}>
        <Typography component="p" variant="h4" fontWeight="bold">
          ${price}
        </Typography>
        <Typography component="span" variant="body1" color="text.secondary">
          /month
        </Typography>
      </Box>

      <Box sx={styles.features}>
        <Box sx={styles.featureItem}>
          <FontAwesomeIcon icon={faCrosshairs} style={styles.icon} />
          <Typography variant="body2">{droneCredits} Drone Credits</Typography>
        </Box>
        <Box sx={styles.featureItem}>
          <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
          <Typography variant="body2">30 Days Access</Typography>
        </Box>
        <Box sx={styles.featureItem}>
          <FontAwesomeIcon icon={faHeadset} style={styles.icon} />
          <Typography variant="body2">24/7 Expert Support</Typography>
        </Box>
        <Box sx={styles.featureItem}>
          <FontAwesomeIcon icon={faGraduationCap} style={styles.icon} />
          <Typography variant="body2">Access to All Courses</Typography>
        </Box>
      </Box>

      <Button variant="contained" sx={styles.button}>
        Get Started
      </Button>
    </Box>
  );
}
