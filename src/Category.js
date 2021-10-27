import {useRouteMatch} from "react-router-dom";

function Category(props) {

    let match = useRouteMatch();
    let data = props.navCat;
    const listItem = data.map(item => <li key={item.text}><a href={`${match.url}${item.href}`}>{item.text}</a></li>)

    return (
        <>
            <h1>Category</h1>
            <ul>
                {listItem}
            </ul>
        </>
    );
}

export default Category;