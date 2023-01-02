import { Link } from "react-router-dom";
export default function Navbar(){

    /**
     * @param {string[]} bodyText holds the text for all buttons
     * @returns array of <button> to fill the navbar
     */
    function buttonMaker(bodyText){
        let buttons = []
        for (let i=0; i<bodyText.length; i++){
            let url = "/"+bodyText[i].replace(' ', '-').toLowerCase()
            buttons.push(
                <div>
                    <Link to={url == "/home" ? "" : url}>
                        <button key={i} className="Navbar_button">{bodyText[i]}</button>
                    </Link>
                </div>
            )
        }
        return(buttons);
    }
    return(
        <div id="Navbar_button-container">
            {buttonMaker(["Home", "Material Costs", "Bid",  
                "Bid History", "Customer Copy"])}
        </div>
    );
}