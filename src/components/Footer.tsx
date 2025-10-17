function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 text-gray-300 fixed bottom-0 left-0">
      <p className="text-sm">© {currentYear} Week To Do</p>
      <p> Just plan your week</p>
    </footer>
  )
}

export default Footer