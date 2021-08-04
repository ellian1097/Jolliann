import { Container, Footer } from './styles';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

function BaseLayout({ children }) {
  return (
    <Container>
      {children}
      <Footer>
        <p>
          Made with
          <Link to="/">
            <MdFavorite />
          </Link>{' '}
          by <a href="https://twitter.com/ellianthegreat">Ellian</a>
          <Link to="/chiquito">
            <span>🦁</span>
          </Link>
          · Dedicated to{' '}
          <a
            href="https://twitter.com/Darhk_jangel"
            target="_blank"
            rel="noreferrer"
          >
            João Vitor <span>🐧</span>
          </a>{' '}
        </p>
      </Footer>
    </Container>
  );
}

export default BaseLayout;
