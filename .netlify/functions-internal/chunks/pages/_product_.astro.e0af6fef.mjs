/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.f098e0e3.mjs';
import 'html-escaper';

const $$Astro$9 = createAstro("https://github.com/StalinAM");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, name, price, description, image, admin = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col gap-2 h-full relative">
  <img class="rounded-lg"${addAttribute(image, "src")}${addAttribute(description, "alt")}${addAttribute(`view-transition-name: product-${id}`, "style")}>
  <h2 class="font-medium text-gray-800">${name}</h2>
  <p class="font-bold text-gray-600 text-xl">$ ${price}</p>
  <a${addAttribute(`/${id}`, "href")} class="text-blue-700 font-semibold">Ver producto</a>
  ${admin && renderTemplate`<div class="absolute top-2 right-2 flex gap-4 items-center">
        <svg class="cursor-pointer group" width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
          <path class="group-hover:fill-red-500" d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="white"></path>
        </svg>
        <svg class="cursor-pointer group" width="14" height="18" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg">
          <path class="group-hover:fill-red-500" d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="white"></path>
        </svg>
      </div>`}
</li>`;
}, "D:/Dev/alura-geek/src/components/Card.astro", void 0);

const $$Astro$8 = createAstro("https://github.com/StalinAM");
const $$ListProducts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ListProducts;
  const { title, listProducts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section>
  <header class="flex justify-between items-center py-4 mt-6">
    <h2 class="text-2xl text-gray-700 font-bold">
      ${title}
    </h2>
    <a class="text-blue-700 font-semibold" href="#">Ver todo-></a>
  </header>
  <ul class="grid grid-cols-box-s gap-4 lg:max-w-6xl justify-center">
    ${listProducts.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "id": item.id, "name": item.name, "price": item.price, "description": item.description, "image": item.image, "category": item.category })}`)}
  </ul>
