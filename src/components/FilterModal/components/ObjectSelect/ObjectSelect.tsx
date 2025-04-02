import React from 'react'
import { Form, Select } from 'antd'
import { ObjectSelectProps } from './type'

/**
 * Компонент для выбора объекта.
 *
 * @param {ObjectSelectProps} props - Пропсы компонента.
 * @param {string[]} props.filteredObjects - Массив объектов, отфильтрованных по критериям.
 * @param {string[]} props.objects - Массив всех объектов.
 * @param {function} props.onChange - Функция, вызываемая при изменении выбранного объекта.
 *
 * @returns {JSX.Element} Элемент выбора объекта.
 */
export const ObjectSelect: React.FC<ObjectSelectProps> = ({
  filteredObjects,
  objects,
  onChange,
}) => (
  <Form.Item label='Объект' name='object'>
    <Select
      showSearch
      placeholder='Выберите объект'
      allowClear
      onChange={onChange}
    >
      {(filteredObjects.length > 0 ? filteredObjects : objects).map(
        (object) => (
          <Select.Option key={object} value={object}>
            {object}
          </Select.Option>
        ),
      )}
    </Select>
  </Form.Item>
)
