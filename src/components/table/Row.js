import React from "react";

function Row({ list, onSort }) {
    
    return (
        <>
            {list.map((item, index) => (
                <div className="og-li-col text-center" key={index} onClick={() => onSort?.(item)}>
                    {item}
                </div>
            ))}
        </>
    )
}

export default Row;