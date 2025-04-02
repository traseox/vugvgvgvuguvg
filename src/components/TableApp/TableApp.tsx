import React, { useEffect, useMemo, useState } from 'react'
import { useFetchData } from '@/shared/hooks/FetchData/useFetchData'
import { filterData } from '@/features/DataTable/utils/FilterData'
import { SearchInput } from '../SearchInput/SearchInput'
import { ToggleableCheckbox } from '../ToggleableCheckbox/ToggleableCheckbox'
import ruRU from 'antd/lib/locale/ru_RU'
import { GantWindow } from '../GantWindow/GantWindow'
import { DataTable } from '../DataTable/DataTable'
import { PaginationControl } from '../PaginationControl/PaginationControl'
import {
  Button,
  ConfigProvider,
  Flex,
  FloatButton,
  Layout,
  Space,
  Spin,
  Splitter,
} from 'antd'
import { FilterModal } from '../FilterModal/FilterModal'
import { FilterValues } from '../FilterModal/type'
import {
  CloseOutlined,
  FilterOutlined,
  LoadingOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons'
import { darkTheme, lightTheme } from '@/theme/theme'
import { Content, Footer } from 'antd/es/layout/layout'
import { CustomTag } from '../FilterModal/components/CustomTag/CustomTag'

import { TableTitle } from '../TableTitle/TableTitle'

export const TableApp: React.FC = () => {
  const { data, loading } = useFetchData()
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(1) //НАЧАЛЬНОЕ КОЛВО СТРОК
  const [searchTerm, setSearchTerm] = useState('')
  const [showGantWindow, setShowGantWindow] = useState(false)
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)
  const [filters, setFilters] = useState<FilterValues>({})

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  const toggleTheme = (checked: boolean) => {
    setIsDarkMode(checked)
    localStorage.setItem('isDarkMode', JSON.stringify(checked)) // Сохраняем состояние темы в localStorage
  }

  const filteredData = useMemo(() => {
    let result = filterData(data, searchTerm)

    if (filters.department) {
      result = result.filter((item) => item.department === filters.department)
    }
    if (filters.employee) {
      result = result.filter((item) => item.employee === filters.employee)
    }
    if (filters.object) {
      result = result.filter((item) => item.object === filters.object)
    }
    if (filters.stage) {
      result = result.filter((item) => item.stage === filters.stage)
    }
    if (filters.kit) {
      result = result.filter((item) => item.kit === filters.kit)
    }
    if (filters.status) {
      result = result.filter((item) => item.status === filters.status)
    }

    return result
  }, [data, searchTerm, filters])

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredData])

  const startIndex = (currentPage - 1) * rowsPerPage
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage)

  const handleFilterApply = (values: FilterValues) => {
    setFilters(values)
    setIsFilterModalVisible(false)
  }

  const handleFilterRemove = (filterKey: keyof FilterValues) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters }
      delete newFilters[filterKey]
      return newFilters
    })
  }

  const handleClearFilters = () => {
    setFilters({}) // Сбрасываем все фильтры
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const ganttContainer = document.getElementById('gantt_here')
    if (ganttContainer) {
      ganttContainer.scrollTop = event.currentTarget.scrollTop // Синхронизация вертикальной прокрутки
      ganttContainer.scrollLeft = event.currentTarget.scrollLeft // Синхронизация горизонтальной прокрутки
    }
  }

  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme} locale={ruRU}>
      <Layout
        style={{
          minHeight: '100vh',
          maxHeight: '100vh',
          padding: '25px 25px 0 20px',
        }}
      >
        <TableTitle />
        <Flex align='center'>
          <Space
            size={'middle'}
            style={{
              paddingBottom: '14px',
            }}
          >
            <SearchInput onSearch={setSearchTerm} />

            <Button
              type='default'
              onClick={() => setIsFilterModalVisible(true)}
              style={{ display: 'flex', alignItems: 'center' }} // Выравнивание содержимого кнопки
            >
              <FilterOutlined />
              Фильтр
              {Object.keys(filters).length > 0 && ( // Проверяем, есть ли активные фильтры
                <CloseOutlined
                  onClick={(e) => {
                    e.stopPropagation() // Останавливаем всплытие события, чтобы не открывать модальное окно
                    handleClearFilters() // Сбрасываем фильтры
                  }}
                />
              )}
            </Button>

            <FloatButton
              icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
              onClick={() => toggleTheme(!isDarkMode)}
              tooltip={isDarkMode ? 'Светлая тема' : 'Темная тема'}
              type='primary'
            />

            <ToggleableCheckbox
              checked={showGantWindow}
              onChange={setShowGantWindow}
            />

            <FilterModal
              open={isFilterModalVisible}
              onCancel={() => setIsFilterModalVisible(false)}
              onApply={handleFilterApply}
              data={data}
            />
          </Space>
        </Flex>
        <Flex>
          <Flex>
            {Object.entries(filters).map(
              ([key, value]) =>
                value && (
                  <CustomTag
                    key={key}
                    value={value}
                    onClose={() =>
                      handleFilterRemove(key as keyof FilterValues)
                    }
                  />
                ),
            )}
          </Flex>
        </Flex>

        <Content style={{ flex: 1, overflow: 'auto' }}>
          <Splitter
            style={{
              borderRadius: '12px',
            }}
          >
            <Splitter.Panel defaultSize='70%' min='20%' max='80%'>
              {loading ? (
                <Spin
                  style={{
                    fontSize: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh',
                    // width: '100%',
                  }}
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 50,
                      }}
                      spin
                    />
                  }
                />
              ) : (
                <DataTable
                  data={currentData}
                  loading={loading}
                  onScroll={handleScroll}
                />
              )}
            </Splitter.Panel>

            {showGantWindow && (
              <Splitter.Panel style={{ flex: 1, overflow: 'auto' }}>
                <GantWindow
                  data={filteredData}
                  onScroll={handleScroll}
                  isDarkMode={isDarkMode}
                />
              </Splitter.Panel>
            )}
          </Splitter>
        </Content>

        <Footer>
          <Flex>
            <PaginationControl
              currentPage={currentPage}
              total={filteredData.length}
              rowsPerPage={rowsPerPage}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={(value) => {
                setRowsPerPage(value)
                setCurrentPage(1)
              }}
            />
          </Flex>
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}
