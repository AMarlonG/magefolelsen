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
  console.log('elementIsVisible', elementIsVisible);

  return (
    <>
      <main className='mother-grid'>
        <header className='header' id={elementIsVisible ? 'scrolling' : ''}>
          <h1>Magefølelsen</h1>
          <h2>Kommunikasjon & design</h2>
          <a href='mailto:hei@magefolelsen.no'>hei@magefolelsen.no</a>
        </header>

        <article className='questions'>
          <h3 className='questions-title'>Skal vi jobbe sammen?</h3>

          <div className='questions-items' ref={myRef}>
            <section>
              <p>
                Er du enig i at man først må ha en god historie og et mål med
                den historien?
              </p>
              <NoddingWoman />
            </section>

            <section>
              <p>
                Og med historien og målet på plass så kan man jobbe med hvordan
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
                Om alt dette gir mening så er det vel bare å begynne jobben
                sammen. Vi snakkes!
              </p>
              <WorkingPenguin />
            </section>
          </div>
        </article>

        <section className='about'>
          <a href='./om-magefolelsen'>Om magefølelsen</a>
        </section>
      </main>
    </>
  );
}
