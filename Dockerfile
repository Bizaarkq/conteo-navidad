# Usa la imagen oficial de NGINX como base
FROM nginx:latest

# Copia el archivo HTML a la ubicación predeterminada de NGINX
COPY index.html /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
