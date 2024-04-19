// 1. Перенести дані з першого тесту, створивши РОМ. Всі елементи для першого тесту мають мати XPath селектори.
//    Для заповнення даних на формі створити окремий метод. Й також окремий метод має бути створений для валідації даних
//    після завершення заповнення форми. Метод для валідації має перевіряти що ми на коректній url. cy.url(). Й також
//    перевірити імʼя та прізвище юзеру, для сторінки профайлу
//
// 2. Написати BasePage, котра буде у собі містити селектори для хедеру та футеру (тільки для залогіненого юзера)
//
// 3. Написати РОМ для сторінок Garage та Fuel expenses котрі мають наслідуватись від BasePage(Врахуйте, що вам потрібно
//    описати не тільки початковий стан, але й стан після різних дій з додатком). Реалізація методів поки не потрібна, лише
//    опис всіх селекторів на сторінки, с котрими ми будемо (або потенційно будемо) взаємодіяти.
//
// Для опису РОМ у 2-му та 3 пункті можна використати будь-які селектори CSS, XPath. Головна задача, описати селектори,
// та познайомитись з додатком ближче (Зробити CRUD для авто, зробити CRUD для Fuel expenses й просто зробити експлораторі тестінг).

import {BasePage} from "../pages/BasePage"

const basePage = new BasePage();

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
    it('Happy path', ()=> {
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        basePage.signUpButton().click();
        basePage.fulfillingSignUpForm(user);
        basePage.registerButton().click();
        basePage.registerValidation(user);
    })
});

