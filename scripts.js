// Edit this list to add, remove or reorder bookmarks.
// Each item: { title, url, tag }. A section has either `items` or `groups` ({ title, items }) for subcategories.
const sections = [
    {
        id: "agencies",
        title: "Agencies",
        items: [
            { title: "Red Antler", url: "https://www.redantler.com", tag: "Branding" },
            { title: "Young Jerks", url: "https://youngjerks.com/#home", tag: "Digital" },
            { title: "Koto", url: "https://koto.com", tag: "Branding" },
            { title: "Collins", url: "https://wearecollins.com", tag: "Branding" },
            { title: "Cartwheel & Co.", url: "https://www.cartwheelandco.com", tag: "Creative" },
            { title: "Salt XC", url: "https://www.saltxc.com", tag: "Experience" },
            { title: "Sparks", url: "https://www.wearesparks.com", tag: "Creative" },
            { title: "Momentum Worldwide", url: "https://www.momentumww.com", tag: "Experience" },
            { title: "Mojo Supermarket", url: "https://mojosuper.market", tag: "Advertising" },
            { title: "We Are Social", url: "https://wearesocial.com/us/", tag: "Social" },
            { title: "Code and Theory", url: "https://www.codeandtheory.com", tag: "Digital" },
            { title: "AKQA", url: "https://www.akqa.com", tag: "Digital" },
            { title: "Uncommon", url: "https://www.uncommon.studio", tag: "Branding" },
            { title: "72andSunny", url: "https://www.72andsunny.com/home", tag: "Advertising" },
            { title: "R/GA", url: "https://rga.com", tag: "Digital" },
            { title: "Ogilvy", url: "https://www.ogilvy.com", tag: "Advertising" },
            { title: "Droga5", url: "https://droga5.com", tag: "Advertising" },
            { title: "Mocean", url: "https://www.moceanla.com", tag: "Motion" },
            { title: "Rethink", url: "https://www.rethinkideas.com", tag: "Advertising" },
            { title: "Area 23", url: "https://area23hc.com", tag: "Healthcare" },
            { title: "Ways & Means", url: "https://ways-means.co", tag: "Creative" },
            { title: "Wolff Olins", url: "https://wolffolins.com", tag: "Branding" },
            { title: "Wieden+Kennedy", url: "https://www.wk.com", tag: "Advertising" },
            { title: "Heads of State", url: "https://theheadsofstate.com", tag: "Branding" },
            { title: "Posterscope", url: "https://www.posterscope.com", tag: "Out-of-Home" },
            { title: "Media Arts Lab", url: "https://www.mediaartslab.com", tag: "Advertising" },
            { title: "Landor", url: "https://landor.com", tag: "Branding" },
            { title: "Universal Design Studio", url: "https://universaldesignstudio.com", tag: "Spatial" },
            { title: "&Walsh", url: "https://andwalsh.com", tag: "Branding" },
            { title: "Pentagram", url: "https://www.pentagram.com", tag: "Design" }
        ]
    },
    {
        id: "designers",
        title: "Designers",
        items: [
            { title: "Becca Baker", url: "https://beccabakerdzn.com", tag: "Designer" },
            { title: "Bubba Livingstone Casella", url: "https://bubba-casella.com", tag: "Designer" },
            { title: "Connor Schwenk", url: "https://connor333.com", tag: "Designer" },
            { title: "Jake Lawall", url: "https://jakelawall.com", tag: "Illustrator" },
            { title: "Jordan Wolf", url: "https://jordanbwolf.com", tag: "Designer" },
            { title: "Juliet DiCarlo", url: "https://julietdicarlo.com", tag: "Designer" },
            { title: "Justin Ford", url: "https://jfordcreative.com", tag: "Designer" },
            { title: "Maggie Cowles", url: "https://maggiecowles.com", tag: "Designer" },
            { title: "Megan Skosnick", url: "https://mskozz.com", tag: "Designer" },
            { title: "Phoenix Chan", url: "https://phxdzn.com", tag: "Designer" },
            { title: "Rudy", url: "https://rudy.wtf", tag: "Designer" },
            { title: "Thomas Wilder", url: "https://thomaswilder.com", tag: "Designer" },
            { title: "Virgil Abloh™", url: "https://canary---yellow.com", tag: "Designer" },
            { title: "Jessica Hische", url: "https://jessicahische.is", tag: "Lettering" },
            { title: "Frank Chimero", url: "https://frankchimero.com", tag: "Designer" },
            { title: "Dan Mall", url: "https://danmall.com", tag: "Web" },
            { title: "Tobias van Schneider", url: "https://vanschneider.com", tag: "Product" },
            { title: "Erik Spiekermann", url: "https://spiekermann.com", tag: "Typography" },
            { title: "Ellen Lupton", url: "https://ellenlupton.com", tag: "Graphic Design" },
            { title: "Marian Bantjes", url: "https://bantjes.com", tag: "Graphic Design" },
            { title: "Aaron Draplin", url: "https://draplin.com", tag: "Branding" },
            { title: "Tina Roth Eisenberg", url: "https://swissmiss.com", tag: "Designer" },
            { title: "Daniel Eatock", url: "https://eatock.com", tag: "Conceptual" },
            { title: "Rauno Freiberg", url: "https://rauno.me", tag: "Web" },
            { title: "Paco Coursey", url: "https://paco.me", tag: "Web" },
            { title: "Brittany Chiang", url: "https://brittanychiang.com", tag: "Web" },
            { title: "Josh Comeau", url: "https://joshwcomeau.com", tag: "Web" },
            { title: "Lynn Fisher", url: "https://lynnandtonic.com", tag: "Web" },
            { title: "Jhey Tompkins", url: "https://jhey.dev", tag: "Creative Coding" },
            { title: "Cassie Evans", url: "https://cassie.codes", tag: "Creative Coding" },
            { title: "Bruno Simon", url: "https://bruno-simon.com", tag: "Creative Coding" }
        ]
    },
    {
        id: "resources",
        title: "Resources",
        groups: [
            {
                title: "Typography",
                items: [
                    { title: "Google Fonts", url: "https://fonts.google.com", tag: "Library" },
                    { title: "Adobe Fonts", url: "https://fonts.adobe.com", tag: "Library" },
                    { title: "Fontshare", url: "https://www.fontshare.com", tag: "Library" },
                    { title: "Font Squirrel", url: "https://www.fontsquirrel.com", tag: "Library" },
                    { title: "Fontesk", url: "https://fontesk.com", tag: "Library" },
                    { title: "Velvetyne", url: "https://velvetyne.fr", tag: "Foundry" },
                    { title: "Future Fonts", url: "https://www.futurefonts.xyz", tag: "Marketplace" },
                    { title: "Glyphs", url: "https://glyphsapp.com", tag: "Software" },
                    { title: "Fonts In Use", url: "https://fontsinuse.com", tag: "Archive" },
                    { title: "Typewolf", url: "https://www.typewolf.com", tag: "Inspiration" },
                    { title: "Type Scale", url: "https://typescale.com", tag: "Tool" },
                    { title: "Fontjoy", url: "https://fontjoy.com", tag: "Tool" },
                    { title: "Wakamai Fondue", url: "https://wakamaifondue.com", tag: "Tool" },
                    { title: "Butterick's Practical Typography", url: "https://practicaltypography.com", tag: "Guide" }
                ]
            },
            {
                title: "Color",
                items: [
                    { title: "Coolors", url: "https://coolors.co", tag: "Tool" },
                    { title: "Adobe Color", url: "https://color.adobe.com", tag: "Tool" },
                    { title: "Color Hunt", url: "https://colorhunt.co", tag: "Library" },
                    { title: "Happy Hues", url: "https://www.happyhues.co", tag: "Library" },
                    { title: "Realtime Colors", url: "https://www.realtimecolors.com", tag: "Tool" },
                    { title: "ColorSpace", url: "https://mycolor.space", tag: "Tool" },
                    { title: "Paletton", url: "https://paletton.com", tag: "Tool" },
                    { title: "Khroma", url: "https://www.khroma.co", tag: "AI" },
                    { title: "Huemint", url: "https://huemint.com", tag: "AI" },
                    { title: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", tag: "Accessibility" }
                ]
            },
            {
                title: "Inspiration",
                items: [
                    { title: "Are.na", url: "https://www.are.na", tag: "Community" },
                    { title: "Awwwards", url: "https://www.awwwards.com", tag: "Gallery" },
                    { title: "Dribbble", url: "https://dribbble.com", tag: "Community" },
                    { title: "Behance", url: "https://www.behance.net", tag: "Portfolio" },
                    { title: "Savee", url: "https://savee.it", tag: "Moodboard" },
                    { title: "Mobbin", url: "https://mobbin.com", tag: "Library" },
                    { title: "Land-book", url: "https://land-book.com", tag: "Gallery" },
                    { title: "Siteinspire", url: "https://www.siteinspire.com", tag: "Gallery" },
                    { title: "Godly", url: "https://godly.website", tag: "Gallery" },
                    { title: "Httpster", url: "https://httpster.net", tag: "Gallery" },
                    { title: "Lapa Ninja", url: "https://www.lapa.ninja", tag: "Gallery" },
                    { title: "Muzli", url: "https://muz.li", tag: "Feed" },
                    { title: "Brand New", url: "https://www.underconsideration.com/brandnew/", tag: "Blog" },
                    { title: "The Dieline", url: "https://thedieline.com", tag: "Blog" },
                    { title: "It's Nice That", url: "https://www.itsnicethat.com", tag: "Magazine" },
                    { title: "Communication Arts", url: "https://www.commarts.com", tag: "Magazine" },
                    { title: "Good Design (Dieter Rams)", url: "https://www.vitsoe.com/us/about/good-design", tag: "Article" },
                    { title: "How to Do Great Work", url: "https://paulgraham.com/greatwork.html", tag: "Article" },
                    { title: "The Marginalian", url: "https://www.themarginalian.org", tag: "Blog" }
                ]
            },
            {
                title: "Photos",
                items: [
                    { title: "Unsplash", url: "https://unsplash.com", tag: "Library" },
                    { title: "Pexels", url: "https://www.pexels.com", tag: "Library" },
                    { title: "Pixabay", url: "https://pixabay.com", tag: "Library" },
                    { title: "Burst", url: "https://burst.shopify.com", tag: "Library" },
                    { title: "Rawpixel", url: "https://www.rawpixel.com", tag: "Library" },
                    { title: "Public Domain Archive", url: "https://publicdomainarchive.com", tag: "Archive" },
                    { title: "Library of Congress", url: "https://www.loc.gov/free-to-use/", tag: "Archive" },
                    { title: "Cosmos", url: "https://www.cosmos.so", tag: "Moodboard" },
                    { title: "Adobe Stock", url: "https://stock.adobe.com", tag: "Paid" },
                    { title: "Stocksy", url: "https://www.stocksy.com", tag: "Paid" }
                ]
            },
            {
                title: "Motion",
                items: [
                    { title: "Motionographer", url: "https://motionographer.com", tag: "Blog" },
                    { title: "Art of the Title", url: "https://www.artofthetitle.com", tag: "Archive" },
                    { title: "Vimeo Staff Picks", url: "https://vimeo.com/channels/staffpicks", tag: "Inspiration" },
                    { title: "LottieFiles", url: "https://lottiefiles.com", tag: "Library" },
                    { title: "GSAP", url: "https://gsap.com", tag: "Library" },
                    { title: "Motion", url: "https://motion.dev", tag: "Library" },
                    { title: "After Effects", url: "https://www.adobe.com/products/aftereffects.html", tag: "Software" },
                    { title: "Cavalry", url: "https://cavalry.scenegroup.co", tag: "Software" },
                    { title: "Rive", url: "https://rive.app", tag: "Software" },
                    { title: "Blender", url: "https://www.blender.org", tag: "Software" },
                    { title: "Cinema 4D", url: "https://www.maxon.net/en/cinema-4d", tag: "Software" },
                    { title: "Spline", url: "https://spline.design", tag: "Software" },
                    { title: "Motion Array", url: "https://motionarray.com", tag: "Marketplace" },
                    { title: "aescripts + aeplugins", url: "https://aescripts.com", tag: "Plugins" },
                    { title: "Easings.net", url: "https://easings.net", tag: "Reference" },
                    { title: "cubic-bezier.com", url: "https://cubic-bezier.com", tag: "Tool" }
                ]
            },
            {
                title: "Web",
                items: [
                    { title: "MDN Web Docs", url: "https://developer.mozilla.org", tag: "Reference" },
                    { title: "Can I Use", url: "https://caniuse.com", tag: "Reference" },
                    { title: "web.dev", url: "https://web.dev", tag: "Guide" },
                    { title: "CSS-Tricks", url: "https://css-tricks.com", tag: "Blog" },
                    { title: "Smashing Magazine", url: "https://www.smashingmagazine.com", tag: "Magazine" },
                    { title: "A List Apart", url: "https://alistapart.com", tag: "Magazine" },
                    { title: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", tag: "Research" },
                    { title: "Laws of UX", url: "https://lawsofux.com", tag: "Reference" },
                    { title: "Refactoring UI", url: "https://www.refactoringui.com", tag: "Book" },
                    { title: "freeCodeCamp", url: "https://www.freecodecamp.org", tag: "Course" },
                    { title: "The Odin Project", url: "https://www.theodinproject.com", tag: "Course" },
                    { title: "Frontend Mentor", url: "https://www.frontendmentor.io", tag: "Practice" },
                    { title: "Figma", url: "https://www.figma.com", tag: "Software" },
                    { title: "Webflow", url: "https://webflow.com", tag: "Software" },
                    { title: "Framer", url: "https://www.framer.com", tag: "Software" },
                    { title: "Tailwind CSS", url: "https://tailwindcss.com", tag: "Framework" },
                    { title: "CodePen", url: "https://codepen.io", tag: "Tool" },
                    { title: "GitHub", url: "https://github.com", tag: "Tool" },
                    { title: "GitHub Pages", url: "https://pages.github.com", tag: "Hosting" },
                    { title: "Vercel", url: "https://vercel.com", tag: "Hosting" },
                    { title: "Netlify", url: "https://www.netlify.com", tag: "Hosting" },
                    { title: "Phosphor Icons", url: "https://phosphoricons.com", tag: "Icons" },
                    { title: "Lucide", url: "https://lucide.dev", tag: "Icons" },
                    { title: "The Noun Project", url: "https://thenounproject.com", tag: "Icons" }
                ]
            }
        ]
    }
];

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

document.getElementById("nav").innerHTML = sections
    .map((s) => `<a href="#${s.id}">${esc(s.title)}</a>`)
    .join("");

const list = (items) => `
        <ul>
            ${items.map((it) => `
                <li>
                    <a href="${esc(it.url)}" target="_blank" rel="noopener">
                        <span class="name">${esc(it.title)}</span>
                        <span class="tag">${esc(it.tag)}</span>
                    </a>
                </li>`).join("")}
        </ul>`;

document.getElementById("content").innerHTML = sections.map((s) => `
    <section id="${s.id}">
        <h2>${esc(s.title)}</h2>
        ${s.groups
            ? s.groups.map((g) => `<h3>${esc(g.title)}</h3>${list(g.items)}`).join("")
            : list(s.items)}
    </section>`).join("");
