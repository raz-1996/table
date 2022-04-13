
import React from "react";
import "./index.css"

const education = [
    {
        value: "All",
        id: "all"
    },
    {
        value: "Brazil",
        id: "br"
    },
    {
        value: "France",
        id: "fr"
    },
    {
        value: "China",
        id: "ch"
    }
]

function getOptions(list) {
    return list.map(item => (<option key={item.value} value={item.id}>{item.label || item.value}</option>))
}


function Filters({ onPerPageChange, onNatChange }) {
    return (
        <div className="og-row" id="og-filters">
            <select className="" onChange={onNatChange}>
                {getOptions(education)}
            </select>

            <label className="select-label">Per Page</label>
            <select onChange={onPerPageChange}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>
    )
}

export default Filters;