import { useEffect, useState } from 'react'
import { getDataRows } from '@/shared/api/api'
import { DataRow } from '@/types/types'

/**
 * Хук для получения данных из API.
 *
 * Данный хук управляет состоянием загрузки, данными и ошибками при получении данных.
 *
 * @returns {Object} Объект с состоянием данных, загрузки и ошибок.
 * @returns {DataRow[]} returns.data - Массив данных, полученных из API.
 * @returns {boolean} returns.loading - Указывает, загружаются ли данные.
 * @returns {string | null} returns.error - Сообщение об ошибке, если ошибка произошла, иначе null.
 */
export const useFetchData = () => {
  const [data, setData] = useState<DataRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await getDataRows()
        setData(result.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Error fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
