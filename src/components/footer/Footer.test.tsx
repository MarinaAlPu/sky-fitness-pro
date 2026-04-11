/**
 * @jest-environment jest-fixed-jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';


describe('Компонент Footer', () => {
  test('Отображается кнопка "Наверх ↑"', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // проверить, что отображается кнопка "Наверх ↑"
    expect(screen.getByText("Наверх ↑")).toBeInTheDocument();
  });
});