import Image from 'next/image';
import styles from './gifs.module.css';

import noddingWoman from '@/public/gifs/nodding-woman.gif';
import jackBlack from '@/public/gifs/jack-black.gif';
import oprah from '@/public/gifs/oprah.gif';
import tracyMorgan from '@/public/gifs/tracy-morgan.gif';
import workingPenguin from '@/public/gifs/working-penguin.gif';
import selfPortrait from '@/public/gifs/self-portrait.jpg';

export function NoddingWoman() {
  return (
    <>
      <picture>
        <Image
          className={styles.gifs}
          src={noddingWoman}
          alt='Nikkende dame er enig'
          width={200}
          height={200}
          unoptimized={true}
        />
      </picture>
    </>
  );
}

export function JackBlack() {
  return (
    <>
      <picture>
        <Image
          className={styles.gifs}
          src={jackBlack}
          alt='Komiker Jack Black nikker enig, toppløs'
          width={200}
          height={200}
          unoptimized={true}
        />
      </picture>
    </>
  );
}

export function Oprah() {
  return (
    <>
      <picture>
        <Image
          className={styles.gifs}
          src={oprah}
          alt='Oprah Winfrey gråter av glede'
          width={200}
          height={200}
          unoptimized={true}
        />
      </picture>
    </>
  );
}

export function TracyMorgan() {
  return (
    <>
      <picture>
        <Image
          className={styles.gifs}
          src={tracyMorgan}
          alt='Komiker Tracy Morgan er veldig enig'
          width={200}
          height={200}
          unoptimized={true}
        />
      </picture>
    </>
  );
}

export function WorkingPenguin() {
  return (
    <>
      <picture>
        <Image
          className={styles.gifs}
          src={workingPenguin}
          alt='En lliten pingvin på vei til jobb'
          width={200}
          height={200}
          unoptimized={true}
        />
      </picture>
    </>
  );
}

export function SelfPortrait() {
  return (
    <>
      <picture>
        <Image
          className={styles.gifs}
          src={selfPortrait}
          alt='Selvpotrett av Ådne'
          width={200}
          height={200}
        />
      </picture>
    </>
  );
}
