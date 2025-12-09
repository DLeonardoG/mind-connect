import { Logo } from "@/components/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, DollarSign, Settings, TrendingUp, Users, Video } from "lucide-react"
import Link from "next/link"

export default function SpecialistDashboard() {
  const todaySessions = [
    {
      id: 1,
      patient: "Sandra M.",
      time: "10:00 AM",
      duration: "1 hora",
      type: "Virtual",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Carlos R.",
      time: "2:00 PM",
      duration: "2 horas",
      type: "Presencial",
      status: "confirmed",
    },
    {
      id: 3,
      patient: "Ana L.",
      time: "5:00 PM",
      duration: "1 hora",
      type: "Virtual",
      status: "pending",
    },
  ]

  const stats = [
    { label: "Sesiones este mes", value: "24", icon: Calendar, trend: "+12%" },
    { label: "Ingresos", value: "$1,280", icon: DollarSign, trend: "+8%" },
    { label: "Pacientes activos", value: "18", icon: Users, trend: "+3" },
    { label: "Calificación", value: "4.9", icon: TrendingUp, trend: "⭐" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="md" />
            <span className="text-2xl font-semibold">MindConnect</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/especialista/dashboard" className="text-sm font-medium text-foreground">
              Dashboard
            </Link>
            <Link
              href="/especialista/agenda"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Agenda
            </Link>
            <Link
              href="/especialista/pacientes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pacientes
            </Link>
            <Link
              href="/especialista/ingresos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ingresos
            </Link>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/professional-psychologist.jpg" />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Bienvenida, Dra. María González</h1>
            <p className="text-muted-foreground">Psicología Clínica • Especialista Verificada</p>
          </div>
          <Button className="gap-2">
            <Video className="h-4 w-4" />
            Conectarme Ahora
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-accent">{stat.trend}</span>
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Sessions */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-card-foreground">Sesiones de Hoy</h2>
                <Badge variant="secondary">{todaySessions.length} sesiones</Badge>
              </div>
              <div className="space-y-4">
                {todaySessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/patient-avatar.png" />
                        <AvatarFallback>
                          {session.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-card-foreground">{session.patient}</p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {session.time}
                          </span>
                          <span>•</span>
                          <span>{session.duration}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            {session.type === "Virtual" ? <Video className="h-3 w-3" /> : null}
                            {session.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {session.status === "confirmed" && (
                        <Badge className="bg-accent/20 text-accent-foreground border-accent/30">Confirmada</Badge>
                      )}
                      {session.status === "pending" && <Badge variant="outline">Pendiente</Badge>}
                      <Button size="sm">Ver</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 bg-transparent">
                Ver Agenda Completa
              </Button>
            </Card>
          </div>

          {/* Quick Actions & Calendar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Acciones Rápidas</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Calendar className="h-4 w-4" />
                  Gestionar Disponibilidad
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <DollarSign className="h-4 w-4" />
                  Actualizar Tarifas
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Users className="h-4 w-4" />
                  Ver Solicitudes
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-secondary/20 border-secondary">
              <h3 className="font-semibold text-card-foreground mb-2">Estado: Disponible</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Tu perfil está visible para nuevos pacientes
              </p>
              <Button variant="secondary" className="w-full">
                Cambiar a No Disponible
              </Button>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-card-foreground mb-2">💡 Consejo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Los especialistas con fotos de perfil profesionales reciben 40% más solicitudes
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
