import React from 'react'
import { Checkbox } from 'antd'
import { ToggleableCheckboxProps } from './types'

/** Чекбокс для отображения графика.
 * @function checked - Устанавливаем состояние чекбокса в зависимости от пропса checked (false/true).
 */
export const ToggleableCheckbox: React.FC<ToggleableCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div>
      <Checkbox checked={checked} onChange={() => onChange(!checked)}>
        Показать график
      </Checkbox>
    </div>
  )
}
