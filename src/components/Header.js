// frontend/src/components/Header.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-blue-600 text-white p-4">
//       <nav>
//         <Link to='/' className="mr-4">Home</Link>
//         <Link to='/login' className="mr-4">Login</Link>
//         <Link to='/register'>Register</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// frontend/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 p-4 text-white">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Alumni Platform
        </Link>
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/mentorship" className="hover:text-blue-300">
              Mentorship
            </Link>
          </li>
          <li>
            <Link to="/forum" className="hover:text-blue-300">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-blue-300">
              Events
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-blue-300">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-blue-300">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-300">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
