import React, { useState } from 'react';
import { Heart, Flower, Music, Stars, Home, Sparkles, Gift } from 'lucide-react';

function VintagePaperPage({ onHome }: { onHome: () => void }) {
  return (
    <div className="min-h-screen bg-[#f8e8e8] flex items-center justify-center p-8">
      <div className="relative max-w-2xl w-full">
        {/* Vintage paper background with more realistic styling */}
        <div className="bg-[#f4e4bc] p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] relative overflow-hidden transform rotate-[0.5deg]"
             style={{
               backgroundImage: `
                 repeating-linear-gradient(0deg, transparent, transparent 23px, #e5d1b2 24px),
                 repeating-linear-gradient(90deg, transparent, transparent 23px, rgba(229,209,178,0.2) 24px)
               `,
               minHeight: '600px',
               boxShadow: `
                 2px 3px 20px rgba(0,0,0,0.2),
                 0 0 60px rgba(139,69,19,0.1) inset
               `
             }}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23614b4b' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
               }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-[#614b4b] font-serif leading-6 mt-8">
            <h2 className="text-3xl mb-8 text-center font-bold text-[#9c7575]">For my pookie! </h2>
            <p className="mb-4">Dear friend,</p>
            <p className="mb-4">
            We met as strangers, just by chance,  
No big moments, no planned advance.  
Just easy talks and laughs that stayed,  
A friendship formed in the simplest way.  
              
              Time moved on, and so did we,  
Side by side, naturally.  
No grand promises, nothing to prove,  
Just knowing someone’s got your back.  

            </p>
            <p className="mb-4">
              I’ve seen you doubt, seen you hide,  
Like your worth is something to set aside.  
But even on your bad day, I'm there,  
A light that stays, through every smile and tear. 

You say you're plain, but that’s not true,  
There’s something rare and real in you.  
Not in looks, not in style,  
But in the way you make life worthwhile.  


            </p>
            <p className="mb-4">
             So here’s to us, through thick and thin,  
A bond unshaken, a trust built in.  
You might not see it, but I swear it’s real—  
A friend like you is a gift to feel. 🎂🎈

                </p>
            <p className="mb-4">
              Happy Birthday SAMUUUUU!! 🥰
Hope we stay friends forever,and enjoy your day :) 

              
                </p>
            <p className="mb-4">

            PS: i had planned alot to do on your brithday (28th) but as i'll be studying for my second exam we won't be able to enjoy on that day, so let's just plan that suprise for another day when you'll be available :) and we can enjoy day day stay tuned pookie
            </p>
            <p className="text-right mt-8"> Peace Out,<br/>your pookie :D </p>
          </div>

          {/* Home button */}
          <button
            onClick={onHome}
            className="absolute top-4 left-4 p-3 bg-[#9c7575] hover:bg-[#826363] text-white rounded-full
                     transform transition-all duration-300 hover:scale-110 hover:rotate-12
                     shadow-lg hover:shadow-xl group"
          >
            <Home className="w-6 h-6 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomePage({ onEnter }: { onEnter: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffdbdb] to-[#bde0ff] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Heart, Stars, Flower, Music, Gift].map((Icon, index) => (
          <Icon
            key={index}
            className={`absolute text-pink-400/20 w-12 h-12
              animate-float-${index % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 bg-white/30 p-12 rounded-2xl backdrop-blur-sm border border-white/50">
        <div className="mb-8 flex justify-center space-x-4">
          <Heart className="text-pink-400 w-8 h-8 animate-pulse" />
          <Stars className="text-blue-400 w-8 h-8 animate-bounce" />
          <Flower className="text-pink-400 w-8 h-8 animate-pulse" />
          <Music className="text-blue-400 w-8 h-8 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#614b4b] relative">
          Happy Birthday Samskruthi!!!!
          <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-yellow-400 animate-spin-slow" />
        </h1>
        <p className="text-xl text-[#614b4b] mb-8">
          ( samuuuuuu )
        </p>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onEnter}
          className="relative px-8 py-3 bg-gradient-to-r from-[#ffd1d1] to-[#ffbaba] text-[#614b4b] rounded-full
                   font-semibold transition-all duration-500 transform hover:scale-105
                   shadow-lg hover:shadow-xl overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Click for suprise! 
            <Gift className={`w-5 h-5 transition-transform duration-500 ${isHovered ? 'rotate-12' : ''}`} />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffbaba] to-[#ffd1d1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showStory, setShowStory] = useState(false);

  return (
    <>
      {!showStory ? (
        <WelcomePage onEnter={() => setShowStory(true)} />
      ) : (
        <VintagePaperPage onHome={() => setShowStory(false)} />
      )}
    </>
  );
}

export default App;