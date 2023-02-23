import { log } from "console";
import styles from "./_.module.scss";

const Alphabet = () => {
  const play = (letter: string) => {
    console.log(letter)
    const audio = document.getElementById(letter);
    audio?.play();
  }
  return (
    <div className={styles.container}>
      <div className={styles.letter} onClick={(e) => play('a')}>
        Aa
        <div className={styles.apple}></div>
        <audio id='a'>
           <source src='/audio/a.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('b')}>
        Bb
        <div className={styles.bird}></div>
        <audio id='b'>
           <source src='/audio/b.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('c')}>
        Cc
        <div className={styles.cake}></div>
        <audio id='c'>
           <source src='/audio/c.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('d')}>
        Dd
        <div className={styles.dog}></div>
        <audio id='d'>
           <source src='/audio/d.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('e')}>
        Ee
        <div className={styles.egg}></div>
        <audio id='e'>
           <source src='/audio/e.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('f')}>
        Ff
        <div className={styles.flower}></div>
        <audio id='f'>
           <source src='/audio/f.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('g')}>
        Gg
        <div className={styles.gift}></div>
        <audio id='g'>
           <source src='/audio/g.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('h')}>
        Hh
        <div className={styles.hat}></div>
        <audio id='h'>
           <source src='/audio/h.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('i')}>
        Ii
        <div className={styles.iceCream}></div>
        <audio id='i'>
           <source src='/audio/i.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('j')}>
        Jj
        <div className={styles.jam}></div>
        <audio id='j'>
           <source src='/audio/j.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('k')}>
        Kk
        <div className={styles.key}></div>
        <audio id='k'>
           <source src='/audio/k.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('l')}>
        Ll
        <div className={styles.lemon}></div>
        <audio id='l'>
           <source src='/audio/l.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('m')}>
        Mm
        <div className={styles.monkey}></div>
        <audio id='m'>
           <source src='/audio/m.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('n')}>
        Nn
        <div className={styles.nuts}></div>
        <audio id='n'>
           <source src='/audio/n.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('o')}>
        Oo
        <div className={styles.orange}></div>
        <audio id='o'>
           <source src='/audio/o.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('p')}>
        Pp
        <div className={styles.pen}></div>
        <audio id='p'>
           <source src='/audio/p.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('q')}>
        Qq
        <div className={styles.question}></div>
        <audio id='q'>
           <source src='/audio/q.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('r')}>
        Rr
        <div className={styles.rose}></div>
        <audio id='r'>
           <source src='/audio/r.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('s')}>
        Ss
        <div className={styles.sock}></div>
        <audio id='s'>
           <source src='/audio/s.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('t')}>
        Tt
        <div className={styles.tree}></div>
        <audio id='t'>
           <source src='/audio/t.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('u')}>
        Uu
        <div className={styles.umbrella}></div>
        <audio id='u'>
           <source src='/audio/u.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('v')}>
        Vv
        <div className={styles.violin}></div>
        <audio id='v'>
           <source src='/audio/v.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('w')}>
        Ww
        <div className={styles.watermelon}></div>
        <audio id='w'>
           <source src='/audio/w.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('x')}>
        Xx
        <div className={styles.xylophone}></div>
        <audio id='x'>
           <source src='/audio/x.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('y')}>
        Yy
        <div className={styles.yacht}></div>
        <audio id='y'>
           <source src='/audio/y.mp3' type='audio/mpeg' />
        </audio>
      </div>
      <div className={styles.letter} onClick={(e) => play('z')}>
        Zz
        <div className={styles.zeppelin}></div>
        <audio id='z'>
           <source src='/audio/z.mp3' type='audio/mpeg' />
        </audio>
      </div>
    </div>
  );
};

export default Alphabet;
