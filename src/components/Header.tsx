import Logo from "./Logo";

interface MenuItem { 
  name: string, 
  url: string
}

function Header() {
  const menuItems: MenuItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Photos', url: '/photos'}
  ]
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <ul className="nav flex">
        {menuItems.map(item => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header;