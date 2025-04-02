import React from 'react'
import { Table } from 'antd'
import { DataTableProps } from './type'

import './DataTable.scss'
import { columns } from '../Columns/Columns'

export const DataTable: React.FC<DataTableProps> = ({
  data,
  loading,
  onScroll,
}) => {
  const scroll = {
    y: '66vh',
    x: '95vw',
  }

  return (
    <div className='scrollable-table'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey='key'
        loading={loading}
        scroll={scroll}
        onScroll={onScroll}
      />
    </div>
  )
}
