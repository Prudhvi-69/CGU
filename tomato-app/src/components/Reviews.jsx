import { useNavigate } from "react-router-dom";
// import Check from "./BasicProp";
export function Reviews(cgu) {
     const navi = useNavigate()
    return (
        <div>
            <h1>Reviews</h1>
            <p>This is the reviews page.</p>
            <button onClick={() => navi('/about')}>Go to About Page</button>
            <button onClick={() => navi('/')}>Go to Home Page</button><br></br>
            <button onClick={()=> navi('/login')}>Go to Login Page</button><br></br>
            {/* <h1>Hello {cgu.name}</h1> */}
        </div>
    );
}