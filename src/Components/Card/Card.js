import React from 'react';
import Button from 'react-bootstrap/Button';
import CardContent from 'react-bootstrap/Card';
import { CardImg } from 'react-bootstrap';
import styles from './Card.module.css';

import Img01 from '../../Assets/01.jfif';
import Img02 from '../../Assets/02.jfif';
import Img03 from '../../Assets/03.jfif';
import Img04 from '../../Assets/04.jfif';
import Img05 from '../../Assets/05.jfif';
import Img06 from '../../Assets/06.jfif';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className={styles.content}>
      <CardContent style={{ width: '18rem' }}>
        <CardImg variant="top" src={Img01} />
          <div className={styles.btnContent}>
            <Button variant="danger" className={styles.btn}>Detalhes</Button>
            <Button variant="danger" className={styles.btn}>Adicionar</Button>
          </div>
      </CardContent>
      <CardContent style={{ width: '18rem' }}>
        <CardImg variant="top" src={Img02} />
        <div className={styles.btnContent}>
            <Button variant="danger" className={styles.btn}>Detalhes</Button>
            <Button variant="danger" className={styles.btn}>Adicionar</Button>
        </div>
      </CardContent>
      <CardContent style={{ width: '18rem' }}>
        <CardImg variant="top" src={Img03} />
        <div className={styles.btnContent}>
            <Button variant="danger" className={styles.btn}>Detalhes</Button>
            <Button variant="danger" className={styles.btn}>Adicionar</Button>
          </div>
      </CardContent>
      <CardContent style={{ width: '18rem' }}>
        <CardImg variant="top" src={Img04} />
        <div className={styles.btnContent}>
            <Button variant="danger" className={styles.btn}>Detalhes</Button>
            <Button variant="danger" className={styles.btn}>Adicionar</Button>
          </div>
      </CardContent>
      <CardContent style={{ width: '18rem' }}>
        <CardImg variant="top" src={Img05} />
        <div className={styles.btnContent}>
            <Button variant="danger" className={styles.btn}>Detalhes</Button>
            <Button variant="danger" className={styles.btn}>Adicionar</Button>
          </div>
      </CardContent>
      <CardContent style={{ width: '18rem' }}>
        <CardImg variant="top" src={Img06} />
        <div className={styles.btnContent}>
            <Button variant="danger" className={styles.btn}>Detalhes</Button>
            <Button variant="danger" className={styles.btn}>Adicionar</Button>
          </div>
      </CardContent>
    </div>
  );
};

export default Card;