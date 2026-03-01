interface ImageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

export default function ImageHero({ title, subtitle, imageUrl }: ImageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px] sm:h-[550px]">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 via-30% to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-blue-100 drop-shadow-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
