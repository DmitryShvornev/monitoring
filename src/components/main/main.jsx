import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Container from '@mui/material/Container';

export default function Main() {
    return (
        <>
            <Header />
            <Container component="main">
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            
        </>
    );
}