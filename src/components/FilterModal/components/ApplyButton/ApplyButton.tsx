import React from 'react'
import { Button, Form } from 'antd'
import { ApplyButtonProps } from './type'

/**
 * Компонент кнопки "Применить".
 *
 * @param {ApplyButtonProps} props - Пропсы компонента.
 * @param {function} props.onClick - Функция, вызываемая при нажатии на кнопку.
 *
 * @returns {JSX.Element} Элемент кнопки "Применить".
 */
export const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => (
  <Form.Item>
    <Button type='primary' onClick={onClick} style={{ width: '100%' }}>
      Применить
    </Button>
  </Form.Item>
)
