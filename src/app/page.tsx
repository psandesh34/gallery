import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="">
      <div className="gap-12 px-4 py-4">
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-80">
              <img src={image.url} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
