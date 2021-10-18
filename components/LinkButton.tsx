//import React from 'react'
import style from '../styles/components/LinkButton.module.scss'

type props = {
  name?: string
}

const LinkButton = ({name = 'link_button'}:props) => {
  console.log(name)
  return (
    <a className={style[name]}>ボタン3</a>
  )
}

export default LinkButton