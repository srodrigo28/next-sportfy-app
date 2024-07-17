interface productsProps {
    name: string;
    quantities: number;
    price: number
}

export default function Product( { name, quantities, price } : productsProps ){
    return(
        <div>
            <h1>Return Page Products</h1>
            <ul>
                <li>{name}</li>
                <li>{quantities}</li>
                <li>{price}</li>
            </ul>
        </div>
    )
}