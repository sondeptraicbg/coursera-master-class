import React, { useState } from 'react';
import styles from './_.module.scss';

type Props = {
    id: string;
    frontContent: string;
    backContent: React.ReactNode;
    handleFlip: (id: string, isFlipped: boolean) => void;
  };
const LetterCard = ({ id, frontContent, backContent, handleFlip }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    handleFlip(id, !isFlipped);
  };

  return (
    <div className={styles.card + (isFlipped ? ' ' + styles.flipped : '')} onClick={handleCardClick}>
      <div className={styles.cardInner}>
        <div className={`${styles.cardFront} ${styles[frontContent]} `}>
        </div>
        <div className={styles.cardBack}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default LetterCard;
