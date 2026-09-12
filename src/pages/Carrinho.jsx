import { Link } from "react-router-dom";
import { produtosIniciais } from "../data/produtos";
import { ItemCarrinho } from "../components/ItemCarrinho";
import { ResumoCompra } from "../components/ResumoCompra";

export function Carrinho() {
    const total = produtosIniciais.reduce(
        (acc, item) => acc + item.precoUnitario * item.quantidade,
        0
    );

    return (
        <main className="container">
            <h2>🛒 Seu Carrinho 🛒</h2>
            <div className="lista-produtos">
                {produtosIniciais.map((produto) =>(      
                <ItemCarrinho key={produto.id} item={produto} />
                ))}

            </div>
            <ResumoCompra total={total} />
            <div className="acoes">
                <Link to="/pagamento" className="btn-primario">
                Ir para pagamento
                </Link>
            </div>
        </main>
    );
}