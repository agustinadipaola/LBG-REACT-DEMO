import axios from "axios";
import { useState } from "react";
import King from "./King";
import { useEffect } from "react";

function KingsDataLoad() {
    const [filter, setFilter] = useState("");
    const [kings, setKings] = useState([]);


    function getData() {
        axios.get("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json")
            .then((response) => setKings(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, []

    )
    const kingsComponents = []
    for (const king of kings) {
        if (filter === "" || king.nm.toLowerCase().startsWith(filter.toLowerCase()))
        kingsComponents.push(
            <King
                key={king.nm + "" + king.yrs}
                name={king.nm}
                country={king.cty}
                house={king.hse}
                years={king.yrs}
                />
                )
    }
    return (
        <div>
            
            <button onClick={() => getData()}>Show all KINGS/QUEENS</button> <br />
            <input value={filter} onChange={(e) => setFilter(e.target.value)}></input>
            {kingsComponents}
            <br />
        </div>
    )

}
export default KingsDataLoad;