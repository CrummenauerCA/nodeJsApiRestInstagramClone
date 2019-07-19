yarn init -y
yarn add express

node src/index

http://localhost:3333/?name=Cezar

yarn add nodemon -D
Run yarn nodemon src/index.js or insert the text below in the package.json file:
"scripts": {
  "dev": "nodemom src/index.js"
}
then type: yarn dev

Using MongoDB with mongoose... yarn add mongoose