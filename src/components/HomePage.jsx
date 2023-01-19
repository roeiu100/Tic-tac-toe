import { NavLink } from "react-router-dom";

function HomePage(){

    return(
        <div>
<NavLink to="/Game"> <button className="button">Play friendly!</button></NavLink>
<NavLink to={`/Game/comp`}><button className="button"> Play vs computer-Easy</button></NavLink>
<NavLink to={`/Game/comp-Hard`}><button className="button"> Play vs computer-Hard</button></NavLink>
        </div>
    )
}
export default HomePage;