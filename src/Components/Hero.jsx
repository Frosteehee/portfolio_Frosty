import '../Sass/Hero.scss';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion'; //test animation 

function Hero() {
  const { translate } = useLanguage();

  return (
      <section className="hero">
      <div className="hero-content encadre-contraste">

        {/*animation Hero*/}
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

            {/* Code Block */}
      <div className="code-block" role="region" aria-labelledby="code-block-title">
        <h2 id="code-block-title" className="sr-only">Code Block</h2>
        <code aria-label="Code example showing a JavaScript object representing a coder">
          const coder = &#123;
          <div className="blink">
          <span className="text-cyan-400">[Hireable]</span>  
          </div>
          <div>
            <div>
          <span className="mr-2 text-pink-500">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">Frosteehee</span>
            <span className="text-gray-400">{`';`}</span>
            </div>
            <span className="mr-2 text-pink-500">softskills:</span>
            <span className="text-gray-400">{`['`}</span>
            <span className="text-amber-300">HardWorking</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Curious</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Energetic</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Coffee addict</span>
            <span className="text-gray-400">{"', '"}</span>     
            <span className="text-amber-300">Empathetic</span>
            <span className="text-gray-400">{`]'`}</span>
          </div>
        </code>
      </div>
    </section>
  );
}

export default Hero;
