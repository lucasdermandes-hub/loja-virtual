export function ResumoCompra({ total }) {
    return (
        <div className="resumo-compra">
            <h3>Total de Compras</h3>
            <span className="total-valor">R$ {total.toFixed(2)}</span>
        </div>
    );
}