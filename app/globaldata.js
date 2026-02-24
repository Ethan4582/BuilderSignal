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
      brandName: "TIM AXELSSON",
      heroRows: [
         {
            id: 'row1',
            left: {
               tag: '( YOUTUBE )',
               hoverTag: '( FOUNDERS TAPES )',
               title: 'YOUTUBE',
               hoverTitle: "FOUNDER'S TAPES",
               desc: 'THE UNSCRIPTED DOCUMENTARY, IN THE LIFE OF BUILDING AN EMPIRE',
               href: 'https://www.youtube.com/@bytimaxelsson'
            },
            right: {
               image: 'https://framerusercontent.com/images/qfMh25xXaX3vffDT2mdLs3AZ9so.jpg' // Placeholder since Firebase 401s
            }
         },
         {
            id: 'row2',
            left: {
               image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80',
               glassTitle: 'SAAS CARTEL',
               hoverTitle: 'JOIN THE WAITLIST',
               badge: 'Soon – Launch in Q3 2025',
               href: 'https://www.saascartel.com/'
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
               bio: 'TIM AXELSSON IS AN ENTREPRENEUR DRAWN TO THE CRAFT OF BUILDING. A DECADE OF SHAPING VENTURES WAS THE GROUNDWORK—NOW BUILDING WITH FOCUS, THE FOUNDATION OF AN EMPIRE.',
               photos: [
                  'https://framerusercontent.com/images/L7RaBogFmJfOp4nzs7sLPcL9hI.jpg?scale-down-to=1024',
                  'https://framerusercontent.com/images/eUAb5nMvCfGj2ep4jmGnCaPD7GA.jpg?scale-down-to=1024'
               ],
               href: 'https://timaxelsson.com/about-me'
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
               href: 'https://timaxelsson.com/newsletter'
            }
         }
      ],
      cta: {
         tag: "(reach out)",
         headline: "Let's build together",
         href: "https://timaxelsson.com/contact"
      }
   }
};
