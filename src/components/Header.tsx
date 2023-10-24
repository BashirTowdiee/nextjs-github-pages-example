// components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/apps">
              <a>Mobile Apps</a>
            </Link>
          </li>
          <li>
            <Link href="/storybook">
              <a>Storybook</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
