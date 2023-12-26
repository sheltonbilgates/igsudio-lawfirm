import ClientCard from "./ClientCard/ClientCard";
import styles from "./Clients.module.css";

import client1 from "./images/image1.png";
import client2 from "./images/image2.png";
import client3 from "./images/image3.png";

const data = [
  {
    id: 1,
    name: "Jane Cooper",
    image: client1,
  },
  {
    id: 2,
    name: "Devon Lane",
    image: client2,
  },
  {
    id: 3,
    name: "Robert Fox",
    image: client3,
  },
];

function Clients() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.text}>
          <h1>Whats says our</h1>
          <h1>Happy Clients</h1>
        </div>
        <div className={styles.btn}>
          <button className={styles.btnLeft}>&larr;</button>
          <button className={styles.btnRight}>&rarr;</button>
        </div>
      </div>
      <div className={styles.clients}>
        {data.map((item) => (
          <ClientCard name={item.name} image={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Clients;
