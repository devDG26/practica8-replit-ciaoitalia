export type MenuOption = {
  type: string;
  price: number;
};

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  options?: MenuOption[];
  image?: string;
  featured?: boolean;
  custom?: boolean;
  ingredients?: string[];
};

export type MenuCategoryKey = "pastas" | "pizzas" | "ensaladas";

export type MenuData = Record<MenuCategoryKey, MenuItem[]>;

export const menuCategories: { key: MenuCategoryKey; label: string }[] = [
  { key: "pastas", label: "Pastas" },
  { key: "pizzas", label: "Pizzas" },
  { key: "ensaladas", label: "Ensaladas" },
];

export const menuData: MenuData = {
  pastas: [
    {
      name: "Lasagna",
      price: 185,
      description: "Pan de ajo y ensalada",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Penette Sirrento",
      options: [
        { type: "pollo", price: 155 },
        { type: "arrachera", price: 165 },
        { type: "camarón", price: 175 },
      ],
      description:
        "Tocino, salsa pomodoro, crema, vodka, 110g de proteína",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Fetuccini Alfredo",
      options: [
        { type: "arrachera", price: 165 },
        { type: "camarón", price: 175 },
      ],
      description: "Crema Alfredo, 110g de proteína y pan de ajo",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Tortiglioni a la Arrabiata",
      options: [
        { type: "pollo", price: 155 },
        { type: "arrachera", price: 165 },
        { type: "camarón", price: 175 },
      ],
      description:
        "Chile de árbol, albahaca, salsa pomodoro, parmesano, 110g proteína",
    },
    {
      name: "Feticcomo Mare Orto",
      options: [
        { type: "pollo", price: 155 },
        { type: "arrachera", price: 165 },
        { type: "camarón", price: 175 },
      ],
      description:
        "Calabaza, espinaca, crema Alfredo, perejil, 110g proteína",
    },
  ],

  pizzas: [
    {
      name: "Pizza 3 hongos",
      price: 220,
      description: "Champiñón, seta, portobello",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Pizza pollo estilo boneless",
      price: 284,
      description: "BBQ, Buffalo, Mango Habanero o Lemon Pepper",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Pizza Italiana",
      price: 220,
      description: "Champiñón, pepperoni, salchicha italiana",
    },
    {
      name: "Pizza Margarita",
      price: 220,
      description:
        "Jitomate, albahaca, queso de cabra, mozzarella, parmesano",
    },
    {
      name: "Pizza 4 Carnes",
      price: 230,
      description: "Salami, pepperoni, jamón, tocino",
    },
    {
      name: "Pizza Bolognesa",
      price: 230,
    },
    {
      name: "Pizza Mexicana",
      price: 230,
      description: "Chorizo, cebolla, jitomate, chile serrano, aguacate",
    },
    {
      name: "Pizza Campesina",
      price: 230,
      description:
        "Champiñón, jitomate, brócoli, cebolla, espinaca, pimiento, aceituna negra",
    },
    {
      name: "Pizza al Pastor",
      price: 250,
      description: "Carne adobada, piña, cebolla y cilantro",
    },
    {
      name: "Pizza Hawaiana",
      price: 170,
    },
    {
      name: "Pizza Pepperoni",
      price: 140,
    },
    {
      name: "Pizza Individual",
      price: 99,
    },
    {
      name: "Pizza Dulce Tentación",
      price: 230,
      description: "Nutella, fresa, arándano, almendra y plátano",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Arma tu pizza",
      description: "Costo base + $30 por ingrediente",
      custom: true,
      ingredients: [
        "Aceituna negra",
        "Tocino",
        "Piña",
        "Jalapeño",
        "Salchicha italiana",
        "Elote",
        "Cebolla",
        "Jitomate",
        "Albahaca",
        "Champiñón",
        "Pimiento morrón",
        "Pepperoni",
        "Salami",
        "Jamón",
      ],
    },
  ],

  ensaladas: [
    {
      name: "De la casa",
      options: [
        { type: "pollo", price: 155 },
        { type: "arrachera", price: 165 },
        { type: "camarón", price: 175 },
      ],
      description:
        "Lechuga italiana, zanahoria, manzana, pera, frutos secos, queso de cabra",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "César",
      options: [
        { type: "pollo", price: 150 },
        { type: "arrachera", price: 155 },
        { type: "camarón", price: 170 },
      ],
      description:
        "Lechuga, jitomate cherry, crotones, parmesano, pasta fusilli",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Fresca",
      options: [
        { type: "pollo", price: 150 },
        { type: "arrachera", price: 155 },
        { type: "camarón", price: 170 },
      ],
      description:
        "Lechuga, jitomate, cebolla, pepino, crotones, pasta fusilli",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Vicana",
      options: [
        { type: "pollo", price: 155 },
        { type: "arrachera", price: 165 },
        { type: "camarón", price: 175 },
      ],
      description: "Jitomate, cebolla, panela, aguacate, aceite de oliva",
    },
  ],
};
