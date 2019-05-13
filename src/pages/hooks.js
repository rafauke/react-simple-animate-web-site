import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import { ContentContainer } from '../styled/containers'
import Helmet from 'react-helmet'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { Link } from 'gatsby'

const useAnimate = `import React from 'react'
import { useAnimate } from 'react-simple-animate';

export default function example() {
  const {style, play, isPlaying} = useAnimate({
    start: { opacity: 0 }, // refer <Animate /> for props information
    end: { opacity: 1 }
  });
  
  return <>
    <div style={style}>show me</div>
    <button onClick={() => play(!isPlaying)}>Play</button>
  </>;
}`

const useKeyframes = `import React from 'react'
import { useAnimateKeyframes } from 'react-simple-animate';

export default function example() {
  const {style, play, isPlaying} = useAnimateKeyframes({
    keyframes: [ 'opacity: 0', 'opacity: 1' ], // refer <AniamteKeyframes /> for props information
  });
  
  return <>
    <div style={style}>show me</div>
    <button onClick={() => play(!isPlaying)}>Play</button>
  </>;
}`

const useAnimateGroup = `import React from 'react'
import { useAnimateGroup } from 'react-simple-animate';

export default function example() {
  const {styles, play, isPlaying} = useAnimateGroup({
    sequences: [{
      start: { opacity: 0 }, // refer <Animate /> for props information
      end: { opacity: 1 },
      keyframes: [ 'opacity: 0', 'opacity: 1' ], // refer <AniamteKeyframes /> for props information
    }]
  });
  
  return <>
    {styles.map(style => <div style={style}>show me</div>)}
    <button onClick={() => play(!isPlaying)}>Play</button>
  </>;
}`

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'Hooks - useAnimate and useAnimateKeyframes with react simple animate'}
      meta={[{ name: 'description', content: 'React animation basics' }]}
    >
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="Basics" />

    <ContentContainer>
      <h3>useAnimate</h3>

      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate">
          <code>{`<Animate />`}</code>
        </Link>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {useAnimate}
      </SyntaxHighlighter>

      <h3>useAnimateKeyframes</h3>

      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate-keyframes">
          <code>{`<AnimateKeyframes />`}</code>
        </Link>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {useKeyframes}
      </SyntaxHighlighter>

      <h3>useAnimateGroup</h3>
      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate-group">
          <code>{`<AnimateGroup />`}</code>
        </Link>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {useAnimateGroup}
      </SyntaxHighlighter>
    </ContentContainer>
  </Layout>
)

export default AnimateGroup
