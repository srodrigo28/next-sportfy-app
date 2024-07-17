interface ClintsProps {
    name: string;
    city: string;
    gender: string;
}
export default function Clients( props: ClintsProps ){
    return(
        <div className="container">
            <h1>Clientes</h1>
            <p>Nome: {props.name}</p>
            <p>Cidade: {props.city}</p>
            <p>Sexo: {props.gender}</p>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
            `}</style>
        </div>
    )
}