export function ItemCarrinho({ item }) {
    const subtotal = item.precoUnitario * item.quantidade;

    return (
        <div className="item-carrinho">
            <div>
                <h4>{item.nome}</h4>
                <p className="detalhes-produto">
                    R$ {item.precoUnitario.toFixed(2)} x {item.qunatidade}
                </p>
            </div>
            <p className="subtotal">R$ {subtotal.toFixed(2)}</p>
        </div>
    );
} 

