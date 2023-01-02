import FormModule from "./FormModule"
import BidFieldsNavigator from "./BidFieldsNavigator"
import {useState} from "react"

/**
 * Contains conditional rendering logic for rendering
 * the input boxes depending on which button was last clicked
 */
export default function BidFieldsRenderer(props){
    const getButtonText = (i) => Object.keys(props.bid[i])
    const [lastClicked, setLastClicked] = useState(getButtonText(0)[0].trim())

    // Get the button names from the props.bid array to be used as name values
    const defaultVisibilityState = () => {
        let state=[]
        state.push({name: getButtonText(0)[0].trim(), isShown: true})
        for (let i=1; i<props.bid.length; i++){
            state.push({name: getButtonText(i)[0].trim(), isShown: false})
        }
        return state
    }

    const [fieldVisibility,setFieldVisibility]=useState(defaultVisibilityState)

    function handleClick(e){
        setLastClicked(e.target.innerHTML.trim())
        setFieldVisibility([...fieldVisibility].map(obj => {
            if (obj.name.trim() === lastClicked.trim()){
                return {...obj, isShown: true}
            }else{
                return {...obj, isShown: false}
            }
        }))
    }

    // finds the matching object based on name from the array
    // and returns the isShown boolean
    function getIsShown(name){
        for (let i=0; i<fieldVisibility.length; i++){
            let obj=fieldVisibility[i]
            console.log(obj.name, name)
            console.log(obj.isShown)
            if (obj.name === name){
                return obj.isShown
            }
        }
        // object with given name not found in array
        return false
    }

    return(
        <div>
            <h1>Create Bid</h1>
            <BidFieldsNavigator 
                onClick={handleClick}
                bid={props.bid}
                getButtonText={getButtonText}
            />

            <FormModule 
                bid={props.bid}
                setBid={props.setBid}
                className="form-module"
                lastClicked={lastClicked}
            />
            
        </div>
    )
}