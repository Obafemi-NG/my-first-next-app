import MeetUpItem from "../meetup-item/meetup-item";
import styles from "./meetup-list.module.css";

const MeetUpList = (props) => {
  return (
    <ul className={styles["meetup-list"]}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          title={meetup.title}
          description={meetup.description}
          imageUrl={meetup.imageUrl}
        />
      ))}
    </ul>
  );
};
export default MeetUpList;
