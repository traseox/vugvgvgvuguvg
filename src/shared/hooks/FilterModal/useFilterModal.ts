import { useEffect, useState } from 'react'
import { DataRow } from '@/types/DataRow'

/**
 * Хук для управления состоянием фильтров в модальном окне.
 *
 * Данный хук извлекает уникальные значения для отделов, сотрудников, объектов и стадий
 * из переданных данных, а также предоставляет функции для обработки изменений фильтров.
 *
 * @param {DataRow[]} data - Массив данных, используемых для фильтрации.
 *
 * @returns {Object} Объект с состоянием фильтров и обработчиками изменений.
 * @returns {string[]} returns.departments - Уникальные отделы из данных.
 * @returns {string[]} returns.employees - Уникальные сотрудники из данных.
 * @returns {string[]} returns.objects - Уникальные объекты из данных.
 * @returns {string[]} returns.stages - Уникальные стадии из данных.
 * @returns {string[]} returns.filteredObjects - Отфильтрованные объекты на основе выбранного сотрудника.
 * @returns {string[]} returns.filteredEmployees - Отфильтрованные сотрудники на основе выбранного объекта.
 * @returns {string[]} returns.filteredStages - Отфильтрованные стадии на основе выбранного объекта или сотрудника.
 * @returns {string[]} returns.filteredKits - Отфильтрованные комплекты на основе выбранного сотрудника.
 * @returns {string[]} returns.filteredStatuses - Отфильтрованные статусы на основе выбранного сотрудника или объекта.
 * @returns {function} returns.handleEmployeeChange - Функция для обработки изменения выбранного сотрудника.
 * @returns {function} returns.handleObjectChange - Функция для обработки изменения выбранного объекта.
 */
export const useFilterModal = (data: DataRow[]) => {
  const [departments, setDepartments] = useState<string[]>([])
  const [employees, setEmployees] = useState<string[]>([])
  const [objects, setObjects] = useState<string[]>([])
  const [stages, setStages] = useState<string[]>([])
  const [filteredObjects, setFilteredObjects] = useState<string[]>([])
  const [filteredEmployees, setFilteredEmployees] = useState<string[]>([])
  const [filteredStages, setFilteredStages] = useState<string[]>([])
  const [filteredKits, setFilteredKits] = useState<string[]>([])
  const [filteredStatuses, setFilteredStatuses] = useState<string[]>([])

  useEffect(() => {
    const uniqueDepartments = Array.from(
      new Set(data.map((item) => item.department)),
    )
    const uniqueEmployees = Array.from(
      new Set(data.map((item) => item.employee)),
    )
    const uniqueObjects = Array.from(new Set(data.map((item) => item.object)))
    const uniqueStages = Array.from(new Set(data.map((item) => item.stage)))

    setDepartments(uniqueDepartments)
    setEmployees(uniqueEmployees)
    setObjects(uniqueObjects)
    setStages(uniqueStages)
  }, [data])

  const handleEmployeeChange = (value: string) => {
    const relatedData = data.filter((item) => item.employee === value)
    setFilteredObjects(
      Array.from(new Set(relatedData.map((item) => item.object))),
    )
    setFilteredStages(
      Array.from(new Set(relatedData.map((item) => item.stage))),
    )
    setFilteredKits(Array.from(new Set(relatedData.map((item) => item.kit))))
    setFilteredStatuses(
      Array.from(new Set(relatedData.map((item) => item.status))),
    )
  }

  const handleObjectChange = (value: string) => {
    const relatedData = data.filter((item) => item.object === value)
    setFilteredEmployees(
      Array.from(new Set(relatedData.map((item) => item.employee))),
    )
    setFilteredStages(
      Array.from(new Set(relatedData.map((item) => item.stage))),
    )
    setFilteredStatuses(
      Array.from(new Set(relatedData.map((item) => item.status))),
    )
  }

  return {
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
  }
}
