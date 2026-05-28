---
title: Добро пожаловать в гид по DeepSeek!
description: Ваш путеводитель по использованию DeepSeek для эффективного самообучения.
meta:
  title: "Гид по DeepSeek - Самоучитель"
  noIndex: false
---
# Добро пожаловать в гид по DeepSeek!

Ваш путеводитель по использованию DeepSeek для эффективного самообучения.

---

## DeepSeek для самообучения

Полное руководство по использованию передового ИИ для вашего личного и профессионального роста.

[Начать обучение](./pages/how-to-learn.md){ .button }

---

::: page-constructor

blocks:
  # Первый блок: карточки с основными разделами
  - type: 'card-layout-block'
    title: 'Основные разделы'
    colSizes:
      all: 12
      md: 4
      sm: 6
    indent:
      top: sm
    children:
      # Карточка 1: Введение в DeepSeek
      - type: 'layout-item'
        content:
          title: 'Введение в DeepSeek'
          text: 'Узнайте что такое DeepSeek и почему он идеален для самообучения.'
          # ССЫЛКИ ДОЛЖНЫ БЫТЬ ВНУТРИ content:
          links:
            - text: 'Подробнее'
              url: './pages/what-is-deepseek.md'
              theme: 'normal'
              arrow: true
        border: true
      
      # Карточка 2: Стратегии обучения
      - type: 'layout-item'
        content:
          title: 'Стратегии обучения'
          text: 'Освойте 4 ключевые стратегии как превратить нейросеть в личного наставника.'
          # ССЫЛКИ ДОЛЖНЫ БЫТЬ ВНУТРИ content:
          links:
            - text: 'Подробнее'
              url: './pages/how-to-learn.md'
              theme: 'normal'
              arrow: true
        border: true
      
      # Карточка 3: Продвинутый уровень
      - type: 'layout-item'
        content:
          title: 'Продвинутый уровень'
          text: 'Изучите сложные техники - ролевые симуляции, анализ PDF, автоматизацию.'
          # ССЫЛКИ ДОЛЖНЫ БЫТЬ ВНУТРИ content:
          links:
            - text: 'Подробнее'
              url: './pages/advanced-tips.md'
              theme: 'normal'
              arrow: true
        border: true

:::

---

## Дополнительные ресурсы

{% list tabs accordion %}

- Начать обучение
  * [Что такое DeepSeek?](./pages/what-is-deepseek.md)
  * [Стратегии самообучения](./pages/how-to-learn.md)
  * [Продвинутые техники](./pages/advanced-tips.md)

- Внешние ссылки
  * [Официальный сайт DeepSeek](https://www.deepseek.com/)
  * [Diplodoc на GitHub](https://github.com/diplodoc-platform)

{% endlist %}

---

::: page-constructor
blocks:
  - type: 'filter-block'
    centered: true
    title:
      text: 'Нам доверяют'
    tags:
      - id: 'one'
        label: 'DoubleСloud'
      - id: 'two'
        label: 'Yandex Support'
      - id: 'three'
        label: 'Yandex Cloud'
      - id: 'four'
        label: 'YDB'
      - id: 'five'
        label: 'CatBoost'
    colSizes:
      all: 12
      xl: 12
      md: 12
      sm: 12
    indent:
      top: s
    items:
      - tags:
          - 'one'
        card:
          type: 'layout-item'
          media:
            image:
              src: 'https://storage.yandexcloud.net/cloud-www-assets/pages/index-diplodoc/diplodoc-tab-1.png'
              disableCompress: true
          border: true
          content:
            links:
              - text: 'Посмотреть документацию'
                url: 'https://double.cloud/docs/en/'
                theme: 'normal'
                arrow: true
                color: #54BA7E

      - tags:
          - 'two'
        card:
          type: 'layout-item'
          media:
            image:
              src: 'https://storage.yandexcloud.net/diplodoc-www-assets/pages/index-diplodoc/ddos-index-trust-support.png'
              disableCompress: true
          border: true
          content:
            links:
              - text: 'Посмотреть документацию'
                url: 'https://yandex.ru/support2/audience/ru/'
                theme: 'normal'
                arrow: true
                color: #54BA7E
      - tags:
          - 'three'
        card:
          type: 'layout-item'
          media:
            image:
              src: 'https://storage.yandexcloud.net/cloud-www-assets/pages/index-diplodoc/ddos-index-trust-yandex-cloud.png'
              disableCompress: true
          border: true
          content:
            links:
              - text: 'Посмотреть документацию'
                url: 'https://cloud.yandex.ru/docs/compute/'
                theme: 'normal'
                arrow: true
                color: #54BA7E
      - tags:
          - 'four'
        card:
          type: 'layout-item'
          media:
            image:
              src: 'https://storage.yandexcloud.net/cloud-www-assets/pages/index-diplodoc/ddos-index-trust-ydb.png'
              disableCompress: true
          border: true
          content:
            links:
              - text: 'Посмотреть документацию'
                url: 'https://ydb.tech/en/docs/'
                theme: 'normal'
                arrow: true
                color: #54BA7E
      - tags:
          - 'five'
        card:
          type: 'layout-item'
          media:
            image:
              src: 'https://storage.yandexcloud.net/cloud-www-assets/pages/index-diplodoc/ddos-index-trust-yandex-cat.png'
              disableCompress: true
          border: true
          content:
            links:
              - text: 'Посмотреть документацию'
                url: 'https://catboost.ai/en/docs/'
                theme: 'normal'
                arrow: true
                color: #54BA7E
  - type: 'card-layout-block'
    title: 'Как это работает?'
    colSizes:
      all: 12
      md: 4
      sm: 6
    indent:
      top: sm
    children:
      - type: 'layout-item'
        content:
          title: 'Архитектура'
          text: 'Платформа Diplodoc имеет клиент-серверную архитектуру: серверная часть состоит из компонентов на Node.js, которые генерируют и отображают документационные проекты. Такая архитектура обеспечивает надёжность и горизонтальное масштабирование в случае необходимости.  '
        media:
          image:
            src: 'https://storage.yandexcloud.net/diplodoc-www-assets/pages/index-diplodoc/ddos-index-item-01-01.png'
            disableCompress: true
        fullScreen: true
        border: true
      - type: 'layout-item'
        content:
          title: 'Интеграция с GitHub'
          text: 'Платформа Diplodoc имеет сквозную интеграцию с GitHub для обеспечения простого и стабильного механизма сборки и развёртывания документационных проектов. GitHub используется как хранилище исходного кода для документов и исполнения пайплайна проекта.'
        media:
          image:
            src: 'https://storage.yandexcloud.net/diplodoc-www-assets/pages/index-diplodoc/ddos-index-item-01-02.png'
            disableCompress: true
        fullScreen: true
        border: true
      - type: 'layout-item'
        content:
          title: 'Развёртывание'
          text: 'Компании – пользователи сервиса Diplodoc используют встроенные механизмы выкладки документационного проекта с последующей их индексацией и отслеживанием версий. Документы могут обновляться как в автоматическом, так и в полуавтоматическом режиме с привлечением администратора со стороны пользователя.'
        media:
          image:
            src: 'https://storage.yandexcloud.net/diplodoc-www-assets/pages/index-diplodoc/ddos-index-item-01-03.png'
            disableCompress: true
        fullScreen: true
        border: true
:::
---