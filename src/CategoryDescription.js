import {userParams} from "react-router-dom";

function CategoryDescription() {

    let {Name} = userParams();

    return (
        <>
            <h1>Category: {Name}</h1>
        </>
    );
}

export default CategoryDescription;