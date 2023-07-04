import { HomePageModel } from "@/data/homePageModel/homePageModel";
import Image from "next/image";
import styles from "./page.module.css";
const Page = () => {
  return (
    <div className={styles.home__container}>
      {HomePageModel.map(({ title, value, color, icon }) => (
        <div
          style={{ backgroundColor: color }}
          className={`${styles.home__card} ${
            !color ? styles.home__card_gradient : undefined
          }`}
          key={title}
        >
          <div>
            <Image
              loading="lazy"
              alt={title}
              src={icon}
              width={35}
              height={35}
            />
            <p
              className={styles.home__title}
              style={{ color: color ? undefined : "#fff" }}
            >
              {title}
            </p>
          </div>
          <p
            className={styles.home__value}
            style={{ color: color ? undefined : "#fff" }}
          >
            {value}
            <span>{title === "Paymnets" ? "₺" : undefined} </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Page;
