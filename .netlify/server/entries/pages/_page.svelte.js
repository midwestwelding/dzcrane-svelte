import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/index.js";
const nav_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "nav.svelte-1mwdrc7.svelte-1mwdrc7{position:fixed;bottom:0px;background-color:#181617;color:white;height:58px;width:100%;display:flex;align-items:center;z-index:50}input.svelte-1mwdrc7.svelte-1mwdrc7{display:none}label.svelte-1mwdrc7.svelte-1mwdrc7{padding:8px}nav.svelte-1mwdrc7 .links-box.svelte-1mwdrc7{z-index:40;height:0px;bottom:0px;background-color:#181617;margin-left:5%;width:90%;position:fixed;padding:0;transition:height .268s, padding .4s, transform .4s;transition-timing-function:ease-out;box-shadow:0 -2px 6px grey}#nav-box.svelte-1mwdrc7:checked~.links-box.svelte-1mwdrc7{height:204px;padding:12px;bottom:58px}nav.svelte-1mwdrc7 a.svelte-1mwdrc7{font-size:1.1rem;color:white;text-decoration:none;padding:12px;display:inline-block;width:100%}@media screen and (min-width: 768px){nav.svelte-1mwdrc7.svelte-1mwdrc7{position:sticky;top:0;bottom:auto}nav.svelte-1mwdrc7 .links-box.svelte-1mwdrc7{background-color:transparent;box-shadow:none;height:auto;bottom:auto;position:relative;text-align:right}nav.svelte-1mwdrc7 a.svelte-1mwdrc7{width:auto;font-size:1.2em}label.svelte-1mwdrc7.svelte-1mwdrc7{display:none}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<nav class="${"svelte-1mwdrc7"}"><input type="${"checkbox"}" id="${"nav-box"}" name="${"nav-box"}" class="${"svelte-1mwdrc7"}">
  <label for="${"nav-box"}" class="${"svelte-1mwdrc7"}"><svg viewBox="${"0 0 100 80"}" width="${"40"}" height="${"40"}"><rect width="${"100"}" height="${"16"}" fill="${"white"}"></rect><rect y="${"30"}" width="${"100"}" height="${"16"}" fill="${"white"}"></rect><rect y="${"60"}" width="${"100"}" height="${"16"}" fill="${"white"}"></rect></svg></label>
  <div class="${"links-box svelte-1mwdrc7"}"><a href="${"#home"}" class="${"svelte-1mwdrc7"}">Home</a>
    <a href="${"#service"}" class="${"svelte-1mwdrc7"}">Service</a>
    <a href="${"#gallery"}" class="${"svelte-1mwdrc7"}">Gallery</a>
    <a href="${"#contact"}" class="${"svelte-1mwdrc7"}">Contact</a></div>
