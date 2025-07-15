describe('Проверка авторизации', function () {

   it('Проверка на позитивный кейс авторизации', function () {
     cy.visit('https://login.qa.studio/'); // Зашла на сайт
     cy.get('#mail').type('german@dolnikov.ru'); // Указала путь до поля "логин", ввела верный логин
     cy.get('#pass').type('iLoveqastudio1'); // Указала путь до поля "пароль", ввела верный пароль
     cy.get('#loginButton').click(); // Указала путь до кнопки "Войти", нажала на кнопку
     cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, отобразился ли текст что авторизация прошла успешно 
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Указала путь до кнопки "Крестик", проверила, что элемент виден пользователю
    })

   it('Автотест на проверку логики восстановления пароля', function () {
     cy.visit('https://login.qa.studio/'); // Зашла на сайт
     cy.get('#forgotEmailButton').click(); // Указала путь до кнопки "Забыли пароль", нажала кнопку
     cy.get('#mailForgot').type('german@dolnikov.ru'); // Указала путь до поля "E-mail", ввела верный E-mail
     cy.get('#restoreEmailButton').click(); //Указала путь до кнопки "Отправить код", нажала кнопку
     cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, отобразился ли текст что новый пароль отправлен
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Указала путь до кнопки "Крестик", проверила, что элемент виден пользователю
   })

   it('Проверка на негативный кейс авторизации "пароль"', function () {
     cy.visit('https://login.qa.studio/'); // Зашла на сайт
     cy.get('#mail').type('german@dolnikov.ru'); // Указала путь до поля "логин", ввела верный логин
     cy.get('#pass').type('iLoveqa'); // Указала путь до поля "пароль", ввела неверный пароль
     cy.get('#loginButton').click(); // Указала путь до кнопки "Войти", нажала на кнопку
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, отобразился ли текст, что авторизация не прошла
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Указала путь до кнопки "Крестик", проверила, что элемент виден пользователю
   })

   it('Проверка на негативный кейс авторизации "логин"', function () {
     cy.visit('https://login.qa.studio/'); // Зашла на сайт
     cy.get('#mail').type('german@d.ru'); // Указала путь до поля "логин", ввела неверный логин
     cy.get('#pass').type('iLoveqastudio1'); // Указала путь до поля "пароль", ввела верный пароль
     cy.get('#loginButton').click(); // Указала путь до кнопки "Войти", нажала на кнопку
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, отобразился ли текст что авторизация не прошла
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Указала путь до кнопки "Крестик", проверила, что элемент виден пользователю
    })

    it('Проверка на негативный кейс валидации', function () {
     cy.visit('https://login.qa.studio/'); // Зашла на сайт
     cy.get('#mail').type('germandolnikov.ru'); // Указала путь до поля "логин", ввела логин без @
     cy.get('#pass').type('iLoveqastudio1'); // Указала путь до поля "пароль", ввела верный пароль
     cy.get('#loginButton').click(); // Указала путь до кнопки "Войти", нажала на кнопку
     cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, отобразился ли текст, что валидация не прошла
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Указала путь до кнопки "Крестик", проверила, что элемент виден пользователю
   })

   it('Проверка на приведение к строчным буквам в логине', function () {
     cy.visit('https://login.qa.studio/'); // Зашла на сайт
     cy.get('#mail').type('GerMan@Dolnikov.ru'); // Указала путь до поля "логин", ввела верный логин с большими буквами
     cy.get('#pass').type('iLoveqastudio1'); // Указала путь до поля "пароль", ввела верный пароль
     cy.get('#loginButton').click(); // Указала путь до кнопки "Войти", нажала на кнопку
     cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, отобразился ли текст что авторизация прошла успешно 
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Указала путь до кнопки "Крестик", проверила, что элемент виден пользователю
    })
    })