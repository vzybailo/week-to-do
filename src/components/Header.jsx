import Logo from "./Logo/Logo";

function Header() {
  const menuItems = [
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