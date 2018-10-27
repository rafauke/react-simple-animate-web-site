// @flow
import React from 'react'
import { AnimateKeyframes } from 'react-simple-animate'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import colors from '../styled/colors'
import CodeContainer from '../components/codeContainer'

registerLanguage('jsx', jsx)

const ButtonWrapper = styled.div`
  margin-bottom: 20px;

  & button {
    border-color: ${colors.primary};
  }
`

const code = () => `<AnimateKeyframes
  play
  iterationCount="infinite"
  direaction="alternate"
  durationSeconds={10}
  keyframes={[
    'rotateX(0) rotateY(0) rotateZ(0)',
    'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
  ]}
>
  <Component />
</AnimateKeyframes>
`

const View = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  perspective: 400px;
  height: 490px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(60deg) rotateZ(-30deg);
    width: 180px;
    height: 180px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    & > div:first-child {
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: ${colors.primary};
        box-sizing: border-box;
      }
    }
  }
`

const Cricle = styled.div`
  width: 180px;
  height: 180px;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  border-radius: 100%;
  box-sizing: border-box;
  border: 10px solid ${colors.primary};
  //box-shadow: 10px 10px 0px ${colors.primary};
`

const ViewWrapper = styled.div`
  height: 300px;
`

export default class AnimateKeyframesPanel extends React.PureComponent {
  state = {
    play: false,
  }

  render() {
    const { play } = this.state

    return (
      <CodeContainer title="Animate Keyframes" description="Css keyframes animation within Component">
        <ViewWrapper>
          <View>
            <AnimateKeyframes
              play
              iterationCount="infinite"
              direction="alternate"
              durationSeconds={10}
              playState={!play ? 'running' : 'paused'}
              keyframes={[
                'rotateX(0) rotateY(0) rotateZ(0)',
                'transform: rotateX(359deg) rotateY(359deg) rotateZ(359deg)',
              ]}
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Cricle
                    style={{
                      transform: `rotateZ(${((i + 1) / 5) * 360}deg) rotateX(63.435deg)`,
                    }}
                    key={i}
                  />
                ))}
            </AnimateKeyframes>
          </View>
        </ViewWrapper>

        <ButtonWrapper onClick={() => this.setState(({ play }) => ({ play: !play }))}>
          <Button variant="outlined">{play ? 'Play' : 'Pause'}</Button>
        </ButtonWrapper>

        <SyntaxHighlighter language="javascript" style={docco}>
          {code(play)}
        </SyntaxHighlighter>
      </CodeContainer>
    )
  }
}