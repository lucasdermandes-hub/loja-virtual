import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verificarDigitosIguais } from "../utils/pagamento";

export function usePagamento () {
    const [processando, setProcesando] = useState(false);
    const navigate = useNavigate();

    const processarPagamento = async (dadosForm) => {
        setProcesando(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const eGolpe = verificarDigitosIguais(dadosForm.numeroCartao);

        setProcesando(false);

        if (eGolpe) {
            navigate("/falha");
        } else {
            navigate("/sucesso");
        }
};

return { processando, processarPagamento };
}