</nav>`;
});
const home_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".logo-container.svelte-hgsn5r.svelte-hgsn5r{width:60%;margin:auto;margin-top:24px;margin-bottom:12px}#home.svelte-hgsn5r img.svelte-hgsn5r{width:100%}.title-container.svelte-hgsn5r.svelte-hgsn5r{color:white;padding:6px;text-align:center;font-size:2em;line-height:1.8em}.title-container.svelte-hgsn5r span.svelte-hgsn5r{display:inline-block;width:100%}.title-container.svelte-hgsn5r .line2.svelte-hgsn5r{font-size:0.84em}@media screen and (min-width: 768px){#home.svelte-hgsn5r.svelte-hgsn5r{display:flex;align-items:center}.logo-container.svelte-hgsn5r.svelte-hgsn5r{width:25%;display:inline-block;padding-left:36px}.title-container.svelte-hgsn5r.svelte-hgsn5r{display:inline-block}}@media screen and (min-width: 1024px){#home.svelte-hgsn5r.svelte-hgsn5r{max-width:1024px;margin-left:auto;margin-right:auto}}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div id="${"home"}" class="${"svelte-hgsn5r"}"><div class="${"logo-container svelte-hgsn5r"}"><img alt="${"D&Z Crane and Rigging Logo"}" src="${"/dzcrane_logo.webp"}" class="${"svelte-hgsn5r"}"></div>
  <div class="${"title-container svelte-hgsn5r"}"><h1><span class="${"line1 svelte-hgsn5r"}">D&amp;Z Crane</span>
      <span class="${"line2 svelte-hgsn5r"}">and Rigging</span></h1></div>
</div>`;
});
const service_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#service.svelte-tovzkf.svelte-tovzkf{padding:18px;color:white;background:#dd1f26;margin-top:36px;margin-left:auto;margin-right:auto}#service.svelte-tovzkf h2.svelte-tovzkf{text-align:center;font-size:2.4em;margin-bottom:12px}#service.svelte-tovzkf hr.svelte-tovzkf{width:67%;margin-left:auto;margin-right:auto;margin-bottom:18px}.service-container.svelte-tovzkf ul li.svelte-tovzkf,.service-container.svelte-tovzkf p.svelte-tovzkf{font-size:1.2em;line-height:1.4em}@media screen and (min-width: 768px){#service.svelte-tovzkf.svelte-tovzkf{padding:36px 0 54px 0}.service-container.svelte-tovzkf.svelte-tovzkf{width:60%;margin:auto}}@media screen and (min-width: 1024px){.service-content.svelte-tovzkf.svelte-tovzkf{max-width:1024px;margin-left:auto;margin-right:auto}}",
  map: null
};
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="${"service"}" class="${"svelte-tovzkf"}"><div class="${"service-content svelte-tovzkf"}"><h2 class="${"svelte-tovzkf"}">Service</h2>
    <hr class="${"svelte-tovzkf"}">
    <div class="${"service-container svelte-tovzkf"}"><p class="${"svelte-tovzkf"}">Serving All of Wisconsin</p>
      <p class="${"svelte-tovzkf"}">24 Hour Emergency Services</p>
      <ul><li class="${"svelte-tovzkf"}">Certified Operator</li>
        <li class="${"svelte-tovzkf"}">Insured</li>
        <li class="${"svelte-tovzkf"}">Up to 100 Ton</li>
        <li class="${"svelte-tovzkf"}">Tip Height 240 FT</li></ul></div></div>
