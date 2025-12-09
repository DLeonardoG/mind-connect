import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Check, Shield, TrendingUp, Upload, Users } from "lucide-react"
import Link from "next/link"

export default function SoyProfesionalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="md" />
            <span className="text-2xl font-semibold text-foreground">MindConnect</span>
          </Link>
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Únete a nuestra red de profesionales
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conecta con miles de pacientes que buscan apoyo profesional. Gestiona tu agenda, realiza sesiones
              virtuales y crece tu práctica profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Beneficios de unirte a MindConnect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Más pacientes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Accede a miles de usuarios que buscan atención psicológica profesional
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Gestión simplificada</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Administra tu agenda, citas y pagos desde una sola plataforma
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Crece tu práctica</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aumenta tus ingresos con herramientas de marketing y visibilidad
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Seguridad garantizada</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plataforma segura con cifrado end-to-end para tus consultas
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-card-foreground mb-2">Formulario de Postulación</h2>
                <p className="text-muted-foreground">
                  Completa tus datos y nos pondremos en contacto contigo en 24-48 horas
                </p>
              </div>

              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Información Personal
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombres">Nombres completos *</Label>
                      <Input id="nombres" placeholder="Juan Carlos" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellidos">Apellidos completos *</Label>
                      <Input id="apellidos" placeholder="Pérez García" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input id="telefono" type="tel" placeholder="+57 300 123 4567" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="identificacion">Número de identificación *</Label>
                      <Input id="identificacion" placeholder="1234567890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ciudad">Ciudad *</Label>
                      <Input id="ciudad" placeholder="Bogotá" required />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Información Profesional
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="titulo">Título profesional *</Label>
                      <Input id="titulo" placeholder="Psicólogo(a) Clínico" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="universidad">Universidad *</Label>
                      <Input id="universidad" placeholder="Universidad Nacional" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tarjeta-profesional">Tarjeta profesional *</Label>
                      <Input id="tarjeta-profesional" placeholder="123456" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experiencia">Años de experiencia *</Label>
                      <Input id="experiencia" type="number" placeholder="5" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="especialidad">Especialidad(es) *</Label>
                    <Input id="especialidad" placeholder="Psicología Clínica, Terapia Cognitivo-Conductual" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción profesional *</Label>
                    <Textarea
                      id="descripcion"
                      placeholder="Cuéntanos sobre tu experiencia, enfoques terapéuticos y áreas de especialización..."
                      rows={4}
                      required
                    />
                  </div>
                </div>

                {/* Documents */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Documentos
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cv">Hoja de vida (CV) *</Label>
                      <div className="flex items-center gap-3">
                        <Input id="cv" type="file" accept=".pdf,.doc,.docx" required className="flex-1" />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Formato PDF o Word. Máximo 5MB</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="diploma">Diploma o título profesional *</Label>
                      <div className="flex items-center gap-3">
                        <Input id="diploma" type="file" accept=".pdf,.jpg,.png" required className="flex-1" />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Formato PDF o imagen. Máximo 5MB</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tarjeta">Tarjeta profesional *</Label>
                      <div className="flex items-center gap-3">
                        <Input id="tarjeta" type="file" accept=".pdf,.jpg,.png" required className="flex-1" />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Formato PDF o imagen. Máximo 5MB</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="certificados">Certificados adicionales (opcional)</Label>
                      <div className="flex items-center gap-3">
                        <Input id="certificados" type="file" accept=".pdf,.jpg,.png" multiple className="flex-1" />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Especializaciones, diplomados, etc. Puedes subir varios archivos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Disponibilidad y Modalidad
                  </h3>

                  <div className="space-y-3">
                    <Label>Modalidad de atención *</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="virtual" />
                        <label htmlFor="virtual" className="text-sm">
                          Virtual (videollamada)
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="presencial" />
                        <label htmlFor="presencial" className="text-sm">
                          Presencial (consultorio)
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="hibrido" />
                        <label htmlFor="hibrido" className="text-sm">
                          Híbrido (ambas)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion-consultorio">Dirección del consultorio (si aplica)</Label>
                    <Input id="direccion-consultorio" placeholder="Calle 123 #45-67, Oficina 301" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tarifa">Tarifa por sesión (COP) *</Label>
                      <Input id="tarifa" type="number" placeholder="80000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duracion">Duración de sesión *</Label>
                      <select
                        id="duracion"
                        className="w-full border border-input rounded-lg px-3 py-2 bg-card text-card-foreground"
                        required
                      >
                        <option value="">Seleccionar</option>
                        <option value="45">45 minutos</option>
                        <option value="60">60 minutos</option>
                        <option value="90">90 minutos</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-6 border-t border-border">
                  <Checkbox id="terms" required />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    Acepto los{" "}
                    <Link href="/terminos" className="text-primary hover:underline">
                      términos y condiciones
                    </Link>
                    , la{" "}
                    <Link href="/privacidad" className="text-primary hover:underline">
                      política de privacidad
                    </Link>{" "}
                    y autorizo el tratamiento de mis datos personales. Declaro que toda la información suministrada es
                    verídica y acepto que MindConnect puede verificar la autenticidad de los documentos presentados.
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  Enviar postulación
                </Button>
              </form>

              <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  ¿Qué sigue después?
                </h4>
                <ol className="text-sm text-muted-foreground space-y-1 ml-7 list-decimal">
                  <li>Revisaremos tu postulación en 24-48 horas</li>
                  <li>Verificaremos tus credenciales y documentos</li>
                  <li>Te contactaremos para una entrevista virtual</li>
                  <li>Una vez aprobado, configuraremos tu perfil profesional</li>
                  <li>¡Comenzarás a recibir solicitudes de pacientes!</li>
                </ol>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">500+</p>
              <p className="text-muted-foreground">Profesionales activos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">15k+</p>
              <p className="text-muted-foreground">Pacientes atendidos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">98%</p>
              <p className="text-muted-foreground">Satisfacción</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">4.8</p>
              <p className="text-muted-foreground">Calificación promedio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
