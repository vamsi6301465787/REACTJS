import React from "react";

function Child({person}) {

    return(
        <div><h1>I am {person.name} the id {person.id} course is {person.course}</h1> </div>
    )

}

export default Child 