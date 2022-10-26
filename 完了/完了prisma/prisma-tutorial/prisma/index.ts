import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

   const email = "alice@example.com";
 //  const alice = await prisma.$queryRaw<User>(
 //    `SELECT * FROM "postgres"."User" WHERE "postgres"."User"."email" = '${email}';`
 //  );
 //  console.log(alice);

  // TODO ここに処理を記載する
     const alice = await prisma.user.findUnique({
       where: { email: "alice@example.com" },
     });

   console.log(alice);
   
   const users = await prisma.user.findMany();

   console.log(users);

   const bob = await prisma.user.findUnique({
     where: { email: "bob@example.com" },
     include: { posts: true },
   });

   console.log(bob);

   const posts = await prisma.post.findMany({
     where: {
       title: {
         startsWith: "title",
       },
     },
     take: 5,
     orderBy: {
       id: "asc",
     },
     include: { author: true },
   });

   console.log(posts);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
