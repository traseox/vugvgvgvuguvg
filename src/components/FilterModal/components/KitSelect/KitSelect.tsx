import React from 'react'
import { Form, Select } from 'antd'
import { KitSelectProps } from './type'

/**
 * Компонент для выбора комплекта.
 *
 * @param {KitSelectProps} props - Пропсы компонента.
 * @param {string[]} props.filteredKits - Массив комплектов для отображения в выпадающем списке.
 *
 * @returns {JSX.Element} Элемент выбора комплекта.
 */
export const KitSelect: React.FC<KitSelectProps> = ({ filteredKits }) => (
  <Form.Item label='Комплект' name='kit'>
    <Select showSearch placeholder='Выберите комплект' allowClear>
      {filteredKits.map((kit) => (
        <Select.Option key={kit} value={kit}>
          {kit}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
)
