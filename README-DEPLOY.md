# Tutorial de Despliegue — labchemardy.github.io

## Resumen rápido
Este es tu **guía paso a paso** para:
- Publicar cambios en tu repositorio GitHub
- Actualizar tu página GitHub Pages
- Evitar problemas comunes (repos que reaparecen, caché, etc.)

---

## 1. Configuración inicial (primera vez)

### Paso 1.1: Configurar tu identidad en Git
```bash
git config --global user.email "tu-email@gmail.com"
git config --global user.name "Tu Nombre"
```

### Paso 1.2: Verificar que el remoto está correcto
```bash
git remote -v
```

Debe mostrar:
```
origin  https://github.com/labchemardy/labchemardy.github.io.git (fetch)
origin  https://github.com/labchemardy/labchemardy.github.io.git (push)
```

Si no aparece, agrégalo:
```bash
git remote add origin https://github.com/labchemardy/labchemardy.github.io.git
```

### Paso 1.3: Traer cambios del servidor (si el repo ya existe en GitHub)
```bash
git fetch origin
git branch -a
```

---

## 2. Flujo normal: Hacer cambios y publicar

### Paso 2.1: Modificar tus archivos
Edita los archivos en la carpeta `src/` (Vue, CSS, etc.)

### Paso 2.2: Compilar el proyecto (generar `dist/`)
```bash
npm install  # Solo si es la primera vez o agregaste dependencias
npm run build
```

Verifica que se creó la carpeta `dist/` con los archivos compilados.

### Paso 2.3: Agregar cambios a Git
```bash
git status  # Ver qué cambió
git add .   # Agregar TODOS los cambios
```

O si solo quieres cambios específicos:
```bash
git add src/  # Solo cambios en src/
git add dist/ # Y la compilación
```

### Paso 2.4: Confirmar los cambios (commit)
```bash
git commit -m "Descripción clara de qué cambió"
```

Ejemplos de buenos mensajes:
- `git commit -m "Actualizar página principal"`
- `git commit -m "Arreglar estilos en dashboard"`
- `git commit -m "Agregar nueva sección de análisis"`

### Paso 2.5: Subir a GitHub (push)
```bash
git push -u origin master
```

O si ya lo hiciste antes:
```bash
git push
```

✅ **¡Listo!** En 1-2 minutos, tu página en `labchemardy.github.io` se actualizará automáticamente.

---

## 3. Verificar que se subió correctamente

### Ver el estado local
```bash
git status
```
Debe mostrar: `Tu rama está adelante de 'origin/master' por 0 commits.` o `nada para hacer commit, el árbol está limpio.`

### Ver historial de commits
```bash
git log --oneline -5
```

### Verificar remoto
```bash
git remote -v
```

### Ver cambios pendientes
```bash
git diff  # Cambios sin stagear
git diff --staged  # Cambios a commitear
```

---

## 4. Problemas comunes y soluciones

### Problema: "fatal: repository not found"
**Causa**: El remoto `origin` apunta a una URL incorrecta o el repo en GitHub no existe.

**Solución**:
```bash
# Verificar
git remote -v

# Si está incorrecto, borrar y agregar de nuevo
git remote remove origin
git remote add origin https://github.com/labchemardy/labchemardy.github.io.git

# Intentar conectar
git fetch origin
```

### Problema: "Permission denied (publickey)"
**Causa**: GitHub no reconoce tu SSH key o no hiciste login.

**Solución**:
```bash
# Opción A: Usar HTTPS en lugar de SSH (más fácil)
git remote set-url origin https://github.com/labchemardy/labchemardy.github.io.git

# Opción B: Configurar SSH (más seguro, requiere setup)
# Ver: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### Problema: "Error al hacer commit: cambios sin stagear"
**Causa**: Olvídate hacer `git add`.

**Solución**:
```bash
git add .
git commit -m "Tu mensaje"
```

### Problema: "La página no se actualiza después del push"
**Causa**: Caché del navegador o GitHub aún procesando.

**Solución**:
```bash
# 1. Abre en navegador privado/incógnito
# 2. Limpia caché: Ctrl+Shift+Supr (Windows/Linux) o Cmd+Shift+Supr (Mac)
# 3. Espera 1-2 minutos y recarga
# 4. Ve a https://github.com/labchemardy/labchemardy.github.io
#    y verifica que los cambios aparecen en el repo
```

### Problema: "El repositorio reaparece después de borrarlo"
**Causa**: Git config local sigue apuntando a la URL, o hay múltiples clones.

**Solución**:
```bash
# Remover el remoto completamente
git remote remove origin

# Ver que no hay remotes
git remote -v  # Debe estar vacío

# Si quieres volver a conectar luego
git remote add origin https://github.com/labchemardy/labchemardy.github.io.git
```

### Problema: "dist/ se ve como submodule (carpeta con punto)"
**Causa**: `dist/` es un repositorio git dentro de otro.

**Solución**:
```bash
# Ejecutar UNA sola vez
git rm --cached dist
rm -rf dist/.git
git add .
git commit -m "Limpiar dist como submodule"
git push
```

---

## 5. Checklist antes de publicar (importante)

Antes de hacer `git push`:

- [ ] ¿Ejecuté `npm run build`? (crear `dist/`)
- [ ] ¿Hice `git add .`?
- [ ] ¿El `git status` muestra "no hay cambios para commit"?
- [ ] ¿Hice `git commit` y `git push` sin errores?

Antes de eliminar/recrear el repositorio en GitHub:

- [ ] ¿Guardé los `src/` en un backup?
- [ ] ¿Revisé si hay integraciones (Netlify, Vercel) conectadas?
- [ ] ¿Desconecté dominio personalizado (si usas uno)?
- [ ] ¿Eliminé la rama `gh-pages` (si existe)?

---

## 6. Comandos útiles (referencia rápida)

```bash
# Ver estado
git status
git log --oneline -10

# Hacer cambios
git add .
git commit -m "Mensaje"
git push

# Ver cambios antes de confirmar
git diff
git diff --staged

# Deshacer últimos cambios (sin perder archivos)
git reset --soft HEAD~1

# Ver qué cambió en un archivo
git show HEAD:archivo.txt

# Traer cambios del servidor
git pull origin master

# Crear nueva rama (si necesitas trabajar sin afectar main)
git checkout -b nombre-rama

# Ver todas las ramas
git branch -a

# Eliminar rama local
git branch -D nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama
```

---

## 7. Buenas prácticas

✅ **HACER**:
- Commits pequeños con mensajes claros
- Verificar `git status` antes de push
- Hacer `npm run build` después de cambios importantes
- Usar ramas para experimentos (`git checkout -b test`)

❌ **EVITAR**:
- Commits grandes sin mensaje descriptivo
- Hacer `git push --force` sin estar seguro
- Eliminar repos sin backup
- Cambiar `.gitignore` sin saber las consecuencias

---

## 8. Contacto y referencias

- Documentación Git oficial: https://git-scm.com/doc
- GitHub Pages (tu URL): https://labchemardy.github.io
- Repositorio GitHub: https://github.com/labchemardy/labchemardy.github.io
- Documentación Vite: https://vitejs.dev/guide/

---

**Creado**: 16-02-2026  
**Última actualización**: Este mismo día  

---

## Próximos pasos (si quieres mejorar)

1. Automatizar despliegue con GitHub Actions (Deploy automático)
2. Usar rama `gh-pages` para separar código fuente de compilado
3. Agregar pre-commit hooks para verificar errores antes de subir
4. Usar CI/CD para correr tests automáticos

Por ahora, usa este manual como referencia. ¡Éxito! 🚀
