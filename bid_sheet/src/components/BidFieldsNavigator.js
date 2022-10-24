const allButtonText = [
    "Building Dimensions",
    "Purlin Spacing",
    "Roof Pitch",
    "Miles From Shop",
    "# Equipment Needed",
    "Post Count",
    "Truss Quote",
    "Truss Bracing 2x4 LF",
    "2x4 Edge Purlin Stiffener",
    "Accessories",
    "Man Doors and Windows",
    "Labor",
    "Percieved Difficulty"]

export default function BidFieldsNavigator(props){

    function createNavigatorButtons(){
        let buttons=[]
        for (let i=0; i<allButtonText.length; i++){
            buttons.push(
                <button key={i} 
                    onClick={props.onClick}
                    className="bid-fields">
                    {allButtonText[i]}
                </button>
            )
        }
        return(
            buttons
        )
    }
    return(
        <div id="bidFieldsNavigator_button-container">
            {createNavigatorButtons()}            
        </div>
    )
}