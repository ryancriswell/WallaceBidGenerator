export default function FormModule(props){

    // return the index according to the bid state that gives us access to
    // the name, value pairs of the inner object. for example "Building Dimensions"
    // should return 0 because the building dimensions object is the first in the
    // state array
    function getIndexOfLastClicked(){
        for (let i=0; i<props.bid.length; i++){
            if (props.lastClicked.trim() === Object.keys(props.bid[i])[0]){
                return i
            }
        }
        return -1
    }

    // when we change the value in the input box, update the state
    function handleChange(event){
        props.setBid(props.bid.map(obj => {
            if (Object.keys(obj)[0] === props.lastClicked.trim()){
                let updatedObj = obj[props.lastClicked.trim()].map(x => {
                    if (x.name === event.target.name){
                        return {...x, value: parseInt(event.target.value)}
                    }else{
                        return x
                    }
                })
                return {[props.lastClicked.trim()]: updatedObj}
            }else{
                return obj
            }
        }))
    }

    /**
     * Generates a label and an input box to enter form data into. 
     * @returns Array of JSX objects which hold <label> and <input> pairs
     */
    function fieldMaker(){ 
        let inputs = []
        const indexOfLastClicked = getIndexOfLastClicked()
        const allFields = Object.values(
            props.bid[indexOfLastClicked])[0]
        for (let i=0; i<allFields.length; i++){
            let currentField=allFields[i]
            inputs.push(
            <div key={i}>
                <label className={props.className}>
                    {currentField.name}
                </label>
                <input className={props.className}
                    type="number"
                    label={currentField.name}
                    name={currentField.name} 
                    value={currentField.value}
                    onChange={handleChange} 
                />
            </div>
            )
        }
        return (inputs);
    }

    return(
        <form>
            {fieldMaker()}
            <button>Submit</button>
        </form>
    )
}