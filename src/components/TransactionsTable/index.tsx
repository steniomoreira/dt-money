import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>02/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Casa</td>
            <td>10/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}