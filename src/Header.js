function Header(props) {

    let data = props.nav;
    const listItem = data.map(item => <li key={item.text}><a href={item.href}>{item.text}</a></li>)

    return (
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    );
}

export default Header;