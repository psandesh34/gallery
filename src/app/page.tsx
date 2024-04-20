const mockUrls = [
  "https://utfs.io/f/44be0873-9378-4f94-add9-c3f0b17226bb-yuyv04.jpg",
  "https://utfs.io/f/ea371695-1562-4bf4-bbe2-802430d1c6c1-xdjl2l.jpg",
  "https://utfs.io/f/db7df0d4-0be6-4875-8b99-1844efe07088-xw9yyi.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="gap-12 px-4 py-4">
        <div className="flex flex-wrap gap-4">
          {[...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-80">
              <img src={image.url} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
