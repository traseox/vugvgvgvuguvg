import React from 'react'
import { Form, Select } from 'antd'
import { DepartmentSelectProps } from './type'

/**
 * Компонент для выбора отдела.
 *
 * @param {DepartmentSelectProps} props - Пропсы компонента.
 * @param {string[]} props.departments - Массив названий отделов для отображения в выпадающем списке.
 *
 * @returns {JSX.Element} Элемент выбора отдела.
 */
export const DepartmentSelect: React.FC<DepartmentSelectProps> = ({
  departments,
}) => (
  <Form.Item label='Отдел' name='department'>
    <Select showSearch placeholder='Выберите отдел' allowClear>
      {departments.map((department) => (
        <Select.Option key={department} value={department}>
          {department}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
)
