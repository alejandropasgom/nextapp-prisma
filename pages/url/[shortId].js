import { PrismaClient } from "@prisma/client";

const ShortIdPage = () => {
  return <div> ShortID Redirect</div>;
};

export const getServerSideProps = async ({ params }) => {
  const prisma = new PrismaClient();
  const { shortId } = params;

  const data = await prisma.link.findUnique({
    where: { shortUrl: shortId },
  });

  if (!data) {
    return { redirect: { destination: "/" } };
  }

  return { redirect: { destination: data.url } };
};

export default ShortIdPage;
