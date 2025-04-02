import { DataRow } from '@/types/DataRow'
import { faker } from '@faker-js/faker/locale/ru'
import axios from 'axios'
import { http, HttpResponse } from 'msw'

const url = '/api/general/objects'

//Faker yt позволяет создаьть массив с подобным неймингом. Создаем массив "Отделов" самостоятельно.
const departmentNames = [
  'Отдел проектирования',
  'Отдел строительства',
  'Отдел снабжения',
  'Отдел качества',
  'Отдел охраны труда',
  'Отдел планирования',
  'Отдел архитектуры',
  'Отдел инженерных систем',
  'Отдел по работе с клиентами',
  'Отдел финансового контроля',
]
/**
 * Получает данные строк из API.
 *
 * Данная функция выполняет HTTP GET запрос к указанному URL и возвращает данные.
 * Также выводит в консоль информацию о каждом элементе данных.
 *
 * @returns {Promise<AxiosResponse<DataRow[]>>} Объект ответа Axios с массивом данных.
 */
export async function getDataRows() {
  await new Promise((resolve) => setTimeout(resolve, 200)) // (resolve, x )
  const response = await axios.get<DataRow[]>(url)

  /**Логирование ответа 
  const data = response.data

  data.forEach((item) => {
    console.log(
      `Ключ: ${item.key}, Объект: ${item.object}, Имя: ${item.firstName}, Фамилия: ${item.lastName}`,
    )
  })
*/
  return response
}

/**
 * Массив сгенерированных данных для объектов общего назначения.
 *
 * Данный массив содержит length = x  объектов, каждый из которых представляет собой строку данных
 * с случайно сгенерированными значениями для различных полей.
 *
 * @type {DataRow[]}
 */
const startDate = new Date(2024, 5, 1) // 1 июня 2024 года
const currentDate = new Date() // Текущая дата

export const mockedGeneralObjectsData = Array.from({ length: 200 }, () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  // Генерация случайной даты в диапазоне от 1 июня 2024 года до текущей даты
  const randomDate = (start: Date, end: Date) => {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    )
    return date.toLocaleDateString()
  }

  return {
    key: faker.string.uuid(),
    object: faker.company.name(),
    firstName,
    lastName,
    employee: `${lastName} ${firstName}`,
    stage: faker.word.adjective(),
    step: faker.word.noun(),
    kit: faker.commerce.product(),
    status: faker.helpers.arrayElement(['Pending', 'In Progress', 'Completed']),
    duration: `${faker.number.int({ min: 1, max: 50 })} days`,
    startDate: randomDate(startDate, currentDate), // Генерация случайной даты начала
    issueDate: randomDate(startDate, currentDate), // Генерация случайной даты выдачи
    plannedIssueDate: randomDate(startDate, currentDate), // Генерация случайной планируемой даты выдачи
    predecessorTasks: faker.helpers.arrayElement([
      'Task A',
      'Task B',
      'Task C',
    ]),
    department: faker.helpers.arrayElement(departmentNames),
  }
})

/**
 * Обработчик для получения данных объектов общего назначения.
 *
 * Данная функция обрабатывает HTTP GET запросы к указанному URL и возвращает
 * сгенерированные данные объектов общего назначения в формате JSON.
 *
 * @returns {HttpResponse} Ответ с данными в формате JSON.
 */
export const getGeneralDataHandler = http.get(url, () => {
  return HttpResponse.json(mockedGeneralObjectsData)
})

export const getRootURL = http.get('/', () => {
  return HttpResponse.json({ message: 'Welcome to the API!' })
})
export const getGeneralURL = http.get('/general', () => {
  return HttpResponse.json({ message: 'Welcome to the General!' })
})
