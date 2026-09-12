import { Link } from "react-router-dom";

export function Sucesso() {
    return (
        <main className="mensagem-sucesso">
            <h2>Compra aprovada com sucesso!!</h2>
            <p>Seu pedido foi processado e logo será enviado.</p>
            <Link to="/" className="btn-secundario">Voltar ao carinho </Link>
        </main>
    );
}