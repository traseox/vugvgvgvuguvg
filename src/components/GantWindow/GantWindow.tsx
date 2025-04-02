import React, { useEffect, useRef } from 'react'
// import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import { DataRow } from '@/types/DataRow'
import { Card } from 'antd'

interface GantWindowProps {
  data: DataRow[]
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void
  isDarkMode: boolean
}

export const GantWindow: React.FC<GantWindowProps> = ({
  data,

  isDarkMode,
}) => {
  const ganttContainerRef = useRef<HTMLDivElement>(null) // Создаем реф для контейнера Gantt

  useEffect(() => {
    const ganttContainer = ganttContainerRef.current

    if (ganttContainer) {
      if (typeof window.gantt === 'undefined') {
        console.error('Gantt is not defined. Make sure the library is loaded.')
        return
      }

      const gantt = window.gantt

      gantt.init('gantt_here')
      gantt.config.date_format = '%Y-%m-%d %H:%i'
      gantt.config.min_column_width = 80

      gantt.config.types['customType'] = 'type_id'
      gantt.locale.labels['type_' + 'customType'] = 'New Type'
      gantt.config.lightbox['customType' + '_sections'] = [
        {
          name: 'description',
          height: 70,
          map_to: 'text',
          type: 'textarea',
          focus: true,
        },
        { name: 'type', type: 'typeselect', map_to: 'type' },
      ]

      const zoomConfig = {
        minColumnWidth: 40,
        maxColumnWidth: 140,
        levels: [
          [
            { unit: 'year', format: '%Y', step: 1 },
            { unit: 'month', format: '%M', step: 1 },
          ],
          [
            { unit: 'month', format: '%M %Y', step: 1 },
            {
              unit: 'week',
              step: 1,
              format: function (date: Date) {
                const weekNum = gantt.date.date_to_str('%W')(date)
                return 'Неделя ' + weekNum
              },
            },
          ],
          [
            { unit: 'month', format: '%M %Y', step: 1 },
            { unit: 'day', format: '%d ', step: 1 },
          ],
        ],
        useKey: 'ctrlKey',
        trigger: 'wheel',
        element: function () {
          return gantt.$root.querySelector('.gantt_task')
        },
      }

      gantt.ext.zoom.init(zoomConfig)

      const ganttData = data.map((item, index) => ({
        id: index + 1,
        text: item.object,
        start_date: item.startDate,
        duration: item.duration.split(' ')[0],
        progress:
          item.status === 'Completed'
            ? 1
            : item.status === 'In Progress'
              ? 0.5
              : 0,
        parent: 0,
        type: 'customType',
      }))

      // Пример добавления связей (links) между задачами
      const links = ganttData.map((task, index) => ({
        id: index + 1,
        source: task.id,
        target:
          index < ganttData.length - 1 ? ganttData[index + 1].id : task.id, // Связываем с следующей задачей
        type: 1, // Тип связи
      }))

      gantt.parse({
        data: ganttData,
        links: links,
      })

      function changeLocale(lang: string) {
        gantt.i18n.setLocale(lang)
      }

      // Установка темы в зависимости от состояния isDarkMode
      if (isDarkMode) {
        gantt.setSkin('dark')
      } else {
        gantt.setSkin('light') // Убедитесь, что у вас есть светлая тема
      }

      changeLocale('ru')

      return () => {
        gantt.clearAll()
      }
    }
  }, [data, isDarkMode])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const table = document.querySelector('.scrollable-table .ant-table-body')
    if (table) {
      table.scrollTop = event.currentTarget.scrollTop // Синхронизация вертикальной прокрутки
      table.scrollLeft = event.currentTarget.scrollLeft // Синхронизация горизонтальной прокрутки
    }
  }

  return (
    <Card
      title='График проектирования'
      id='gantt_here'
      style={{ height: '75vh', overflow: 'auto' }}
      onScroll={handleScroll}
      ref={ganttContainerRef}
    ></Card>
  )
}
