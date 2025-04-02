import { DataRow } from '@/types/types'
import './Columns.scss'

/**
 * Колонки для таблицы данных.
 *
 * @constant {Array<Object>} columns - Массив объектов, представляющих колонки таблицы.
 * @property {string} title - Заголовок колонки.
 * @property {string} dataIndex - Ключ, соответствующий данным в строках таблицы.
 * @property {string} [className] - Дополнительные классы для стилизации колонки.
 * @property {function} [sorter] - Функция для сортировки данных в колонке.
 */
export const columns = [
  {
    title: 'Объект',
    dataIndex: 'object',
    className: 'columns',
    sorter: (a: DataRow, b: DataRow) => a.object.localeCompare(b.object),
    ellipsis: true,
  },
  {
    title: 'Сотрудник',
    className: 'columns',
    dataIndex: 'employee',
    sorter: (a: DataRow, b: DataRow) => a.employee.localeCompare(b.employee),
  },
  {
    className: 'columns',
    title: 'Стадия',
    dataIndex: 'stage',
  },
  {
    className: 'columns',
    title: 'Этап',
    dataIndex: 'step',
  },
  {
    className: 'columns',
    title: 'Комплект',
    dataIndex: 'kit',
  },
  {
    className: 'columns',
    title: 'Статус',
    dataIndex: 'status',
  },
  {
    className: 'columns',
    title: 'Длительность',
    dataIndex: 'duration',
  },
  {
    className: 'columns',
    title: 'Дата начала',
    dataIndex: 'startDate',
  },
  {
    className: 'columns',
    title: 'Дата выдачи',
    dataIndex: 'issueDate',
  },
  {
    className: 'columns',
    title: 'Планируемая дата выдачи',
    dataIndex: 'plannedIssueDate',
  },
  {
    className: 'columns',
    title: 'Задачи предшественники',
    dataIndex: 'predecessorTasks',
  },
]
