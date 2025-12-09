import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Star, Video, MapPin, Calendar, Heart } from "lucide-react"
import Link from "next/link"

export default function PatientDashboard() {
  const specialists = [
    {
      id: 1,
      name: "Dra. María González",
      specialty: "Psicología Clínica",
      rating: 4.9,
      reviews: 127,
      price: 45,
      available: true,
      image: "/professional-woman-psychologist.png",
      location: "Virtual / Presencial",
    },
    {
      id: 2,
      name: "Dr. Carlos Ramírez",
      specialty: "Psicología Infantil",
      rating: 4.8,
      reviews: 94,
      price: 50,
      available: false,
      image: "/professional-psychologist.png",
      location: "Virtual",
    },
    {
      id: 3,
      name: "Dra. Ana Martínez",
      specialty: "Terapia de Pareja",
      rating: 5.0,
      reviews: 156,
      price: 60,
      available: true,
      image: "/professional-woman-therapist.png",
      location: "Virtual / Presencial",
    },
  ]

  const upcomingSessions = [
    {
      id: 1,
      specialist: "Dra. María González",
      date: "15 Dic 2025",
      time: "10:00 AM",
      type: "Virtual",
    },
    {
      id: 2,
      specialist: "Dra. Ana Martínez",
      date: "18 Dic 2025",
      time: "3:00 PM",
      type: "Presencial",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-semibold">MindConnect</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/paciente/dashboard" className="text-sm font-medium text-foreground">
              Buscar
            </Link>
            <Link
              href="/paciente/sesiones"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Mis Sesiones
            </Link>
            <Link
              href="/paciente/historial"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Historial
            </Link>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bienvenido, José</h1>
          <p className="text-muted-foreground">Encuentra el especialista perfecto para ti</p>
        </div>

        {/* Upcoming Sessions */}
        {upcomingSessions.length > 0 && (
          <Card className="p-6 mb-8 bg-secondary/20 border-secondary">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">Próximas Sesiones</h2>
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">{session.specialist}</p>
                      <p className="text-sm text-muted-foreground">
                        {session.date} • {session.time} • {session.type}
                      </p>
                    </div>
                  </div>
                  <Button size="sm">Ver Detalles</Button>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Search Section */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar por especialidad, nombre..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          </div>
        </Card>

        {/* Specialists Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Especialistas Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((specialist) => (
              <Card key={specialist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={specialist.image || "/placeholder.svg"} />
                      <AvatarFallback>
                        {specialist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1">{specialist.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{specialist.specialty}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{specialist.rating}</span>
                        <span className="text-muted-foreground">({specialist.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{specialist.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Desde</span>
                      <span className="font-semibold text-foreground">${specialist.price}/hora</span>
                    </div>
                  </div>

                  {specialist.available && (
                    <Badge variant="secondary" className="mb-4">
                      <Video className="h-3 w-3 mr-1" />
                      Disponible ahora
                    </Badge>
                  )}

                  <Button className="w-full" asChild>
                    <Link href={`/paciente/especialista/${specialist.id}`}>Ver Perfil y Agendar</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
