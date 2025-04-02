/**
 * Пропсы для компонента управления пагинацией.
 *
 * @interface PaginationControlProps
 * @property {number} currentPage - Текущая страница.
 * @property {number} total - Общее количество элементов.
 * @property {number} rowsPerPage - Количество строк, отображаемых на странице.
 * @property {function} onPageChange - Функция, вызываемая при изменении страницы, принимает номер страницы.
 * @property {function} onRowsPerPageChange - Функция, вызываемая при изменении количества строк на странице, принимает новое значение.
 */
export interface PaginationControlProps {
  currentPage: number
  total: number
  rowsPerPage: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (value: number) => void
}
