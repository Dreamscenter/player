# Dreamscenter Player

Dreamscenter to nowoczesny internetowy odtwarzacz filmów. Możesz bardzo łatwo zintegrować go ze swoją stroną internową.


![obraz](https://github.com/Dreamscenter/player/assets/144959407/26c0aa8d-b1bd-4269-becc-2c1ee2ef6710)

**Spis treści:**
1. Funkcje:
   - [Kompatybilność](#kompatybilność)
   - [Nowoczesny wygląd](#nowoczesny-wygląd)
   - [Brak reklam](#brak-reklam)
   - [Przycisk pomijania czołówki](#przycisk-pomijania-czołówki)
   - [Wspólne Oglądanie](#wspólne-oglądanie)
   - [Kastomizacja](#kastomizacja)
2. [Instrukcja](#instrukcja)

# Funkcje

## Kompatybilność
![obraz](https://github.com/Dreamscenter/player/assets/144959407/3e34e730-f790-476d-8233-ebd44432cc9a)

Dreamscenter może odtworzyć każdy film dostępny publicznie w internecie.

Dodatkowo wspieramy również linki do filmów zamieszczonych w serwisie **CDA.pl**. W przyszłości planujemy dodać wsparcie również dla innych platform filmowych.

## Nowoczesny wygląd
![obraz](https://github.com/Dreamscenter/player/assets/144959407/fabe83c4-8784-4872-848c-44e182495671)

Interfejs Dreamscenter jest minimalistyczny i prosty w użytkowaniu.

Dostosowuje się w zależności od rodzaju urządzenia i wielkości ekranu.

## Brak reklam

W Dreamscenter nie wyświetlają się żadne reklamy, dzięki czemu użytkownicy mogą oglądać film bez przeszkód.

## Przycisk pomijania czołówki
![obraz](https://github.com/Dreamscenter/player/assets/144959407/60e89bdb-266c-4b6f-ad5d-339d62b64485)

Dzięki przyciskowi pomijania czołówki użytkownicy mogą szybciej przejść do oglądania filmu bez konieczności ręcznego przewijania.

## Wspólne Oglądanie
![obraz](https://github.com/Dreamscenter/player/assets/144959407/a056e363-df0a-4587-8335-1486296623ec)

Funkcja Wspólnego Oglądania umożliwia użytkownikom oglądać filmy na odległość. Każdy może zatrzymać i przewinąć film, a automatyczna synchronizacja sprawia, że każdy zawsze widzi tę samą scenę filmu.

## Kastomizacja
![obraz](https://github.com/Dreamscenter/player/assets/144959407/7351d493-5976-408f-8544-42660172834d)

Dzięki możliwości zmiany koloru przewodniego możesz łatwo dopasować odtwarzacz do kolorystyki swojej strony.

# Instrukcja
Osadzenie Dreamscenter na twojej stronie jest bardzo proste. Wystarczy, że dodasz ten fragment HTML:
```html
<iframe src="https://dreamscenter.app/player?url=[link do filmu]&color=[twój kolor]"
        allowfullscreen
        allow="clipboard-write" # To uprawnienie jest potrzebne, by działał przycisk kopiowania linku do sesji Wspólnego Oglądania
        width="747" height="420"/>
```

Np.
```html
<iframe src="https://dreamscenter.app/player?url=myvideo.com/ab77d&color=00FF14"
        allowfullscreen
        allow="clipboard-write"
        width="747" height="420"/>
```

Kolor musi być 6 cyfrowym kodem hex.

### Przycisk pomijania czołówki (opcjonalne)
By wyświelić przycisk pomijania czołówki dodaj również czas jej rozpoczęcia i zakończenia:
```html
<iframe src="https://dreamscenter.app/player?url=[link do filmu]&color=[twój kolor]&opening=00;20-01;30"
        allowfullscreen
        allow="clipboard-write"
        width="747" height="420"/>
```

Użycie atrybutu `opening=00;20-01;30` spowoduje, że przycisk pomijania czołówki pokaże się w 20 sekundzie filmu, a naciśnięcie go spowoduje przewinięcie do czasu 01:30.
