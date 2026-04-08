/**
 * @jest-environment jest-fixed-jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Header } from './Header';


describe('Компонент Header', () => {
  test('Отображается кнопка "Войти" для неавторизованного пользователя', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: null,
          user: null,
          handleLogout: jest.fn(),
        } as any}>
            <Header />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // проверить, что отображается кнопка "Войти"
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });
  test('Отображается имя пользователя для авторизованного пользователя', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: 'test-token',
          user: { userName: 'UserName' },
          handleLogout: jest.fn(),
        } as any}>
            <Header />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // проверить, что отображается имя пользователя
    expect(screen.getByText("UserName")).toBeInTheDocument();
  });
});