</section>`;
}, "D:/Dev/alura-geek/src/components/ListProducts.astro", void 0);

const $$Astro$7 = createAstro("https://github.com/StalinAM");
const $$AluraGeek = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AluraGeek;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="176" height="50" fill="none"><g clip-path="url(#a)"><path fill="#2A7AE4" d="m44.956 33.52-2.271-15.958c-.583-4.104-4.104-7.145-8.25-7.145H15.562c-4.146 0-7.667 3.041-8.25 7.146L5.042 33.52a5.302 5.302 0 0 0 5.249 6.062 5.28 5.28 0 0 0 3.75-1.562l4.708-4.688h12.5l4.686 4.688c1 1 2.354 1.562 3.75 1.562a5.306 5.306 0 0 0 5.27-6.062Zm-22.04-10.603h-4.167v4.166h-2.083v-4.166h-4.167v-2.084h4.167v-4.166h2.083v4.166h4.166v2.084Zm8.332-2.084a2.09 2.09 0 0 1-2.083-2.083 2.09 2.09 0 0 1 2.083-2.083 2.09 2.09 0 0 1 2.083 2.083 2.09 2.09 0 0 1-2.083 2.083Zm4.167 6.25A2.09 2.09 0 0 1 33.33 25a2.09 2.09 0 0 1 2.084-2.083A2.09 2.09 0 0 1 37.498 25a2.09 2.09 0 0 1-2.083 2.083Z"></path></g><path fill="#464646" d="M128.081 32c-1.417 1.417-3.067 2.125-4.95 2.125a7.922 7.922 0 0 1-3.3-.7 8.496 8.496 0 0 1-2.675-1.925 9.55 9.55 0 0 1-1.8-2.875c-.433-1.117-.65-2.317-.65-3.6 0-1.217.217-2.358.65-3.425a9.072 9.072 0 0 1 1.825-2.825 8.623 8.623 0 0 1 2.75-1.925c1.05-.483 2.192-.725 3.425-.725 1.666 0 3.091.35 4.275 1.05 1.2.7 2.099 1.642 2.699 2.825l-2.574 1.9c-.45-.883-1.084-1.558-1.9-2.025-.8-.467-1.675-.7-2.625-.7-.75 0-1.442.158-2.075.475a5 5 0 0 0-1.6 1.3 6.511 6.511 0 0 0-1.025 1.9 7.313 7.313 0 0 0-.35 2.275c0 .833.133 1.617.4 2.35a5.985 5.985 0 0 0 1.1 1.875 5.36 5.36 0 0 0 1.65 1.275c.65.3 1.35.45 2.1.45 1.716 0 3.266-.808 4.65-2.425V27.4h-3.575v-2.525h6.424V34h-2.849v-2ZM139.62 34.25c-1.05 0-2-.175-2.85-.525a6.691 6.691 0 0 1-2.175-1.475 6.669 6.669 0 0 1-1.4-2.15 7.073 7.073 0 0 1-.474-2.575c0-.933.158-1.808.474-2.625a6.284 6.284 0 0 1 1.375-2.175 6.505 6.505 0 0 1 2.175-1.5c.867-.367 1.834-.55 2.9-.55 1.067 0 2.017.183 2.85.55.85.367 1.567.858 2.15 1.475.6.617 1.05 1.333 1.35 2.15.316.817.475 1.667.475 2.55 0 .217-.009.425-.025.625 0 .2-.017.367-.05.5H136.27c.05.517.175.975.375 1.375s.459.742.775 1.025c.317.283.675.5 1.075.65.4.15.817.225 1.25.225.667 0 1.292-.158 1.875-.475.6-.333 1.008-.767 1.225-1.3l2.875.8c-.484 1-1.258 1.825-2.325 2.475-1.05.633-2.308.95-3.775.95Zm3.4-7.9c-.083-.983-.45-1.767-1.1-2.35-.633-.6-1.408-.9-2.325-.9-.45 0-.875.083-1.275.25-.383.15-.725.367-1.025.65-.3.283-.55.625-.75 1.025-.183.4-.291.842-.325 1.325h6.8ZM154.585 34.25c-1.05 0-2-.175-2.85-.525a6.691 6.691 0 0 1-2.175-1.475 6.669 6.669 0 0 1-1.4-2.15 7.073 7.073 0 0 1-.474-2.575c0-.933.158-1.808.474-2.625a6.284 6.284 0 0 1 1.375-2.175 6.505 6.505 0 0 1 2.175-1.5c.867-.367 1.833-.55 2.9-.55s2.017.183 2.85.55c.85.367 1.567.858 2.15 1.475.6.617 1.05 1.333 1.35 2.15.316.817.475 1.667.475 2.55 0 .217-.009.425-.025.625 0 .2-.017.367-.05.5h-10.125c.05.517.175.975.375 1.375s.459.742.775 1.025c.317.283.675.5 1.075.65.4.15.817.225 1.25.225.667 0 1.292-.158 1.875-.475.6-.333 1.008-.767 1.225-1.3l2.875.8c-.484 1-1.258 1.825-2.325 2.475-1.05.633-2.308.95-3.775.95Zm3.4-7.9c-.083-.983-.45-1.767-1.1-2.35-.633-.6-1.408-.9-2.325-.9-.45 0-.875.083-1.275.25-.383.15-.725.367-1.025.65-.3.283-.55.625-.75 1.025-.183.4-.291.842-.325 1.325h6.8ZM172.425 34l-3.8-5.675-1.8 1.775V34h-3.35V15.75h3.35v11.075l5.25-5.9h3.575l-4.875 5.55L176 34h-3.575Z"></path><path fill="#2A7AE4" d="M56.772 16.25h3.05L66.572 34h-3.55l-1.65-4.425h-6.2L53.547 34h-3.55l6.775-17.75Zm3.974 10.9-2.45-6.975-2.55 6.975h5ZM68.168 15.75h3.35V29.8c0 .483.116.858.35 1.125.233.267.566.4 1 .4.2 0 .416-.033.65-.1.25-.067.483-.15.7-.25l.45 2.55c-.45.217-.975.383-1.575.5-.6.117-1.142.175-1.625.175-1.05 0-1.867-.275-2.45-.825-.567-.567-.85-1.367-.85-2.4V15.75ZM80.127 34.25c-1.35 0-2.375-.433-3.075-1.3-.7-.867-1.05-2.15-1.05-3.85v-8.2h3.35v7.475c0 2.017.725 3.025 2.175 3.025.65 0 1.275-.192 1.875-.575.616-.4 1.116-1 1.5-1.8V20.9h3.35v9.25c0 .35.058.6.174.75.134.15.342.233.625.25V34a6.971 6.971 0 0 1-1.45.15c-.6 0-1.091-.133-1.475-.4a1.684 1.684 0 0 1-.65-1.15l-.075-1.05c-.583.9-1.333 1.575-2.25 2.025-.916.45-1.924.675-3.024.675ZM99.38 23.8c-1.017.017-1.925.217-2.725.6-.8.367-1.375.925-1.725 1.675V34h-3.35V20.9h3.075v2.8c.233-.45.508-.85.825-1.2a6.088 6.088 0 0 1 1.025-.95 4.49 4.49 0 0 1 1.1-.6c.383-.15.75-.225 1.1-.225h.4c.1 0 .191.008.275.025v3.05ZM104.652 34.25c-.634 0-1.225-.1-1.775-.3a4.552 4.552 0 0 1-1.425-.875 4.388 4.388 0 0 1-.95-1.325 4.1 4.1 0 0 1-.325-1.65c0-.617.133-1.183.4-1.7a4.065 4.065 0 0 1 1.15-1.35c.5-.367 1.091-.65 1.775-.85a7.412 7.412 0 0 1 2.25-.325c.583 0 1.149.05 1.699.15.567.1 1.067.242 1.5.425v-.75c0-.867-.25-1.533-.75-2-.483-.467-1.208-.7-2.174-.7-.7 0-1.384.125-2.05.375-.667.25-1.35.617-2.05 1.1l-1.025-2.125c1.683-1.117 3.5-1.675 5.45-1.675 1.883 0 3.341.467 4.374 1.4 1.05.917 1.575 2.25 1.575 4v4.075c0 .35.058.6.175.75.133.15.342.233.625.25V34a7.456 7.456 0 0 1-1.475.175c-.633 0-1.125-.142-1.475-.425-.333-.283-.541-.658-.625-1.125l-.075-.725a5.79 5.79 0 0 1-2.125 1.75c-.833.4-1.724.6-2.674.6Zm.95-2.45c.566 0 1.099-.1 1.599-.3.517-.2.917-.467 1.2-.8.367-.283.55-.6.55-.95v-1.5c-.4-.15-.833-.267-1.3-.35-.466-.1-.916-.15-1.349-.15-.867 0-1.575.2-2.125.6-.55.383-.825.875-.825 1.475 0 .567.216 1.042.65 1.425.433.367.966.55 1.6.55Z"></path><defs><clipPath id="a"><path fill="#fff" d="M0 0h49.997v50H0z"></path></clipPath></defs></svg>`;
}, "D:/Dev/alura-geek/src/components/logos/AluraGeek.astro", void 0);

