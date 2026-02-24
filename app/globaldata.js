export const globalData = {
   navbar: {
      brand: "MAX SULLIVAN",
      subtitle: "(FOUNDERS TAPES)",
      menuText: "(MENU)",
      links: [
         { id: 1, label: "COMMUNITY", href: "/", tag: "(SAAS CARTEL)" },
         { id: 2, label: "ABOUT ME", href: "/about-me", tag: "(ABOUT)" },
         { id: 3, label: "GET IN TOUCH", href: "https://x.com/SinghAshir65848", tag: "(CONTACT)" },
         { id: 4, label: "NEWSLETTER", href: "/", tag: "NOTIFY" },
      ],
   },

   hero: {
      brandName: "MAX SULLIVAN",
      heroRows: [
         {
            id: 'row1',
            left: {
               tag: '( YOUTUBE )',
               hoverTag: '( FOUNDERS TAPES )',
               title: 'YOUTUBE',
               hoverTitle: "FOUNDER'S TAPES",
               desc: 'THE UNSCRIPTED DOCUMENTARY, IN THE LIFE OF BUILDING AN EMPIRE',
               href: '/'
            },
            right: {
               image: 'https://framerusercontent.com/images/qfMh25xXaX3vffDT2mdLs3AZ9so.jpg' // Placeholder since Firebase 401s
            }
         },
         {
            id: 'row2',
            left: {
               image: 'https://cdn.prod.website-files.com/691024ccc3cf40dbe1a814bb/691aeb00ddd880ccc51900e0_1753014886441.webp',
               glassTitle: 'SAAS CARTEL',
               hoverTitle: 'JOIN THE WAITLIST',
               badge: 'Soon – Launch in Q1 2026',
               href: '/'
            },
            right: {
               bg: '#141414',
               tag: '(SAAS COMMUNITY)',
               title: 'SAAS\nCARTEL',
               hoverTitle: 'SAAS\nCOMMUNITY',
               desc: 'FOR THE NEXT WAVE OF BUILDERS'
            }
         },
         {
            id: 'row3',
            left: {
               bg: '#FFFAED',
               tag: '(ABOUT)',
               bio: 'MAX SULLIVAN IS A CREATOR COMMITTED TO THE REALITY OF EXECUTION. TEN YEARS OF DEVELOPING PROJECTS FORMED THE BASE—TODAY, HE BUILDS WITH TARGETED INTENT, LAYING THE BRICKS FOR A LASTING LEGACY.',
               photos: [
                  'https://framerusercontent.com/images/L7RaBogFmJfOp4nzs7sLPcL9hI.jpg?scale-down-to=1024',
                  'https://framerusercontent.com/images/eUAb5nMvCfGj2ep4jmGnCaPD7GA.jpg?scale-down-to=1024'
               ],
               href: '/about-me'
            },
            right: {
               video: 'https://framerusercontent.com/assets/oHeYHSdmyP62ztCVd9CwLKmXkZ0.mp4' // Placeholder
            }
         },
         {
            id: 'row4',
            left: {
               video: 'https://cdn.pixabay.com/video/2020/05/11/38600-418701968_large.mp4',
               image: 'https://framerusercontent.com/images/EbLAFisNfpGqXz5JKvJzjvyOTSk.jpeg'
            },
            right: {
               bg: '#3D3D3D',
               tag: '( NEWSLETTER )',
               desc: 'MY THOUGHTS ABOUT COMPANY BUILDING, SAAS NEWS AND OTHER STARTUP RELATED STUFF.',
               title: 'LEDGER',
               href: '/'
            }
         }
      ],
      cta: {
         tag: "(reach out)",
         headline: "Let's build together",
         href: "/"
      }
   }
};
