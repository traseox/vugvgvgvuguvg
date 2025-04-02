import React from 'react'
import { Select, Pagination, Typography, Space } from 'antd'
import { PaginationControlProps } from './type'

const { Text } = Typography
/**
 * Компонент управления пагинацией.
 *
 * @param {PaginationControlProps} props - Пропсы компонента.
 * @param {number} props.currentPage - Текущая страница.
 * @param {number} props.total - Общее количество элементов.
 * @param {number} props.rowsPerPage - Количество строк на странице.
 * @param {function} props.onPageChange - Функция, вызываемая при изменении страницы.
 * @param {function} props.onRowsPerPageChange - Функция, вызываемая при изменении количества строк на странице.
 *
 * @returns {JSX.Element} Элемент управления пагинацией.
 */
export const PaginationControl: React.FC<PaginationControlProps> = ({
  currentPage,
  total,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <Space
      align='center'
      style={{
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Text>Показать строк на странице:</Text>
      <Select value={rowsPerPage} onChange={onRowsPerPageChange}>
        <Select.Option value={100}>100</Select.Option>
        <Select.Option value={20}>20</Select.Option>
        <Select.Option value={50}>50</Select.Option>
        <Select.Option value={100}>100</Select.Option>
        <Select.Option value={500}>500</Select.Option>
      </Select>

      <Pagination
        current={currentPage}
        pageSize={rowsPerPage}
        total={total}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </Space>
  )
}
