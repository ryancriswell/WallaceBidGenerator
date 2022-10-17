
export default function Navbar(){

    /**
     * @param {string[]} bodyText holds the text for all buttons
     * @returns array of <button> to fill the navbar
     */
    function buttonMaker(bodyText){
        let buttons = []
        for (let i=0; i<bodyText.length; i++){
            buttons.push(<button key={i} className="Navbar_button">{bodyText[i]}</button>)
        }
        return(buttons);
    }
    return(
        <div id="Navbar_button-wrapper">
            {buttonMaker(["Material Cost", "New Bid",  
                "Bid History", "Customer Copy"])}
        </div>
    );
}