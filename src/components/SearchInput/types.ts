/**
 * Пропсы для компонента поиска.
 *
 * @interface SearchInputProps
 * @property {function} onSearch - Функция, вызываемая при выполнении поиска.
 * Она принимает строку `query`, представляющую текст запроса для поиска.
 */
export interface SearchInputProps {
  onSearch: (query: string) => void
}
