# goit-react-hw-01-components
 Установка create-react-app
npx create-react-app my-app
npm start

 Настройка pre-commit хуков 
npm install --save-dev prettier eslint

 Пользователям Windows 
npx mrm @ 2 lint-staged

 Деплой приложения на Github Pages 
npm run build

 Добавить в package.json:
"homepage": "https://myusername.github.io/my-app", 
npm run build
npm install --save gh-pages

 Добавить в package.json:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
npm run deploy

 Настройки VSCode
Для комфортной работы, после установки плагинов, 
нужно несколько настроек редактора для автосохранения и форматирования файлов.

{
   " files.autoSave " : " onFocusChange " ,
   " editor.formatOnSave " : true ,
   " editor.codeActionsOnSave " : {
     " source.fixAll.eslint " : true
  }
}