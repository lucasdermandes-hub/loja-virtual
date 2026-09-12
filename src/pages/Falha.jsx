import { Link } from "react-router-dom";

export function Falha() {
    return (
        <main className="mensagem-falha">
            <h1>CUIDADO</h1>
            <h2>Tentativa de Golpe</h2>
            <p>Não foi possível aprovar a transação com os dados informados.</p>
            <Link to="/pagamento" className="btn-secundario">Tentar Novamente</Link>
        </main>
    );
}