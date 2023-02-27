import { log } from "console";
import styles from "./_.module.scss";
import LetterCard from "components/letter-card";
import { useState } from "react";

type CardData = {
  id: string;
  frontContent: string;
  backContent: React.ReactNode;
};

const Alphabet = () => {
  const play = (letter: string) => {
    const audio = document.getElementById(letter);
    audio?.play();
  };
  const [cardStates, setCardStates] = useState({});

  const handleFlip = (id: string, isFlipped: boolean) => {
    setCardStates((prevStates) => ({ ...prevStates, [id]: isFlipped }));
  };

  const cards: CardData[] = [
    { id: "a", frontContent: "apple", backContent: <h2>Aa</h2> },
    { id: "b", frontContent: "bird", backContent: <h2>Bb</h2> },
    { id: "c", frontContent: "cake", backContent: <h2>Cc</h2> },
    { id: "d", frontContent: "dog", backContent: <h2>Dd</h2> },
    { id: "e", frontContent: "egg", backContent: <h2>Ee</h2> },
    { id: "f", frontContent: "flower", backContent: <h2>Ff</h2> },
    { id: "g", frontContent: "gift", backContent: <h2>Gg</h2> },
    { id: "h", frontContent: "hat", backContent: <h2>Hh</h2> },
    { id: "i", frontContent: "iceCream", backContent: <h2>Ii</h2> },
    { id: "j", frontContent: "jam", backContent: <h2>Ji</h2> },
    { id: "k", frontContent: "key", backContent: <h2>Kk</h2> },
    { id: "l", frontContent: "lemon", backContent: <h2>Ll</h2> },
    { id: "m", frontContent: "monkey", backContent: <h2>Mm</h2> },
    { id: "n", frontContent: "nuts", backContent: <h2>Nn</h2> },
    { id: "o", frontContent: "orange", backContent: <h2>Oo</h2> },
    { id: "p", frontContent: "pen", backContent: <h2>Pp</h2> },
    { id: "q", frontContent: "question", backContent: <h2>Qq</h2> },
    { id: "r", frontContent: "rose", backContent: <h2>Rr</h2> },
    { id: "s", frontContent: "sock", backContent: <h2>Ss</h2> },
    { id: "t", frontContent: "tree", backContent: <h2>Tt</h2> },
    { id: "u", frontContent: "umbrella", backContent: <h2>Uu</h2> },
    { id: "v", frontContent: "violin", backContent: <h2>Vv</h2> },
    { id: "w", frontContent: "watermelon", backContent: <h2>Ww</h2> },
    { id: "x", frontContent: "xylophone", backContent: <h2>Xx</h2> },
    { id: "y", frontContent: "yacht", backContent: <h2>Yy</h2> },
    { id: "z", frontContent: "zeppelin", backContent: <h2>Zz</h2> },
    // Add as many cards as you need
  ];
  return (
    <div className={styles.alphabet}>
      <div className={styles.container}>
        {cards.map((card) => (
          <div className={styles.letter} onClick={(e) => play(card.id)}>
            <LetterCard
              key={card.id}
              id={card.id}
              frontContent={card.frontContent}
              backContent={card.backContent}
              handleFlip={handleFlip}
            />
          </div>
        ))}
        <audio id="a">
          <source src="/audio/a.mp3" type="audio/mpeg" />
        </audio>
        <audio id="b">
          <source src="/audio/b.mp3" type="audio/mpeg" />
        </audio>
        <audio id="c">
          <source src="/audio/c.mp3" type="audio/mpeg" />
        </audio>
        <audio id="d">
          <source src="/audio/d.mp3" type="audio/mpeg" />
        </audio>
        <audio id="e">
          <source src="/audio/e.mp3" type="audio/mpeg" />
        </audio>
        <audio id="f">
          <source src="/audio/f.mp3" type="audio/mpeg" />
        </audio>
        <audio id="g">
          <source src="/audio/g.mp3" type="audio/mpeg" />
        </audio>
        <audio id="h">
          <source src="/audio/h.mp3" type="audio/mpeg" />
        </audio>
        <audio id="i">
          <source src="/audio/i.mp3" type="audio/mpeg" />
        </audio>
        <audio id="j">
          <source src="/audio/j.mp3" type="audio/mpeg" />
        </audio>
        <audio id="k">
          <source src="/audio/k.mp3" type="audio/mpeg" />
        </audio>
        <audio id="l">
          <source src="/audio/l.mp3" type="audio/mpeg" />
        </audio>
        <audio id="m">
          <source src="/audio/m.mp3" type="audio/mpeg" />
        </audio>
        <audio id="n">
          <source src="/audio/n.mp3" type="audio/mpeg" />
        </audio>
        <audio id="o">
          <source src="/audio/o.mp3" type="audio/mpeg" />
        </audio>
        <audio id="p">
          <source src="/audio/p.mp3" type="audio/mpeg" />
        </audio>
        <audio id="q">
          <source src="/audio/q.mp3" type="audio/mpeg" />
        </audio>
        <audio id="r">
          <source src="/audio/r.mp3" type="audio/mpeg" />
        </audio>
        <audio id="s">
          <source src="/audio/s.mp3" type="audio/mpeg" />
        </audio>
        <audio id="t">
          <source src="/audio/t.mp3" type="audio/mpeg" />
        </audio>
        <audio id="u">
          <source src="/audio/u.mp3" type="audio/mpeg" />
        </audio>
        <audio id="v">
          <source src="/audio/v.mp3" type="audio/mpeg" />
        </audio>
        <audio id="w">
          <source src="/audio/w.mp3" type="audio/mpeg" />
        </audio>
        <audio id="x">
          <source src="/audio/x.mp3" type="audio/mpeg" />
        </audio>
        <audio id="y">
          <source src="/audio/y.mp3" type="audio/mpeg" />
        </audio>
        <audio id="z">
          <source src="/audio/z.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default Alphabet;
