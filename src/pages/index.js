import React from 'react'
import styled from 'styled-components'
import { AnimateKeyframes } from 'react-simple-animate'
import Layout from '../components/layout'
import ReactIcon from '../components/reactIcon'
import AnimatePanel from '../components/animatePanel'
import AnimateKeyframesPanel from '../components/animateKeyframesPanel'
import colors from '../styled/colors'

const HeaderWrapper = styled.div`
  background: ${colors.primary};
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div`
  & > div {
    height: 128px;
    width: 200px;
    margin-bottom: 50px;
    transform-origin: 100px 64px;
  }
`

const Heading = styled.div`
  font-family: 'Fjalla One', sans-serif;
`

const H1 = styled.h1`
  font-size: 34px;
  font-weight: 300;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Fjalla One', sans-serif;
`

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-family: sans-serif;
`

const GitHub = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Menu = styled.span`
  position: absolute;
  top: 16px;
  left: 20px;
`

const Code = styled.span`
  color: ${colors.white};
  display: block;
  width: 330px;
  padding: 10px;
  text-align: center;
  border: 1px solid #ffffff17;
  border-radius: 4px;
  margin: 50px auto 0;
  align-content: unset;
`

const IndexPage = () => (
  <Layout>
    <HeaderWrapper>
      <Menu>
        <svg height="32px" viewBox="0 0 32 32" width="32px">
          <path
            fill="white"
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
          />
        </svg>
      </Menu>
      <GitHub>
        <svg viewBox="0 0 496 512" height="30" aria-hidden="true" focusable="false" fill="currentColor">
          <path
            fill="white"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      </GitHub>
      <Logo>
        <AnimateKeyframes
          play
          durationSeconds={10}
          direaction="alternate"
          iterationCount="infinite"
          keyframes={['transform: rotateZ(0deg)', 'transform: rotateZ(359deg)']}
        >
          <ReactIcon color={colors.white} />
        </AnimateKeyframes>
      </Logo>
      <Heading>
        <H1>UI Animation Made Simple</H1>
        <H2>Minimize React animation effort</H2>
      </Heading>

      <Code>
        <code>npm install --save styled-components</code>
      </Code>
    </HeaderWrapper>

    <AnimatePanel />

    <AnimateKeyframesPanel />
  </Layout>
)

export default IndexPage