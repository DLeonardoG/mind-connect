import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Check } from "lucide-react"

const planes = [
  {
    nombre: "Básico",
    precio: 99000,
    descripcion: "Perfecto para comenzar tu camino hacia el bienestar",
    caracteristicas: [
      "2 sesiones mensuales",
      "Duración: 1 hora por sesión",
      "Acceso a videollamadas",
      "Chat con especialista",
      "Recursos educativos",
      "Recordatorios automáticos",
    ],
    popular: false,
  },
  {
    nombre: "Profesional",
    precio: 179000,
    descripcion: "Ideal para un acompañamiento más frecuente",
    caracteristicas: [
      "4 sesiones mensuales",
      "Duración: 1 hora por sesión",
      "Acceso a videollamadas",
      "Chat prioritario con especialista",
      "Recursos educativos premium",
      "Recordatorios automáticos",
      "Cambio de citas gratuito",
      "Notas de sesión",
    ],
    popular: true,
  },
  {
    nombre: "Premium",
    precio: 299000,
    descripcion: "Acompañamiento completo para tu salud mental",
    caracteristicas: [
      "8 sesiones mensuales",
      "Duración: 1 hora por sesión",
      "Acceso a videollamadas ilimitadas",
      "Chat 24/7 con especialista",
      "Todos los recursos educativos",
      "Recordatorios automáticos",
      "Cambio de citas ilimitado",
      "Notas detalladas de sesión",
      "Plan de tratamiento personalizado",
      "Acceso a talleres grupales",
    ],
    popular: false,
  },
]

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-semibold text-foreground">MindConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link
              href="/buscar-especialistas"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Especialistas
            </Link>
            <Link href="/precios" className="text-sm text-foreground font-medium transition-colors">
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
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Planes pensados para tu bienestar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Elige el plan que mejor se adapte a tus necesidades. Sin permanencia, cancela cuando quieras.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planes.map((plan) => (
              <Card
                key={plan.nombre}
                className={`relative p-8 ${plan.popular ? "border-primary border-2 shadow-xl" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 bg-primary text-primary-foreground">Más popular</Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.nombre}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{plan.descripcion}</p>
                  <div className="flex items-end justify-center gap-1 mb-1">
                    <span className="text-5xl font-bold text-foreground">${plan.precio.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">por mes</p>
                </div>

                <Button className="w-full mb-6" size="lg" variant={plan.popular ? "default" : "outline"}>
                  Comenzar ahora
                </Button>

                <div className="space-y-3">
                  {plan.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="p-8 bg-secondary/20">
              <h3 className="text-xl font-semibold text-card-foreground mb-4 text-center">Todos los planes incluyen</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Especialistas verificados</p>
                    <p className="text-sm text-muted-foreground">Profesionales certificados y validados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Privacidad garantizada</p>
                    <p className="text-sm text-muted-foreground">Tus datos están 100% protegidos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Soporte técnico</p>
                    <p className="text-sm text-muted-foreground">Ayuda cuando la necesites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Sin permanencia</p>
                    <p className="text-sm text-muted-foreground">Cancela cuando quieras</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Preguntas frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sí, puedes cambiar de plan cuando lo desees. Los cambios se aplicarán en tu próximo ciclo de
                facturación.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">¿Qué sucede si no uso todas mis sesiones?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Las sesiones no utilizadas se pueden acumular hasta por 2 meses, después expiran automáticamente.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">¿Puedo elegir cualquier especialista?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sí, todos los planes te permiten elegir libremente entre nuestra red de especialistas verificados.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-card-foreground mb-2">
                ¿Ofrecen sesiones individuales sin suscripción?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sí, también puedes agendar sesiones individuales por $120.000 COP cada una sin necesidad de suscribirte
                a un plan.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para comenzar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crea tu cuenta gratis y agenda tu primera sesión hoy mismo
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Crear cuenta gratis</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
