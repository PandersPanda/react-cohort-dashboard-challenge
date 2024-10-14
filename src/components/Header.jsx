import titleHeader from "../assets/title-header-svg.svg"
import ColouredCircle from "./ColouredCircle"
import "../styling/ColouredCircle.css"

function Header() {
    return (
        <div className="header">
            <div className="header_profile">
                <img src={titleHeader} alt="Title header" id="title_header"/>
            </div>
            <ColouredCircle firstName={"Anders"} lastName={"Ottersland"} color={"#e84778"}/>
        </div>
    )
}

export default Header