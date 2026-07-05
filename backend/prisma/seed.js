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
        description: "Peaceful mountain retreat surrounded by lush green hills.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      },
      {
        name: "Riverside Cottage",
        location: "Rishikesh",
        price: 1999,
        rating: 4.8,
        description: "Beautiful riverside stay with scenic views.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      },
      {
        name: "Forest View Stay",
        location: "Mussoorie",
        price: 1799,
        rating: 4.7,
        description: "Enjoy nature with breathtaking forest views.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      },
      {
        name: "Himalayan Escape",
        location: "Manali",
        price: 3299,
        rating: 4.9,
        description: "Luxury stay overlooking the Himalayan mountains.",
        image: "https://images.unsplash.com/photo-1464890100898-a385f744067f"
      },
      {
        name: "Lake View Homestay",
        location: "Nainital",
        price: 2899,
        rating: 4.8,
        description: "Wake up to stunning lake views every morning.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      },
      {
        name: "Pine Woods Cabin",
        location: "Shimla",
        price: 2699,
        rating: 4.7,
        description: "Cozy wooden cabin nestled among pine forests.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
      },
      {
        name: "Snow Peak Residency",
        location: "Auli",
        price: 3599,
        rating: 5.0,
        description: "Perfect stay for snow lovers and skiing enthusiasts.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      },
      {
        name: "Valley Breeze Cottage",
        location: "Kasol",
        price: 2199,
        rating: 4.6,
        description: "Relax in a peaceful valley surrounded by nature.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
      },
      {
        name: "Tea Garden Homestay",
        location: "Darjeeling",
        price: 2799,
        rating: 4.8,
        description: "Experience beautiful tea gardens and mountain scenery.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
      },
      {
        name: "Sunset Cliff House",
        location: "Ooty",
        price: 3099,
        rating: 4.9,
        description: "Enjoy spectacular sunsets from a cliffside homestay.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
      }
    ]
  });

  console.log("✅ 10 Homestays inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });