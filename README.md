# Coffee Shop — Landing Page

Landing page para una tienda de venta de café, construida con [Astro](https://astro.build) y estilizada con [Tailwind CSS](https://tailwindcss.com) v4.

## Objetivo

Usar Tailwind CSS para construir una landing page de venta de café, con estilo cálido y artesanal y contenido en español. Secciones previstas:

- Hero con llamado a la acción (CTA)
- Productos
- Nosotros / origen del grano
- Testimonios, contacto y footer

## Stack

- Astro
- Tailwind CSS 4 (plugin `@tailwindcss/vite`)
- pnpm

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Instala dependencias                             |
| `pnpm dev`          | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`        | Genera el sitio de producción en `./dist/`       |
| `pnpm preview`      | Previsualiza el build local antes de desplegar   |
| `pnpm astro ...`    | Ejecuta comandos del CLI como `astro add`, `astro check` |

## Tailwind CSS

- El plugin se registra en `astro.config.mjs` (`vite.plugins`).
- Los estilos globales viven en `src/styles/global.css` (`@import "tailwindcss";`).
- Importar `global.css` en cada layout o página que use Tailwind.

## Estructura a implementar

```text
src
├── pages
├── components
├── layouts
├── styles
├── scripts
├── types
├── utils
└── config
```

Los assets estáticos (imágenes, favicon) van en `public/`.

## Documentación

- [Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
