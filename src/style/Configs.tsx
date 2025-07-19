export const configs = {
  //algorithm
  baseFontSize: 16,
  rem:(pixels:number)=>`${pixels / 16}rem`,
  shadow:(shade:string)=>({boxShadow:`0 0 5px 2px ${shade}`,}),

  transition: (duration = '.2s', timing = 'ease') => ({
  transition: `${duration} ${timing}`,}),

  size: (x = '110%', y = '110%') => ({ width: x, height: y }),
  sameSize: (v = '110%') => ({ width: v, height: v }),

  hexToRgba(hex: string, alpha: number = 1): string {
    const sanitizedHex = hex.replace('#', ''),
    fullHex = sanitizedHex.length === 3? sanitizedHex
    .split('').map((char) => char + char).join('') : sanitizedHex,

    r = parseInt(fullHex.slice(0, 2), 16),
    g = parseInt(fullHex.slice(2, 4), 16),
    b = parseInt(fullHex.slice(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  gradient(primary: string, secondary: string, direction: string = 'to right'): string {
    return `background:${primary};
    background:-webkit-linear-gradient(${direction}, ${secondary}, ${primary});
    background:linear-gradient(${direction}, ${secondary}, ${primary});`
  },

  gradientText(primary:string, secondary:string, direction = 'to bottom'):string {
    return `
      background:linear-gradient(${direction}, ${primary}, ${secondary});
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip:text;
      color:transparent;
    `;
  },

  //defaults
  topLeft: { top: 0, left: 0 },

  absolute: { position: 'absolute', top: 0, left: 0 },
  fixed: { position: 'fixed', top: 0, left: 0 },

  screen: { position: 'fixed', top: 0, left: 0, width: '100dvw', height: '100dvh', zIndex:10 },
  screenContainer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },

  defDoubleDot: {content:"''",position:'absolute',display:'block' },
  bgStyle: { backgroundRepeat: 'no-repeat', backgroundSize: 'cover' },
  
  color: {
    //main
    blue:'#1A73E8',
    strongBlue:'#0057B7',
    indigo:'#3F51B5',

    strongPurple:'#E64A19',
    purple:'#FF7534',
    lavender:'#FFA374',
    violet:'#FFD2B3',

    darkPurple:'#5E239D',

    engiRed:'#D7263D',
    red:'#FF4C4C',
    orangeRed:'#FF6534',

    orange:'#FF7534',
    yellow:'#FFD166',

    limeGreen:'#B9E937',
    green:'#2E8B57',
    
    //default
    bgdm:'#f8f9fa',
    white:'#fff',
    platinum:'#dee2e6',

    erieBlack:'#191919',
    textCl:'#212529',
    shadow:'rgba(222,226,230,.5)',
  },
  
  flex: {
    center: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    space: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    start: { display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' },

    end: { display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' },
    startCenter: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' },
    centerStart: { display: 'flex', justifyContent: 'center', alignItems: 'flex-start' },

    endCenter: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' },
    column: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    columnSpace: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' },
    startColumnSpace: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' },

    columnCenterStart: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
    startColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' },
    startCenterColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
    endColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' },
    endColumnStart: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }
  }
} as const
