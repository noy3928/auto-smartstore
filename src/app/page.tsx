import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/sheets");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const sheet = await getData();
  console.log(sheet);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
