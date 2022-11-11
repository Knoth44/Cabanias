import { useState } from "react"

const DatabaseMerc = () => {

    const [Url, setUrl] = useState("")
    
    const getTicketPrice = async () => {
        fetch('http://localhost:3003/generar')
        .then(res => {
            setUrl(res.url)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    }
    return {
        getTicketPrice,
        Url
    };
}

export default DatabaseMerc