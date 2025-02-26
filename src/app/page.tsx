import { Card, CardBody } from "@heroui/react";

export default function Home() {
  console.log(process.env.DATABASE_URL);
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">Next App Starter</h1>
        <p className="text-xl">Next.js starter kit</p>
      </CardBody>
    </Card>
  );
}
