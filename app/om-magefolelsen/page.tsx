'use client';
import { useInView } from 'react-intersection-observer';

export default function AboutPage() {
  const { ref: myRef, inView: elementIsVisible } = useInView();
  console.log('elementIsVisible', elementIsVisible);

  return (
    <>
      <main className='mother-grid'>
        <header className='header'>
          <h1>Om Magefølelsen</h1>

          <nav>
            <h2>Hvorfor Magefølelsen?</h2>
            <h2>Hvordan jobber vi?</h2>
            <h2>Hvem er vi?</h2>
          </nav>
        </header>

        <article className='content'>
          <section>
            <h3>Hvorfor Magefølelsen?</h3>
            <p>
              Ja, hvorfor heter vi Magefølelsen? Det er et litt pretensiøst ord
              og begrep i seg selv? Vel, det får vi leve med, for begrunnelsen
              er ganske enkel. Et sted mellom følelser og logikk ligger nemlig
              magefølelsen, og det synes vi er et veldig bra sted å jobbe når
              man skal drive kommunikasjon og lage godt design.
            </p>
          </section>
          <section>
            <h3>Hvordan jobber vi?</h3>
            <p>
              Rett kommunikasjon og design til rett kunde, til rett tid. Så
              enkelt, og så himla vanskelig. Det er alltid morsomst når man får
              se skissene og hvordan sidene kommer til å se ut. Men for å komme
              dit kreves det en grundig analyse av dine ønsker og mål, opp mot
              en nå-situasjon av hele din aktivitet. Kanskje du har lyst på en
              Rolls Royce, og det skal du få hvis du klarer å håndtere den, men
              hvis det du egentlig trenger er en solid Toyota, er det det du
              får, med litt RR-bling på toppen.
            </p>
          </section>
          <section ref={myRef}>
            <h3>Hvem er Magefølelsen?</h3>
            <p>
              Hei! Jeg heter Ådne, og har blant annet jobbet som profesjonell
              danser i Storbritannia, salgsleder i Aftenposten, fagkonsulent i
              Olympiatoppen, Nav-konsulent, og kommunikasjonsrådgiver. Nå har
              jeg pisket meg selv til å bli utvikler, og jobber med ulike
              designere og utviklere ut ifra hva hvert prosjekt trenger. Med
              andre ord, de rette folkene brukes til ditt prosjekt, og jeg skal
              styre skuta i havn. Vi snakkes!
            </p>
          </section>
        </article>

        <section className='homepage'>
          <a href='./'>Tilbake til forsiden</a>
        </section>
      </main>
    </>
  );
}
