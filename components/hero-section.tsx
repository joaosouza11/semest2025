import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Semana da Estatística Unicamp 2025
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explorando as fronteiras da  estatística e suas aplicações no mundo moderno
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Out XX-XX, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Unicamp, Auditório do IMECC</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Cadastrar Agora</Button>
              <Button size="lg" variant="outline">
                Ver Cronograma
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative h-full w-full bg-muted rounded-xl overflow-hidden border shadow-xl">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">SEMEST</h2>
                      <p className="text-sm text-muted-foreground">Palestras, Minicursos, Sorteiros, Conexões</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center space-y-1 rounded-lg border bg-background p-2">
                        <div className="text-lg font-bold">5</div>
                        <div className="text-xs">Dias</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 rounded-lg border bg-background p-2">
                        <div className="text-lg font-bold">10+</div>
                        <div className="text-xs">Palestras</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 rounded-lg border bg-background p-2">
                        <div className="text-lg font-bold">5+</div>
                        <div className="text-xs">Minicursos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
