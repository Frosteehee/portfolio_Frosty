import '../Sass/Hero.scss';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion'; //test animation 

function Hero() {
  const { translate } = useLanguage();

  return (
      /*test animation */
    
    
      <section className="hero">
      <div className="hero-content encadre-contraste">
      <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        {translate('hero.name')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {translate('hero.description')}
        </motion.p>
      
            </div>
      <div className="code-block" role="region" aria-labelledby="code-block-title">
        <h2 id="code-block-title" className="sr-only">Code Block</h2>
        <code aria-label="Code example showing a JavaScript object representing a coder">
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
