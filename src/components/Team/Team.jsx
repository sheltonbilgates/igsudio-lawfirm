import styles from "./Team.module.css";
import TeamCard from "./TeamCard/TeamCard";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";

const teamsData = [
  { id: 1, image: image1, name: "Daniel Def", cases: 301, selected: false },
  { id: 2, image: image2, name: "Sanfole", cases: 850, selected: true },
  { id: 3, image: image3, name: "Cesforila", cases: 470, selected: false },
  { id: 4, image: image4, name: "Colleen", cases: 180, selected: false },
  { id: 5, image: image5, name: "Haldone", cases: 212, selected: false },
  { id: 6, image: image6, name: "Nik Jeo", cases: 350, selected: false },
];

function Team() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Our Team</p>
      <div className={styles.cards}>
        {teamsData.map((item) => (
          <TeamCard
            image={item.image}
            name={item.name}
            cases={item.cases}
            key={item.id}
            selected={item.selected}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
