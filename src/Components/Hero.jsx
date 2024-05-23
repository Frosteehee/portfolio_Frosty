import '../Sass/Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content encadre-contraste ">
                <h1>Marine Allavoine</h1>
                <p>Artiste des lignes de code (lol), je sculpte des expériences web aussi inspirantes qu&apos;inclusives. Avec une passion pour l&apos;esthétique et un savoir-faire en développement front-end, je façonne un internet où la créativité et l&apos;accessibilité se rencontrent harmonieusement.</p>

           
            </div>

            <div className="code-block">
                <code>
                    const coder = &#123;
                    <div className="blink">
                        <span className="mr-2 text-pink-500">name:</span>
                        <span className="text-gray-400">{`'`}</span>
                        <span className="text-amber-300">Marine Allavoine</span>
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

//
//
/*<div>
<span className="mr-2 text-pink-500">hardWorker:</span>
<span className="text-orange-400">true</span>
<span className="text-gray-400">,</span>
</div>
<div>
<span className="mr-2 text-pink-500">quickLearner:</span>
<span className="text-orange-400">true</span>
<span className="text-gray-400">,</span>
</div>
<div>
<span className="mr-2 text-pink-500">problemSolver:</span>
<span className="text-orange-400">true</span>
<span className="text-gray-400">,</span>
</div>
<div>
<span className="mr-2 text-pink-500">hireable:</span>
<span className="text-orange-400">function</span>
<span className="text-gray-400">{'() {'}</span>
</div>
<div>
<span className="ml-2 mr-2 text-orange-400">return</span>
<span className="text-gray-400">(</span>
</div>
<div>
<span className="ml-4 lg:ml-8 text-cyan-400">this.</span>
<span className="mr-2 text-white">hardWorker</span>
<span className="text-amber-300">&amp;&amp;</span>
</div>
<div>
<span className="ml-4 lg:ml-8 text-cyan-400">this.</span>
<span className="mr-2 text-white">problemSolver</span>
<span className="text-amber-300">&amp;&amp;</span>
</div>
<div>
<span className="ml-4 lg:ml-8 text-cyan-400">this.</span>
<span className="mr-2 text-white">skills.length</span>
<span className="mr-2 text-amber-300">&gt;=</span>
<span className="text-orange-400">5</span>
</div>
<div><span className="ml-2 text-gray-400">);</span></div>
<div><span className="text-gray-400">{`};`}</span></div>
<div><span className="text-gray-400">{`};`}</span></div>
*/