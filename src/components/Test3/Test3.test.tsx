import { render, screen, fireEvent } from "@testing-library/react"
import Test3 from "./Test3"

describe('Test3 Component', () => {
  it('deve exibir o estado inicial como desligado', () => {
    render(<Test3 />);
    
    // Verificar o texto inicial
    expect(screen.getByText(/desligado/i)).toBeInTheDocument();

    // Verificar a cor inicial do ícone
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle({ color: 'black' });
  });

  it('deve alternar para ligado ao clicar no botão', () => {
    render(<Test3 />);
    
    const button = screen.getByRole('button', { name: /click/i });
    const icon = screen.getByTestId('icon');

    // Simular o clique no botão
    fireEvent.click(button);

    // Verificar o texto alterado
    expect(screen.getByText(/ligado/i)).toBeInTheDocument();

    // Verificar a cor alterada do ícone
    expect(icon).toHaveStyle({ color: 'yellow' });
  });

  it('deve alternar entre ligado e desligado a cada clique', () => {
    render(<Test3 />);
    
    const button = screen.getByRole('button', { name: /click/i });
    const icon = screen.getByTestId('icon');

    // Primeiro clique (ligar)
    fireEvent.click(button);
    expect(screen.getByText(/ligado/i)).toBeInTheDocument();
    expect(icon).toHaveStyle({ color: 'yellow' });

    // Segundo clique (desligar)
    fireEvent.click(button);
    expect(screen.getByText(/desligado/i)).toBeInTheDocument();
    expect(icon).toHaveStyle({ color: 'black' });
  });
});
