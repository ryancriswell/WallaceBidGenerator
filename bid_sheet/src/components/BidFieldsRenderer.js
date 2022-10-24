import FormModule from "./FormModule"
import BidFieldsNavigator from "./BidFieldsNavigator"
import {useState} from "react"
import { postsFields,buildingDimensionsFields } from "./BidFields"

/**
 * Contains conditional rendering logic for rendering
 * the input boxes depending on button click and state 
 * for the bid fields buttons.
 * @returns 
 */
export default function BidFieldsRenderer(){

    const [posts,setPosts]=useState(postsFields)
    const [buildingDimensions,setBuildingDimensions]=useState(buildingDimensionsFields)
    const [fieldVisibility,setFieldVisibility]=useState([
        {name: "Building Dimensions", isShown: false},
        {name: "Post Count", isShown: false}])

    function handleClick(e){
        let buttonText = e.target.innerHTML
        setFieldVisibility([...fieldVisibility].map(obj => {
            if (obj.name===buttonText){
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
            if (obj.name === name){
                return obj.isShown
            }
        }
        // object with given name not found in array
        return false
    }

    return(
        <div>
            <BidFieldsNavigator onClick={handleClick}/>
            {getIsShown("Building Dimensions") &&
            <FormModule 
            defaultState={buildingDimensions}
            className="form-module_building-dimensions"
            />}
            {getIsShown("Post Count") &&
            <FormModule 
            defaultState={posts}
            className="form-module_posts"  
            />}
        </div>
    )
}