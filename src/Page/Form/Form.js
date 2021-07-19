import React, { useState } from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import Head from '../../Components/Helper/Head';
import styles from './Form.module.css';


const Form = () => {
  const [loading, setLoading] = useState(false);

  const message = () => {
    setTimeout(() => {
      alert('Cadastro realizado com sucesso!');
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }, 1000);
    setLoading(true);
  };
  
  return (
    <section className="animeLeft">
      <Head title="Home" />
        <h1 className={styles.title}>SEJA O PRIMEIRO A SABER!</h1>
        <h3 className={styles.subTitle}>Preencha o formulário abaixo, e fique por dentro das PROMOÇÕES da BLACK FRIDAY</h3>
      <form>
        <Input label="Nome" type="text" name="name"/>
        <Input label="Email 📧" type="email" name="email"/>
        {loading ? (
          <Button onClick={()=> setLoading(true)} disabled>Cadastrando...</Button>
        ) : (
          <Button onClick={message}>Cadastrar</Button>
        )}
      </form>
    </section>

  );
};

export default Form;