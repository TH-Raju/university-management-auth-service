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
- yarn add cors
- yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
  - search on google -> typescript eslint prettier setup
  - eslintrc
  - search on google -> current ecma version and change the version on eslintrc
- yarn add -D prettier
- yarn add -D eslint-config-prettier
- yarn add --dev husky
- yarn add -D lint-staged
- yarn add zod
- - .
    (For logger)
- yarn add winston
- yarn add winston-daily-rotate-file

# create folder

- src/
  - config/
    - index.ts
  - server.ts
  - app.ts
- .eslintignore
  node_modules
  dist

# npm i --save-dev @types/express be like

- yarn add -D @types/express

# Modular Pattern

- src/
  - app/
    - modules/
      - users/
        - users.interface.ts
        - users.model.ts
        - users.service.ts
        - users.controller.ts
        - users.route.ts

# Start from level-2

# 14-1: Handle Not Found Route
