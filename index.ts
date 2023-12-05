import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create user
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'John Doe',
  //     email: 'john@gmail.com',
  //   },
  // })

  // Get all users
  // const users = await prisma.user.findMany()

  // Create article and associate it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Johns first article',
  //     body: 'This is johns first article',
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // })

  // Get all articles
  // const articles = await prisma.article.findMany()

  // Create user and article and associate them
  const user = await prisma.user.create({
    data: {
      name: 'sara smith',
      email: 'sara@gmail.com',
      articles: {
        create: {
          title: 'Saras first article',
          body: 'This is saras first article',
        },
      },
    },
  })

  console.log(articles)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