</div>`;
});
const gallery_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#gallery.svelte-p88dl0.svelte-p88dl0{padding:18px;color:white}#gallery.svelte-p88dl0 h2.svelte-p88dl0{text-align:center;font-size:2.4em;margin-bottom:12px}#gallery.svelte-p88dl0 hr.svelte-p88dl0{width:67%;margin-left:auto;margin-right:auto;margin-bottom:18px}.gallery-container.svelte-p88dl0 img.svelte-p88dl0{margin-top:12px}@media screen and (min-width: 768px){#gallery.svelte-p88dl0.svelte-p88dl0{padding:54px 0 54px 0}.gallery-container.svelte-p88dl0.svelte-p88dl0{margin-left:18px;margin-right:18px}.gallery-container.svelte-p88dl0 img.svelte-p88dl0{width:calc(50% - 21px);margin:12px 9px}}@media screen and (min-width: 1024px){#gallery.svelte-p88dl0.svelte-p88dl0{max-width:1024px;margin-left:auto;margin-right:auto}.gallery-container.svelte-p88dl0 img.svelte-p88dl0{width:calc(33% - 21px);margin:12px 9px}}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="${"gallery"}" class="${"svelte-p88dl0"}"><h2 class="${"svelte-p88dl0"}">Gallery</h2>
  <hr class="${"svelte-p88dl0"}">
  <div class="${"gallery-container svelte-p88dl0"}"><img alt="${"From inside the cockpit looking low"}" src="${"full_stick.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"helping_hand.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"off_the_ground.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"rear.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"wide_jib.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"with_jib.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking up"}" src="${"cockpit_high.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"cockpit_low.webp"}" class="${"svelte-p88dl0"}">
    <img alt="${"From inside the cockpit looking low"}" src="${"packed.webp"}" class="${"svelte-p88dl0"}"></div>
</div>`;
});
const contact_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#contact.svelte-1wi6bqn.svelte-1wi6bqn{padding:18px;color:white;background:#2a3895}#contact.svelte-1wi6bqn h2.svelte-1wi6bqn{text-align:center;font-size:2.4em;margin-bottom:12px}#contact.svelte-1wi6bqn hr.svelte-1wi6bqn{width:67%;margin-left:auto;margin-right:auto;margin-bottom:18px}.contact-phone.svelte-1wi6bqn.svelte-1wi6bqn{text-align:center;margin-bottom:36px}.contact-phone.svelte-1wi6bqn h3.svelte-1wi6bqn{font-size:1.6em;margin-bottom:12px}.contact-phone.svelte-1wi6bqn p.svelte-1wi6bqn{font-size:1.2em;line-height:1.6em}.contact-phone.svelte-1wi6bqn a.svelte-1wi6bqn{color:white;font-size:1.2em;text-decoration:none;line-height:1.6em}.form-container.svelte-1wi6bqn input.svelte-1wi6bqn,.form-container.svelte-1wi6bqn textarea.svelte-1wi6bqn,.form-container.svelte-1wi6bqn p.svelte-1wi6bqn{font-size:1.2em;width:100%;margin-bottom:8px}button.svelte-1wi6bqn.svelte-1wi6bqn{font-size:1.2em;background:#dd1f26;color:white;border:none;padding:8px 18px}.contact-office.svelte-1wi6bqn.svelte-1wi6bqn{margin:36px 0}.contact-office.svelte-1wi6bqn h3.svelte-1wi6bqn{font-size:1.6em;margin-bottom:4px}.contact-office.svelte-1wi6bqn p.svelte-1wi6bqn{font-size:1.2em;line-height:1.3em}@media screen and (min-width: 768px){#contact.svelte-1wi6bqn.svelte-1wi6bqn{padding-top:54px;margin-left:auto;margin-right:auto}.form-container.svelte-1wi6bqn.svelte-1wi6bqn,.contact-office.svelte-1wi6bqn.svelte-1wi6bqn{width:60%;margin-left:auto;margin-right:auto}}@media screen and (min-width: 1024px){.contact-content.svelte-1wi6bqn.svelte-1wi6bqn{max-width:1024px;margin-left:auto;margin-right:auto}.contact-container.svelte-1wi6bqn.svelte-1wi6bqn{display:flex;justify-items:center}.contact-column.svelte-1wi6bqn.svelte-1wi6bqn{width:50%}}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="${"contact"}" class="${"svelte-1wi6bqn"}"><div class="${"contact-content svelte-1wi6bqn"}"><h2 class="${"svelte-1wi6bqn"}">Contact</h2>
    <hr class="${"svelte-1wi6bqn"}">
    <div class="${"contact-container svelte-1wi6bqn"}"><div class="${"contact-column svelte-1wi6bqn"}"><div class="${"contact-phone svelte-1wi6bqn"}"><h3 class="${"svelte-1wi6bqn"}">Call Today!</h3>
          <p class="${"svelte-1wi6bqn"}">Delvin Rens</p>
          <a href="${"tel:9209888013"}" class="${"svelte-1wi6bqn"}">(920) 988-8013</a></div>
        <div class="${"contact-office svelte-1wi6bqn"}"><h3 class="${"svelte-1wi6bqn"}">Business Office</h3>
          <p class="${"svelte-1wi6bqn"}">202 Harrison Street</p>
          <p class="${"svelte-1wi6bqn"}">PO Box 39</p>
          <p class="${"svelte-1wi6bqn"}">Reeseville, WI 53098</p></div></div>
      <div class="${"contact-column svelte-1wi6bqn"}"><div class="${"form-container svelte-1wi6bqn"}"><form method="${"post"}" name="${"contactUs"}" data-netlify="${"true"}" data-netlify-honeypot="${"bot-field"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contactUs"}" class="${"svelte-1wi6bqn"}">
            <div><input name="${"name"}" type="${"text"}" placeholder="${"Name"}" required class="${"svelte-1wi6bqn"}"></div>
            <div><input name="${"email"}" type="${"text"}" placeholder="${"Email"}" required class="${"svelte-1wi6bqn"}"></div>
            <div><p class="${"svelte-1wi6bqn"}">Message: </p>
              <textarea name="${"message"}" rows="${"5"}" class="${"svelte-1wi6bqn"}"></textarea></div>
            <div style="${"text-align: right;"}"><button type="${"submit"}" class="${"svelte-1wi6bqn"}">Submit</button></div></form></div></div></div></div>
