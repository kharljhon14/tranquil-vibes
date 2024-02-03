import Button from '../../components/button/Button';
import sytles from './header.module.css';

export default function Header() {
  return (
    <header className={sytles.header}>
      <div>
        <a
          className={sytles.title}
          href="/"
        >
          Tranquil Vibes
        </a>
      </div>
      <nav>
        <ul>
          <li className={sytles.navLi}>
            <a
              className={sytles.navA}
              href=""
            >
              Home
            </a>
          </li>
          <li className={sytles.navLi}>
            <a
              className={sytles.navA}
              href=""
            >
              About Us
            </a>
          </li>
          <li className={sytles.navLi}>
            <a
              className={sytles.navA}
              href=""
            >
              Serenity Spaces
            </a>
          </li>
          <li className={sytles.navLi}>
            <a
              className={sytles.navA}
              href=""
            >
              Testimonials
            </a>
          </li>
          <li className={sytles.navLi}>
            <a
              className={sytles.navA}
              href=""
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <Button>Join Now</Button>
    </header>
  );
}
