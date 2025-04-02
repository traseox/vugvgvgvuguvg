import React from 'react'
import { Form, Select } from 'antd'
import { EmployeeSelectProps } from './type'

/**
 * Компонент для выбора сотрудника.
 *
 * @param {EmployeeSelectProps} props - Пропсы компонента.
 * @param {string[]} props.filteredEmployees - Массив сотрудников, отфильтрованных по критериям.
 * @param {string[]} props.employees - Массив всех сотрудников.
 * @param {function} props.onChange - Функция, вызываемая при изменении выбранного сотрудника.
 *
 * @returns {JSX.Element} Элемент выбора сотрудника.
 */
export const EmployeeSelect: React.FC<EmployeeSelectProps> = ({
  filteredEmployees,
  employees,
  onChange,
}) => (
  <Form.Item label='Сотрудник' name='employee'>
    <Select
      showSearch
      placeholder='Выберите сотрудника'
      allowClear
      onChange={onChange}
    >
      {(filteredEmployees.length > 0 ? filteredEmployees : employees).map(
        (employee) => (
          <Select.Option key={employee} value={employee}>
            {employee}
          </Select.Option>
        ),
      )}
    </Select>
  </Form.Item>
)
