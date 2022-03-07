import styled from 'styled-components'

const Opacity = styled.div`
    ${(props) => props.opacity ? `opacity: ${props.opacity} ` : 'opacity: 1'}
`

export default Opacity