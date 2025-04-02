import { useRef } from 'react'
import debounce from 'lodash.debounce'

/**
 * Хук для создания дебаунсированного колбэка.
 *
 * Данный хук возвращает дебаунсированную версию функции, которая будет вызываться
 * только после того, как пройдет указанное время задержки.
 *
 * @param {function} callback - Функция, которая будет вызываться после задержки.
 * @param {number} delay - Время задержки в миллисекундах.
 *
 * @returns {function} Дебаунсированная версия колбэка.
 */
export const useDebounce = (
  callback: (query: string) => void,
  delay: number,
) => {
  const debouncedCallback = useRef(debounce(callback, delay)).current

  return debouncedCallback
}
