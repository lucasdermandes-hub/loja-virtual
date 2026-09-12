import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePagamento } from "../hooks/usePagamento";

const esquemaPagamento = z.object({
  titular: z.string().min(1, "Insira o nome do titular"),
  numeroCartao: z
    .string()
    .transform((val) => val.replace(/[\s-]/g, "")) 
    .refine((val) => val.length === 16, "O cartão precisa ter exatamente 16 dígitos"), 
  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido. Use MM/AA (Ex:10/29)"),
  cvv: z.string().regex(/^\d{3}$/, "CVV deve possuir 3 números"),
});

export function Pagamento() {
  const { processando, processarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(esquemaPagamento),
  });

  return (
    <main className="container2">
      <h2>Pagamento via Cartão</h2>
      <form onSubmit={handleSubmit(processarPagamento)} className="form-pagamento">
        <div className="campo-de-prenchimento">
          <label htmlFor="titular">Nome do titular do cartão</label>
          <input
            id="titular"
            type="text"
            placeholder="Conforme aparece no cartão"
            {...register("titular")}
          />
          {errors.titular && <span className="erro">{errors.titular.message}</span>}
        </div>

        <div className="campo-de-prenchimento">
          <label htmlFor="numeroCartao">Número do Cartão</label>
          <input
            id="numeroCartao"
            type="text"
            placeholder="1234 5678 9034 2313"
            {...register("numeroCartao")}
          />
          {errors.numeroCartao && (
            <span className="erro">{errors.numeroCartao.message}</span>
          )}
        </div>

        <div className="linha-dupla">
          <div className="campo">
            <label htmlFor="validade">Validade (MM/AA)</label>
            <input
              id="validade"
              type="text"
              placeholder="12/28"
              {...register("validade")}
            />
            {errors.validade && (
              <span className="erro">{errors.validade.message}</span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" type="text" placeholder="123" {...register("cvv")} />
            {errors.cvv && <span className="erro">{errors.cvv.message}</span>}
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={processando}>
          {processando ? "Processando compra..." : "Pagar Agora"}
        </button>
      </form>
    </main>
  );
}