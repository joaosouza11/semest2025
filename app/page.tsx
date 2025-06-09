import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Building2, ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ScheduleSection from "@/components/schedule-section"
import SpeakersSection from "@/components/speakers-section"
import PartnersSection from "@/components/partners-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">SEMEST</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#schedule" className="transition-colors hover:text-foreground/80">
                Cronograma
              </Link>
              <Link href="#speakers" className="transition-colors hover:text-foreground/80">
                Palestrantes
              </Link>
              <Link href="#partners" className="transition-colors hover:text-foreground/80">
                Empresas
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button className="w-full md:w-auto">Garantir Minha Vaga</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <div id="schedule" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-4">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Cronograma</h2>
            </div>
            <ScheduleSection />
          </div>
        </div>

        <div id="speakers" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Palestrantes</h2>
            </div>
            <SpeakersSection />
          </div>
        </div>

        <div id="partners" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-4">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Empresas Parceiras</h2>
            </div>
            <PartnersSection />
          </div>
        </div>

        <div className="py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Junte-se a nós em uma semana de intensivo aprendizado em estatística
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Não perca a oportunidade de expandir seu conhecimento, networking com grandes profissionais, e conhecer oportunidades de carreira em estatística e ciência de dados.
            </p>
            <div className="mt-8">
              <Button size="lg" className="gap-2">
                Quero Garantir a Minha Vaga <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} SEMEST
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
