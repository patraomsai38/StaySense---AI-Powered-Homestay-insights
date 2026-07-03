const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.homestay.createMany({
    data: [
      {
        name: "Mountain Retreat",
        location: "Rishikesh",
        price: 2499,
        rating: 4.9,
        description: "A peaceful retreat in the hills of Rishikesh.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },
      {
        name: "Riverside Cottage",
        location: "Rishikesh",
        price: 1999,
        rating: 4.8,
        description: "Beautiful riverside stay with scenic views.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
      {
        name: "Forest View Stay",
        location: "Mussoorie",
        price: 1799,
        rating: 4.7,
        description: "Cozy homestay surrounded by lush forests.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      },
      {
        name: "Nature Nest",
        location: "Nainital",
        price: 2299,
        rating: 4.8,
        description: "Experience nature at its best.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      },
      {
        name: "Valley Escape",
        location: "Manali",
        price: 2899,
        rating: 5.0,
        description: "Luxury valley-view homestay.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],
  });

  console.log("✅ Homestays inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });