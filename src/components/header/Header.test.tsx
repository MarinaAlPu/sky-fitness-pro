/**
 * @jest-environment jest-fixed-jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, type AuthContextType } from '../../context/AuthContext';
import { Header } from './Header';


describe('Компонент Header', () => {
  test('Отображается кнопка "Войти" для неавторизованного пользователя', () => {
    const mockValue: Partial<AuthContextType> = {
      token: null,
      user: null,
      handleLogout: jest.fn(),
    };


    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockValue as AuthContextType}>
          <Header />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // проверить, что отображается кнопка "Войти"
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });
  test('Отображается имя пользователя для авторизованного пользователя', () => {
    const mockValue: Partial<AuthContextType> = {
      token: 'test-token',
      user: { userName: 'UserName', email: 'UserName@user.name'  },
      handleLogout: jest.fn(),
    };


    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockValue as AuthContextType}>
          <Header />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // проверить, что отображается имя пользователя
    expect(screen.getByText("UserName")).toBeInTheDocument();
  });
});