import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/Logo.png" alt="EST Clean Logo" loading="eager" decoding="async" />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about">회사 소개</Link></li>
            <li><Link to="/services">서비스</Link></li>
            <li><Link to="/contact">문의하기</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

