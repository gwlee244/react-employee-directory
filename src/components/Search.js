import React from "react";

function Search(props) {
    return (
        <div>
            <div>
                <br></br>
                <h4>Filter By</h4>
                <button className="btn btn-primary mr-2" onClick = {props.all}>All</button>
                <button className="btn btn-primary mr-2" onClick = {props.female}>Female</button>
                <button className="btn btn-primary" onClick = {props.male}>Male</button>
            </div>
        </div>
    )
}

export default Search;