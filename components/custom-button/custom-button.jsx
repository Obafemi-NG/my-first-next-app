import styles from "./custom-button.module.css";

const CustomButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
export default CustomButton;
