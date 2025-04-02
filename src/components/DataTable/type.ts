import { DataRow } from '@/types/types'

/**
 * Пропсы для компонента DataTable.
 *
 * @interface DataTableProps
 * @property {DataRow[]} data - Массив данных, отображаемых в таблице.
 * @property {boolean} loading - Указывает, загружаются ли данные в таблице.
 */
export interface DataTableProps {
  data: DataRow[]
  loading: boolean
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void
}
