import styled from 'styled-components';
import '../styles/textStyle.css';

const fontMapStyle = {
  heading1: '40px',
  heading2: '35px',
  heading3: '30px',
  title1: '18px',
  title1_bold: '18px',
  title2: '16px',
  title2_bold: '16px',
  title2_underline: '16px',
};

const Text = styled.div`

  font-size: ${({ type }) => fontMapStyle[type]
};
  font-weight: ${({ type }) => {
    if (type === 'title1_bold') return 'bold';
    if (type === 'title2_bold') return 'bold';
    if (!type) return 'normal';
  }};
  text-decoration: ${({ type }) => (type.includes('underline') ? 'underline' : 'none')};
  font-family: ${({ font, type }) => {
    if (font === 'serrif') return "'PT Serif', serif";
    if (font === 'sans') return "'PT Sans', sans-serif";
    if (type === 'heading1' || type === 'heading2' || type === 'heading3') return "'PT Serif', serif";
    return "'PT Sans', sans-serif";
  }};
};
`;
export default Text;
