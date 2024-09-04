// components/Hero.js
import Button from './Button';

export default function HeroWithVideo({ blok }) {
  console.log("Video URL:", blok?.video_url);
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
      
      {blok?.video_url ? (
  <div className="w-full md:w-1/2 flex items-center justify-center pb-5">
    <div className="relative w-full max-w-[650px] max-h-[650px]">
      <video 
        controls 
        className="w-full h-full object-cover"
      >
        <source src={blok?.video_url?.url} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
) : (
  <p className="text-center mt-4">No video URL provided.</p>
)}
    </section>
  );
}
