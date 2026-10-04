import { Link } from "react-router";

export default function Header() {
  return <header className="flex items-center gap-3 justify-between bg-yellow-200 py-5 px-10">
    <h3 className="text-2xl font-bold">Logo</h3>
    <nav className="flex gap-3">
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/services'}>Services</Link>
      <Link to={'/works'}>Works</Link>
      <Link to={'/blog'}>Blog</Link>
      <Link to={'/contact'}>Contact</Link>
    </nav>
    <div className="buttons flex gap-3">
      <button>Login</button>
      <button>Register</button>
    </div>
  </header>
}