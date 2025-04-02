import React from 'react'
import { Form, Select } from 'antd'
import { StatusSelectProps } from './type'

/**
 * Компонент для выбора статуса.
 *
 * @param {StatusSelectProps} props - Пропсы компонента.
 * @param {string[]} props.filteredStatuses - Массив статусов для отображения в выпадающем списке.
 *
 * @returns {JSX.Element} Элемент выбора статуса.
 */
export const StatusSelect: React.FC<StatusSelectProps> = ({
  filteredStatuses,
}) => (
  <Form.Item label='Статус' name='status'>
    <Select
      placeholder='Выберите статус'
      notFoundContent='Нет данных'
      allowClear
    >
      {filteredStatuses.map((status) => (
        <Select.Option key={status} value={status}>
          {status}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
)
