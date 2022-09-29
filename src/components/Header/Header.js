import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <ul className='links'>
          <NavLink className='green' activeStyle={{ color: `rgb(0,132,87)` }} to="/rgb/0/132/87">Green</NavLink>
          <NavLink className='red' activeStyle={{ color: `rgb(237,27,45)` }} to="/rgb/237/27/45">Red</NavLink>
          <NavLink className='white' activeStyle={{ color: `rgb(238,238,238)` }} to="/rgb/238/238/238">White</NavLink>
        </ul>
      </header>
    </>
  );
}
