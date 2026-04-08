/**
 * @jest-environment jest-fixed-jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from "./MainContent";
import { CoursesContext } from '../../context/CoursesContext';
import { data } from '../../data';
import type { CourseType } from '../../types/types';
import { AuthContext } from '../../context/AuthContext';
import userEvent from '@testing-library/user-event';


const mockCourses: CourseType[] = data;


describe('Компонент MainContent', () => {
  test('Отображается заголовок "Начните заниматься спортом и улучшите качество жизни"', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: 'test-token',
          user: null,
          handleLogout: jest.fn(),
        } as any}>
          <CoursesContext.Provider value={{
            courses: mockCourses,
            getCourses: jest.fn(),
            userCourses: [],
            addUserCourse: jest.fn(),
            deleteUserCourse: jest.fn(),
          } as any}>
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
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: 'test-token',
          user: null,
          handleLogout: jest.fn(),
        } as any}>
          <CoursesContext.Provider value={{
            courses: mockCourses,
            getCourses: jest.fn(),
            userCourses: [],
            addUserCourse: jest.fn(),
            deleteUserCourse: jest.fn(),
          } as any}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // получить количество курсов
    const coursesQuantity = mockCourses.length;
    // console.log("coursesQuantity: ", coursesQuantity);

    // получить количество карточек курсов
    const cardsQuantity = screen.getAllByRole('link');
    // console.log("cardsQuantity: ", cardsQuantity.length);

    // Проверяем, что их ровно 5
    expect(cardsQuantity.length).toBe(coursesQuantity);
  });
  test('Если курс не добавлен пользователю, то у него кнопка "Добавить курс"', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: 'test-token',
          user: null,
          handleLogout: jest.fn(),
        } as any}>
          <CoursesContext.Provider value={{
            courses: mockCourses,
            getCourses: jest.fn(),
            userCourses: [],
            addUserCourse: jest.fn(),
            deleteUserCourse: jest.fn(),
          } as any}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // проверить количество кнопок "Добавить курс"
    const addCourseButtons = screen.queryAllByAltText("Добавить");
    // console.log("addCourseButtons: ", addCourseButtons.length);
    expect(addCourseButtons).toHaveLength(mockCourses.length);

    // проверить количество кнопок "Удалить курс"
    const deleteCourseButtons = screen.queryAllByAltText("Удалить");
    // console.log("deleteCourseButtons: ", deleteCourseButtons.length);
    expect(deleteCourseButtons).toHaveLength(0);
  });
  test('Если курс добавлен пользователю, то у него кнопка "Удалить курс"', () => {
    const addedCourseId = mockCourses[0]._id;
    const addedCourseTitle = mockCourses[0].nameRU;

    render(
      <BrowserRouter>
        <AuthContext.Provider value={{
          token: 'test-token',
          user: null,
          handleLogout: jest.fn(),
        } as any}>
          <CoursesContext.Provider value={{
            courses: mockCourses,
            getCourses: jest.fn(),
            userCourses: [addedCourseId],
            addUserCourse: jest.fn(),
            deleteUserCourse: jest.fn(),
          } as any}>
            <MainContent />
          </CoursesContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    // получить количество кнопок "Удалить курс"
    const deleteCourseButtons = screen.getAllByAltText("Удалить");
    // console.log("deleteCourseButtons: ", deleteCourseButtons.length);
    expect(deleteCourseButtons).toHaveLength(1);

    // получить количество кнопок "Добавить курс"
    const addCourseButtons = screen.getAllByAltText("Добавить");
    // console.log("addCourseButtons: ", addCourseButtons.length);
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

    const { rerender } = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ token: 'test-token' } as any}>
          <CoursesContext.Provider value={{
            courses: mockCourses,
            userCourses: [],
            addUserCourse: mockAddUserCourse,
            getCourses: jest.fn(),
          } as any}>
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
        <AuthContext.Provider value={{ token: 'test-token' } as any}>
          <CoursesContext.Provider value={{
            courses: mockCourses,
            userCourses: [courseId],
            addUserCourse: mockAddUserCourse,
            getCourses: jest.fn(),
          } as any}>
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