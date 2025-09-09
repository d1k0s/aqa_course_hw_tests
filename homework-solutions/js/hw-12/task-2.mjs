/* 
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку.
Преобразуйте респонс из JSON в объект.
Проверьте, что айди в респонсе === 201.
Функция должна возвращать полученный объект из респонса.
Обрабатывайте ошибки с помощью try/catch, в конце выведите в консоль текст, что работа функции завершена.
*/

const url = 'https://jsonplaceholder.typicode.com/todos';

async function createTodo(todo) {
    try { 
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        if (response.status === 201) {
            const todo = await response.json();
            if (todo.id === 201) {
                return todo;
            } else {
                throw new Error('Invalid todo ID');
            }
        } else {
            throw new Error('Failed to create todo');
        }

    } catch (error) {
        console.log(error);
    } finally {
        console.log('Todo creation process completed');
    }
}



