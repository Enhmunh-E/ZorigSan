import _ from "lodash";
import styled from "styled-components";

const Image = styled.div`
    width:${{width}}px;
    height:${{height}}px;
    border-radius: ${{border_radiuse}}px;
    background-color: ${{background_color}};
    opacity: ${{opacity}};
    margin-left: ${{margin_left}};
    margin-right: ${{margin_right}};
    margin-top: ${{margin_top}};
    margin-bottom: ${{margin_bottom}};
    margin: ${{n}};
    padding-left: ${{padding_left}};
    padding-right: ${{padding_right}};
    padding-top: ${{padding_top}};
    padding-bottom: ${{padding_bottom}};
`;


export { Image };