import { useState } from 'react';

function Logo() {
  const [title, setTitle] = useState('logo')

  return (
    <a href="" id="title">
      {title}
    </a>
  )
}

export default Logo;