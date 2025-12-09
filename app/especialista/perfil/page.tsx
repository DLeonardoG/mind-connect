import { Logo } from "@/components/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, CheckCircle, Clock, MapPin, Star, Video } from "lucide-react"
import Link from "next/link"

export default function SpecialistProfile() {
  const reviews = [
    {
      id: 1,
      author: "Sandra M.",
      rating: 5,
      date: "Hace 2 semanas",
      comment: "Excelente profesional, muy empática y profesional. Me ha ayudado mucho con mis sesiones.",
    },
    {
      id: 2,
      author: "Carlos R.",
      rating: 5,
      date: "Hace 1 mes",
      comment: "Recomiendo ampliamente a la Dra. González. Gran experiencia y atención personalizada.",
    },
    {
      id: 3,
      author: "Ana L.",
      rating: 4,
      date: "Hace 2 meses",
      comment: "Muy buena atención, puntual y profesional. Las sesiones virtuales son muy cómodas.",
    },
  ]

  const availability = [
    { day: "Lunes", slots: "9:00 AM - 6:00 PM" },
    { day: "Martes", slots: "9:00 AM - 6:00 PM" },
    { day: "Miércoles", slots: "9:00 AM - 2:00 PM" },
    { day: "Jueves", slots: "9:00 AM - 6:00 PM" },
    { day: "Viernes", slots: "9:00 AM - 4:00 PM" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="md" />
            <span className="text-2xl font-semibold">MindConnect</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/paciente/dashboard">← Volver a Búsqueda</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/professional-woman-psychologist-smiling.jpg" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">Dra. María González</h1>
                      <p className="text-lg text-muted-foreground mb-3">Psicología Clínica</p>
                    </div>
                    <Badge className="bg-accent/20 text-accent-foreground border-accent/30 gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Verificada
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <span className="font-semibold">4.9</span>
                      <span className="text-muted-foreground">(127 reseñas)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Virtual / Presencial</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Video className="h-3 w-3" />
                      Disponible ahora
                    </Badge>
                    <Badge variant="outline">+500 sesiones completadas</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* About */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Sobre mí</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soy psicóloga clínica con más de 10 años de experiencia ayudando a personas a superar desafíos
                emocionales y mejorar su bienestar mental. Mi enfoque se centra en la terapia cognitivo-conductual y
                técnicas de mindfulness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Me especializo en tratar ansiedad, depresión, estrés laboral y trastornos de adaptación. Creo en un
                espacio seguro y sin juicios donde puedas explorar tus pensamientos y emociones libremente.
              </p>
            </Card>

            {/* Specialties */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Especialidades</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Ansiedad</Badge>
                <Badge variant="secondary">Depresión</Badge>
                <Badge variant="secondary">Estrés</Badge>
                <Badge variant="secondary">Terapia Cognitivo-Conductual</Badge>
                <Badge variant="secondary">Mindfulness</Badge>
                <Badge variant="secondary">Trastornos de Adaptación</Badge>
                <Badge variant="secondary">Autoestima</Badge>
              </div>
            </Card>

            {/* Education & Credentials */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Formación y Credenciales</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Maestría en Psicología Clínica</h3>
                  <p className="text-sm text-muted-foreground">Universidad Nacional, 2013</p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Licenciatura en Psicología</h3>
                  <p className="text-sm text-muted-foreground">Universidad Central, 2010</p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Certificaciones</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Terapia Cognitivo-Conductual Avanzada</li>
                    <li>• Mindfulness y Reducción del Estrés</li>
                    <li>• Licencia Profesional #12345</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-6">Reseñas de Pacientes</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-card-foreground">{review.author}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 bg-transparent">
                Ver Todas las Reseñas
              </Button>
            </Card>
          </div>

          {/* Sidebar - Booking */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-foreground">$45</span>
                  <span className="text-muted-foreground">/hora</span>
                </div>
                <p className="text-sm text-muted-foreground">$80 por sesión de 2 horas</p>
              </div>

              <div className="space-y-4 mb-6">
                <Button className="w-full gap-2" size="lg">
                  <Calendar className="h-4 w-4" />
                  Agendar Sesión
                </Button>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Video className="h-4 w-4" />
                  Conectar Ahora
                </Button>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Disponibilidad
                </h3>
                <div className="space-y-2">
                  {availability.map((slot) => (
                    <div key={slot.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{slot.day}</span>
                      <span className="font-medium text-foreground">{slot.slots}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Todas las sesiones incluyen recordatorios automáticos y acceso al chat antes de la cita
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
