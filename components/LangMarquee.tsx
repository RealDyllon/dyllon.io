import Image from "next/image";
import Marquee from "react-fast-marquee";
import languageData from "../data/languages";
import styles from "./LangMarquee.module.css";

const LangMarquee = () => {
  return (
    <Marquee>
      {Object.entries(languageData).map(([key, value]) => (
        <div className={styles.image} key={key}>
          <Image src={value.imageUri} height={60} width={60} alt={key} />
        </div>
      ))}
    </Marquee>
  );
};

export default LangMarquee;
