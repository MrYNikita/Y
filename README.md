# YModules

[![npm version](https://img.shields.io/npm/v/ymodules.svg)](https://npmjs.org/package/ymodules)
[![GitHub license](https://img.shields.io/badge/license-Apache_2.0-darkblue.svg)](https://github.com/MrYNikita/YModules)
[![npm downloads](https://img.shields.io/npm/dm/ymodules.svg)](https://npmjs.org/package/ymodules)

***
**YModules** - это совокупность функций и классов, предоставляющих частоиспользуемые и оптимизированные процедуры и структуры данных.

***
## Основные преимущества:
- Отсутсвие сторонних зависимостей.
- Регулярная оптимизация алгоритмов.
- Устранение необходимости в повторном написании однотипного кода, используемого в разных проектах.
***
## Содержание
1. **Теория**
    1. Версионная расшифровка
    1. Приёмы
        1. **Умное заполнение**
        1. **Глубокое взаимодействие**
    1. Паттерны
        1. **Объекты носители аргументов**
        1. **Типы паттернов**
            1. Type
                - TB
            1. Function
                1. Функциональные цепочки
                    - ADVHC
                    - BDVHC
            1. Classes
                1. Классовые цепочки
                    - SDFY
1. **Модули**
    1. OS
    1. Web
    1. Log
    1. Ject
        - Классы:
        - Функции:
            - Fill
            - DeepSet
            - DeepGet
            - DeepChange
            - DeepSupplement
    1. Func
    1. Error
    1. Array
    1. String
    1. Number
1. **Изменения**
    1. Удаления
    1. Улучшения
    1. Добавления
    1. Исправления
1. **Комментарий**
1. **Планы**

***
## Теория
### Версионная расшифровка
Версия задана форматом z.y.x, где z - номер версии проекта, y - номер обновления и x - номер правки. Версия обозначает изменение всего проекта, его концепций. Номер обновления указывает на добавление в указанную версию какого-то нового функционала. Правки описывают оптимазационные патчи и изменения функционала.
***
### Приёмы
#### Умное заполнение
Это приём классов SDFY, который позволяет заполнить объект с помощью D звена. Данное звено содержит все свойства, необходимые для заполнения экземпляра класса, без необходимости указывать каждое отдельное свойство.

Данный приём реализован за счет функциональной цепочки jectFill.


#### Глубокое взаимодействие
Это приём, который позволяет работать с объектом и всеми его свойствами без уровней вложенности, позволяя менять или получать доступ к свойствам вложенных объектов через основной.

Данный приём реализован за счет функциональных цепочек jectChange, jectGet, JectSet, jectSupplement.

***
### Паттерны
#### Объект носитель аргументов
**Объект носитель аргументов** - это объект, свойства которого являются аргументами для функций. Данные объекты обозначаются как t (transmit). Пример:

```js

    function test(t) { ... };
```


Для данных объектов с помощью JSDoc создается тип, используя который могут быть обозначены ожидаемые свойства.

```js

    /**
     * @typedef t1
     * @prop {string} str Текстовое свойство.
     * @prop {number} num Числовое свойсвто.
    */
```


Для тех случаев, когда один объект носитель поолностью содержит свойства другого типа носителя аргументов, но имеет собственные уникальные свойства, следует использовать паттерн TB. Данный паттерн реализуется за счет создания промежуточного типа before, который содержит уникальные свойства и итогового типа, которые является совокупностью наследуемого и промежуточного типа.

```js

    /**
     * @typedef t1
     * @prop {string} str Текстовое свойство.
     * @prop {number} num Числовое свойсвто.
    */

    /**
     * @typedef tb2
     * @prop {boolean} boo Логическое свойство.
     * @typedef {t1&tb2} t2
    */
```


Далее необходимо использовать данный тип.

```js

    /**
     * ...
     * @arg {t2} t
    */
    function test(t) { ... };
```


Данный объект носитель аргументов используется в функциональных цепочках, где один единственный объект передается аргументом для всех функций, вызванных по цепочке.

***
#### Type

- TB
    TB - (transmit before) - это паттерн создания JSDoc типов. С помощью данного паттерна создаются типы, определяющие вид объектов носителей аргументов и правила их формирования. Созданные типы используются в основном для создания ожидаемого объекта.

    Паттерн TB выделяет свойства типов называемые избыточными - это такие свойства, которые могли быть обретены в следствии совокупности.
    > Предупреждение! Использование этого паттерна требует оптимального создания типов. Это означает, что создаваемые типы должны не должны содержать избыточные свойства.

    > Уточнение! Для того, чтобы устранить избыточные свойства следует создвавать промежуточные типы, используемые исключительно для перечисления необходимых свойств.

***
#### Function
1. Функциональные цепочки
Функциональные цепочки - это функция отдельные логические части которой, преобразованны в совокупность последовательно выполняемых функций, представленных цепочкой вызов. Каждый отдельный вызов функции в цепи называется звеном. Каждое отдельное звено выпролняет свою логическую часть. Результат всех вызовов возвращается в изначальное звено вызова.

**Преимущетсва**:
- Вынесение логики.
- Упрощенная навигация.

Для расмотрения предлагаются варианты функиональных цепочек.

**Виды**:
1. DVHC
    *Deceit Verify Handle Comply* - Это вариант функциональной цепочки, который включает в себя этапы: отлова, проверки, обработки, исполнения. В качестве аргумента любая функциональная цепочка DVHC принимает объект-носитель аргументов. Каждое звено цепи возвращает значение вызова последующего звена. Последнее звено цепи C исполняет основную заложенную логику и возвращает итоговое значение. Предполагается, что каждое звено цепи представлено в единственном экземпляре.

    D - (Deceit) - этап отлова. Данное звено оборачивает все последующие звенья в единый блок отлова исключительных ситуаций. В случае исключительной ситуации, данное звено либо прервет исполнение программы вызовом ошибки, либо вернет определенное автором исключительное значение.
    V - (Verify) - этап проверки. Данное звено осуществляет проверку объекта-носителя аргументов. Если объект носитель аргументов содержит ошибочные свойства, то данное звено вернет определенную для проверки исключительную ситуацию.
    H - (Handle) - этап обработки аргументов. Данное звено осуществляет обработку объекта-носителя аргументов, если они соответсвуют условиям обработки.
    C - (Comply) - этап исполнения. Данное звено осуществляет исполнение основной логики функциональной цепочки.

    1. ADVHC
        *Aggregate's Deceit Verify Handle Comply* - это модификация функциональной цепочки DVHC, которая включает в себя звенья-дистрибьюторы. Каждое из данных звений может быть начальным.

        Все данные звенья предназначены для обращения к звену D и каждое из них обладает уникальным набором аргументов. Аргументы данных звеньев могут быть отличными от объекта-носителя аргументов - это сделано для удобства обращения к функциям, чьё кол-во аргументов мало и может быть сведено к последовательности. Однако логика своих звеньев подразумевает обращение к D, что требует в логике каждого такого звена приводить все перечисленные аргументы к объекту-носителю аргументов.

        Каждое такое звено должно обладать своей документацией с указанием типа для каждого параметра. В документации к функции можно опустить указание @return в тех случаях когда функция всегда возвращает единственное значение. Исключением могут быть те звенья, логика которых заключается в возвращении одного элемента, несмотря на то, что C звено возвращает массив элементов. В противном случае не рекомендуется указывать значения отличные от значения звена C.

        > Предупреждение! При указании @return в документации к звену-дистрибьютору следует указывать значение исключительной ситуации, если такое указано в звене D.

    1. BDVHC
        *Before Deceit Verify Handle Comply* - это функциональная цепочка, которая включает в себя звено-предъобработки. Такое звено является начальным и единственным.

        Звенья-предобработчики предназначены для приведения последовательнсоти аргументов к форме объекта носителя аргументов. Их логика изучает последовательность и на основе заложенной в звено логики формирует объект-носитель аргументов, который в дальнейшем проходит стандартную цепочку DVHC.

        Данные функциональные цепочки используются в классах, чтобы имитировать переопределение конструктора. В такой реализации, звено не вызывает следующих элементов цепи. Вместо этого звено возвращает объект-носитель аргументов.

        По сути BDVHC является точной копией ADVHC

        > Уточнение! B не вызывает последующие элементы функциональной цепи. Это связано с тем, что констурктор вынужден вызывать метод super, который может быть вызван только в его теле. Всвязи с этим вызов из звена невозможен. Если бы B продолжал цепь до вызова C, то звено C изменило бы this до объявления конструктора.
***
#### Classes
1. Классовые цепочки
    Классовые цепочки - это последовательности классов, которые разделены на логические звенья. Каждое звено ответсвтенно за собственную логику.
    > Пример! Вся статика вынесена в специальное статическое звено. Таким образом вся статика сконцентрирована в единтсвенном классе.

**Преимущества**
- Вынесение логики.
- Упрощенная навигация.

**Виды**
1. SDFY
*Static Data Fill Y* - Это вариант классовых цепочек, при котором создается последовательность классовых звеньев SDFY. Данный паттерн подразумевает наличие в цепи едиснтвенного конструктора. Внутри конструктора используется функциональная цепочка BDVHC - это даёт возможность передавать в конструктор итогового класса как объект-носитель аргментов, так и последовательность аргментов.
> Предупреждение! Рекомендуется использовать вариант с объетками-носителями аргументов. Данный вариант предпочтителен, так как позволяет пользователям использовать intellisense.

***
## Модули
### OS
Данный модуль позволяет гибко управлять файлами и директориями проекта.

**Преимущества**
- Позволяет работать с файлами, как с объектами.
- Может найти любой файл в проекте по фрагменту его пути.

**Функции**
- #### **getPath**

- #### **getPathAll**
    Получить массив всех путей проекта, можно использовать метод `getPathAll`. За счёт указанного метода будет получен массив всех путей проекта.
    ```js
        // Массив всех путей проекта.
        const paths = getPathAll();
    ```
    При необходимости можно получить те файлы, которые будут соответсвовать определенным условиям.

**Классы**

***
## Изменения
- Удаления
- Улучшения
  - regexp
    - YRegExp
      - Теперь позицию регулярных выражений можно задать методом.
      - Теперь выражениям можно задать начальную позицию. Это также означает, что открывается полномерное использование флагов `g` и `y`.
- Добавления
  - string
    - Добавлена ФЦ для получения строки по индексу - getRowByIndex.
    - Добавлена ФЦ для получения строки по позиции символа - getRowByPosition.
    - Добавлена ФЦ для вставки значений в исходную строку с переносом - pasteWrap.
    - Добавлена ФЦ для подсчета кол-ва символов к указанной позиции - getLengthToLineByIndex.
    - Добавлена ФЦ для поиска подстроки в исходной строке в указанной позиции - findInPosition.
    - Добавлена ФЦ для замены линии в исходнйо строке по указанному индексу - replaceRowByIndex.
    - Добавлена ФЦ для поиска подстроки в исходной строке с указанной позиции - findFromPosition.
  - regexp
    - YRegExp
      - Добавлено свойство позиции поиска - position.
      - Добавлен метод изменения позиции поиска - changePosition.
- Исправления
  - string
    - paste
      - Исправлена ошибка некорректной вставки для отрицательных (обратных) областей.
    - remove
      - Исправлена ошибка некорректного удаления последнего символа в случаях, где указанный индекс и размер удаления не предполагали его включения.
***
## Комментарий
**String Paste Wrap**
Строковые вставки стали значительно лучше, за счет использования pasteWrap. Преимущество его использования заключается в том, что он позволяет вставить заготовленный шаблон или строку поверх существующей, без необходимости учитывать символы переноса строки.

**element и global**
В проекте можно обнаружить файл global.mjs который предназначен для преподготовки страницы для запуска.
***
## Планы
- [x] Сделать карты для YFunc.
- [ ] Переработать поиск путей в path.
- [ ] SDFY -> SDIMFY-1.0.
    - [ ] Базовая реализация первоосновы класса или YBasic класс.
    - [ ] Новый класс I для указания свойств, необходимых для создания экземпляра.

- [ ] Модификация path.
    - [ ] Добавление ФЦ прокладки относительного пути от файла до файла.
    - [ ] Добавление класса строк|метода|формы записи правил путей (возможно фрагментов поиска) для оптимизации поиска и более гибких правил нахождения подходящих путей.
- [ ] Модификация YFile.
    - [ ] Статика.
    - [ ] Асинхронность.
- [ ] Модификация YNotice.
    - [ ] Группы уведомлений.
- [ ] Переписывание классов модулей на SDFY-2.0.
    - [x] YAPI.
    - [x] YRout.
    - [x] YFile.
    - [x] YStyle.
    - [x] YString.
    - [x] YServer.
    - [x] YElement.
    - [x] YDirectory.
    - [x] YStyleElement.
    - [ ] YRegExp.
    - [ ] YRegExpSymbol.
    - [ ] YRegExpVariate.
    - [ ] YRegExpBracket.
- [ ] Создание модуля CLI.
- [ ] Создание модуля os.stream.
- [ ] Создание вложенного модуля CLI.YCLI.
- [ ] Создание вложенного модуля log.YLog.
- [x] Создание вложенного модуля web.html.
- [ ] Создание вложенного модуля web.html.plot.
- [ ] Создание вложенного модуля web.html.style.
    - [ ] Оптимизатор стилей.
- [ ] Создание вложенного модуля web.html.fetch.
- [x] Создание вложенного модуля web.html.element.
    - [ ] create
        - [ ] createByString
            - [ ] Убрать рекурсию.
            - [ ] Добавить возможность указания параметров.
    - [x] Возможность указания параметров в формате единой строки.
    - [x] Размещение элементов в над элементах.
    - [x] Перемещение элементов.
    - [x] Удаление элементов.
    - [x] Создание класса элементов.
    - [x] Заполнение класса.
    - [x] Возможность указывать в строке вложенные элементы в виде аналогичных строк.
    - [x] Учет и группировка элментов.
    - [x] Аналоги компонентам React или структуры.
- [ ] Модификация YServer
    - [ ] Система ролей
    - [ ] Генерация паролей
    - [ ] Система регестрации
- [ ] Создание вложенного модуля web.html.animation.
- [ ] Доработка документации.
    - [ ] Привести разбор модулей.
    - [ ] Привести примеры использования.
- [ ] Внедрение строки условия объекта носителя аргумента.
- [ ] Асинхронная архитектура построенная на дочерних процессах.
- [x] Создание объекта отчета.
- [x] Хранить для отчетов блоки, а не экземпляры. (Итоговый отчет должен храниться только у экземпляра, а блоки для него у статического класса должны храниться отдельным массивом, а не объектом YRept, но для статического класса).