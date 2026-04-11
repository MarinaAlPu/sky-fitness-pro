/**
 * @jest-environment jest-fixed-jsdom
 */

import '@testing-library/jest-dom';
import { cleanup, render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from "./MainContent";
import { CoursesContext, type CoursesContextType } from '../../context/CoursesContext';
import { data } from '../../data';
import type { CourseType } from '../../types/types';
import { AuthContext, type AuthContextType } from '../../context/AuthContext';
import userEvent from '@testing-library/user-event';


const mockCourses: CourseType[] = data;


describe('Компонент MainContent', () => {
  afterEach(cleanup);


  test('Отображается заголовок "Начните заниматься спортом и улучшите качество жизни"', () => {
    const mockAuthValue: Partial<AuthContextType> = {
      token: 'test-token',
      user: null,
      handleLogout: jest.fn(),
    };

    const mockCoursesValue: Partial<CoursesContextType> = {
      courses: mockCourses,
      getCourses: jest.fn(),
      userCourses: [],
      addUserCourse: jest.fn(),
      deleteUserCourse: jest.fn(),
    };


    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue as AuthContextType}>
          <CoursesContext.Provider value={mockCoursesValue as CoursesContextType}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );


    // проверить, что отображается заголовок "Начните заниматься спортом и улучшите качество жизни"
    expect(screen.getByText("Начните заниматься спортом и улучшите качество жизни")).toBeInTheDocument();

    // проверить, что заголовок "Начните заниматься спортом и улучшите качество жизни" один
    expect(screen.getAllByText("Начните заниматься спортом и улучшите качество жизни").length).toBe(1);
  });
  test('Отображается корректное количество карточек курсов', () => {
    const mockAuthValue: Partial<AuthContextType> = {
      token: 'test-token',
      user: null,
      handleLogout: jest.fn(),
    };

    const mockCoursesValue: Partial<CoursesContextType> = {
      courses: mockCourses,
      getCourses: jest.fn(),
      userCourses: [],
      addUserCourse: jest.fn(),
      deleteUserCourse: jest.fn(),
    };


    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue as AuthContextType}>
          <CoursesContext.Provider value={mockCoursesValue as CoursesContextType}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );


    // получить количество курсов
    const coursesQuantity = mockCourses.length;

    // получить количество карточек курсов
    const cardsQuantity = screen.getAllByRole('link');

    // Проверяем, что их ровно 5
    expect(cardsQuantity.length).toBe(coursesQuantity);
  });
  test('Если курс не добавлен пользователю, то у него кнопка "Добавить курс"', () => {
    const mockAuthValue: Partial<AuthContextType> = {
      token: 'test-token',
      user: null,
      handleLogout: jest.fn(),
    };

    const mockCoursesValue: Partial<CoursesContextType> = {
      courses: mockCourses,
      getCourses: jest.fn(),
      userCourses: [],
      addUserCourse: jest.fn(),
      deleteUserCourse: jest.fn(),
    };


    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue as AuthContextType}>
          <CoursesContext.Provider value={mockCoursesValue as CoursesContextType}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );


    // проверить количество кнопок "Добавить курс"
    const addCourseButtons = screen.queryAllByAltText("Добавить");
    expect(addCourseButtons).toHaveLength(mockCourses.length);

    // проверить количество кнопок "Удалить курс"
    const deleteCourseButtons = screen.queryAllByAltText("Удалить");
    expect(deleteCourseButtons).toHaveLength(0);
  });
  test('Если курс добавлен пользователю, то у него кнопка "Удалить курс"', () => {
    const addedCourseId = mockCourses[0]._id;
    const addedCourseTitle = mockCourses[0].nameRU;

    const mockAuthValue: Partial<AuthContextType> = {
      token: 'test-token',
      user: null,
      handleLogout: jest.fn(),
    };

    const mockCoursesValue: Partial<CoursesContextType> = {
      courses: mockCourses,
      getCourses: jest.fn(),
      userCourses: [addedCourseId],
      addUserCourse: jest.fn(),
      deleteUserCourse: jest.fn(),
    };


    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue as AuthContextType}>
          <CoursesContext.Provider value={mockCoursesValue as CoursesContextType}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );


    // получить количество кнопок "Удалить курс"
    const deleteCourseButtons = screen.getAllByAltText("Удалить");
    expect(deleteCourseButtons).toHaveLength(1);

    // получить количество кнопок "Добавить курс"
    const addCourseButtons = screen.getAllByAltText("Добавить");
    expect(addCourseButtons).toHaveLength(mockCourses.length - 1);

    // проверить, что кнопка "Удалить курс" на карточке добавленного курса

    // найти карточку по названию курса
    const cardTitle = screen.getByText(addedCourseTitle);
    // получить контейнер карточки
    const cardContainer = cardTitle.closest('a');

    if (!cardContainer) {
      throw new Error('Контейнер карточки не найден');
    }

    // найти кнопку "Удалить курс" в контейнере карточки
    const deleteCourseButton = within(cardContainer).getByAltText("Удалить");
    expect(deleteCourseButton).toBeInTheDocument();
  });
  test('После добавления курса кнопка становится "Удалить курс"', async () => {
    const user = userEvent.setup();
    const courseId = mockCourses[0]._id;
    const courseTitle = mockCourses[0].nameRU;

    // мок функции добавления курса
    const mockAddUserCourse = jest.fn();


    const mockAuthValue: Partial<AuthContextType> = {
      token: 'test-token',
    };

    const mockCoursesValue: Partial<CoursesContextType> = {
      courses: mockCourses,
      getCourses: jest.fn(),
      userCourses: [],
      addUserCourse: mockAddUserCourse,
      deleteUserCourse: jest.fn(),
    };

    const mockCoursesValueAfterAddCourse: Partial<CoursesContextType> = {
      courses: mockCourses,
      getCourses: jest.fn(),
      userCourses: [courseId],
      addUserCourse: mockAddUserCourse,
      deleteUserCourse: jest.fn(),
    };


    const { rerender } = render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue as AuthContextType}>
          <CoursesContext.Provider value={mockCoursesValue as CoursesContextType}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );


    // найти карточку по названию курса
    const cardTitle = screen.getByText(courseTitle);
    // получить контейнер карточки
    const cardContainer = cardTitle.closest('a');

    if (!cardContainer) {
      throw new Error('Контейнер карточки не найден');
    }

    // найти кнопку "Добавить курс" в контейнере карточки
    const addCourseButton = within(cardContainer).getByAltText("Добавить");

    // нажать кнопку "Добавить курс"
    await user.click(addCourseButton);

    // проверить, что вызвалась функция добавления курса
    expect(mockAddUserCourse).toHaveBeenCalledWith(courseId, 'test-token');


    // перерендерить страницу после добавления курса
    rerender(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthValue as AuthContextType}>
          <CoursesContext.Provider value={mockCoursesValueAfterAddCourse as CoursesContextType}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );


    // найти карточку по названию курса после добавления курса
    const addedCardTitle = screen.getByText(courseTitle);
    // получить контейнер карточки
    const addedCardContainer = addedCardTitle.closest('a');

    if (!addedCardContainer) {
      throw new Error('Контейнер карточки не найден после добавления курса');
    }

    // найти кнопку "Добавить курс" в контейнере карточки
    const addedCourseAddButton = within(addedCardContainer).queryAllByAltText("Добавить");
    expect(addedCourseAddButton).toHaveLength(0);

    // найти кнопку "Удалить курс" в контейнере карточки
    const addedCourseDeleteButton = within(addedCardContainer).queryAllByAltText("Удалить");
    expect(addedCourseDeleteButton).toHaveLength(1);
  });
});