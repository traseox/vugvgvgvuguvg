import { useState } from 'react'
import { useDebounce } from '@/shared/hooks/Debounce/useDebounce'
// import styles from './SearchInput.module.scss'
import { SearchInputProps } from './types'
import Search from 'antd/es/input/Search'

/**
 * Компонент для ввода поискового запроса с дебаунсом.
 *
 * @param {SearchInputProps} props - Пропсы компонента.
 * @param {function} props.onSearch - Функция, вызываемая при изменении поискового запроса.
 *
 * @returns {JSX.Element} Элемент поля ввода.
 */
export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const debouncedSearch = useDebounce((query: string) => {
    onSearch(query)
  }, 500)

  /**
   * Обработчик изменения ввода.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие изменения ввода.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    debouncedSearch(value)
  }

  return (
    <div>
      <Search
        type='text'
        placeholder='Поиск по имени сотрудника'
        value={inputValue}
        onChange={handleChange}
        className='text'
      />
    </div>
  )
}
