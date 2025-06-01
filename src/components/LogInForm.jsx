
import { Box, Button, Divider, InputAdornment, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';

const styles = {
    container: {
        maxWidth: 400,
        mx: 'auto',
        p: 4,
        borderRadius: 4,
        boxShadow: 3,
        backgroundColor: 'white',
    },
    headerBox: {
        textAlign: 'center',
        mb: 3,
    },
    forgotPassword: {
        cursor: 'pointer',
    },
    loginButton: {
        mt: 2,
        py: 1.2,
    },
    divider: {
        my: 3,
    },
    googleButton: {
        mb: 1.5,
        py: 1.2,
    },
    signupText: {
        mt: 3,
        textAlign: 'center',
    },
    signupLink: {
        cursor: 'pointer',
    },
};

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)[A-Za-z\d]{6,}$/;

    const checkEmail = () => {
        const isEmailValid = emailRegex.test(email);
        setEmailError(!isEmailValid);
    }

    const checkPassword = () => {
        const isPasswordValid = passwordRegex.test(password);
        setPasswordError(!isPasswordValid);
    }

    const handleLogin = () => {
        if (isEmailValid && isPasswordValid) {
        // login func
        }
    };
    return (
        <Box sx={styles.container}>
            <Box sx={styles.headerBox}>
                <Typography variant="h5" fontWeight="bold">Login</Typography>
                <Typography variant="body2" color="text.secondary">
                    Enter your details to login.
                </Typography>
            </Box>

            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={()=>checkEmail()}
                error={emailError}
                helperText={emailError ? "Please enter a valid email." : ""}
            />

            <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={()=>checkPassword()}
                error={passwordError}
                helperText={passwordError ? "Password must be at least 6 characters and contain a number." : ""}
        
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Typography variant="body2" color="primary" sx={styles.forgotPassword}>
                                Forgot password?
                            </Typography>
                        </InputAdornment>
                    ),
                }}
            />

            <Button fullWidth variant="contained" sx={styles.loginButton} onClick={handleLogin}>
                Log In
            </Button>

            <Divider sx={styles.divider}>OR</Divider>

            <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={styles.googleButton}
            // onClick={handleGoogleSignIn}
            >
                Continue with Google
            </Button>

            <Typography sx={styles.signupText}>
                Don’t have an account?{' '}
                <Typography component="span" color="primary" fontWeight="bold" sx={styles.signupLink}>
                    Sign up
                </Typography>
            </Typography>
        </Box>
    );
}
