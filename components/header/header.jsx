import styles from "./header.module.css";
import CustomButton from "../custom-button/custom-button";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-title"]}>
        <h2>Next-Gen MeetUp</h2>
      </div>
      <div className={styles["header-link"]}>
        <Link href="/meetups" passHref>
          <CustomButton>All MeetUps</CustomButton>
        </Link>
        <Link href="/create-new-meetups" passHref>
          <CustomButton>Add New MeetUp</CustomButton>
        </Link>
      </div>
    </div>
  );
};
export default Header;
