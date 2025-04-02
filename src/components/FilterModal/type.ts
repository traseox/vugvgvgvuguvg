import { DataRow } from '@/types/DataRow'

export interface FilterValues {
  /**Отдел для фильтрации. */
  department?: string
  /**Сотрудник для фильтрации. */
  employee?: string
  /**Объект для фильтрации. */
  object?: string
  /**Стадия для фильтрации. */
  stage?: string
  /**Комплект для фильтрации. */
  kit?: string
  /**Статус для фильтрации. */
  status?: string
  /**Дата начала для фильтрации. */
  startDate?: string
  /**Дата выпуска для фильтрации. */
  issueDate?: string
  /**Запланированная дата выпуска для фильтрации. */
  plannedIssueDate?: string
}

/**
 * Пропсы для модального окна фильтра.
 *
 * @interface FilterModalProps
 * @property {boolean} open - Указывает, открыто ли модальное окно.
 * @property {function} onCancel - Функция, вызываемая при закрытии модального окна.
 * @property {function} onApply - Функция, вызываемая при применении фильтров, принимает значения фильтров.
 * @property {DataRow[]} data - Массив данных, к которым применяются фильтры.
 */
export interface FilterModalProps {
  open: boolean
  onCancel: () => void
  onApply: (values: FilterValues) => void
  data: DataRow[]
}
