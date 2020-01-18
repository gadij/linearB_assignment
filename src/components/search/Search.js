import React, { useState, useEffect } from "react";

export default function Search({ onQueyChange }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        onQueyChange(query)
    }, [onQueyChange, query])

    return (
        <div className="search">
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                type="text"
            />
        </div>
    );
}
