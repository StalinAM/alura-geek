/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.f098e0e3.mjs';
import 'html-escaper';
import { d as $$Input, e as $$Button, b as $$Layout } from './_product_.astro.e0af6fef.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro("https://github.com/StalinAM");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "hola" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<header class="max-w-5xl p-4 flex justify-between items-center mx-auto lg:px-0">
    <a style="view-transition-name: product-logo" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="176" height="50" fill="none"><g clip-path="url(#a)"><path fill="#2A7AE4" d="m44.956 33.52-2.271-15.958c-.583-4.104-4.104-7.145-8.25-7.145H15.562c-4.146 0-7.667 3.041-8.25 7.146L5.042 33.52a5.302 5.302 0 0 0 5.249 6.062 5.28 5.28 0 0 0 3.75-1.562l4.708-4.688h12.5l4.686 4.688c1 1 2.354 1.562 3.75 1.562a5.306 5.306 0 0 0 5.27-6.062Zm-22.04-10.603h-4.167v4.166h-2.083v-4.166h-4.167v-2.084h4.167v-4.166h2.083v4.166h4.166v2.084Zm8.332-2.084a2.09 2.09 0 0 1-2.083-2.083 2.09 2.09 0 0 1 2.083-2.083 2.09 2.09 0 0 1 2.083 2.083 2.09 2.09 0 0 1-2.083 2.083Zm4.167 6.25A2.09 2.09 0 0 1 33.33 25a2.09 2.09 0 0 1 2.084-2.083A2.09 2.09 0 0 1 37.498 25a2.09 2.09 0 0 1-2.083 2.083Z"></path></g><path fill="#464646" d="M128.081 32c-1.417 1.417-3.067 2.125-4.95 2.125a7.922 7.922 0 0 1-3.3-.7 8.496 8.496 0 0 1-2.675-1.925 9.55 9.55 0 0 1-1.8-2.875c-.433-1.117-.65-2.317-.65-3.6 0-1.217.217-2.358.65-3.425a9.072 9.072 0 0 1 1.825-2.825 8.623 8.623 0 0 1 2.75-1.925c1.05-.483 2.192-.725 3.425-.725 1.666 0 3.091.35 4.275 1.05 1.2.7 2.099 1.642 2.699 2.825l-2.574 1.9c-.45-.883-1.084-1.558-1.9-2.025-.8-.467-1.675-.7-2.625-.7-.75 0-1.442.158-2.075.475a5 5 0 0 0-1.6 1.3 6.511 6.511 0 0 0-1.025 1.9 7.313 7.313 0 0 0-.35 2.275c0 .833.133 1.617.4 2.35a5.985 5.985 0 0 0 1.1 1.875 5.36 5.36 0 0 0 1.65 1.275c.65.3 1.35.45 2.1.45 1.716 0 3.266-.808 4.65-2.425V27.4h-3.575v-2.525h6.424V34h-2.849v-2ZM139.62 34.25c-1.05 0-2-.175-2.85-.525a6.691 6.691 0 0 1-2.175-1.475 6.669 6.669 0 0 1-1.4-2.15 7.073 7.073 0 0 1-.474-2.575c0-.933.158-1.808.474-2.625a6.284 6.284 0 0 1 1.375-2.175 6.505 6.505 0 0 1 2.175-1.5c.867-.367 1.834-.55 2.9-.55 1.067 0 2.017.183 2.85.55.85.367 1.567.858 2.15 1.475.6.617 1.05 1.333 1.35 2.15.316.817.475 1.667.475 2.55 0 .217-.009.425-.025.625 0 .2-.017.367-.05.5H136.27c.05.517.175.975.375 1.375s.459.742.775 1.025c.317.283.675.5 1.075.65.4.15.817.225 1.25.225.667 0 1.292-.158 1.875-.475.6-.333 1.008-.767 1.225-1.3l2.875.8c-.484 1-1.258 1.825-2.325 2.475-1.05.633-2.308.95-3.775.95Zm3.4-7.9c-.083-.983-.45-1.767-1.1-2.35-.633-.6-1.408-.9-2.325-.9-.45 0-.875.083-1.275.25-.383.15-.725.367-1.025.65-.3.283-.55.625-.75 1.025-.183.4-.291.842-.325 1.325h6.8ZM154.585 34.25c-1.05 0-2-.175-2.85-.525a6.691 6.691 0 0 1-2.175-1.475 6.669 6.669 0 0 1-1.4-2.15 7.073 7.073 0 0 1-.474-2.575c0-.933.158-1.808.474-2.625a6.284 6.284 0 0 1 1.375-2.175 6.505 6.505 0 0 1 2.175-1.5c.867-.367 1.833-.55 2.9-.55s2.017.183 2.85.55c.85.367 1.567.858 2.15 1.475.6.617 1.05 1.333 1.35 2.15.316.817.475 1.667.475 2.55 0 .217-.009.425-.025.625 0 .2-.017.367-.05.5h-10.125c.05.517.175.975.375 1.375s.459.742.775 1.025c.317.283.675.5 1.075.65.4.15.817.225 1.25.225.667 0 1.292-.158 1.875-.475.6-.333 1.008-.767 1.225-1.3l2.875.8c-.484 1-1.258 1.825-2.325 2.475-1.05.633-2.308.95-3.775.95Zm3.4-7.9c-.083-.983-.45-1.767-1.1-2.35-.633-.6-1.408-.9-2.325-.9-.45 0-.875.083-1.275.25-.383.15-.725.367-1.025.65-.3.283-.55.625-.75 1.025-.183.4-.291.842-.325 1.325h6.8ZM172.425 34l-3.8-5.675-1.8 1.775V34h-3.35V15.75h3.35v11.075l5.25-5.9h3.575l-4.875 5.55L176 34h-3.575Z"></path><path fill="#2A7AE4" d="M56.772 16.25h3.05L66.572 34h-3.55l-1.65-4.425h-6.2L53.547 34h-3.55l6.775-17.75Zm3.974 10.9-2.45-6.975-2.55 6.975h5ZM68.168 15.75h3.35V29.8c0 .483.116.858.35 1.125.233.267.566.4 1 .4.2 0 .416-.033.65-.1.25-.067.483-.15.7-.25l.45 2.55c-.45.217-.975.383-1.575.5-.6.117-1.142.175-1.625.175-1.05 0-1.867-.275-2.45-.825-.567-.567-.85-1.367-.85-2.4V15.75ZM80.127 34.25c-1.35 0-2.375-.433-3.075-1.3-.7-.867-1.05-2.15-1.05-3.85v-8.2h3.35v7.475c0 2.017.725 3.025 2.175 3.025.65 0 1.275-.192 1.875-.575.616-.4 1.116-1 1.5-1.8V20.9h3.35v9.25c0 .35.058.6.174.75.134.15.342.233.625.25V34a6.971 6.971 0 0 1-1.45.15c-.6 0-1.091-.133-1.475-.4a1.684 1.684 0 0 1-.65-1.15l-.075-1.05c-.583.9-1.333 1.575-2.25 2.025-.916.45-1.924.675-3.024.675ZM99.38 23.8c-1.017.017-1.925.217-2.725.6-.8.367-1.375.925-1.725 1.675V34h-3.35V20.9h3.075v2.8c.233-.45.508-.85.825-1.2a6.088 6.088 0 0 1 1.025-.95 4.49 4.49 0 0 1 1.1-.6c.383-.15.75-.225 1.1-.225h.4c.1 0 .191.008.275.025v3.05ZM104.652 34.25c-.634 0-1.225-.1-1.775-.3a4.552 4.552 0 0 1-1.425-.875 4.388 4.388 0 0 1-.95-1.325 4.1 4.1 0 0 1-.325-1.65c0-.617.133-1.183.4-1.7a4.065 4.065 0 0 1 1.15-1.35c.5-.367 1.091-.65 1.775-.85a7.412 7.412 0 0 1 2.25-.325c.583 0 1.149.05 1.699.15.567.1 1.067.242 1.5.425v-.75c0-.867-.25-1.533-.75-2-.483-.467-1.208-.7-2.174-.7-.7 0-1.384.125-2.05.375-.667.25-1.35.617-2.05 1.1l-1.025-2.125c1.683-1.117 3.5-1.675 5.45-1.675 1.883 0 3.341.467 4.374 1.4 1.05.917 1.575 2.25 1.575 4v4.075c0 .35.058.6.175.75.133.15.342.233.625.25V34a7.456 7.456 0 0 1-1.475.175c-.633 0-1.125-.142-1.475-.425-.333-.283-.541-.658-.625-1.125l-.075-.725a5.79 5.79 0 0 1-2.125 1.75c-.833.4-1.724.6-2.674.6Zm.95-2.45c.566 0 1.099-.1 1.599-.3.517-.2.917-.467 1.2-.8.367-.283.55-.6.55-.95v-1.5c-.4-.15-.833-.267-1.3-.35-.466-.1-.916-.15-1.349-.15-.867 0-1.575.2-2.125.6-.55.383-.825.875-.825 1.475 0 .567.216 1.042.65 1.425.433.367.966.55 1.6.55Z"></path><defs><clipPath id="a"><path fill="#fff" d="M0 0h49.997v50H0z"></path></clipPath></defs></svg>
    </a>
    <a id="link-login" href="/all-products-admin" class="border-blue-600 border-[1px] text-blue-600 font-medium py-2 px-6 rounded block hover:bg-blue-700 hover:text-gray-100">
      Menu Admin</a>
  </header>
  <main class="bg-gray-100 flex items-center flex-col min-h-[60vh] w-full justify-center gap-4 mx-auto p-4">
    <h2 class="font-bold lg:text-lg">Iniciar Sesión</h2>
    <form class="flex flex-col w-72 lg:w-96 gap-4 [&>input]:bg-white [&>input]:py-2 [&>input]:px-4 [&>button]:w-full items-center" action="">
      ${renderComponent($$result2, "Input", $$Input, { "type": "text", "placeholder": "Escriba su correo electr\xF3nico" })}
      ${renderComponent($$result2, "Input", $$Input, { "type": "text", "placeholder": "Escriba su contrase\xF1a" })}
      ${renderComponent($$result2, "Button", $$Button, { "text": "Entrar" })}
    </form>
  </main>
` })}`;
}, "D:/Dev/alura-geek/src/pages/login.astro", void 0);

const $$file = "D:/Dev/alura-geek/src/pages/login.astro";
const $$url = "/alura-geek/login";

export { $$Login as default, $$file as file, $$url as url };
