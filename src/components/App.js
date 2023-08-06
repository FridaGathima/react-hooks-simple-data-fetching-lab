// create your App component here
import { useEffect, useState } from "react";

function App(){
    const [isLoading, setIsLoading] = useState(false)
    const [imgSrc, setImgSrc] = useState ([])

    useEffect( () => {
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then (res => res.json())
        .then (data => {
            setImgSrc(data.message)
            setIsLoading(true)
        })
    }, [])

    if (!isLoading){
        return <p>Loading...</p>
    }
    return <img src={imgSrc} alt="A Random Dog" />
}

export default App