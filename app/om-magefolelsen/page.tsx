'use client';
import { useInView } from 'react-intersection-observer';
import { SelfPortrait } from '@/components/gifs/gifs';

export default function AboutPage() {
  const { ref: myRef, inView: elementIsVisible } = useInView();

  return (
    <>
      <main className='mother-ap'>
        <header className='header-ap' id={elementIsVisible ? 'invisible' : ''}>
          <h1>Om Magefølelsen</h1>

          <nav className='nav'>
            <h2>
              <a href='#why'>Hvorfor?</a>
            </h2>
            <h2>
              <a href='#how'>Hvordan?</a>
            </h2>
            <h2>
              <a href='#who'>Hvem?</a>
            </h2>
          </nav>
        </header>

        <article ref={myRef} className='content'>
          <section id='why'>
            <h3>Hvorfor Magefølelsen?</h3>
            <p>
              Ja, hvorfor heter vi Magefølelsen? En smule pretensiøst ...? Vel,
              det får vi leve med, for begrunnelsen er ganske enkel. Et sted
              mellom følelser og logikk ligger nemlig magefølelsen, og det synes
              vi er et bra sted når man skal lage god kommunikasjon og godt
              design.
            </p>
          </section>
          <section id='how'>
            <h3>Hvordan jobber vi?</h3>
            <p>
              Vi skal levere rett kommunikasjon og design, til rett tid. For å
              komme dit må vi grave i behov og mål, og analysere hvordan det
              jobbes i dag. Du skal få en Rolls Royce hvis du klarer å håndtere
              den, men hvis du egentlig trenger en Toyota, er det det du får.
              ... med litt RR attåt. 😎
            </p>
            <p>
              Noen vi har jobbet med er:{' '}
              <a href='https://www.dansenshus.com/'> Dansens Hus</a> og
              <a href='https://www.baerumkulturhus.no/'> Bærum Kulturhus</a>.
            </p>
          </section>
          <section id='who'>
            <h3>Hvem er Magefølelsen?</h3>

            <p>
              Hei! Jeg er Ådne, og jeg har blant annet jobbet som profesjonell
              danser, salgsleder i Aftenposten, fagkonsulent i Olympiatoppen, og
              kommunikasjonsrådgiver. Jeg startet Magefølelsen, hvor vi jobber
              med ulike spesialister ut ifra hva du trenger. Det betyr at du får
              de rette folkene til ditt prosjekt, og jeg skal styre skuta i
              havn.
            </p>
            <div className='self-portrait'>
              <SelfPortrait />
            </div>
          </section>
        </article>

        <section className='home'>
          <a href='./'>Tilbake til forsiden</a>
        </section>
      </main>
    </>
  );
}
