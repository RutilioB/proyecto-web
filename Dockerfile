# ============================================
# DOCKERFILE PARA COSTA AZUL HOTEL - ANGULAR
# ============================================
# 
# Este Dockerfile construye la aplicación Angular en un contenedor
# y la sirve usando NGINX en producción.
#
# INSTRUCCIONES DE USO:
#
# 1. Para construir la imagen:
#    docker build -t costa-azul-hotel .
#
# 2. Para ejecutar el contenedor:
#    docker run -p 8080:80 costa-azul-hotel
#
# 3. Acceder a la aplicación:
#    http://localhost:8080
#

# ============================================
# ETAPA 1: BUILD (Construcción de la app)
# ============================================
FROM node:18-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Copiar el código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build -- --configuration production

# ============================================
# ETAPA 2: RUNTIME (Servir la app con NGINX)
# ============================================
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de build
COPY --from=build /app/dist/proyecto-h /usr/share/nginx/html

# Copiar configuración personalizada de NGINX (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto (NGINX se inicia automáticamente)
CMD ["nginx", "-g", "daemon off;"]

# ============================================
# NOTAS:
# - La aplicación estará disponible en el puerto 80 del contenedor
# - Asegúrate de que el nombre del proyecto en angular.json coincida
#   con "proyecto-h" o ajusta la ruta en COPY --from=build
# - Para ver logs: docker logs <container-id>
# ============================================