const $$Astro$6 = createAstro("https://github.com/StalinAM");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Button;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="bg-blue-600 text-gray-100 py-2 px-6 rounded block hover:bg-blue-900">${text}</button>`;
}, "D:/Dev/alura-geek/src/components/Button.astro", void 0);

const $$Astro$5 = createAstro("https://github.com/StalinAM");
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Input;
  const { placeholder, id, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input class="font-medium bg-transparent focus:border-white focus-visible:outline-none focus:ring-white rounded w-full"${addAttribute(placeholder, "placeholder")}${addAttribute(type, "type")}${addAttribute(id, "name")}${addAttribute(id, "id")} autocomplete="additional-name">`;
}, "D:/Dev/alura-geek/src/components/Input.astro", void 0);

const $$Astro$4 = createAstro("https://github.com/StalinAM");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section class="flex-1">
  <h2 class="font-bold mb-1 text-gray-700">Hable con nosotros</h2>
  <form class="flex flex-col gap-4 items-start w-full" action="">
    <div class="flex flex-col gap-1 p-2 bg-white rounded w-full">
      <label class="text-xs text-gray-400" for="name">Nombre</label>
      ${renderComponent($$result, "Input", $$Input, { "type": "text", "id": "name" })}
    </div>
    <div class="flex flex-col gap-1 p-2 bg-white rounded w-full">
      <label class="text-xs text-gray-400" for="message">Escribe tu mensaje</label>
      <textarea class="font-medium bg-transparent focus:border-white focus-visible:outline-none focus:ring-white" name="" id="message" rows="4"></textarea>
    </div>
    ${renderComponent($$result, "Button", $$Button, { "text": "Enviar mensaje" })}
  </form>
