import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Begin Your Wellness Journey",
    subtitle: "Discover a path to mental clarity, emotional balance, and inner peace",
    image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ctaText: "Start Your Journey",
    ctaLink: "/start-journey",
    secondaryCtaText: "Continue Your Journey",
    secondaryCtaLink: "/continue-journey"
  },
  {
    id: 2,
    title: "Your Wellbeing Companion",
    subtitle: "Access personalized guidance and resources to support your mental health",
    image: "https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ctaText: "Meet Your Health Assistant",
    ctaLink: "/health-assistant",
  }
];

const HomeSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <div className="max-w-2xl text-white pt-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up animation-delay-200">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <Link to={slide.ctaLink}>
                  <Button primary>{slide.ctaText}</Button>
                </Link>
                {slide.secondaryCtaText && slide.secondaryCtaLink && (
                  <Link to={slide.secondaryCtaLink}>
                    <Button primary={false}>{slide.secondaryCtaText}</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;