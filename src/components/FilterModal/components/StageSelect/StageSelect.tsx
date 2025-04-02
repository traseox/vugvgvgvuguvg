import React from 'react'
import { Form, Select } from 'antd'
import { StageSelectProps } from './type'

/**
 * Компонент для выбора стадии.
 *
 * @param {StageSelectProps} props - Пропсы компонента.
 * @param {string[]} props.filteredStages - Массив стадий, отфильтрованных по критериям.
 * @param {string[]} props.stages - Массив всех стадий.
 *
 * @returns {JSX.Element} Элемент выбора стадии.
 */
export const StageSelect: React.FC<StageSelectProps> = ({
  filteredStages,
  stages,
}) => (
  <Form.Item label='Стадия' name='stage'>
    <Select placeholder='Выберите стадию' allowClear>
      {(filteredStages.length > 0 ? filteredStages : stages).map((stage) => (
        <Select.Option key={stage} value={stage}>
          {stage}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
)
