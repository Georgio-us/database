from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_TAB_ALIGNMENT, WD_TAB_LEADER
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path("/Users/georgious/Desktop/DATABASE")
OUTPUT = ROOT / "docs" / "Коммерческое предложение Estate Base.docx"

NAVY = "172033"
BLUE = "315FC6"
PALE_BLUE = "EEF3FC"
PALE_GRAY = "F5F6F8"
BORDER = "D9DDE5"
TEXT = RGBColor(30, 34, 42)
MUTED = RGBColor(104, 111, 124)


def set_cell_shading(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), fill)


def set_cell_margins(cell, top=110, start=140, bottom=110, end=140):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for margin, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{margin}"))
        if node is None:
            node = OxmlElement(f"w:{margin}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def set_table_borders(table, color=BORDER, size="6"):
    tbl_pr = table._tbl.tblPr
    borders = tbl_pr.find(qn("w:tblBorders"))
    if borders is None:
        borders = OxmlElement("w:tblBorders")
        tbl_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = borders.find(qn(f"w:{edge}"))
        if tag is None:
            tag = OxmlElement(f"w:{edge}")
            borders.append(tag)
        tag.set(qn("w:val"), "single")
        tag.set(qn("w:sz"), size)
        tag.set(qn("w:space"), "0")
        tag.set(qn("w:color"), color)


def repeat_table_header(row):
    tr_pr = row._tr.get_or_add_trPr()
    repeat = OxmlElement("w:tblHeader")
    repeat.set(qn("w:val"), "true")
    tr_pr.append(repeat)


def prevent_row_split(row):
    tr_pr = row._tr.get_or_add_trPr()
    tr_pr.append(OxmlElement("w:cantSplit"))


def set_cell_text(cell, value, bold=False, color=TEXT, size=10):
    cell.text = ""
    paragraph = cell.paragraphs[0]
    paragraph.paragraph_format.space_after = Pt(0)
    paragraph.paragraph_format.line_spacing = 1.05
    run = paragraph.add_run(value)
    run.bold = bold
    run.font.name = "Arial"
    run.font.size = Pt(size)
    run.font.color.rgb = color
    cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
    set_cell_margins(cell)


def add_page_number(paragraph):
    run = paragraph.add_run()
    begin = OxmlElement("w:fldChar")
    begin.set(qn("w:fldCharType"), "begin")
    instruction = OxmlElement("w:instrText")
    instruction.set(qn("xml:space"), "preserve")
    instruction.text = " PAGE "
    separate = OxmlElement("w:fldChar")
    separate.set(qn("w:fldCharType"), "separate")
    end = OxmlElement("w:fldChar")
    end.set(qn("w:fldCharType"), "end")
    run._r.extend((begin, instruction, separate, end))


def add_paragraph(doc, text, *, bold_lead=None, style=None, color=TEXT):
    paragraph = doc.add_paragraph(style=style)
    paragraph.paragraph_format.keep_together = True
    if bold_lead and text.startswith(bold_lead):
        lead = paragraph.add_run(bold_lead)
        lead.bold = True
        tail = paragraph.add_run(text[len(bold_lead):])
        lead.font.color.rgb = color
        tail.font.color.rgb = color
    else:
        run = paragraph.add_run(text)
        run.font.color.rgb = color
    return paragraph


def add_feature(doc, number, title, description):
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.keep_together = True
    paragraph.paragraph_format.space_after = Pt(7)
    heading_run = paragraph.add_run(f"{number}. {title}")
    heading_run.bold = True
    heading_run.font.size = Pt(11.5)
    heading_run.add_break()
    body_run = paragraph.add_run(description)
    body_run.font.size = Pt(10.4)


doc = Document()
section = doc.sections[0]
section.page_width = Inches(8.5)
section.page_height = Inches(11)
section.top_margin = Inches(0.72)
section.bottom_margin = Inches(0.7)
section.left_margin = Inches(0.78)
section.right_margin = Inches(0.78)
section.header_distance = Inches(0.3)
section.footer_distance = Inches(0.3)

properties = doc.core_properties
properties.title = "Коммерческое предложение — база объектов недвижимости"
properties.subject = "Разработка внутренней веб-системы для агентства недвижимости"
properties.author = "Estate Base"
properties.keywords = "недвижимость, база объектов, OLX, DIM.RIA"

styles = doc.styles
normal = styles["Normal"]
normal.font.name = "Arial"
normal.font.size = Pt(10.4)
normal.font.color.rgb = TEXT
normal.paragraph_format.space_after = Pt(5)
normal.paragraph_format.line_spacing = 1.12

title_style = styles["Title"]
title_style.font.name = "Arial"
title_style.font.size = Pt(30)
title_style.font.bold = True
title_style.font.color.rgb = TEXT
title_style.paragraph_format.space_after = Pt(12)
title_ppr = title_style.element.get_or_add_pPr()
title_border = title_ppr.find(qn("w:pBdr"))
if title_border is not None:
    title_ppr.remove(title_border)

subtitle_style = styles["Subtitle"]
subtitle_style.font.name = "Arial"
subtitle_style.font.size = Pt(16)
subtitle_style.font.color.rgb = MUTED
subtitle_style.paragraph_format.space_after = Pt(22)

for name, size, before, after in (("Heading 1", 17, 14, 7), ("Heading 2", 11.5, 8, 3)):
    style = styles[name]
    style.font.name = "Arial"
    style.font.size = Pt(size)
    style.font.bold = True
    style.font.color.rgb = TEXT
    style.paragraph_format.space_before = Pt(before)
    style.paragraph_format.space_after = Pt(after)
    style.paragraph_format.keep_with_next = True

for list_name in ("List Bullet", "List Number"):
    style = styles[list_name]
    style.font.name = "Arial"
    style.font.size = Pt(10.2)
    style.paragraph_format.space_after = Pt(3)
    style.paragraph_format.left_indent = Inches(0.25)
    style.paragraph_format.first_line_indent = Inches(-0.15)

footer = section.footer.paragraphs[0]
footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
add_page_number(footer)

# Cover and executive summary
eyebrow = doc.add_paragraph()
eyebrow.paragraph_format.space_after = Pt(14)
eyebrow_run = eyebrow.add_run("ESTATE BASE")
eyebrow_run.bold = True
eyebrow_run.font.name = "Arial"
eyebrow_run.font.size = Pt(10)
eyebrow_run.font.color.rgb = RGBColor.from_string(BLUE)

doc.add_heading("Коммерческое предложение", 0)
doc.add_paragraph("Разработка базы объектов недвижимости для агентства", style="Subtitle")

date = doc.add_paragraph("25 сентября 2026 года")
date.paragraph_format.space_after = Pt(24)
date.runs[0].font.color.rgb = MUTED

intro = doc.add_paragraph()
intro.paragraph_format.space_after = Pt(10)
intro_run = intro.add_run(
    "Предлагаем разработать внутреннюю веб-систему, в которой агентство сможет вести единую базу объектов, "
    "оперативно актуализировать данные, формировать подборки для клиентов и управлять публикациями на OLX и DIM.RIA."
)
intro_run.font.size = Pt(12)
intro_run.font.color.rgb = TEXT

add_paragraph(
    doc,
    "Это собственная база агентства без лишнего CRM-функционала: в первой версии не будет воронки продаж, "
    "канбана, биллинга и сложного контура работы с лидами.",
    color=MUTED,
)

doc.add_heading("Ключевые условия", level=1)
terms = [
    ("Стоимость разработки", "$2 000-$2 500"),
    ("Срок реализации", "6-8 недель"),
    ("Формат", "Адаптивное веб-приложение"),
    ("Пользователи", "Руководитель, администратор, риелторы"),
    ("Основные интеграции", "OLX и DIM.RIA"),
    ("Результат", "Рабочая база, готовая к наполнению и использованию"),
]
table = doc.add_table(rows=1, cols=2)
table.alignment = WD_TABLE_ALIGNMENT.CENTER
table.autofit = False
table.columns[0].width = Inches(2.2)
table.columns[1].width = Inches(4.7)
set_table_borders(table)
set_cell_text(table.cell(0, 0), "Параметр", bold=True, color=RGBColor(255, 255, 255))
set_cell_text(table.cell(0, 1), "Условие", bold=True, color=RGBColor(255, 255, 255))
set_cell_shading(table.cell(0, 0), NAVY)
set_cell_shading(table.cell(0, 1), NAVY)
repeat_table_header(table.rows[0])
for index, (label, value) in enumerate(terms, 1):
    row = table.add_row()
    prevent_row_split(row)
    set_cell_text(row.cells[0], label, bold=True)
    set_cell_text(row.cells[1], value)
    if index % 2 == 0:
        set_cell_shading(row.cells[0], PALE_GRAY)
        set_cell_shading(row.cells[1], PALE_GRAY)

doc.add_page_break()

# Scope
doc.add_heading("Что входит в разработку", level=1)
add_paragraph(doc, "Первая версия охватывает полный рабочий цикл объекта — от создания карточки до отправки клиенту и публикации на площадках.", color=MUTED)

features = [
    ("Главная страница", "Рабочая сводка по базе: активные объекты, черновики, резервы, объекты на актуализацию, ошибки публикаций и последние действия сотрудников."),
    ("Единая база объектов", "Общий каталог агентства с двумя режимами просмотра: карточки и таблица. Поддерживаются квартиры, дома, земельные участки, коммерческие помещения и паркинги."),
    ("Создание и редактирование объектов", "Форма меняется в зависимости от типа недвижимости. Можно сохранить короткий черновик, а затем дополнить характеристики, фотографии, документы и комментарии."),
    ("Поиск и фильтры", "Поиск по адресу, идентификатору, собственнику и телефону. Фильтры по типу, району, микрорайону, комнатам, цене, площади, статусу, ответственному и другим параметрам."),
    ("Статусы и актуализация", "Черновик, активный объект, требует актуализации, резерв, продан, снят с продажи и архив. Система напоминает проверить актуальность, но не снимает объект автоматически."),
    ("Контакты и ответственный риелтор", "В карточке хранятся имя собственника или партнёра, несколько телефонов, мессенджеры, комментарий и удобное время связи. За объектом закрепляется ответственный риелтор."),
    ("Фотографии, документы и эксклюзивы", "Загрузка фотографий и внутренних документов, выбор обложки, отметка эксклюзивного объекта и дата начала эксклюзива. Документы не публикуются наружу."),
    ("История изменений", "Журнал фиксирует изменение цены, статуса, характеристик, ответственного и подтверждение актуальности. Сохраняются история цены и автор каждого действия."),
    ("Массовые действия", "Можно выбрать несколько объектов и назначить ответственного, подтвердить актуальность, отправить на публикацию, добавить в подборку или перенести в архив."),
    ("Подборки для клиентов", "Создание подборки и публичной ссылки. Клиент видит фотографии, характеристики, цену и контакт риелтора, но не видит телефон собственника, номер квартиры, документы и внутренние комментарии."),
    ("Просмотры подборок", "В системе отображается, открывал ли клиент подборку и какие объекты просматривал. Ссылку можно отправить вручную через Telegram, Viber, WhatsApp, электронную почту или другой канал."),
    ("Импорт Excel и CSV", "Постоянный инструмент загрузки: сопоставление колонок, предварительная проверка, поиск вероятных дублей и отчёт по результату импорта."),
    ("Валюта и курс НБУ", "Работа с ценами в долларах и гривне. Курс НБУ обновляется один раз в день и используется для пересчёта отображаемой стоимости."),
    ("Выгрузка на OLX", "Публикация через один корпоративный аккаунт, обновление объявлений и отображение ошибок отправки. Возможности зависят от доступа к кабинету и официального API OLX."),
    ("Выгрузка на DIM.RIA", "Публикация и обновление объектов через корпоративный аккаунт, очередь отправки и журнал ошибок. Возможности зависят от тарифа, доступа и правил площадки."),
    ("Пользователи и доступы", "Роли руководителя, администратора и риелтора. Базовые ограничения на изменение ответственного, управление сотрудниками и административные настройки."),
    ("Адаптивный интерфейс", "Основные действия доступны на компьютере, планшете и смартфоне: поиск, просмотр базы, создание, редактирование, актуализация и работа с подборками."),
    ("Подготовка к будущему сайту", "Структура предусматривает дальнейшую выгрузку объектов на сайт агентства. Само подключение выполняется после появления сайта и согласования его API."),
]

for idx, (feature_title, description) in enumerate(features, 1):
    if idx == 10:
        doc.add_page_break()
        doc.add_heading("Что входит в разработку", level=1)
        add_paragraph(doc, "Продолжение", color=MUTED)
    add_feature(doc, idx, feature_title, description)

doc.add_page_break()

# Timeline and commercial terms
doc.add_heading("Этапы и сроки", level=1)
stages = [
    ("1. Уточнение и проектирование", "Финализация первой версии, ролей, обязательных полей и правил работы", "3-5 рабочих дней"),
    ("2. База объектов", "Пользователи, каталог, карточка, создание, редактирование, фильтры и статусы", "2-3 недели"),
    ("3. Подборки и импорт", "Публичные подборки, просмотры, Excel и CSV, обработка дублей", "1-2 недели"),
    ("4. Интеграции", "OLX, DIM.RIA, курс НБУ и очередь публикаций", "1-2 недели"),
    ("5. Проверка и запуск", "Тестирование, исправления, перенос исходных данных и обучение", "1 неделя"),
]
timeline = doc.add_table(rows=1, cols=3)
timeline.alignment = WD_TABLE_ALIGNMENT.CENTER
timeline.autofit = False
timeline.columns[0].width = Inches(2.1)
timeline.columns[1].width = Inches(3.55)
timeline.columns[2].width = Inches(1.25)
set_table_borders(timeline)
for col, value in enumerate(("Этап", "Содержание", "Срок")):
    set_cell_text(timeline.cell(0, col), value, bold=True, color=RGBColor(255, 255, 255), size=9.5)
    set_cell_shading(timeline.cell(0, col), NAVY)
repeat_table_header(timeline.rows[0])
for index, values in enumerate(stages, 1):
    row = timeline.add_row()
    prevent_row_split(row)
    for col, value in enumerate(values):
        set_cell_text(row.cells[col], value, bold=(col == 0), size=9.2)
        if index % 2 == 0:
            set_cell_shading(row.cells[col], PALE_GRAY)

add_paragraph(
    doc,
    "Общий срок составляет 6-8 недель с момента согласования объёма, получения предоплаты и необходимых доступов. "
    "Срок может измениться, если площадки задерживают выдачу доступа или меняют условия API.",
)

doc.add_heading("Стоимость и порядок оплаты", level=1)
price = doc.add_paragraph()
price.paragraph_format.space_after = Pt(8)
price_run = price.add_run("Стоимость проекта: $2 000-$2 500")
price_run.bold = True
price_run.font.size = Pt(14)
price_run.font.color.rgb = RGBColor.from_string(BLUE)

add_paragraph(
    doc,
    "Нижняя граница применяется при стандартном импорте и штатном подключении доступных API. Верхняя — если исходные таблицы требуют дополнительной обработки или площадкам нужна нестандартная адаптация. Точная фиксированная стоимость определяется перед началом работ после проверки исходных данных и доступов.",
)

for number, payment in enumerate((
    "40% после согласования состава работ и перед началом разработки.",
    "30% после готовности базы объектов и основных пользовательских сценариев.",
    "30% после финальной проверки и передачи рабочей версии.",
), 1):
    add_paragraph(doc, f"{number}. {payment}")

doc.add_page_break()

# Included / excluded
doc.add_heading("Что входит в стоимость", level=1)
included = [
    "проектирование первой версии;",
    "дизайн и разработка веб-интерфейса;",
    "backend и база данных;",
    "реализация согласованного функционала;",
    "подключение OLX и DIM.RIA при наличии доступного API;",
    "базовый перенос исходных объектов из согласованного файла;",
    "развёртывание рабочей версии;",
    "краткое обучение администратора;",
    "исправление обнаруженных ошибок в течение 30 календарных дней после запуска.",
]
for item in included:
    add_paragraph(doc, item, style="List Bullet")

doc.add_heading("Что оплачивается отдельно", level=1)
excluded = [
    "тарифы OLX, DIM.RIA и других внешних сервисов;",
    "домен, сервер, файловое хранилище и почтовые сервисы;",
    "разработка публичного сайта агентства;",
    "Telegram-бот или мини-приложение для автоматической отправки сообщений;",
    "нестандартный парсинг сторонних сайтов;",
    "новые модули и изменения объёма после утверждения работ;",
    "длительное сопровождение и дальнейшее развитие продукта.",
]
for item in excluded:
    add_paragraph(doc, item, style="List Bullet")

doc.add_heading("Ориентировочные расходы на инфраструктуру", level=1)
add_paragraph(
    doc,
    "Для небольшой базы и умеренного использования — ориентировочно $10-$30 в месяц. Фактическая сумма зависит от количества фотографий, документов, пользователей и операций.",
)

doc.add_page_break()

# Conditions and close
doc.add_heading("Условия интеграций", level=1)
add_paragraph(
    doc,
    "Заказчик предоставляет рабочие корпоративные аккаунты, доступы разработчика и необходимые разрешения OLX и DIM.RIA. Платные размещения, лимиты объявлений и модерация регулируются площадками и не входят в стоимость разработки.",
)
add_paragraph(
    doc,
    "Если отдельная функция недоступна через официальный API площадки, стороны согласуют допустимый вариант реализации до начала соответствующего этапа.",
)

doc.add_heading("Передача и дальнейшее использование", level=1)
add_paragraph(
    doc,
    "Заказчик получает рабочую систему для своего агентства и доступ к данным. Разработчик сохраняет право использовать универсальное ядро, отдельные технические решения и компоненты интерфейса в других проектах. Данные агентства, документы и контакты клиентов не используются вне системы заказчика.",
)

doc.add_heading("Следующий шаг", level=1)
add_paragraph(
    doc,
    "Для старта необходимо подтвердить состав первой версии, предоставить пример текущей таблицы объектов и проверить доступы к корпоративным кабинетам OLX и DIM.RIA. После этого фиксируются итоговая стоимость, календарный план и дата начала разработки.",
)

validity = doc.add_paragraph()
validity.paragraph_format.space_before = Pt(14)
validity.paragraph_format.keep_together = True
validity_run = validity.add_run("Предложение действительно 14 календарных дней.")
validity_run.bold = True
validity_run.font.color.rgb = RGBColor.from_string(BLUE)

doc.save(OUTPUT)
print(OUTPUT)
