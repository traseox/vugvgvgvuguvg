/**
 * Пропсы для компонента EmployeeSelect.
 *
 * @interface EmployeeSelectProps
 * @property {string[]} filteredEmployees - Массив сотрудников, отфильтрованных по критериям.
 * @property {string[]} employees - Массив всех сотрудников.
 * @property {function} onChange - Функция, вызываемая при изменении выбранного сотрудника.
 */
export interface EmployeeSelectProps {
  filteredEmployees: string[]
  employees: string[]
  onChange: (value: string) => void
}
