# Costa Azul Oceanfront Hotel - Frontend

Sitio web público del **Costa Azul Oceanfront Hotel**, un hotel de playa en El Salvador. Este proyecto está desarrollado con **Angular** siguiendo principios de **Domain-Driven Design (DDD)**.

## 🏗️ Arquitectura

El proyecto sigue una arquitectura inspirada en DDD con las siguientes capas:

```
src/app/
├── components/
│   ├── modules/hotel/          # DOMAIN LAYER (lógica de negocio)
│   │   ├── models/             # Modelos de dominio
│   │   └── services/           # Servicios de dominio
│   ├── layouts/                # LAYOUT LAYER (estructura general)
│   │   └── main-layout/        # Layout principal
│   ├── common/                 # COMMON COMPONENTS (reutilizables)
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── hero/
│   │   └── metrics-strip/
│   ├── general-pages/          # PRESENTATION LAYER (páginas)
│   │   ├── home-page/
│   │   ├── about-page/
│   │   ├── rooms-page/
│   │   ├── experiences-page/
│   │   ├── daypass-page/
│   │   ├── facilities-page/
│   │   └── contact-page/
│   └── shared/                 # Utilidades compartidas
├── app-routing.module.ts       # Configuración de rutas
├── app.component.ts            # Componente raíz
└── app.module.ts               # Módulo principal
```

## 🚀 Ejecución en Local

### Prerrequisitos
- Node.js (v18 o superior)
- Angular CLI (`npm install -g @angular/cli`)

### Pasos

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   ng serve
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:4200
   ```

## 🐳 Ejecución con Docker

### Prerrequisitos
- Docker Desktop instalado y corriendo

### Pasos

1. **Construir y levantar con Docker Compose:**
   ```bash
   docker compose up --build
   ```

2. **Acceder a la aplicación:**
   ```
   http://localhost:8080
   ```

3. **Detener los contenedores:**
   ```bash
   docker compose down
   ```

### Alternativa con Docker directamente

```bash
# Construir la imagen
docker build -t costa-azul-hotel .

# Ejecutar el contenedor
docker run -p 8080:80 costa-azul-hotel
```

## 📄 Páginas Disponibles

- **/** - Inicio
- **/sobre-nosotros** - Información del hotel
- **/habitaciones** - Catálogo de habitaciones
- **/experiencias** - Actividades y experiencias
- **/day-pass** - Información sobre pase de día
- **/instalaciones** - Instalaciones del hotel
- **/contacto** - Formulario de contacto

## 🏛️ Capas de la Arquitectura

### Domain Layer (Dominio)
**Ubicación:** `src/app/components/modules/hotel/`

Contiene la lógica de negocio pura del hotel:
- **Modelos:** Interfaces TypeScript que definen las entidades (Room, Experience, Metric, etc.)
- **Servicios:** Lógica de negocio y acceso a datos (actualmente con datos mock, preparado para API REST)

### Layout Layer
**Ubicación:** `src/app/components/layouts/`

Define la estructura general de la aplicación (navbar + contenido + footer).

### Common Components
**Ubicación:** `src/app/components/common/`

Componentes reutilizables en toda la aplicación (navbar, footer, hero, metrics-strip).

### Presentation Layer (Páginas)
**Ubicación:** `src/app/components/general-pages/`

Componentes de página que consumen servicios de dominio y presentan la información.

## 🔧 Tecnologías

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Docker** - Contenedorización
- **NGINX** - Servidor web para producción

## 📝 Notas Importantes

- **Sin CSS:** Este proyecto no incluye estilos CSS. Las clases HTML están preparadas para que se agreguen estilos posteriormente.
- **Datos Mock:** Actualmente usa datos en memoria. Los servicios están preparados para conectarse a una API REST en el futuro.
- **Formularios:** El formulario de contacto usa `FormsModule` (template-driven).

## 🔮 Próximos Pasos

1. Agregar estilos CSS/SCSS
2. Conectar con backend real (API REST)
3. Implementar sistema de reservas
4. Agregar internacionalización (i18n)
5. Optimización SEO

## 📞 Contacto

Costa Azul Oceanfront Hotel  
Playa El Tunco, La Libertad, El Salvador  
Tel: +503 1234-5678  
Email: info@costaazulhotel.com

---

**Desarrollado con ❤️ para Costa Azul Hotel**
