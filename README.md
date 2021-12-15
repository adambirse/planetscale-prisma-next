# Planetscale-prisma-nextjs

## Getting started 

    npm install
    npm run dev

[Follow the Planetscale getting started](https://planetscale.com/)

Create some test database:

    pscale auth login 
    pscale branch create tutorial-db initial-setup
    pscale branch create tutorial-db shadow

Connect to test database and run existing migrations:

    pscale connect tutorial-db initial-setup --port 3309
    npx prisma generate

## Creating new migrations

Update schema.prisma with desired changes

    pscale auth login 
    pscale connect tutorial-db initial-setup --port 3309
    npx prisma migrate dev --name init
    pscale deploy-request create tutorial-db initial-setup

Hope over to [ Planetscale](https://planetscale.com/) to approve your deploy request and promote to main branch.

### Starting DB

    pscale connect tutorial-db main --port 3309  
### Editing DB 

    npx prisma studio

## References

[planetscale-deployment-with-prisma](https://davidparks.dev/blog/planetscale-deployment-with-prisma/)