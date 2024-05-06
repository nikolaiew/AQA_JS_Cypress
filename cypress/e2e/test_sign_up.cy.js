// 1. Поки тест пишемо весь в одному файлі
// 2. Створити новий репозиторій й під'єднати до нього вашу папку з встановленим сайпресом
// 3. Автоматизувати тест-кейс
// Тест-кейс: Реєстрація нового користувач для сервісу "Гараж"
// Опис: Тест-кейс перевіряє процес реєстрації нового користувача, заповнення форми SignUp, і валідність даних користувача на сторінці "Гараж" після реєстрації.
// Попередні вимоги: Cypress встановлено та налаштовано.
// Тестові кроки:
//    1. Відкрити вітальну сторінку.
//    2. Натиснути кнопку "Sign Up".
//    3. Заповнити форму реєстрації валідними даними.
//    4. Натиснути кнопку "Registration".
//    5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
//    6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.
// Очікуваний результат:
// Дані користувача на сторінці "Гараж" відповідають даним, введеним під час реєстрації.
// 4. Для емейлу написати функцію, котра буде генерувати рандомний емейл. Не використовувати стороні бібліотеки типу фейкеру, лібу Math та все що не потребує імпорту - можна.
//
// 5. Додати до гітІгнору node_modules ТА додати до гіт ігнору АБО видалити стандартні тести (приклади з сайпресу, котрі встановлені за дефолтом)


function getRandom(min, max) { // функція генерації числа від min до max включно
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function userGen() {  // функція генерації даних юзера (як варіант)
    const names = ['Noah', 'Liam', 'Mason', 'James', 'Jacob', 'Ethan', 'John', 'Sten', 'Tim', 'Bill']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor']
    const user = {}
    user.name = names[getRandom(0,9)]
    user.lastName = lastNames[getRandom(0,9)]
    user.email = user.name.toLowerCase() + '_' + user.lastName.toLowerCase() + getRandom(10,99) + '@testmail.com'
    user.password = user.name + getRandom(10000,99999)
    return user
}

const baseUrl = 'qauto2.forstudy.space/'
const user = userGen()  // генеруємо дані юзера

describe ('Test qauto Sign up', () => {
    it('Happy pass', ()=> { // запускаємо тест-кейс
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`)  // Крок 1
        cy.get('button').contains('Sign up').click();  // Крок 2
        // Крок 3
        cy.get('input#signupName').type(user.name).should('have.value', user.name);
        cy.get('input#signupLastName').type(user.lastName).should('have.value', user.lastName);
        cy.get('input#signupEmail').type(user.email).should('have.value', user.email);
        cy.get('input#signupPassword').type(user.password).should('have.value', user.password);
        cy.get('input#signupRepeatPassword').type(user.password).should('have.value', user.password);
        cy.get('button').contains('Register').click(); // Крок 4
        cy.get('h1').contains('Garage').should('exist'); // Крок 5
        // Крок 6
        cy.get('a[routerlink="profile"]').click(); // заходимо в профіль
        cy.get('p.profile_name.display-4').should('contain', user.name); // ім'я на місці
        cy.get('p.profile_name.display-4').should('contain', user.lastName); // видає помилку (бага) - замість очікуємого (на мою думку) призвища система виводить "undefined"
    })
});

