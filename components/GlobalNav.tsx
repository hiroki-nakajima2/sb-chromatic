import Link from 'next/link'
import style from '@/styles/components/GlobalNav.module.scss'

const GlobalNav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.main}>
        <li><Link href="/"><a className={style.home}></a></Link></li>
        <li><Link href="/meating"><a className={style.meating}></a></Link></li>
        <li><Link href="/ajenda"><a className={style.ajenda}></a></Link></li>
        <li><Link href="/record"><a className={style.record}></a></Link></li>
        <li><Link href="/todo"><a className={style.todo}></a></Link></li>
      </ul>
      <ul className={style.sub}>
        <li><Link href="/setting"><a className={style.setting}></a></Link></li>
        <li><Link href="/user"><a className={style.user}></a></Link></li>
      </ul>
    </nav>
  )
}
export default GlobalNav