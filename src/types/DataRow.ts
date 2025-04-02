export interface DataRow {
  /** Уникальный ключ для идентификации строки данных */
  key: string

  /** Название продукта или объекта */
  object: string

  /** Имя сотрудника */
  firstName: string

  /** Фамилия сотрудника */
  lastName: string

  /** Полное имя сотрудника (Имя + Фамилия) */
  employee: string

  /** Текущая стадия процесса */
  stage: string

  /** Этап выполнения задачи */
  step: string

  /** Название комплекта */
  kit: string

  /** Текущий статус задачи или объекта */
  status: string

  /** Длительность выполнения задачи */
  duration: string

  /** Дата начала выполнения задачи */
  startDate: string

  /** Дата выдачи задачи или объекта */
  issueDate: string

  /** Планируемая дата выдачи задачи или объекта */
  plannedIssueDate: string

  /** Предшествующие задачи, которые необходимо выполнить перед этой */
  predecessorTasks: string

  /** Отдел, к которому относится сотрудник */
  department: string
}
