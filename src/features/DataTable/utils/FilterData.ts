import { DataRow } from '@/types/types'

/**
 * Функция для фильтрации данных по имени и фамилии.
 * @param data - Массив объектов типа DataRow.
 * @param searchTerm - Строка для поиска.
 * @return Отфильтрованный массив объектов типа DataRow.
 */
export const filterData = (data: DataRow[], searchTerm: string): DataRow[] => {
  // Проверка, что data является массивом
  if (!Array.isArray(data)) {
    console.error('Expected data to be an array, but got:', data)
    return [] // Возвращаем пустой массив, если data не является массивом
  }

  const normalizedSearchTerm = searchTerm.replace(/\s+/g, '').toLowerCase()

  return data.filter((row) => {
    // Проверка, что row имеет необходимые свойства
    if (!row.firstName || !row.lastName) {
      console.warn('Row is missing firstName or lastName:', row)
      return false // Пропускаем строки, которые не имеют необходимых свойств
    }

    const fullName1 = `${row.firstName} ${row.lastName}`
      .replace(/\s+/g, '')
      .toLowerCase()
    const fullName2 = `${row.lastName} ${row.firstName}`
      .replace(/\s+/g, '')
      .toLowerCase()

    return (
      fullName1.includes(normalizedSearchTerm) ||
      fullName2.includes(normalizedSearchTerm)
    )
  })
}