</div>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "#footer.svelte-14ycj3o{text-align:center;padding:72px 0 90px 0;background:#181617}img.svelte-14ycj3o{width:60%}@media screen and (min-width: 768px){img.svelte-14ycj3o{width:25%}}@media screen and (min-width: 1024px){img.svelte-14ycj3o{width:15%}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"footer"}" class="${"svelte-14ycj3o"}"><img alt="${"D&Z Crane Logo"}" src="${"dzcrane_logo.webp"}" class="${"svelte-14ycj3o"}">
</div>`;
});
const SvelteSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `<!-- HEAD_svelte-1q8xl96_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}>${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)}>` : ``}${keywords ? `<meta name="${"keywords"}"${add_attribute("content", keywords, 0)}>` : ``}${openGraph ? `${openGraph.title ? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title, 0)}>` : ``}

    ${openGraph.description ? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description, 0)}>` : ``}

    ${openGraph.url || canonical ? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)}>` : ``}

    ${openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``}

      ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``}

      ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``}

      ${openGraph.article.section ? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)}>` : ``}

      ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${add_attribute("content", author, 0)}>`;
  })}` : ``}

      ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)}>
        ${image.alt ? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)}>` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)}>` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)}>` : ``}`;
  })}` : ``}` : ``}${twitter ? `<meta name="${"twitter:card"}"${add_attribute("content", twitter.card || "summary_large_image", 0)}>
    ${twitter.site ? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)}>` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)}>` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)}>` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)}>` : ``}
     ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}
    ${twitter.player ? `<meta name="${"twitter:player"}"${add_attribute("content", twitter.player, 0)}>` : ``}
     ${twitter.playerWidth ? `<meta name="${"twitter:player:width"}"${add_attribute("content", twitter.playerWidth, 0)}>` : ``}
    ${twitter.playerHeight ? `<meta name="${"twitter:player:height"}"${add_attribute("content", twitter.playerHeight, 0)}>` : ``}` : ``}${jsonLd ? `<!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    ...jsonLd
  }) + "<"}/script>`}<!-- HTML_TAG_END -->` : ``}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-1q8xl96_END -->`, ""}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "NavRow").$$render($$result, {}, {}, {})}
${validate_component(Home, "HomeSection").$$render($$result, {}, {}, {})}
${validate_component(Service, "ServiceSection").$$render($$result, {}, {}, {})}
${validate_component(Gallery, "GallerySection").$$render($$result, {}, {}, {})}
${validate_component(Contact, "ContactSection").$$render($$result, {}, {}, {})}
${validate_component(Footer, "FooterSection").$$render($$result, {}, {}, {})}

${validate_component(SvelteSeo, "SvelteSEO").$$render(
    $$result,
    {
      title: "D&Z Crane and Rigging",
      description: "Insured and Certifed Operator, 240FT Stick with 100 Ton capacity. Serving All of Wisconsin."
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
