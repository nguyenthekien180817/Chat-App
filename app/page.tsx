import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

export default async function Home() {
  await db.set("Hello", "Hello")
  return (
    <Button > Click Me! </Button>
  );
}
