const MenuItem = ({img, title, price, desc}) => {
    return <div>
        <img src={img} alt={title} />
        <div>
            <header>
                <h5>{title}</h5>
                <span>${price}</span>
            </header>
            <p>{desc}</p>
        </div>
    </div>
}

export default MenuItem;