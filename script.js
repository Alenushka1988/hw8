// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.


// const numbersDiv = document.querySelector(`.numbers`);
// let number = 100;

// while(number >= 50){
//     if(number %10===0){
//         const paragraph = document.createElement(`p`);
//     paragraph.textContent = number.toString();
//     numbersDiv.appendChild(paragraph);
//     }
//     number -=10;
// }
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
// const stringsArray =["Первая строка", "Вторая строка", "третья строка","четвертая строка"];
// const stringsContainer = document.querySelector(`.strings_container`);
// stringsArray.forEach((string) =>{
//     const paragraph = document.createElement(`p`);
//     paragraph.textContent = string;
//     stringsContainer.appendChild(paragraph);
// });
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
const users =[
    {first_name: `Ivan`, last_name: `Ivanov`,age: 25},
    {first_name: `Maria`, last_name: `Popova`,age: 18},
    {first_name: `Alex`, last_name: `Petrov`,age: 16},
    {first_name: `Inna`, last_name: `Koslova`,age: 20}];
   const usersContainer = document.querySelector(`.users_container`);
   users.forEach(user =>{
    if(user.age>=18){
        const card = document.createElement(`div`);
        card.classList.add(`user_card`);
        const userInfo = document.createElement(`p`);
        userInfo.textContent = `Name: ${user.first_name}, Thurname: ${user.last_name}, Age: ${user.age}`;
        card.appendChild(userInfo);
        usersContainer.appendChild(card);
    }});
