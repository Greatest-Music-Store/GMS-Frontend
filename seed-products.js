const API_URL = "http://192.168.1.148:5041/api";

const TOKEN = "";

async function post(path, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(TOKEN && {
        Authorization: `Bearer ${TOKEN}`,
      }),
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();

  if (!response.ok) {
    console.log("\n=======================");
    console.log("ERRO");
    console.log("URL:", `${API_URL}${path}`);
    console.log("STATUS:", response.status);
    console.log("BODY:", body);
    console.log("RESPOSTA:", text);
    console.log("=======================\n");

    throw new Error("Falha na requisição");
  }

  return text ? JSON.parse(text) : null;
}

const categorias = [
  {
    nome: "Cordas",
    subs: [
      "Violão",
      "Guitarra",
      "Baixo",
      "Violino",
      "Viola",
      "Ukulele",
      "Harpa",
    ],
  },
  {
    nome: "Percussão",
    subs: [
      "Bateria",
      "Cajón",
      "Pandeiro",
      "Tamborim",
      "Conga",
      "Bongo",
    ],
  },
  {
    nome: "Sopros",
    subs: [
      "Saxofone",
      "Flauta",
      "Trompete",
      "Trombone",
      "Clarinete",
      "Oboé",
    ],
  },
  {
    nome: "Teclas",
    subs: [
      "Piano",
      "Teclado",
      "Sintetizador",
      "Controlador MIDI",
    ],
  },
  {
    nome: "Áudio",
    subs: [
      "Microfone",
      "Mesa de Som",
      "Monitor de Áudio",
      "Interface de Áudio",
    ],
  },
];

const imagens = [
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
  "https://images.unsplash.com/photo-1514119412350-e174d90d280e",
];

const marcas = [
  "Yamaha",
  "Fender",
  "Tagima",
  "Roland",
  "Casio",
  "Michael",
  "Eagle",
  "Pearl",
  "Ibanez",
  "Giannini",
  "Boss",
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPrice() {
  return Number((Math.random() * 8000 + 100).toFixed(2));
}

function randomBrand() {
  return marcas[random(0, marcas.length - 1)];
}

function randomImages() {
  return [
    imagens[random(0, imagens.length - 1)],
    imagens[random(0, imagens.length - 1)],
    imagens[random(0, imagens.length - 1)],
  ];
}

async function main() {
  console.log("Criando categorias...");

  const categoryIds = {};
  const subcategoryIds = {};

  for (const categoria of categorias) {
    const createdCategory = await post("/Category", {
      name: categoria.nome,
    });

    categoryIds[categoria.nome] = createdCategory.id;

    console.log("Categoria criada:", categoria.nome);

    for (const sub of categoria.subs) {
      const createdSub = await post("/Subcategory", {
        name: sub,
        categoryId: createdCategory.id,
      });

      subcategoryIds[sub] = {
        id: createdSub.id,
        categoryId: createdCategory.id,
      };

      console.log("Subcategoria criada:", sub);
    }
  }

  console.log("\nCriando produtos...\n");

  let total = 0;

  for (const categoria of categorias) {
    for (const sub of categoria.subs) {
      for (let i = 1; i <= 15; i++) {
        const brand = randomBrand();

        await post("/Product", {
          name: `${sub} ${brand} Modelo ${i}`,
          brand,
          price: randomPrice(),
          imageUrls: randomImages(),
          description: `${sub} profissional da marca ${brand}, desenvolvido para músicos iniciantes e avançados com excelente qualidade sonora e acabamento premium.`,
          quantity: random(1, 100),
          categoryId: subcategoryIds[sub].categoryId,
          subCategoryId: subcategoryIds[sub].id,
        });

        total++;

        console.log(`Produto ${total} criado`);
      }
    }
  }

  console.log("\n==================================");
  console.log(`FINALIZADO`);
  console.log(`${total} PRODUTOS CRIADOS`);
  console.log("==================================");
}

main();