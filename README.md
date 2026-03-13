# Timeline

Проект настроен для автоматического деплоя на **GitHub Pages** через GitHub Actions.

## Как опубликовать

1. Запушить изменения в ветку `main`.
2. В репозитории открыть **Settings → Pages**.
3. В разделе **Build and deployment** выбрать **Source: GitHub Actions**.
4. Дождаться завершения workflow `Deploy to GitHub Pages`.

После успешного деплоя сайт будет доступен по URL из шага `deploy` в Actions.



## Локальный запуск

```bash
pnpm install
pnpm dev
```

## Сборка

```bash
pnpm build
```
