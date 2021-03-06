import Link from 'next/link';
import { numberDivider } from '../../assets/misc/functions';
import styles from '../../styles/dashboard/ObjectTotal.module.sass';

const ObjectTotal = (props) => {
  const { object } = props;
  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <Link href={'/expense/' + object?.route} passHref>
          <div className={styles.header}>
            <span>{object.name}</span>{' '}
            <span>{numberDivider(object.total.toFixed(2))} €</span>
          </div>
        </Link>
        <div className={styles.container_inner_content}>
          {object.expenses?.map((el, index) => {
            if (object.isHouse === el.isHouse)
              return (
                <div
                  key={index}
                  className={styles.container_inner_content_item}
                >
                  <div className={styles.container_inner_content_item_title}>
                    {el.name}
                  </div>
                  <div className={styles.container_inner_content_item_value}>
                    {numberDivider(el.total)} €
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default ObjectTotal;
