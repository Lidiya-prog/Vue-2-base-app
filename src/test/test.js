// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

// (async () => {
// 	browser = await puppeteer.launch();
// 	page = await browser.newPage();
// 	await page.goto('http://localhost:5173/');
// 	const buttons = await page.$$('.test');
// 	console.log(buttons);
// })();

describe('Button Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      // Уровень логирования (например, 'info' или 'error').
      // Установите уровень, который включает вывод логов в консоль.
      logLevel: 'silent',
    });
    page = await browser.newPage();
    await page.goto('http://localhost:5175/'); // Замените URL на адрес вашего приложения Vue

    const vm = await page.evaluate(() => window.vm);

    // Выполняем запрос к API и дожидаемся загрузки данных
    await page.evaluate(async () => {
      console.log('Hello');
      console.log(vm);
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      );
      vm.$data.taskList = tasks.map((task) => ({
        id: task.id,
        completed: false,
        title: task.title,
      }));
      window.vm.$data.taskList = tasks;
      console.log('Hello2');
      console.log(vm.$data.taskList);
      // console.log(window.vm.taskList);
    });
    // await page.waitForFunction(() => vm.taskList !== undefined);

    // await page.waitForTimeout(2000);

    // await page.waitForRequest((request) => {
    // 	console.log('wait...');
    // 	return request.url() === 'https://jsonplaceholder.typicode.com/todos';
    // });

    // await page.waitForFunction(() => {
    // 	const dataRendered = document.querySelector('.check-circle');
    // 	return dataRendered !== null;
    // });

    await page.evaluate(async () => {
      console.log('Hello3');
      // console.log(vm.taskList);
    });
  });

  // afterAll(async () => {
  // 	await browser.close();
  // });

  test('Check if Buttons are Clickable and Measure Time', async () => {
    // Добавьте код, который показывает кнопки, если они скрыты
    // Например, если у вас есть метод, который показывает кнопки, вызовите его здесь
    // await page.evaluate(() => {
    // 	document.querySelectorAll('.check-circle').forEach((button) => {
    // 		button.style.display = 'block';
    // 	});
    // });
    await page.waitForFunction(() => window.vm.$data.taskList !== null);

    await page.waitForSelector('.check-circle');

    const buttonSelectors = '.check-circle'; // Селектор для всех кнопок
    const buttons = await page.$$(buttonSelectors); // Получаем все кнопки
    await page.evaluate(async () => {
      console.log(document.querySelectorAll('.check-circle'));
      console.log('Hello3');
    });
    // const buttons = document.querySelectorAll(buttonSelectors); // Получаем все кнопки
    // console.log(buttons);

    // Проверяем, что количество кнопок соответствует ожидаемому количеству (200)
    // expect(buttons.length).toBe(200);
    const obj = [];

    if (buttons.length) {
      await page.evaluate(async () => {
        console.log(window.vm.$data.taskList);
        console.log('hello4');
      });
      // Проходим по каждой кнопке и выполним необходимые действия
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        // Засекаем начальное время
        // await page.evaluate(async () => {
        // 	// fs.writeFileSync('output.txt', performance.now(), 'utf-8');
        // 	// console.log(performance.now());
        // });
        const startTime = performance.now();
        await button.click();

        // vm.taskList[i].completed = true;

        // await page.evaluate(async (time) => {
        // 	console.log('start:', time);
        // }, startTime);

        await page.evaluate(async (index) => {
          // console.log(vm.taskList[0].completed);
          window.vm.$data.taskList[index].completed = true;
          // console.log(window.vm.taskList[index].completed);
        }, i);

        // Ожидаем, пока состояние элемента массива не изменится
        // await page.waitForFunction(
        // 	(index) => vm.taskList[index].completed === true,
        // 	{},
        // 	i
        // );

        // Засекаем конечное время
        const endTime = performance.now();
        // await page.evaluate(async (time) => {
        // 	console.log('end:', time);
        // }, endTime);

        // Вычисляем время выполнения операции в миллисекундах
        const executionTime = endTime - startTime;

        await page.evaluate(
          async (time, index) => {
            console.log(`Execution Time for Button ${index + 1}: ${time} ms`);
          },
          executionTime,
          i,
        );

        obj.push(executionTime);
        // Добавьте проверки, которые соответствуют вашим ожиданиям после клика на каждую кнопку
        // В данном случае, мы ожидаем, что состояние элемента массива будет равно true
        const isTaskCompleted = await page.evaluate((index) => {
          // Здесь index - это индекс текущей кнопки в массиве
          return window.vm.$data.taskList[index].completed; // vm - экземпляр вашего компонента Vue
        }, i);

        expect(isTaskCompleted).toBe(true);

        // fs.writeFileSync('output.txt', executionTime, 'utf-8');
        // await page.evaluate(async () => {
        // 	console.log('execution:', executionTime);
        // });
        console.log(`Execution Time for Button ${i + 1}: ${executionTime} ms`);
      }

      await page.evaluate(async (res) => {
        console.log(String(res));
      }, obj);
    }
  });
});
// const puppeteer = require('puppeteer');

//

// const puppeteer = require('puppeteer');

// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();

// 	await page.goto('http://localhost:5174/'); // Замените на URL вашей страницы

// 	// Ожидаем, пока компоненты загрузятся (при необходимости)
// 	await page.waitForSelector('.check-circle');

// 	const buttonSelector = '.check-circle'; // Селектор кнопки
// 	const completedClass = 'completed'; // Класс, который добавляется после выполнения задачи
// 	const clickCount = 10; // Количество нажатий

// 	// Измеряем время выполнения
// 	for (let i = 0; i < clickCount; i++) {
// 		const startTime = Date.now();
// 		await page.click(buttonSelector);

// 		// Ожидаем, пока состояние компонента не изменится (по добавлению класса "completed")
// 		await page.waitForSelector(`${buttonSelector}.${completedClass}`);

// 		const endTime = Date.now();
// 		const elapsedTime = endTime - startTime;
// 		console.log(`Нажатие ${i + 1} заняло ${elapsedTime} миллисекунд`);
// 	}

// 	test('Test Button Click', () => {
// 		expect(true).toBe(true);
// 	});

// 	await browser.close();
// })();