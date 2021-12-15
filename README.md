# Planetscale-prisma-nextjs

## Getting started 

### Generating migrations

    pscale auth login 
    npx prisma migrate dev --name init
    pscale deploy-request create tutorial-db initial-setup

### Starting DB

    pscale connect tutorial-db main --port 3309  
### Making DB changes

    npx prisma studio

## References

[planetscale-deployment-with-prisma](https://davidparks.dev/blog/planetscale-deployment-with-prisma/)