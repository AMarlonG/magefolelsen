'use client';
import { useInView } from 'react-intersection-observer';

import {
  NoddingWoman,
  JackBlack,
  Oprah,
  TracyMorgan,
  WorkingPenguin,
} from '@/components/gifs/gifs';

export default function HomePage() {
  const { ref: myRef, inView: elementIsVisible } = useInView();

  return (
    <>
      <main className='mother-fp'>
        <header className='header-fp' id={elementIsVisible ? 'invisible' : ''}>
          <h1>Magefølelsen</h1>
          <h2>Kommunikasjon & design</h2>
        </header>

        <article className='questions'>
          <h3 className='questions-title'>Skal vi jobbe sammen?</h3>

          <div className='questions-items' ref={myRef}>
            <section>
              <p>
                Er du enig i at først må man ha en historie og et tydelig mål
                med den historien?
              </p>
              <NoddingWoman />
            </section>

            <section>
              <p>
                Og med historien og målet på plass kan man jobbe med hvordan
                historien fortelles?
              </p>
              <JackBlack />
            </section>

            <section>
              <p>
                Ditt design og dine nettsider bør vel være tilpasset din
                historiefortelling og dine mål?
              </p>
              <Oprah />
            </section>

            <section>
              <p>
                Altså: En god historie og klare mål, med en god fortelling, gir
                de beste nettsidene?
              </p>
              <TracyMorgan />
            </section>

            <section>
              <p>
                Hvis dette gir mening, er det vel bare å begynne å jobbe sammen.
              </p>
              <p className='email'>
                <a href='mailto:hei@magefolelsen.no'>hei@magefolelsen.no</a>
              </p>
              <WorkingPenguin />
            </section>
          </div>
        </article>

        <section className='about'>
          <a href='./om-magefolelsen'>Om Magefølelsen</a>
        </section>
      </main>
    </>
  );
}
