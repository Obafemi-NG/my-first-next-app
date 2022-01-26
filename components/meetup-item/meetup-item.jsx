// import Fragment from 'react';
import styles from "./meetup-item.module.css";
import Card from "../card/card";
import Image from "next/image";

const MeetUpItem = (props) => {
  return (
    <Card>
      <div className={styles["meetup-item"]}>
        <Image
          src={props.imageUrl}
          alt={`${props.title} image`}
          width={400}
          height={400}
          className={styles.image}
        />
        <div className={styles["meetup-item-footer"]}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button className={styles.btn}>Show Details</button>
        </div>
      </div>
    </Card>
  );
};
export default MeetUpItem;
