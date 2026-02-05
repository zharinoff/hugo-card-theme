```markdown
# Hugo Card Theme

Минималистичная тема для сайтов-визиток на Hugo с Tailwind CSS. Только необходимое, без лишних элементов. Для бизнеса (услуги, кейсы, блог) и быстрой разработки.

## Быстрый старт

### 1. Создать сайт и подключить тему
```bash
hugo new site my-site
cd my-site
git submodule add https://github.com/zharinoff/hugo-card-theme.git themes/my-card
echo 'theme = "my-card"' >> hugo.toml
```

### 2. Настроить конфиг `hugo.toml`
```toml
baseURL = "https://ваш-сайт.com/"
title = "Название сайта"
theme = "my-card"

[params]
  description = "Описание сайта"
  
  [params.contacts]
    email = "ваш@email.com"
    phone = "+7 999 123-45-67"
    telegram = "ваш_username"
    vk = "ваш_id"
  
  [params.widget]
    enabled = true
    type = "telegram"
    text = "Написать в Telegram"
    url = "https://t.me/ваш_username"
```

### 3. Создать контент
```bash
mkdir -p content/{services,cases,blog}
hugo new services/название-услуги.md
hugo new cases/название-кейса.md
hugo new blog/название-поста.md
hugo new about.md
hugo new contact.md
```

### 4. Запустить
```bash
cd themes/my-card
npm install
cd ../..
hugo server
```

## Структура контента
```
content/
├── services/          # Услуги (archetypes/services.md)
├── cases/             # Кейсы (archetypes/cases.md)
├── blog/              # Блог (archetypes/blog.md)
├── about.md           # Обо мне (archetypes/about.md)
└── contact.md         # Контакты (archetypes/contact.md)
```

## Архетипы (поля front matter)

### Услуга (services.md)
```toml
title = "Название"
subtitle = "Подзаголовок"
price = "от 10 000 ₽"
duration = "5-10 дней"
features = ["Пункт 1", "Пункт 2"]
[[process]]
step = "1"
title = "Шаг 1"
description = "..."
[[faq]]
question = "..."
answer = "..."
```

### Кейс (cases.md)
```toml
title = "Название кейса"
client = "Клиент"
period = "2 месяца"
problem = "Проблема"
solution = "Решение"
results = "Результаты +30%"
testimonial = "Отзыв клиента"
featured = true
```

### Пост блога (blog.md)
```toml
title = "Заголовок"
author = "Автор"
tags = ["тег1", "тег2"]
readingTime = true
```

## Разработка темы
```bash
cd my-card
npm install          # Установить зависимости
npm run dev          # Разработка с live reload
npm run build        # Продакшен сборка
```

## Деплой

### GitHub Pages
Создать `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
      - name: Build Tailwind
        run: cd themes/my-card && npm ci && npm run build:css
      - name: Build Hugo
        run: hugo --minify
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    uses: actions/deploy-pages@v4
    needs: build
```

### Netlify
Создать `netlify.toml`:
```toml
[build]
  publish = "public"
  command = "cd themes/my-card && npm run build:css && cd ../.. && hugo --minify"
```

## Лицензия
MIT License. См. файл [LICENSE](LICENSE).

## Автор
Maxim Zharinoff · GitHub: [zharinoff](https://github.com/zharinoff)

## Поддержка
Issues: [GitHub Issues](https://github.com/zharinoff/hugo-card-theme/issues)

