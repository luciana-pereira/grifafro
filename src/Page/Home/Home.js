/* eslint-disable jsx-a11y/alt-text */
import Form from "../Form/Form";
import Giff from "../../Assets/giphy.gif";
import styles from './Home.module.css';
import Card from "../../Components/Card/Card";


const Home = () => {
  return (
    <div>
        <div className={styles.content}>
            <div className={styles.img}>
                <img className={styles.objectImage} src={Giff} />
            </div>
            <Form />
        </div>
        <Card/>
    </div>
  );
}

export default Home;