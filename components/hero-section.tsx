"use client"

import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

// Imagens do carrossel - você pode substituir por suas imagens reais
const carouselImages = [
  {
    src: "/Palestra.jpg?height=400&width=400",
    alt: "Análise de Dados Estatísticos",
  },
  {
    src: "/Palestra2.jpg?height=400&width=400",
    alt: "Palestra no Auditório",
  },
  {
    src: "/Geral.jpg?height=400&width=400",
    alt: "Networking entre Estudantes",
  },
  {
    src: "/TodoMundo.jpg?height=400&width=400",
    alt: "Minicurso de Programação",
  },
  {
    src: "/Mascote.jpg?height=400&width=400",
    alt: "Certificação do Evento",
  },
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 3000) // Muda a cada 3 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-[muitodificilteoriadascores]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">SEMEST</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-white">
                Desde 1998, a Semana da Estatística da Unicamp conecta estudantes e especialistas em uma programação que
                une teoria, prática e troca de experiências. São palestras inspiradoras, minicursos que expandem
                horizontes e momentos de integração que fortalecem nossa comunidade. Uma oportunidade única de
                descobrir, debater e viver a Estatística na prática!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row text-white">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground text-white">15/10-21/10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground text-white">Unicamp, Auditório do IMECC</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#4E9D44]" size="lg">
                Cadastrar Agora
              </Button>
              <Button size="lg" variant="outline">
                Ver Cronograma
              </Button>
            </div>
          </div>

          {/* Carrossel de Imagens */}
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative h-full w-full bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border shadow-xl">
                {/* Container do Carrossel */}
                <div className="relative h-full w-full overflow-hidden">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                      {/* Overlay com gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  ))}

                  {/* Informações sobre a imagem atual */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                      {/*<h3 className="font-semibold text-lg mb-1">5 Dias | 10+ Palestras | 5+ Minicursos </h3>*/}
                      <p className="text-sm text-white/90">SEMEST 2024 - Semana da Estatística</p>
                    </div>
                  </div>
                </div>

                {/* Indicadores de posição */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
