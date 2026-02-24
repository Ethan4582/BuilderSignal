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
               video: 'https://cdn.pixabay.com/video/2021/08/04/83896-584732177_large.mp4' // Placeholder since Firebase 401s
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
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
               ],
               href: 'https://timaxelsson.com/about-me'
            },
            right: {
               video: 'https://cdn.pixabay.com/video/2019/02/13/21356-317135069_large.mp4' // Placeholder
            }
         },
         {
            id: 'row4',
            left: {
               video: 'https://cdn.pixabay.com/video/2020/05/11/38600-418701968_large.mp4',
               image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80'
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
