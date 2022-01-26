import { Fragment } from "react";

import Header from "../components/header/header";
import MeetUpList from "../components/meetup-list/meetup-list";

const DUMMY_LIST = [
  {
    id: "l1",
    title: "Santorini",
    description: "some nice place",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/12063_-_Santorin_-_Fira_de_nuit.jpeg",
  },
  {
    id: "l2",
    title: "Eiffel Tower",
    description: "some other nice place",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/324px-Tour_Eiffel_Wikimedia_Commons.jpg",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <MeetUpList meetups={DUMMY_LIST} />
    </Fragment>
  );
};
export default HomePage;
