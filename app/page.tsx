import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Video, Calendar, Shield, Clock, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-semibold text-foreground">MindConnect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#como-funciona"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#especialistas"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Especialistas
            </Link>
            <Link href="#precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Precios
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Conecta con un especialista en psicología
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Accede a atención psicológica profesional desde cualquier lugar. Agenda sesiones virtuales o presenciales
              de manera flexible y segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <Link href="/buscar-especialistas">Buscar Especialista</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <Link href="/soy-profesional">Soy Profesional</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" id="como-funciona">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Cómo funciona MindConnect?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una plataforma diseñada para hacer la atención psicológica más accesible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Agenda Flexible</h3>
              <p className="text-muted-foreground leading-relaxed">
                Encuentra especialistas disponibles según tu horario. Sesiones de 1 o 2 horas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Sesiones Virtuales</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consultas por videollamada segura desde la comodidad de tu hogar.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Profesionales Verificados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos los especialistas están certificados y validados por nuestro equipo.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Disponibilidad Inmediata</h3>
              <p className="text-muted-foreground leading-relaxed">
                Algunos especialistas ofrecen conexión inmediata para emergencias.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Sistema de Reseñas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lee opiniones de otros usuarios para elegir el mejor especialista.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Herramientas Innovadoras</h3>
              <p className="text-muted-foreground leading-relaxed">
                Módulo gamificado para análisis emocional en jóvenes y adolescentes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comienza tu camino hacia el bienestar</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
              Miles de personas ya confían en MindConnect para su salud mental
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Crear Cuenta Gratis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                <span className="text-lg font-semibold">MindConnect</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conectando personas con profesionales de la salud mental
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Plataforma</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Cómo Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Especialistas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Soporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 MindConnect. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
