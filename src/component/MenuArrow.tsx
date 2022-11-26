import { CSSProperties, FC } from 'react'

export interface Props {
  placement:
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
  style?: CSSProperties
}

// MenuListの子にすれば好きな位置に吹き出し矢印を置ける
export const MenuArrow: FC<Props> = ({ placement, style }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '11px',
        height: '11px',
        background: '#fff',
        border: '1px solid',
        ...styleForPlacement[placement],
        ...style
      }}
    />
  )
}

// 必要になった時付け足す
const styleForPlacement = {
  top: {},
  bottom: {},
  right: {},
  left: {},
  'top-start': {},
  'top-end': {
    top: '-5.5px',
    right: '10.5%',
    borderColor: '#E2E8F0 #E2E8F0 transparent transparent',
    transform: 'rotate(-45deg)'
  },
  'bottom-start': {},
  'bottom-end': {}
}
