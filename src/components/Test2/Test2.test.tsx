import { render, screen } from '@testing-library/react';
import Test2 from './Test2';

describe('Test2 component', () => {
  it('renders the correct sum', () => { //Testando se o componente é renderizado corretamente
    // Arrange: Configura os valores de entrada (Props no caso)
    const num1 = 5;
    const num2 = 3;

    // Act: Renderiza o componente simulando os props recebidos
    render(<Test2 num1={num1} num2={num2} />);

    // Assert: Verifica se o texto exibido está correto // (O "í" é do regex para que o codigo não faça diferença entre maiuscula e minuscula)
    expect(screen.getByText(/O resultado da soma é 8/i)).toBeInTheDocument();
  });

  it('handles negative numbers correctly', () => { //Testando com números negativos
    const num1 = -2;
    const num2 = -4;

    render(<Test2 num1={num1} num2={num2} />);

    expect(screen.getByText(/O resultado da soma é -6/i)).toBeInTheDocument();
  });

  it('handles zero correctly', () => { //Testando com número zero
    const num1 = 0;
    const num2 = 0;

    render(<Test2 num1={num1} num2={num2} />);

    expect(screen.getByText(/O resultado da soma é 0/i)).toBeInTheDocument();
  });
}); 
