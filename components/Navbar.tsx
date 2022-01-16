import useScrollPosition from "@react-hook/window-scroll";
import contactData from "../data/contact";
import styles from "./Navbar.module.css";

interface Options {
  hideAtTop?: boolean;
}

const Navbar = ({ hideAtTop = false }: Options) => {
  const scrollY = useScrollPosition(hideAtTop ? 0 : 60 /*fps*/);

  return (
    <div className={styles.navbar}>
      <p className={styles.navbarTitle}>dyllon</p>

      <div className={styles.navbarSpacer} />

      {Object.entries(contactData).map(([key, value], index) => (
        <>
          <a
            className={styles.navbarItem}
            key={key}
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value.displayText}
          </a>
          {index < Object.entries(contactData).length - 1 && (
            <p className={styles.bullet}>•</p>
          )}
        </>
      ))}
    </div>
  );
};

export default Navbar;
