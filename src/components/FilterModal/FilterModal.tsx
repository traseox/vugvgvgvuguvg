import React from 'react'
import { Modal, Form } from 'antd'
import { FilterModalProps, FilterValues } from './type'
import { useFilterModal } from '@/shared/hooks/FilterModal/useFilterModal'
import { DepartmentSelect } from './components/DepartmentSelect/DepartmentSelect'
import { EmployeeSelect } from './components/EmployeeSelect/EmployeeSelect'
import { ObjectSelect } from './components/ObjectSelect/ObjectSelect'
import { StageSelect } from './components/StageSelect/StageSelect'
import { KitSelect } from './components/KitSelect/KitSelect'
import { StatusSelect } from './components/StatuSelect/StatusSelect'
import { DatePickerField } from './components/DatePickerField/DatePickerField'
import { ApplyButton } from './components/ApplyButton/ApplyButton'

/**
 * Компонент модального окна фильтров.
 *
 * Данный компонент отображает модальное окно с формой для фильтрации данных.
 *
 * @param {FilterModalProps} props - Пропсы компонента.
 * @param {boolean} props.open - Указывает, открыто ли модальное окно.
 * @param {function} props.onCancel - Функция, вызываемая при закрытии модального окна.
 * @param {function} props.onApply - Функция, вызываемая при применении фильтров.
 * @param {DataRow[]} props.data - Массив данных, используемых для фильтрации.
 *
 * @returns {JSX.Element} Элемент модального окна с формой фильтров.
 */
export const FilterModal: React.FC<FilterModalProps> = ({
  open,
  onCancel,
  onApply,
  data,
}) => {
  const [form] = Form.useForm()
  const {
    departments,
    employees,
    objects,
    stages,
    filteredObjects,
    filteredEmployees,
    filteredStages,
    filteredKits,
    filteredStatuses,
    handleEmployeeChange,
    handleObjectChange,
  } = useFilterModal(data)

  const handleApply = () => {
    const values = form.getFieldsValue()
    onApply(values as FilterValues)
  }

  // Используем useEffect для сброса формы при открытии модального окна

  return (
    <Modal title='' open={open} onCancel={onCancel} footer={null}>
      <h2 style={{ alignItems: 'center', justifyContent: 'center' }}>
        Фильтры
      </h2>
      <Form
        form={form}
        layout='vertical'
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1.25 }}>
            <DepartmentSelect departments={departments} />
            <EmployeeSelect
              filteredEmployees={filteredEmployees}
              employees={employees}
              onChange={handleEmployeeChange}
            />
            <ObjectSelect
              filteredObjects={filteredObjects}
              objects={objects}
              onChange={handleObjectChange}
            />
            <StageSelect filteredStages={filteredStages} stages={stages} />
            <KitSelect filteredKits={filteredKits} />
          </div>

          <div style={{ flex: 1 }}>
            <StatusSelect filteredStatuses={filteredStatuses} />
            <DatePickerField label='Дата начала' name='startDate' />
            <DatePickerField label='Дата выдачи' name='issueDate' />
            <DatePickerField
              label='Планируемая дата выдачи'
              name='plannedIssueDate'
            />
          </div>
        </div>

        <ApplyButton onClick={handleApply} />
      </Form>
    </Modal>
  )
}
