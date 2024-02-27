# Setup Project

- npm init
- yarn add typescript --dev
- yarn add mongoose
- yarn add express
- tsc --init (if an error then -> npm install -g typescript)

  - tsconfig.json -> search -> rootDir and set -> "rootDir": "./src"
  - tsconfig.json -> search -> outDir and set -> "outDir": "./dist"

- .gitignore (add .env node_modules)
- yarn add dotenv
- .env
  - DATABASE_URL= mongodb+srv://use_name:password@cluster0.v2rysfp.mongodb.net/?retryWrites=true&w=majority
- yarn add ts-node-dev --dev

# create folder

- src/
  - config/
    - index.ts
  - server.ts
  - app.ts

# npm i --save-dev @types/express be like

- yarn add -D @types/express
