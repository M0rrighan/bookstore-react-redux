import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './header.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <header>
      <div className="navbar">
        <h2>Bookstore CMS</h2>
        <nav>
          {links.map((link) => (
            <NavLink key={link.id} to={link.path} className="upper">
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="userIcon">
        <FaRegUserCircle />
      </div>
    </header>
  );
};

export default Header;
