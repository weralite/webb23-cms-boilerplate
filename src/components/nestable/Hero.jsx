// components/Hero.js
import Button from './Button';

export default function Hero({ blok }) {
  return (
  
    <section className="flex flex-col-reverse md:flex-row w-full p-8 items-center justify-center">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          {blok?.title}
        </h1>
        
        <p className="text-base md:text-lg mb-4">
          {blok?.text}
        </p>
        
        {blok?.button && (
          <div className="flex flex-col w-[100px] md:items-start">
            {blok.button.map((btn, index) => (
              <Button key={index} blok={btn} />
            ))}
          </div>
        )}
      </div>

      {blok?.image && (
        <div className="w-full md:w-1/2 flex items-center justify-center pb-5">
          <img 
            src={blok.image.filename} 
            alt={blok?.title || 'Hero Image'} 
            className="object-cover w-[100%] h-auto" 
          />
        </div>
      )}
    </section>
  );
}
