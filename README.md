Локальный запуск и сборка
1. Клонирование репозитория
Bash
git clone [https://github.com/Rexzero222/Zifra-cybersecurity.git](https://github.com/Rexzero222/Zifra-cybersecurity.git)
cd Zifra-cybersecurity

Установка зависимостей
Bash
npm install

Компиляция изменений (app.js ➔ app.bundle.js)
После внесения изменений в файл app.js выполните сборку:

Bash
npm run build

Или через npx (если не настроены скрипты в package.json):

Bash
npx babel app.js --out-file app.bundle.js
