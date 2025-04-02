/**
 * Пропсы для компонента ObjectSelect.
 *
 * @interface ObjectSelectProps
 * @property {string[]} filteredObjects - Массив объектов, отфильтрованных по критериям.
 * @property {string[]} objects - Массив всех объектов.
 * @property {function} onChange - Функция, вызываемая при изменении выбранного объекта.
 */
export interface ObjectSelectProps {
  filteredObjects: string[]
  objects: string[]
  onChange: (value: string) => void
}
