/*Создать переменные и записать в них ответ пользователя.
из полученных переменных посчитать площадь фигуры
вывести результат в консоль или alert

Предусмотрите что пользователь мог ввести буквы и сделайте преобразования.

1. Спросить стороны треугольника и посчитать площадь
2. Спросить стороны трапеции и посчитать площадь
3. Спросить стороны круга и посчитать площадь
4. Спросить стороны паралеллограма и посчитать площадь

5. Спросить стороны цилиндра и посчитать объем
6. Спросить стороны сферы и посчитать объем*/

/* 1. Спросить стороны треугольника и посчитать площадь*/

// const sideA = prompt('Enter the side A of the triangle');
// console.log(sideA);
// console.log(typeof sideA === 'number');
// const sideaAnumber = Number (sideA);
// console.log (typeof sideaAnumber);
// console.log(sideaAnumber);


// const height = prompt('Enter the height of the triangle');
// console.log(height);
// console.log(typeof height === 'number');
// const heightA = Number (height);
// console.log (typeof heightA);
// console.log(heightA);

// const S = 1/2*sideaAnumber*heightA;
// console.log(S);


// function triangleArea () {
//   const a = prompt('Введите сторону треугольника');
//   const ha = prompt('Введите высоту треугольник');

//   return 1/2 * a * ha;
// }



// Calculator

// const num1 = prompt();
// const operator = prompt();
// const num2 = prompt();

// function calculator (a, op, b) {
//   if(isNaN(a) || isNaN(b)) {
//     return null;
//   }

//   if (op !== '+' || op !== '-') {
//     return null;
//   }

//   if (op === '+') {
//     return a + b;
//   }

//   if (op === '-') {
//     return a - b;
//   }

//   return null;
// }

// calculator(num1, operator, num2)

// } 





// 1. Создать функцию которая вернет минимальное число из двух
// minNum(3, 7) // 7
// minNum(5, 1) // 5

// function min(num1, num2) {

//   let bool = num1 <= num2;
//   if (bool) {
//     return num1;
//   }

//   // напишите функцию котора вернет всегда положительную версию числа (модуль числа)
//    function modul(num) {
//      if (num < 0) {
//        return num * -1;
//      }

//      return num;
//    }
//    const moduleChisla = modul(20);
//    console.log(moduleChisla)











  // else {
  //   return num2;
  // }


  // if (bool === true) {
  //   return num1;
  // } else {
  //   return num2;
  // }
  // }

  // function minV2(num1, num2) {
  //   const result = Math.min(num1, num2);
  //   return result;
  // }

  // const res = minV2 (6, 4)

  // console.log(res)



//   bool = num1 >= num2;

//   if (bool) {
//     return num2;
//   }

//   return null;
// }

// let result = min(6, 4);

// console.log(result)









// Создать функцию дл расчета площади трапеции, принимать числа как параметры

// const a = prompt ('Введите сторону А трапеции');
// const b = prompt ('Введите сторону В трыпеции');
// const h = prompt ('Введите высоту трапеции');

// function trapezoid (numA, numB, numH) {














  // let prepA = numA;
  // let prepB = numB;
  // let prepH = numH;

  // if (typeof numA !== 'number') {
  //   prepA = Number (numA);
  // }
  // if (typeof numB !== 'number') {
  //   prepB = Number (numB);
  // }
  // if (typeof numH !== 'number') {
  //   prepH = Number (numH);
  // }

  // return ((numA + numH) / 2) * numH;




  // if (typeof numA !== 'number') {
  //   return null;
  // }

  // if (typeof numB !== 'number') {
  //   return null;
  // }
  
  // if (typeof numH !== 'number') {
  //   return null;
  // }

  // return ((numA + numaB) / 2) * numH;


  //  const prepA = Number (numA);
  //  const prepA = Number (numB);
  //  const prepA = Number (numH);
  // return ((prepA + prepB) / 2) * prepH;

//   return (Number(numA) + Number(numB)) / 2 * Number (numH)
// }

// const result = trapezoid (a, b, h)

// console.log (typeof result)

// console.log('Площадь равна ' + result);




// 1. функция которая приветствует пользователя в зависимости от полученного имени
// sayHello ('Victor') // Привет Виктор

// function sayHello() {
//   const name = prompt('Введите свое имя');
//   alert('Привет ' + name);
// }



// 2. Функция которая вернет правду если полученная строка не пустая
// isNotEmpty('') // false
// isNotEmpty('abc') // true

// function inform() {
//   const data = prompt('Введите данные более одного символа');
//   const Empty = '';
  
//   if (data === Empty) {
//     return false;
//   }

//   if (data != Empty) {
//     return true;
//   }
  
// }
// const result = inform();
// console.log(result);

// 3. Функция которая принимает параметры цену продукта и кол-во, возвращает общую сумму заказа
// calcFullPrice(24, 10) // 240

// function parameters() {
//   const price = prompt('Введите цену продукта');
//   const products = prompt('Введите количество товаров');

//   return products * price
// }

// const result = parameters();
// console.log(result);

// 4. Функция которая принимает параметры сумму заказа и кол-во денег в кошельке, и возвращает хватает ли денег купить эти товары

// isEnoughMoney(240, 400) // true
// isEnoughMoney(240, 400) // false

function parameters() {
  const price = prompt('Введите сумму заказа');
  const money = prompt('Введити сумму имеющихся средств в кошельке');

  if (money >= price) {
    alert('Заберите свой заказ')
    return true;
  }

  if (price > money) {
    alert('У вас недостаточно средств.')
  return false;
}

}

const result = parameters();
console.log(result);
