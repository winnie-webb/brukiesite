import togglePages from "./togglePages.js";
import toggleAnimeTypes from "./toggleAnimeTypes.js";
import renderAnime from "./renderAnime.js";
import renderTop10 from "./renderTop10.js";
renderAnime(1, "updated");
renderTop10();
togglePages(renderAnime);
toggleAnimeTypes(renderAnime);