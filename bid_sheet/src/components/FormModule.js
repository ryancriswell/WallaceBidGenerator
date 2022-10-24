import {useState} from 'react';

/**
 * props.className: The CSS class of the input boxes and labels
 * defaultState: String[] of text values for the labels and default values
 * for the input boxes.
 * @param {defaultState, className} props 
 * @returns a <form> element with a number of label-input box pairs
 */
export default function FormModule(props){

    console.log("form module rendered with props=")
    console.log(props)

    // hold the names and input box values in state
    const [formData, setFormData] = useState(props.defaultState)

    // when we change the value in the input box, update the state
    function handleOnChange(event){
        setFormData(formData.map(prevFormData => {
            if (prevFormData.name === event.target.name) {
                return {...prevFormData, value: event.target.value}
            }
            return prevFormData
        }))
    }

    /**
     * Generates a label and an input box to enter form data into. 
     * @returns Array of JSX objects which hold <label> and <input> pairs
     */
    function fieldMaker(){
        let fieldCount=formData.state.length
        let inputs = []
        for (let i=0; i<fieldCount; i++){
            inputs.push(
            <div key={i}>
                <label className={props.className}>
                    {formData.state[i].name}
                </label>
                <input className={props.className}
                    type="number"
                    label={formData.state[i].name}
                    name={formData.state[i].name} 
                    value={formData.state[i].value}
                    onChange={handleOnChange} 
                />
            </div>
            )
        }
        return (inputs);
    }

    return(
        <form>
            {fieldMaker()}
        </form>
    )
}