# Soluciones Comunes - ChemtinelCore

## Problema 1: Firefox no encontrado al ejecutar `npm run dev`

### Error típico:
```
No existe el archivo: /snap/bin/firefox
```

### Soluciones (en orden de preferencia)

#### **Solución 1: Deshabilitar apertura automática de navegador (RECOMENDADO)**

1. Abre `vite.config.js`
2. Asegúrate de que tenga:

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    open: false  // 👈 No abrir navegador automáticamente
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
```

3. Ejecuta: `npm run dev`
4. Abre **manualmente** http://localhost:5173 en tu navegador

---

#### **Solución 2: Especificar navegador diferente**

Si quieres que se abra automáticamente un navegador distinto (Chrome, Chromium, etc):

```javascript
server: {
  open: '/usr/bin/google-chrome'  // o el navegador que tengas instalado
}
```

Para encontrar el navegador disponible, ejecuta:
```bash
which google-chrome
which chromium
which chromium-browser
```

---

#### **Solución 3: Crear Firefox simulado (hack temporal)**

Si necesitas que funcione con Firefox pero no está disponible:

```bash
mkdir -p ~/.bin
touch ~/.bin/firefox
chmod +x ~/.bin/firefox
export PATH="$HOME/.bin:$PATH"
```

Luego en `~/.bin/firefox` agrega:
```bash
#!/bin/bash
echo "Firefox simulado (no hace nada)"
```

---

## Problema 2: Dependencias faltantes

### Error típico:
```
Cannot find module 'autoprefixer'
Cannot find module 'postcss'
```

### Solución:

```bash
cd /home/chema/labchemardy/chemtinelcore
npm install --save-dev autoprefixer postcss
```

**Verifica que tu `package.json` tenga estas líneas en `devDependencies`:**
```json
"autoprefixer": "^10.x.x",
"postcss": "^8.x.x"
```

---

## Problema 3: Terminal desaparece sin cargar nada

### Causas posibles:
1. Error silencioso en el servidor
2. Puerto 5173 ya en uso
3. Problema con PostCSS

### Soluciones:

**Opción A: Ejecutar con más detalles**
```bash
npm run dev -- --debug
```

**Opción B: Cambiar puerto**
```bash
npm run dev -- --port 3000
```

**Opción C: Matar procesos ocupando puerto 5173**
```bash
lsof -i :5173
kill -9 <PID>
```

Luego:
```bash
npm run dev
```

---

## Checklist de verificación

Antes de ejecutar `npm run dev`, asegúrate de:

- [ ] Estás en la carpeta correcta:
  ```bash
  cd /home/chema/labchemardy/chemtinelcore
  ```

- [ ] Las dependencias están instaladas:
  ```bash
  npm install
  ```

- [ ] `vite.config.js` tiene `open: false`:
  ```bash
  grep "open:" vite.config.js
  ```

- [ ] No hay procesos Vite ejecutándose:
  ```bash
  pkill -f vite
  ```

- [ ] El puerto 5173 está libre:
  ```bash
  lsof -i :5173
  ```

---

## Script automático de limpieza

Copia este script en un archivo `clean-dev.sh`:

```bash
#!/bin/bash

echo "🧹 Limpiando procesos..."
pkill -f vite

echo "📁 Instalando dependencias..."
npm install

echo "🚀 Iniciando servidor..."
npm run dev

echo "✅ Servidor listo en http://localhost:5173/"
```

Úsalo así:
```bash
chmod +x clean-dev.sh
./clean-dev.sh
```

---

## Próximas veces que falle

1. **Antes de cualquier cosa**: Ejecuta `npm install`
2. **Luego**: `pkill -f vite` para matar cualquier proceso anterior
3. **Finalmente**: `npm run dev`

Si sigue fallando, comparte el error exacto para investigar más.
