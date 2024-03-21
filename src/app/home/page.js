import Image from "next/image";

import './styles.css'
const Home = (props) => {
    return(
        <div>
            <Image
                src="/hyundai-bg.jpg"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="bg-img"
                priority
            />
            <div>
                <p class="text-sm">what up</p>
            </div>
        </div>
        
    )
    
}

export default Home