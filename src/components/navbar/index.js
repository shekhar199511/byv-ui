import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from "next/image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './styles.css'
import { useState } from 'react';

const pages = ['Vehicles', 'Orders', 'All Bookings']

const NavBar = (props) => {

    const [isHovering, setHovering] = useState(false)

    const onMouseEnter = () => {
        console.log('called')
        setHovering(true)
    }

    const onMouseLeave = () => {
        setHovering(false)
    }

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
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                key="account"
                                sx={{ my: 2, color: '#3730a3', display: 'flex', fontWeight: 'bold', alignItems: 'center', position: 'relative' }}
                                className='login'
                                onMouseEnter={onMouseEnter} 
                                onMouseLeave={onMouseLeave}
                            >
                                <span className={isHovering ? 'locked-icon' : 'locked-icon-hidden'}>
                                    {console.log('isHovering', isHovering)}
                                    {/* {isHovering &&  */}
                                    <Image
                                        src="/locked.svg"
                                        alt="login"
                                        objectFit="contain"
                                        height={15}
                                        width={15}
                                        priority
                                    />
                                     {/* } */}
                                </span>
                                <span className='login-text'>Login/Acccount</span>
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar