'use client'
import Image from "next/image";

import NavBar from "@/components/navbar";

import './styles.css'
const Home = (props) => {
    return(
        <div>
            <NavBar />
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