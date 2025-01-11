import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test1 from './Test1';

it('componente "Test1" renderizado com sucesso!', () => {
  render(<Test1 />);
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});
