export const globalData = {
   navbar: {
      brand: "TIM AXELSSON",
      subtitle: "(FOUNDERS TAPES)",
      menuText: "(MENU)",
      links: [
         { id: 1, label: "COMMUNITY", href: "https://www.saascartel.com/", tag: "(SAAS CARTEL)" },
         { id: 2, label: "ABOUT ME", href: "https://timaxelsson.com/about-me", tag: "(ABOUT)" },
         { id: 3, label: "GET IN TOUCH", href: "https://timaxelsson.com/contact", tag: "(CONTACT)" },
         { id: 4, label: "NEWSLETTER", href: "https://timaxelsson.com/newsletter", tag: "" },
      ],
   },

   hero: {
      /** Row 1 — giant name banner */
      brandName: "TIM AXELSSON",

      /** Row 2 — 2-column: Founder's Tapes card  |  video */
      row2: {
         card: {
            tag: "(YouTube)",
            title: "Founder's Tapes",
            description: "THE UNSCRIPTED DOCUMENTARY, IN THE LIFE OF BUILDING AN EMPIRE",
            href: "https://www.youtube.com/@bytimaxelsson",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80",
         },
         media: {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
            video: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fed7d987e76c3987c294818ddc1da8dcd0d5157ca.mp4?generation=1771885061942567&alt=media",
         },
      },

      /** Row 3 — 2-column: image/video  |  SaaS Cartel dark card */
      row3: {
         media: {
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80",
         },
         card: {
            tag: "(SaaS Community)",
            title: "SaaS Cartel",
            description: "FOR THE NEXT WAVE OF BUILDERS",
            href: "https://www.saascartel.com/",
         },
      },

      /** Row 4 — 2-column: About card  |  video */
      row4: {
         card: {
            tag: "(ABOUT)",
            bio: "Tim Axelsson is an entrepreneur drawn to the craft of building. A decade of shaping ventures was the groundwork—now building with focus, the foundation of an empire.",
            href: "https://timaxelsson.com/about-me",
            images: [
               "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
               "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
            ],
         },
         media: {
            video: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0fbf9d5c95a066a637813fd825aeb60cc7e018b8.mp4?generation=1771885062234826&alt=media",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80",
         },
      },

      /** Row 5 — 2-column: journal video  |  Ledger / Newsletter card */
      row5: {
         media: {
            video: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2a83e4c2de9517bf64c6f94ede32bbbae96d44a2.mp4?generation=1771885062285419&alt=media",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
         },
         card: {
            tag: "(NEWSLETTER)",
            description: "My thoughts about company building, SaaS news and other startup related stuff.",
            title: "Ledger",
            href: "https://timaxelsson.com/newsletter",
         },
      },

      /** CTA strip */
      cta: {
         tag: "(reach out)",
         headline: "Let's build together",
         href: "https://timaxelsson.com/contact",
      },
   },
};
