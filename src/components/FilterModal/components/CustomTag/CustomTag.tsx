import React from 'react'
import { Tag } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { CustomTagProps } from './type'
import './CustomTag.scss'

export const CustomTag: React.FC<CustomTagProps> = ({
  // key,
  value,
  onClose,
}) => {
  return (
    <Tag
      // key={key}
      closable
      closeIcon={<CloseOutlined className='custom-close-icon' />}
      className='custom-tag'
      onClose={onClose}
    >
      {value}
    </Tag>
  )
}