</section>`;
}, "D:/Dev/alura-geek/src/components/Contact.astro", void 0);

const $$Astro$3 = createAstro("https://github.com/StalinAM");
const $$LandingFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LandingFooter;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col bg-blue-100">
  <div class="p-4 flex gap-4 flex-col md:flex-row w-full max-w-[65rem] mx-auto lg:p-8">
    <div class="flex lg:flex-row flex-1 flex-col">
      <div class="flex justify-center items-center md:justify-start lg:flex-1 lg:items-start">
        ${renderComponent($$result, "AluraGeek", $$AluraGeek, {})}
      </div>
      <ul class="flex flex-col gap-4 font-medium text-gray-700 items-center md:items-start mb-4 w-full lg:flex-1">
        <li><a href="#">Quienes somos</a></li>
        <li><a href="#">Política de privacidad</a></li>
        <li><a href="#">Programa de fidelidad</a></li>
        <li><a href="#">Nuestras tiendas</a></li>
        <li><a href="#">Quiero ser franquiciado</a></li>
        <li><a href="#">Anúncie aquí</a></li>
      </ul>
    </div>
    ${renderComponent($$result, "Contact", $$Contact, {})}
  </div>
  <p class="font-semibold text-gray-700 py-4 text-center mx-auto bg-white w-full">
    Desarrollado por <a href="https://github.com/StalinAM" target="_blank">Stalin</a> 2023
  </p>
</footer>`;
}, "D:/Dev/alura-geek/src/components/LandingFooter.astro", void 0);

const $$Astro$2 = createAstro("https://github.com/StalinAM");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="view-transition" content="same-origin">
    <title>AluraGeek ${title}</title>
  ${renderHead()}</head>
  <body>
    <!-- <LandingHeader /> -->
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "LandingFooter", $$LandingFooter, {})}
  
</body></html>`;
}, "D:/Dev/alura-geek/src/layouts/Layout.astro", void 0);

const products = [
  {
    id: "1",
    name: "Sable de luz de Anakin Skywalker",
    price: 59.99,
    description:
      "Réplica del sable de luz usado por Anakin Skywalker antes de convertirse en Darth Vader.",
    category: "Star Wars",
    image: "/6.webp",
  },
  {
    id: "2",
    name: "Figura de acción de Rey",
    price: 29.99,
    description:
      "Figura de acción detallada de Rey, la heroína de la trilogía más reciente de Star Wars.",
    category: "Star Wars",
    image: "/9.webp",
  },
  {
    id: "3",
    name: "Nave espacial Millennium Falcon",
    price: 129.99,
    description:
      "Modelo de la famosa nave espacial Millennium Falcon, pilotada por Han Solo y Chewbacca.",
    category: "Star Wars",
    image: "/12.webp",
  },
  {
    id: "4",
    name: "Peluche de Baby Yoda",
    price: 19.99,
    description:
      "Adorable peluche de Baby Yoda, también conocido como Grogu, de la serie 'The Mandalorian'.",
    category: "Star Wars",
    image: "/15.webp",
  },
  {
    id: "5",
    name: "Juego de mesa de Star Wars: Rebellion",
    price: 49.99,
    description:
      "Juego de estrategia donde los jugadores pueden controlar la Alianza Rebelde o el Imperio Galáctico.",
    category: "Star Wars",
    image: "/16.webp",
  },
  {
    id: "6",
    name: "Camiseta de la Estrella de la Muerte",
    price: 14.99,
    description:
      "Camiseta con el diseño de la Estrella de la Muerte, la estación espacial del Imperio.",
    category: "Star Wars",
    image: "/17.webp",
  },
  {
    id: "7",
    name: "PlayStation 5",
    price: 499.99,
    description:
      "La última consola de Sony con gráficos de alta calidad y compatibilidad con juegos de última generación.",
    category: "Consolas",
    image: "/1.webp",
  },
  {
    id: "8",
    name: "Xbox Series X",
    price: 499.99,
    description:
      "La consola más potente de Microsoft con capacidad de reproducción en 4K y una amplia biblioteca de juegos.",
    category: "Consolas",
    image: "/2.webp",
  },
  {
    id: "9",
    name: "Nintendo Switch",
    price: 299.99,
    description:
      "Consola híbrida que te permite jugar en casa o en cualquier lugar gracias a su diseño portátil.",
    category: "Consolas",
    image: "/3.webp",
  },
  {
    id: "10",
    name: "PlayStation 4",
    price: 299.99,
    description:
      "Consola anterior de Sony con una amplia selección de juegos y entretenimiento multimedia.",
    category: "Consolas",
    image: "/8.webp",
  },
  {
    id: "11",
    name: "Xbox Series S",
    price: 299.99,
    description:
      "Versión más económica de la Xbox Series X, ideal para juegos en resolución 1080p.",
    category: "Consolas",
    image: "/13.webp",
  },
  {
    id: "12",
    name: "Nintendo Switch Lite",
    price: 199.99,
    description:
      "Versión más compacta y portátil de la Nintendo Switch, diseñada exclusivamente para juegos en modo portátil.",
    category: "Consolas",
    image: "/10.webp",
  },
  {
    id: "13",
    name: "Camiseta de Star Wars",
    price: 19.99,
    description:
      "Camiseta con estampado del logotipo de Star Wars en color negro.",
    category: "Camisetas",
    image: "/4.webp",
  },
  {
    id: "14",
    name: "Juego de mesa de Star Wars",
    price: 29.99,
    description:
      "Juego de estrategia basado en el universo de Star Wars con miniaturas y cartas.",
    category: "Juegos",
    image: "/5.webp",
  },
  {
    id: "15",
    name: "Figura coleccionable de Yoda",
    price: 39.99,
    description: "Figura detallada de Yoda con acabado pintado a mano.",
    category: "Muñecos",
    image: "/6.webp",
  },
  {
    id: "16",
    name: "Llavero de Millennium Falcon",
    price: 9.99,
    description:
      "Llavero metálico con forma de la nave espacial Millennium Falcon.",
    category: "Accesorios",
    image: "/7.webp",
  },
  {
    id: "17",
    name: "Taza de BB-8",
    price: 14.99,
    description: "Taza con diseño de BB-8, el simpático droide de Star Wars.",
    category: "Vajilla",
    image: "/11.webp",
  },
  {
    id: "18",
    name: "Libro de arte de Star Wars",
    price: 49.99,
    description:
      "Libro de tapa dura con ilustraciones y arte conceptual de las películas de Star Wars.",
    category: "Libros",
    image: "/18.webp",
  },
];

const $$Astro$1 = createAstro("https://github.com/StalinAM");
const $$Lupa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Lupa;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" d="M12.5 11h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34A6.505 6.505 0 0 0 .05 7.32c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L12.5 11Zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11Z"></path></svg>`;
}, "D:/Dev/alura-geek/src/components/icons/Lupa.astro", void 0);

