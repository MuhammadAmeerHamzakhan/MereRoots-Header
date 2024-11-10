import './Hero.css';

const Hero = ({ heroData, setHeroCount, heroCount }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1 className="hero-heading">{heroData.text1}</h1>
        <p className="hero-subheading">{heroData.text2}</p>
      </div>
      <ul className='hero-dots'>
        <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(3)} className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(4)} className={heroCount === 4 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(5)} className={heroCount === 5 ? "hero-dot orange" : "hero-dot"}></li>
      </ul>
    </div>
  );
};

export default Hero;
