/**
 * Пропсы для компонента StageSelect.
 *
 * @interface StageSelectProps
 * @property {string[]} filteredStages - Массив стадий, отфильтрованных по критериям.
 * @property {string[]} stages - Массив всех стадий.
 */
export interface StageSelectProps {
  filteredStages: string[]
  stages: string[]
}
