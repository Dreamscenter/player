# Dreamscenter Player

Dreamscenter to nowoczesny internetowy odtwarzacz filmów. Możesz bardzo łatwo zintegrować go ze swoją stroną internową.


![1](https://github.com/Dreamscenter/player2/assets/144959407/17328c74-08f4-403c-9a93-d299657320ec)


**Spis treści:**
1. Funkcje:
   - [Nowoczesny wygląd](#nowoczesny-wygląd)
   - [Brak reklam](#brak-reklam)
   - [Przycisk pomijania czołówki](#przycisk-pomijania-czołówki)
   - [Wspólne Oglądanie](#wspólne-oglądanie)
   - [Kastomizacja](#kastomizacja)
2. [Instrukcja](#instrukcja)

# Funkcje

## Nowoczesny wygląd
![3](https://github.com/Dreamscenter/player2/assets/144959407/1141d41f-e308-46cb-96f2-5f8d269c0354)


Interfejs Dreamscenter jest minimalistyczny i prosty w użytkowaniu.

Dostosowuje się w zależności od rodzaju urządzenia i wielkości ekranu.

## Brak reklam

W Dreamscenter nie wyświetlają się żadne reklamy, dzięki czemu użytkownicy mogą oglądać film bez przeszkód.

## Przycisk pomijania czołówki
![4](https://github.com/Dreamscenter/player2/assets/144959407/719a11ce-f3e4-4277-afb0-de1223ab3804)

Dzięki przyciskowi pomijania czołówki użytkownicy mogą szybciej przejść do oglądania filmu bez konieczności ręcznego przewijania.

## Wspólne Oglądanie
![5](https://github.com/Dreamscenter/player2/assets/144959407/24693e42-848b-44b1-a0f4-071a8320f27e)

Funkcja Wspólnego Oglądania umożliwia użytkownikom oglądać filmy na odległość. Każdy może zatrzymać i przewinąć film, a automatyczna synchronizacja sprawia, że każdy zawsze widzi tę samą scenę filmu.

## Kastomizacja
![6](https://github.com/Dreamscenter/player2/assets/144959407/948e8fa1-5350-4c15-8aa8-ad1a1a546c97)

Dzięki możliwości zmiany koloru przewodniego możesz łatwo dopasować odtwarzacz do kolorystyki swojej strony.

# Instrukcja
Osadzenie Dreamscenter na twojej stronie jest bardzo proste. Wystarczy, że dodasz ten fragment HTML:
```html
<iframe src="https://dreamscenter.com/player?url=[link do filmu]&color=[twój kolor]"
        allowfullscreen
        allow="clipboard-write" # To uprawnienie jest potrzebne, by działał przycisk kopiowania linku do sesji Wspólnego Oglądania
        width="747" height="420"/>
```

Np.
```html
<iframe src="https://dreamscenter.com/player?url=myvideo.com/ab77d&color=00FF14"
        allowfullscreen
        allow="clipboard-write"
        width="747" height="420"/>
```

Kolor musi być 6 cyfrowym kodem hex.

### Przycisk pomijania czołówki (opcjonalne)
By wyświelić przycisk pomijania czołówki dodaj również czas jej rozpoczęcia i zakończenia:
```html
<iframe src="https://dreamscenter.com/player?url=[link do filmu]&color=[twój kolor]&opening=00;20-01;30"
        allowfullscreen
        allow="clipboard-write"
        width="747" height="420"/>
```

Użycie atrybutu `opening=00;20-01;30` spowoduje, że przycisk pomijania czołówki pokaże się w 20 sekundzie filmu, a naciśnięcie go spowoduje przewinięcie do czasu 01:30.

### Pozyskiwanie informacji o stanie odtwarzania
Strona osadzająca iframe Dreamscenter, może uzyskać dostęp do informacji dotyczących stanu odtwarzacza.

Przykładowy kod:
```js
const iframe = document.querySelector('iframe.dreamscenter');
window.addEventListener('message', (event) => {
   switch (event.data.type) {
      case 'dreamscenter/v1/player/ready':
         iframe.contentWindow.postMessage('dreamscenter/v1/player/position/listen', '*');
         iframe.contentWindow.postMessage('dreamscenter/v1/player/duration/listen', '*');
         iframe.contentWindow.postMessage('dreamscenter/v1/player/progress/listen', '*');
         break;
     case 'dreamscenter/v1/player/position':
        // playback position in milliseconds
        console.log(`Position: ${event.data.value}`);
        break;
     case 'dreamscenter/v1/player/duration':
        // duration of the video in milliseconds
        console.log(`Duration: ${event.data.value}`);
        break;
     case 'dreamscenter/v1/player/progress':
        // floating-point number representing progress percentage (e.g. 0.37 if the video has been watched in 37%)
        console.log(`Progress: ${event.data.value}`);
        break;
   }
});
```

By przestać nasłuchać danej wartości: `iframe.contentWindow.postMessage('dreamscenter/v1/player/position/stopListening', '*');` 
