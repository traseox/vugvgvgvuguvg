import React from 'react'
import { Form, DatePicker } from 'antd'
import { DatePickerFieldProps } from './type'

/**
 * Компонент поля выбора даты.
 *
 * @param {DatePickerFieldProps} props - Пропсы компонента.
 * @param {string} props.label - Метка для поля выбора даты.
 * @param {string} props.name - Имя поля, используемое для управления формой.
 *
 * @returns {JSX.Element} Элемент поля выбора даты.
 */
export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  name,
}) => (
  <Form.Item label={label} name={name}>
    <DatePicker placeholder='Выберите дату' style={{ width: '100%' }} />
  </Form.Item>
)
