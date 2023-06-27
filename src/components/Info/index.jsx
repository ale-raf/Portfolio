function Info(props) {
    const list = props.infos;
    const listItems = list.map((item) => 
        <li key={item}>{item}</li>
    );
    return (
        <ul className={props.className}>
            <b>{props.title}</b>
            {listItems}
        </ul>
    )
}

export default Info