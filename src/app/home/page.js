import Image from "next/image";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import './styles.css'
const Home = (props) => {
    return(
        <div>
            <AppBar position="static" sx={{ bgcolor: "white" }} elevation={0}>
                <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Image
                    src="/logo.png"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                    alt="Logo of application"
                />
                </Toolbar>
                </Container>
            </AppBar>
            <Image
                src="/hyundai.jpg"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="bg-img"
                priority
                alt="Background Image of a vehicle"
            />
            <div class="content">
                <h1 class="text-5xl pageHeading">Book your vehicle</h1> 
                <h2 class="text-3xl description">It just doesn't take, it keeps the reservation too.</h2>
            </div>
        </div>
        
    )
    
}

export default Home