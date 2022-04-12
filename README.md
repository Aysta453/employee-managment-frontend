# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Opis projektu

Celem projektu jest zaimplementowanie aplikacji do obsługi danych o pracownikach (imię, nazwisko, stanowisko, wynagrodzenie), a następnie przeprowadzenie na tych danych operacji typu: utwórz, edytuj, odczytaj, usuń.


Wykonana przy użyciu ReactJS. Po uruchomieniu aplikacji zawartość dostępna jest pod adresem localhost:3000. Strona główna przedstawia listę pracowników z bazy danych. 

Aktualnie nie ma żadnego pracownika w bazie danych. Nad napisem “Employees” znajdują się pola do wyszukiwania/ filtrowania danych natomiast pod nim widoczna jest tabela z pracownikami oraz przycisk, dzięki któremu można z poziomu aplikacji dodać pracownika.

Utworzenie pracownika
Po naciśnięciu przycisku Add Employee pojawia się okno z polami do wypełnienia:
-	imię
-	nazwisko
-	stanowisko
-	wynagrodzenie


Wypełnianie pól jest walidowane, w polach tekstowych nie można użyć znaków a w polu z wynagrodzeniem nie jest możliwe wprowadzenie liter.
Po wprowadzeniu przykładowego pracownika tabela na stronie głównej wygląda następująco:



W tabeli wyświetlają się informacje o pracowniku oraz dwa przyciski: edytowanie danych pracownika oraz usunięcie pracownika.
Edycja pracownika
Edycja danych pracownika wygląda następująco:


Zmiany wprowadzone w oknie z edycją działają poprawnie.
Po naciśnięciu przycisku “delete” z bazy danych usunie się wybrany przez nas pracownik:

Pozostałe funkcjonalności

Aplikacja posiada również filtrowanie/wyszukiwanie danych oraz sortowanie kolumn. Do bazy dodano kilkuset pracowników, filtrowanie i sortowanie wygląda następująco:

