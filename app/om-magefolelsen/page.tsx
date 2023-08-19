'use client';
import { useInView } from 'react-intersection-observer';
import { SelfPortrait } from '@/components/gifs/gifs';

export default function AboutPage() {
  const { ref: myRef, inView: elementIsVisible } = useInView();
  console.log('elementIsVisible', elementIsVisible);

  return (
    <>
      <main className='mother-ap'>
        <header className='header-ap'>
          <h1>Om Magefølelsen</h1>

          <nav>
            <h2>
              <a href='#why'>Hvorfor Magefølelsen?</a>
            </h2>
            <h2>
              <a href='#how'>Hvordan jobber vi?</a>
            </h2>
            <h2>
              <a href='#who'>Hvem er vi?</a>
            </h2>
          </nav>
          <div className='self-portrait'>
            <SelfPortrait />
          </div>
        </header>

        <article className='content'>
          <section id='why'>
            <h3>Hvorfor Magefølelsen?</h3>
            <p>
              Ja, hvorfor heter vi Magefølelsen? En smule pretensiøst og pompøst
              ...? Vel, det får vi leve med, for begrunnelsen er ganske enkel.
              Et sted mellom følelser og logikk ligger nemlig magefølelsen, og
              det synes vi er et veldig bra sted når man skal lage god
              kommunikasjon og godt design.
            </p>
          </section>
          <section id='how'>
            <h3>Hvordan jobber vi?</h3>
            <p>
              Rett kommunikasjon og design til rett kunde, til rett tid. Så
              enkelt, og så himla vanskelig. For å komme dit kreves det en
              grundig analyse av dine ønsker og mål, opp mot en nå-situasjon av
              hele din aktivitet. Kanskje du har lyst på en Rolls Royce, og det
              skal du få hvis du klarer å håndtere den, men hvis det du egentlig
              trenger er en solid Toyota, er det det du får. Med litt RR-bling
              attåt ... 😎
            </p>
          </section>
          <section ref={myRef} id='who'>
            <h3>Hvem er Magefølelsen?</h3>
            <p>
              Hei! Jeg heter Ådne, og har jobbet som profesjonell danser i
              Storbritannia, salgsleder i Aftenposten, fagkonsulent i
              Olympiatoppen, Nav-konsulent, og kommunikasjonsrådgiver. Nå har
              jeg pisket meg selv til å bli utvikler og startet Magefølelsen.
              Jeg jobber med ulike designere og utviklere ut ifra hva hvert
              prosjekt trenger. Med andre ord, de rette folkene brukes til ditt
              prosjekt, og jeg skal styre skuta i havn.
            </p>
          </section>
        </article>

        <section className='home'>
          <a href='./'>Tilbake til forsiden</a>
        </section>
      </main>
    </>
  );
}
