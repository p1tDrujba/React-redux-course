// const dog = {
//     name: 'dog',
//     voice: 'woof',
//     say: function() {
//         console.log(this.name, 'goes', this.voice);
//     }
// };

// const cat =  {
//     name: 'cat',
//     voice: 'meow',
//     say: function() {
//         console.log(this.name, 'goes', this.voice);
//     }
// };


// Давайте улучшим код. Вынесем функцию say()  в другой объект

// const animal = {
//     say: function() {
//         console.log(this.name, 'goes', this.voice);
//     }
// };

// const dog = {
//     name: 'dog',
//     voice: 'woof',
// };

// const cat =  {
//     name: 'cat',
//     voice: 'meow',
// };

// 1 способ установить связь между animal и dog, cat (плохой метод, сказывается на быстродействии):

// Object.setPrototypeOf(dog, animal);
// Object.setPrototypeOf(cat, animal);


// dog.say();
// cat.say();

// 2 способ создать прототипную свзяь:

// на вход принимает прототип (animal) объекта (dog)  который мы создаем
// const dog = Object.create(animal);
// dog.name = 'dog';
// dog.voice = 'woof'

// вынесем логику создания животного в отдельную функцию

// const animal = {
//     say: function() {
//         console.log(this.name, 'goes', this.voice);
//     }
// };

// function createAnimal(name, voice) {
//     const result = Object.create(animal);
//     result.name = name;
//     result.voice = voice;
//     return result;
// }

// const dog = createAnimal('Dog', 'woof');
// const cat = createAnimal('Cat', 'meow');

// dog.say();
// cat.say();


// КАК СОЗДАВАТЬ НОВЫЕ ФУНКЦИИ И ИСПОЛЬЗОВАТЬ ПРОТОТИПЫ


// функции, которые создают новые объекты, функции-конструкторы пишут с большой буквы
function Animal(name, voice) {
// Когда мы используем new при создании объектов, то внутри функции-конструктора создается новый объект 'this'
    this.name = name;
    this.voice = voice;
// Не нужно возвращать обхект new, так как когда мы вызываем его с ключевым словом new возвращается автоматически
}

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

// У каждой обычой функции функции есть свойство prototype - это просто пустой объект, который будет использоваться как прототип для новых объектов, которые мы создаем с этой функцией

Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice);
};


dog.say();
cat.say();