const $$Astro = createAstro("https://github.com/StalinAM");
const $$product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$product;
  const { product } = Astro2.params;
  const info = products.find((item) => item.id === product);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<header class="max-w-5xl p-4 flex justify-between items-center mx-auto lg:px-0">
    <a style="view-transition-name: product-logo" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="176" height="50" fill="none"><g clip-path="url(#a)"><path fill="#2A7AE4" d="m44.956 33.52-2.271-15.958c-.583-4.104-4.104-7.145-8.25-7.145H15.562c-4.146 0-7.667 3.041-8.25 7.146L5.042 33.52a5.302 5.302 0 0 0 5.249 6.062 5.28 5.28 0 0 0 3.75-1.562l4.708-4.688h12.5l4.686 4.688c1 1 2.354 1.562 3.75 1.562a5.306 5.306 0 0 0 5.27-6.062Zm-22.04-10.603h-4.167v4.166h-2.083v-4.166h-4.167v-2.084h4.167v-4.166h2.083v4.166h4.166v2.084Zm8.332-2.084a2.09 2.09 0 0 1-2.083-2.083 2.09 2.09 0 0 1 2.083-2.083 2.09 2.09 0 0 1 2.083 2.083 2.09 2.09 0 0 1-2.083 2.083Zm4.167 6.25A2.09 2.09 0 0 1 33.33 25a2.09 2.09 0 0 1 2.084-2.083A2.09 2.09 0 0 1 37.498 25a2.09 2.09 0 0 1-2.083 2.083Z"></path></g><path fill="#464646" d="M128.081 32c-1.417 1.417-3.067 2.125-4.95 2.125a7.922 7.922 0 0 1-3.3-.7 8.496 8.496 0 0 1-2.675-1.925 9.55 9.55 0 0 1-1.8-2.875c-.433-1.117-.65-2.317-.65-3.6 0-1.217.217-2.358.65-3.425a9.072 9.072 0 0 1 1.825-2.825 8.623 8.623 0 0 1 2.75-1.925c1.05-.483 2.192-.725 3.425-.725 1.666 0 3.091.35 4.275 1.05 1.2.7 2.099 1.642 2.699 2.825l-2.574 1.9c-.45-.883-1.084-1.558-1.9-2.025-.8-.467-1.675-.7-2.625-.7-.75 0-1.442.158-2.075.475a5 5 0 0 0-1.6 1.3 6.511 6.511 0 0 0-1.025 1.9 7.313 7.313 0 0 0-.35 2.275c0 .833.133 1.617.4 2.35a5.985 5.985 0 0 0 1.1 1.875 5.36 5.36 0 0 0 1.65 1.275c.65.3 1.35.45 2.1.45 1.716 0 3.266-.808 4.65-2.425V27.4h-3.575v-2.525h6.424V34h-2.849v-2ZM139.62 34.25c-1.05 0-2-.175-2.85-.525a6.691 6.691 0 0 1-2.175-1.475 6.669 6.669 0 0 1-1.4-2.15 7.073 7.073 0 0 1-.474-2.575c0-.933.158-1.808.474-2.625a6.284 6.284 0 0 1 1.375-2.175 6.505 6.505 0 0 1 2.175-1.5c.867-.367 1.834-.55 2.9-.55 1.067 0 2.017.183 2.85.55.85.367 1.567.858 2.15 1.475.6.617 1.05 1.333 1.35 2.15.316.817.475 1.667.475 2.55 0 .217-.009.425-.025.625 0 .2-.017.367-.05.5H136.27c.05.517.175.975.375 1.375s.459.742.775 1.025c.317.283.675.5 1.075.65.4.15.817.225 1.25.225.667 0 1.292-.158 1.875-.475.6-.333 1.008-.767 1.225-1.3l2.875.8c-.484 1-1.258 1.825-2.325 2.475-1.05.633-2.308.95-3.775.95Zm3.4-7.9c-.083-.983-.45-1.767-1.1-2.35-.633-.6-1.408-.9-2.325-.9-.45 0-.875.083-1.275.25-.383.15-.725.367-1.025.65-.3.283-.55.625-.75 1.025-.183.4-.291.842-.325 1.325h6.8ZM154.585 34.25c-1.05 0-2-.175-2.85-.525a6.691 6.691 0 0 1-2.175-1.475 6.669 6.669 0 0 1-1.4-2.15 7.073 7.073 0 0 1-.474-2.575c0-.933.158-1.808.474-2.625a6.284 6.284 0 0 1 1.375-2.175 6.505 6.505 0 0 1 2.175-1.5c.867-.367 1.833-.55 2.9-.55s2.017.183 2.85.55c.85.367 1.567.858 2.15 1.475.6.617 1.05 1.333 1.35 2.15.316.817.475 1.667.475 2.55 0 .217-.009.425-.025.625 0 .2-.017.367-.05.5h-10.125c.05.517.175.975.375 1.375s.459.742.775 1.025c.317.283.675.5 1.075.65.4.15.817.225 1.25.225.667 0 1.292-.158 1.875-.475.6-.333 1.008-.767 1.225-1.3l2.875.8c-.484 1-1.258 1.825-2.325 2.475-1.05.633-2.308.95-3.775.95Zm3.4-7.9c-.083-.983-.45-1.767-1.1-2.35-.633-.6-1.408-.9-2.325-.9-.45 0-.875.083-1.275.25-.383.15-.725.367-1.025.65-.3.283-.55.625-.75 1.025-.183.4-.291.842-.325 1.325h6.8ZM172.425 34l-3.8-5.675-1.8 1.775V34h-3.35V15.75h3.35v11.075l5.25-5.9h3.575l-4.875 5.55L176 34h-3.575Z"></path><path fill="#2A7AE4" d="M56.772 16.25h3.05L66.572 34h-3.55l-1.65-4.425h-6.2L53.547 34h-3.55l6.775-17.75Zm3.974 10.9-2.45-6.975-2.55 6.975h5ZM68.168 15.75h3.35V29.8c0 .483.116.858.35 1.125.233.267.566.4 1 .4.2 0 .416-.033.65-.1.25-.067.483-.15.7-.25l.45 2.55c-.45.217-.975.383-1.575.5-.6.117-1.142.175-1.625.175-1.05 0-1.867-.275-2.45-.825-.567-.567-.85-1.367-.85-2.4V15.75ZM80.127 34.25c-1.35 0-2.375-.433-3.075-1.3-.7-.867-1.05-2.15-1.05-3.85v-8.2h3.35v7.475c0 2.017.725 3.025 2.175 3.025.65 0 1.275-.192 1.875-.575.616-.4 1.116-1 1.5-1.8V20.9h3.35v9.25c0 .35.058.6.174.75.134.15.342.233.625.25V34a6.971 6.971 0 0 1-1.45.15c-.6 0-1.091-.133-1.475-.4a1.684 1.684 0 0 1-.65-1.15l-.075-1.05c-.583.9-1.333 1.575-2.25 2.025-.916.45-1.924.675-3.024.675ZM99.38 23.8c-1.017.017-1.925.217-2.725.6-.8.367-1.375.925-1.725 1.675V34h-3.35V20.9h3.075v2.8c.233-.45.508-.85.825-1.2a6.088 6.088 0 0 1 1.025-.95 4.49 4.49 0 0 1 1.1-.6c.383-.15.75-.225 1.1-.225h.4c.1 0 .191.008.275.025v3.05ZM104.652 34.25c-.634 0-1.225-.1-1.775-.3a4.552 4.552 0 0 1-1.425-.875 4.388 4.388 0 0 1-.95-1.325 4.1 4.1 0 0 1-.325-1.65c0-.617.133-1.183.4-1.7a4.065 4.065 0 0 1 1.15-1.35c.5-.367 1.091-.65 1.775-.85a7.412 7.412 0 0 1 2.25-.325c.583 0 1.149.05 1.699.15.567.1 1.067.242 1.5.425v-.75c0-.867-.25-1.533-.75-2-.483-.467-1.208-.7-2.174-.7-.7 0-1.384.125-2.05.375-.667.25-1.35.617-2.05 1.1l-1.025-2.125c1.683-1.117 3.5-1.675 5.45-1.675 1.883 0 3.341.467 4.374 1.4 1.05.917 1.575 2.25 1.575 4v4.075c0 .35.058.6.175.75.133.15.342.233.625.25V34a7.456 7.456 0 0 1-1.475.175c-.633 0-1.125-.142-1.475-.425-.333-.283-.541-.658-.625-1.125l-.075-.725a5.79 5.79 0 0 1-2.125 1.75c-.833.4-1.724.6-2.674.6Zm.95-2.45c.566 0 1.099-.1 1.599-.3.517-.2.917-.467 1.2-.8.367-.283.55-.6.55-.95v-1.5c-.4-.15-.833-.267-1.3-.35-.466-.1-.916-.15-1.349-.15-.867 0-1.575.2-2.125.6-.55.383-.825.875-.825 1.475 0 .567.216 1.042.65 1.425.433.367.966.55 1.6.55Z"></path><defs><clipPath id="a"><path fill="#fff" d="M0 0h49.997v50H0z"></path></clipPath></defs></svg>
    </a>
    <a id="link-login" href="/login" class="border-blue-600 border-[1px] text-blue-600 font-medium py-2 px-6 rounded block hover:bg-blue-700 hover:text-gray-100">
      Login</a>
    <a id="icon-filter" href="/all-products" class="text-gray-700">
      ${renderComponent($$result2, "Lupa", $$Lupa, {})}
    </a>
  </header>
  <main class="pb-4 p-4 xl:p-0 lg:max-w-5xl mx-auto">
    <section class="flex flex-col md:flex-row items-center md:gap-8 mt-10">
      <img class="w-full object-cover md:w-1/2 rounded h-[300px]"${addAttribute(info.image, "src")}${addAttribute(info.description, "alt")}${addAttribute(`view-transition-name: product-${info.id}`, "style")}>
      <div class="pt-4 flex flex-col gap-2">
        <h1 class="text-2xl font-semibold">${info.name}</h1>
        <span class="text-gray-800 text-xl font-bold">$${info.price}</span>
        <p class="text-lg font-medium">${info.description}</p>
      </div>
    </section>
    <section class="p-0 mb-10">
      ${renderComponent($$result2, "ListProducts", $$ListProducts, { "title": "Productos similares", "listProducts": products.filter(
    (item) => item.category === info.category && item.id !== info.id
  ) })}
    </section>
  </main>
` })}`;
}, "D:/Dev/alura-geek/src/pages/[product].astro", void 0);

const $$file = "D:/Dev/alura-geek/src/pages/[product].astro";
const $$url = "/alura-geek/[product]";

const _product_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$product,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Lupa as $, _product_ as _, $$Card as a, $$Layout as b, $$ListProducts as c, $$Input as d, $$Button as e, products as p };
