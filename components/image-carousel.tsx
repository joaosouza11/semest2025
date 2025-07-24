"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface CarouselImage {
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
}

export default function ImageCarousel({
  images,
  autoPlayInterval = 3000,
  showControls = true,
  showIndicators = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, isPlaying, images.length, autoPlayInterval])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      {/* Images */}
      
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>
      */

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 left-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-200"
        aria-label={isPlaying ? "Pausar carrossel" : "Reproduzir carrossel"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Image Info */}
      {images[currentIndex].title && (
        <div className="absolute bottom-4 right-4 max-w-xs">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 text-white">
            <h4 className="font-semibold text-sm mb-1">{images[currentIndex].title}</h4>
            {images[currentIndex].description && (
              <p className="text-xs text-white/90">{images[currentIndex].description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
