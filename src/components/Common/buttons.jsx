import styles from './buttons.module.scss';
import chain from '../../assets/image/chep.png';

export const ButtonWithChain = ({ text, color, background }) => {
  return (
    <div className={styles['resume']}>
      <img className={styles['chain']} src={chain} alt="shep" />
      <button style={{ backgroundColor: background, color: color }}>
        {text}
      </button>
    </div>
  );
};
