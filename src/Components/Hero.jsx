import '../Sass/Hero.scss';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { translate } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content encadre-contraste">
        <h1>{translate('hero.name')}</h1>
        <p>{translate('hero.description')}</p>
      </div>
      <div className="code-block">
        <code>
          const coder = &#123;
          <div className="blink">
            <span className="mr-2 text-pink-500">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{translate('hero.name')}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div>
            <span className="mr-2 text-pink-500">skills:</span>
            <span className="text-gray-400">{`['`}</span>
            <span className="text-amber-300">HTML</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">SASS</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">React</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Redux</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">MongoDB</span>
            <span className="text-gray-400">{`]'`}</span>
            <span className="text-gray-400">[rédaction en cours]</span>
          </div>
        </code>
      </div>
    </section>
  );
}

export default Hero;
