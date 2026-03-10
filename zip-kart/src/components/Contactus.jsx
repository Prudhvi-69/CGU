import { useNavigate } from "react-router-dom"
export default function Contactus() {
    const navi = useNavigate();
    return(
        <>
        <h1>ZipKart Contact Us Page</h1>
            <button onClick={()=> navi(-1)}>Go Back</button>
    <button onClick={()=> navi(1)}>Go Forward</button>
    </>
    )
}