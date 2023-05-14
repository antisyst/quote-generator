// components/Quote.tsx

import { useEffect, useState } from 'react';
import { getQuote, Quote } from '../../lib/api';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      const quote = await getQuote();
      setQuote(quote);
    }

    fetchQuote();
  }, []);

  useEffect(() => {
    if (quote) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(quote.content);
      synth.speak(utterance);
    }
  }, [quote]);

  function handleNewQuote() {
    getQuote().then((quote) => {
      setQuote(quote);
    });
  }

  if (!quote) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p className='creator-content animate__animated animate__fadeIn'>Developed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></p>
      <h1 className='animate__animated animate__fadeIn'>Random Quote Generator</h1>
      <blockquote className='animate__animated animate__fadeIn'>
        <p className='animate__animated animate__fadeIn'>{quote.content}</p>
        <footer className='animate__animated animate__fadeIn'>{quote.author}</footer>
      </blockquote>
      <button onClick={handleNewQuote} className='btn animate__animated animate__fadeIn'>New Quote</button>
    </>
  );
}
 // Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptatum quos amet harum at? Aut dolor, veniam magnam voluptas corrupti atque? Iusto expedita fugit, voluptatibus est odit ducimus aliquam explicabo qui! Non officia ab hic molestiae, dolore sint voluptatibus omnis doloribus repellendus, impedit nostrum minus quod atque saepe repellat! Saepe a commodi rem consequatur architecto nostrum sunt alias sed similique ratione nam recusandae, perspiciatis dignissimos, hic aperiam inventore minus laborum accusantium enim et labore! Repellat asperiores excepturi laborum reiciendis quae, impedit omnis tenetur ipsa consequatur possimus eum officia quod dolores dicta molestiae odio eius nihil dolorem voluptatibus temporibus dolore. Et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptatum quos amet harum at? Aut dolor, veniam magnam voluptas corrupti atque? Iusto expedita fugit, voluptatibus est odit ducimus aliquam explicabo qui! Non officia ab hic molestiae, dolore sint voluptatibus omnis doloribus repellendus, impedit nostrum minus quod atque saepe repellat! Saepe a commodi rem consequatur architecto nostrum sunt alias sed similique ratione nam recusandae, perspiciatis dignissimos, hic aperiam inventore minus laborum accusantium enim et labore! Repellat asperiores excepturi laborum reiciendis quae, impedit omnis tenetur ipsa consequatur possimus eum officia quod dolores dicta molestiae odio eius nihil dolorem voluptatibus temporibus dolore. Et.