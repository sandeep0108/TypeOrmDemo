# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


# Reference
https://typeorm.io/

# Create New Type ORM project:
```
npx typeorm init --name MyProject --database postgres
```

This command will generate a new project in the MyProject directory with the following files:

```

MyProject
├── src                   // place of your TypeScript code
│   ├── entity            // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options

```

Here you can give --name, name of your project and --database, which data base you want to use like mysql, postgres and so on.
