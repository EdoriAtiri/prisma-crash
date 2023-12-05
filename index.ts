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

  // Get all users with their articles
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  })

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
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'sara smith',
  //     email: 'sara@gmail.com',
  //     articles: {
  //       create: {
  //         title: 'Saras first article',
  //         body: 'This is saras first article',
  //       },
  //     },
  //   },
  // })

  // Create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'sample article',
  //     body: 'This is sample article',
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // })

  // Loop over users and their articles
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`)
  //   console.log('Articles:')
  //   user.articles.forEach((article) => {
  //     console.log(`- Title: ${article.title}, Body: ${article.body}`)
  //   })
  //   console.log('\n')
  // })

  // Update data
  // const user = await prisma.user.update({
  //   where: {
  //     id:1
  //   },
  //   data: {
  //     name: 'John Doe Jr.'
  //   }
  // })

  // Remove data
  const article = await prisma.article.delete({
    where: {
      id: 2,
    },
  })

  console.log(article)
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
