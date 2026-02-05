+++
title = "{{ .Name | humanize | title }}"
date = {{ .Date }}
description = "Краткое описание услуги"
subtitle = "Подзаголовок услуги"
price = "Цена услуги"
duration = "Сроки исполнения услуги"

# Что входит (массив строк)
features = [
  "Пункт 1",
  "Пункт 2",
  "Пункт 3"
]

# Процесс работы (массив объектов)
[[process]]
  step = "1"
  title = "Обсуждаем задачу"
  description = "..."

[[process]]
  step = "2"
  title = "Заключаем договор"
  description = "..."

# FAQ (массив объектов)
[[faq]]
  question = "Частый вопрос"
  answer = "Ответ на него"
+++

