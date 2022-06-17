import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../utils/theme';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LensBlurIcon from '@mui/icons-material/LensBlur';

export default function Header() {

    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <LensBlurIcon fontSize='large' cursor='pointer' />
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                onClick={() => navigate("/")}
                                sx={{ ml: 2, mr: 2, display: { xs: 'none', md: 'flex' }, fontStyle: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}
                            >
                                Мониторинг
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    key="posts"
                                    onClick={() => navigate("/")}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Персонал
                                </Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

