import styles from './Logo.module.css'
import { useEffect, useState } from 'react';

function Logo() {
  const [title, setTitle] = useState('logo')

  useEffect(() => {
    document.querySelector('#title').textContent = "new logo"
  }, [title])

  const changeTitle= () => setTitle('new logo')

  return (
    <a href="" id="title" onClick={() => changeTitle} className={styles.logo}>
      {title}
    </a>
  )
}

export default Logo;