import {useState} from "react"

/**
 * Contains conditional rendering logic for rendering
 * the input boxes depending on which button was last clicked
 * 
 * TODO: Need to set up label, input box pairs so we can auto fill the inputs with the current
 * data and it allows for user to input new data and hit submit to update values. 
 */
export default function MaterialCosts(props){
    function makeInput(labelName){
        return (
            <div>
                <label className="MaterialCosts_labels">
                    {labelName}
                </label>
                <input className="MaterialCosts_inputs"
                    type="number"
                    step="0.01"
                    name={labelName} />
            </div>
        );
    }

    let key = "Key"
    return (
        <form>
            <h1>Material Costs</h1>
            {makeInput("Gravel/Punch Pads")}
            <h3>Posts:</h3>
            {makeInput("6x6x16")}
            {makeInput("6x6x18")}
            {makeInput("6x6x20")}
            {makeInput("6x6x22")}
            {makeInput("6x6x24")}
            {makeInput("6x8x20")}
            {makeInput("6x8x22")}
            {makeInput("6x8x24")}
            {makeInput("2x6 (10-16) per LF cost")}
            {makeInput("2x6x20 per LF cost")}
            {makeInput("2x4 (10-16) per LF cost")}
            {makeInput("Edge Purlins: 2x12")}
            {makeInput("Overhead Door Framing: 2x8")}
            {makeInput("Pressure Treat Plate")}
            {makeInput("Soffit per LF (w/ paint & caulk")}
            {makeInput("Field Metal (wall/roof")}
            {makeInput("Ridge Trim")}
            {makeInput("Bottom Eve Trim")}
            {makeInput("Top Eve Trim")}
            {makeInput("Gable Trim")}
            {makeInput("Door Jamb Trim")}
            {makeInput("Outer Corner Trim")}
            {makeInput("R7 Insulated Blanket")}
            {makeInput("Man Door Cost")}
            {makeInput("Window Cost 4x3")}
            {makeInput("Concrete (polished)")}
            {makeInput("Concrete (broom)")}
            {makeInput("Labor Rate (per person per day)")}
            <button>Submit</button>
        </form>
    );
}