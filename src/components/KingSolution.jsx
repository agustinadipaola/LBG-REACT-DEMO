
import { useState } from "react";
import kings from "./data/kings.json";
import King from "./King";

function KingSolution() {
    const [filter,setFilter] = useState("");

    console.log("Filter:", filter);
    const kingComponents = [];

    for (const king of kings) {

        if (filter.length === 0 || king.nm.toLowerCase() === filter.toLowerCase()) {
            kingComponents.push(
            <King key = {king.nm + " " + king.yrs} country={king.cty} house={king.hse} name={king.nm} years={king.yrs}
            />
        );
    }
}
function handleChange (event) {
    console.log ("Event:", event);
    console.log ("Target:", event.target);
    console.log ("Value:", event.target.value);
    setFilter(event.target.value);
}

    return (<div>
        <h2>Kings</h2>
        <input type="text" value={filter} onChange={handleChange}/>
        {kingComponents}
    </div>
    );
}

export default KingSolution;