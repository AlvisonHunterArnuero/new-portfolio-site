import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export const TestimonialsCarousel = ({
  testimonials,
  className,
  autoplay = true,
  autoplayInterval = 5000,
}: TestimonialsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  return (
    <section
      id="testimonials"
      className={cn('py-24 relative overflow-hidden', className)}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Centralized Header (Matching Services Layout) */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing some of the feedbacks from satisfied partners and
            clients I've worked with and who trusted us with their
            projects to build scalable digital experiences.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {' '}
              {/* Negative margin to offset card padding */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div
                    className={cn(
                      'group h-full p-8 rounded-2xl card-gradient border border-border transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col justify-between',
                      selectedIndex === index
                        ? 'border-primary/50 shadow-lg shadow-primary/5'
                        : 'hover:border-primary/50'
                    )}
                  >
                    <div>
                      {/* Quote Icon with Service-style Gradient */}
                      <div className="mb-6 relative">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
                          <Quote className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      <blockquote className="text-muted-foreground text-sm leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    {/* Author Section */}
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-lg font-bold group-hover:text-primary transition-colors leading-none">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary text-xs font-mono mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Repositioned for the larger layout */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-1.5 transition-all duration-300 rounded-full',
                selectedIndex === index
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/20 hover:bg-primary/40'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        Interested in more? Explore my
        <a
          href="https://www.linkedin.com/in/alvisonhunter/details/recommendations/?detailScreenTabIndex=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline mx-2"
        >
          LinkedIn Recommendations
        </a>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
