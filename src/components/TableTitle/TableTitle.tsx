import React from 'react'
import { Typography } from 'antd'
import styles from './TableTitle.module.scss'

const { Title } = Typography

export const TableTitle: React.FC = () => {
  return (
    <Title level={3} className={styles.customTitle}>
      График проектирования
    </Title>
  )
}
