import PizzaCard from './PizzaCard';
import styles from '../styles/PizzaList.module.css'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>

        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
        </p>

        <div className={styles.wrapper}>
          {pizzaList.map((pizza)=> (
            <PizzaCard pizza={pizza} key={pizza._id}/>
          ))}
        </div>
  </div>
  );
};

export default PizzaList;
