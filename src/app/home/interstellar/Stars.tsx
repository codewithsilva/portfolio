  import React, { useEffect, useState } from 'react'
  import styled, { keyframes, css } from 'styled-components'

  const pulseFilter = keyframes`
    0%, 100% {
      filter:blur(0) brightness(80%);
      transform:scale(1);
    }

    50% {
      filter:blur(1.5px) brightness(100%);
      transform:scale(1.1);
    }
  `,

  moveStar = (radius:number, direction:number) => keyframes`
    0%, 100% {transform:translate3d(0, 0, 0) rotate(0deg);}
    50% {
      transform:translate3d(${Math.cos(direction) * radius}px, ${Math.sin(direction) * radius}px, 0) rotate(360deg);
    }
    100% {transform:translate3d(0, 0, 0);}
  `,

  Container = styled.article`
    ${({theme})=>theme.screenContainer};
    inset:0;
    z-index:0;
    pointer-events:none;
    animation:${pulseFilter} 12s ease-in-out infinite;
  `,

  Star = styled.span<{
    $leftPercent:number; $topPercent:number; $size:number;
    $opacity:number; $duration:number; $delay:number;
    $radius:number; $direction:number;
  }>`
    position:absolute;
    left:${({$leftPercent}) => `${$leftPercent}%`};
    top:${({$topPercent}) => `${$topPercent}%`};

    width:${({$size}) => `${$size}px`};
    height:${({$size}) => `${$size}px`};

    background:linear-gradient(135deg, rgba(173, 216, 230, .5), rgba(173, 216, 230, 1));
    opacity:${({$opacity}) => $opacity};
    border-radius:1rem 0;

    box-shadow:0 0 .5rem rgba(173, 216, 230, 1);
    animation:${({$radius, $direction, $duration}) => css`
    ${moveStar($radius, $direction)} ${$duration}s ease-in-out infinite`};
    animation-delay:${({$delay}) => $delay}s;
  `

  interface StarData {
    leftPercent:number; topPercent:number; size:number;
    opacity:number; duration:number; delay:number;
    radius:number; direction:number;
  }

  export const Stars:React.FC<{quantity?:number}> = ({quantity=25})=>{
    const [stars, setStars] = useState<StarData[]>([]),
    [isClient, setIsClient] = useState(false), MIN_DIST = 8

    useEffect(() => setIsClient(true), [])
    useEffect(() => {
      if (!isClient) return

      const w = window.innerWidth,
      screenFactor = Math.min(1, w / 1440),
      starArray:StarData[] = []

      while (starArray.length < quantity) {
        const leftPercent = Math.random() * 100,
        topPercent = Math.random() * 100,

        tooClose = starArray.some(s =>
          Math.abs(s.leftPercent - leftPercent) < MIN_DIST &&
          Math.abs(s.topPercent - topPercent) < MIN_DIST
        )

        if (tooClose) continue
        const baseSize = Math.random() * 21, size = baseSize * screenFactor
        starArray.push({leftPercent, topPercent, size,
          opacity:Math.random() * 0.3 + 0.4, duration:Math.random() * 6 + 6,
          delay:Math.random() * 3, radius:Math.random() * 40 + 20, direction:Math.random() * Math.PI * 2,
        })
      }

      setStars(starArray)
    }, [quantity, isClient])

    if (!isClient) return null
    return (
      <Container>
        {stars.map((star, idx) => (<Star key={idx}
        $leftPercent={star.leftPercent} $topPercent={star.topPercent}
        $size={star.size} $opacity={star.opacity}

        $duration={star.duration} $delay={star.delay}
        $radius={star.radius} $direction={star.direction}/>))}
      </Container>
    )
  }
