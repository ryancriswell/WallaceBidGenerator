
export default function BidFieldsNavigator(props){
    
    function createNavigatorButtons(){
        let buttons=[]
        for (let i=0; i<props.bid.length; i++){
            buttons.push(
                <button 
                    key={i} 
                    onClick={props.onClick}
                    className="bid-fields"
                > {props.getButtonText(i)} </button>
            )
        }
        return buttons
    }
    return(
        <div id="bidFieldsNavigator_button-container">
            {createNavigatorButtons()}            
        </div>
    )
}