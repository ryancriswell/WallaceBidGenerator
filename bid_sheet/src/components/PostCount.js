import {useState} from 'react';

export default function PostCount(){

    //hold the sizes in state so when we change the module it will retain the data
    const [formData, setFormData] = useState([
        {size: "6x6x16", quantity: 0},
        {size: "6x6x18", quantity: 0},
        {size: "6x6x20", quantity: 0},
        {size: "6x6x22", quantity: 0},
        {size: "6x6x24", quantity: 0},
        {size: "6x8x20", quantity: 0},
        {size: "6x8x22", quantity: 0},
        {size: "6x8x24", quantity: 0}])

    // when we change the value in the input box, update the state
    function handleOnChange(event){
        setFormData(formData.map(prevFormData => {
            if (prevFormData.size === event.target.name) {
                return {...prevFormData, quantity: event.target.value}
            }
            return prevFormData
        }))
    }

    /**
     * Generates a label with that size and an input box to enter
     * the quantity of that post size that is needed. 
     * @param {String[]} sizes - The size of the post
     * @returns Array of JSX objects which hold label and input pairs
     */
    function postFieldMaker(){
        let fieldCount=formData.length
        let inputs = []
        for (let i=0; i<fieldCount; i++){
            inputs.push(
            <div key={i}>
                <label>{formData[i].size}</label>
                <input className="PostCount_input"
                    label={formData[i].size}
                    name={formData[i].size} 
                    value={formData[i].quantity}
                    onChange={handleOnChange} 
                />
            </div>
            )
        }
        return (inputs);
    }

    return(
        <form>
            {postFieldMaker()}
            <input type="submit" text="Submit" />
        </form>
    )
}