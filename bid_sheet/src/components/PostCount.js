
export default function PostCount(){



    // TODO: hold the sizes in state so when we change the module it will retain the data



    /**
     * Generates a label with that size and an input box to enter
     * the quantity of that post size that is needed. 
     * @param {String[]} sizes - The size of the post
     * @returns Array of JSX objects which hold label and input pairs
     */
    function postFieldMaker(sizes){
        let fieldCount=sizes.length
        let inputs = []
        for (let i=0; i<fieldCount; i++){
            inputs.push(
            <div key={i}>
                <label>{sizes[i]}</label>
                <input className="PostCount_input"
                    label={sizes[i]} defaultValue={0} />
            </div>
            )
        }
        return (inputs);
    }

    return(
        <form>
            {postFieldMaker(["6x6x16","6x6x18","6x6x20","6x6x22",
                        "6x6x24","6x8x20","6x8x22","6x8x24"])}
            <input type="submit" text="Submit" />
        </form>
    )
}