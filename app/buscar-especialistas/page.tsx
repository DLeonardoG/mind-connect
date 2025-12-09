import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, Filter, Star, MapPin, Clock, Video, Users } from "lucide-react"

const especialistas = [
  {
    id: 1,
    nombre: "Dra. María González",
    especialidad: "Psicología Clínica",
    experiencia: "10 años",
    rating: 4.9,
    reviews: 156,
    precio: 80000,
    ubicacion: "Bogotá, Colombia",
    modalidad: ["Virtual", "Presencial"],
    disponibilidad: "Inmediata",
    imagen: "/professional-woman-psychologist.png",
    descripcion: "Especialista en ansiedad, depresión y trastornos del estado de ánimo.",
  },
  {
    id: 2,
    nombre: "Dr. Carlos Ramírez",
    especialidad: "Psicoterapia",
    experiencia: "8 años",
    rating: 4.8,
    reviews: 143,
    precio: 75000,
    ubicacion: "Medellín, Colombia",
    modalidad: ["Virtual"],
    disponibilidad: "Hoy",
    imagen: "/professional-psychologist.png",
    descripcion: "Enfoque en terapia cognitivo-conductual y manejo del estrés.",
  },
  {
    id: 3,
    nombre: "Dra. Ana Martínez",
    especialidad: "Psicología Infantil",
    experiencia: "12 años",
    rating: 5.0,
    reviews: 201,
    precio: 90000,
    ubicacion: "Cali, Colombia",
    modalidad: ["Virtual", "Presencial"],
    disponibilidad: "Mañana",
    imagen: "/professional-woman-therapist.png",
    descripcion: "Especialista en niños y adolescentes. Módulo gamificado para análisis emocional.",
  },
  {
    id: 4,
    nombre: "Dr. Luis Fernández",
    especialidad: "Psiquiatría",
    experiencia: "15 años",
    rating: 4.7,
    reviews: 189,
    precio: 120000,
    ubicacion: "Barranquilla, Colombia",
    modalidad: ["Virtual", "Presencial"],
    disponibilidad: "Esta semana",
    imagen: "/professional-psychologist.png",
    descripcion: "Tratamiento de trastornos psiquiátricos y manejo farmacológico.",
  },
  {
    id: 5,
    nombre: "Dra. Patricia Herrera",
    especialidad: "Terapia de Pareja",
    experiencia: "9 años",
    rating: 4.9,
    reviews: 167,
    precio: 100000,
    ubicacion: "Cartagena, Colombia",
    modalidad: ["Virtual"],
    disponibilidad: "Hoy",
    imagen: "/professional-woman-therapist.png",
    descripcion: "Terapia de pareja y familiar. Comunicación y resolución de conflictos.",
  },
  {
    id: 6,
    nombre: "Dr. Roberto Silva",
    especialidad: "Psicología Organizacional",
    experiencia: "11 años",
    rating: 4.6,
    reviews: 134,
    precio: 85000,
    ubicacion: "Bucaramanga, Colombia",
    modalidad: ["Virtual", "Presencial"],
    disponibilidad: "Esta semana",
    imagen: "/professional-psychologist.png",
    descripcion: "Especialista en burnout, estrés laboral y desarrollo profesional.",
  },
]

export default function BuscarEspecialistasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-semibold text-foreground">MindConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="/buscar-especialistas" className="text-sm text-foreground font-medium transition-colors">
              Especialistas
            </Link>
            <Link href="/precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Search Hero */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Encuentra tu especialista ideal
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Busca entre cientos de profesionales verificados y comienza tu camino hacia el bienestar
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Buscar por nombre, especialidad o síntomas..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Filter className="h-4 w-4" />
                    Filtros
                  </Button>
                  <Button className="gap-2">
                    <Search className="h-4 w-4" />
                    Buscar
                  </Button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  <Video className="h-3 w-3 mr-1" />
                  Virtual
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  Presencial
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  Disponible hoy
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  <Users className="h-3 w-3 mr-1" />
                  Terapia de pareja
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Ansiedad
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Depresión
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{especialistas.length}</span> especialistas encontrados
            </p>
            <select className="border border-input rounded-lg px-4 py-2 text-sm bg-card">
              <option>Más relevantes</option>
              <option>Mejor valorados</option>
              <option>Menor precio</option>
              <option>Mayor precio</option>
              <option>Más experiencia</option>
            </select>
          </div>

          {/* Specialists Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {especialistas.map((especialista) => (
              <Card key={especialista.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-secondary/20 relative overflow-hidden">
                  <img
                    src={especialista.imagen || "/placeholder.svg"}
                    alt={especialista.nombre}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-card text-card-foreground border border-border">
                      {especialista.disponibilidad}
                    </Badge>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground mb-1">{especialista.nombre}</h3>
                      <p className="text-sm text-primary font-medium">{especialista.especialidad}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-lg">
                      <Star className="h-4 w-4 text-accent-foreground fill-accent-foreground" />
                      <span className="text-sm font-semibold text-accent-foreground">{especialista.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {especialista.descripcion}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{especialista.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{especialista.experiencia} de experiencia</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {especialista.modalidad.map((mod) => (
                      <Badge key={mod} variant="outline" className="text-xs">
                        {mod}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Desde</p>
                      <p className="text-xl font-bold text-foreground">${especialista.precio.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">por sesión</p>
                    </div>
                    <Button asChild>
                      <Link href={`/especialista/perfil?id=${especialista.id}`}>Ver perfil</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" disabled>
              Anterior
            </Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Siguiente</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Eres un profesional de la salud mental?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Únete a nuestra red de especialistas y ayuda a miles de personas a mejorar su bienestar emocional
          </p>
          <Button size="lg" asChild>
            <Link href="/soy-profesional">Postularme como profesional</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
