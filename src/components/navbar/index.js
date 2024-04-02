import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from "next/image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './styles.css'

const pages = ['Vehicles', 'Orders']

const NavBar = (props) => {
    return (
        <AppBar position="static" sx={{ bgcolor: "white" }} elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <Box>
                            <Image
                                src="/logo.png"
                                layout="intrinsic"
                                objectFit="scale-down"
                                quality={100}
                                priority
                                alt="Logo of application"
                                height={100}
                                width={100}
                                className="brand-icon"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center'  }}> 
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: '#3730a3', display: 'block', fontWeight: 'bold' }}
                                    className='menu-items'
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center'  }}>
                            <Button
                                key="account"
                                sx={{ my: 2, color: '#3730a3', display: 'block', fontWeight: 'bold' }}
                                className='login'
                            >
                                <Image
                                    src="/locked.svg"
                                    alt="login"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                                Login/Acccount
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar