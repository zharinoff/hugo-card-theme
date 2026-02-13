+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
draft = true
description = "Краткое описание поста для превью и SEO"
author = "Автор"
tags = []
categories = []
readingTime = true

# Обложка поста (для карточек, шаринга)
cover = "images/blog/cover.jpg"
cover_alt = "Описание обложки"

# Галерея изображений внутри поста
[[gallery]]
src = "images/blog/photo1.jpg"
alt = "Описание фото 1"
caption = "Подпись к фото (опционально)"

[[gallery]]
src = "images/blog/photo2.jpg"
alt = "Описание фото 2"
caption = "Подпись к фото (опционально)"
+++

# {{ replace .Name "-" " " | title }}

Введение — кратко о чём пост.

## Основная часть

Тут какой-то текст в Markdown.

## Заключение

Выводы и призыв к действию (опционально).
