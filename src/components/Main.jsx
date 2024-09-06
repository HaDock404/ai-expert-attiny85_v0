import Intro from "./Intro"
import ExpandableBox from "./ExpandableBox"
import ExpandableBoxWithImage from "./ExpandableBoxWithImage"
import NavLinks from "./NavLinks"

import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.jpg'
import Image7 from '../assets/image7.png'
import Image8 from '../assets/image8.png'
import Image9 from '../assets/image9.png'

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import * as Text from "./AllText";

function Main() {
    const { language } = useContext(LanguageContext);

    return (
        <main>
            <Intro 
                title={Text.intro_title[language]}
                text={Text.intro_text[language]}
                quote={Text.intro_quote[language]}
            />
            <NavLinks />
            <ExpandableBox 
                title={Text.title_01[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_01[language]}
            />
            <ExpandableBoxWithImage 
                id="id6"
                title={Text.title_02[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_02[language]}
                image={Image6}
                text_paragraph={Text.text_02bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id1"
                title={Text.title_03[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_03[language]}
                image={Image1}
                text_paragraph={Text.text_03bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id2"
                title={Text.title_04[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_04[language]}
                image={Image2}
                text_paragraph={Text.text_04bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id3"
                title={Text.title_05[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_05[language]}
                image={Image3}
                text_paragraph={Text.text_05bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id4"
                title={Text.title_06[language]}
                span_color="graphical"
                span_text="Code"
                text={Text.text_06[language]}
                image={Image4}
                text_paragraph={Text.text_06bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id5"
                title={Text.title_07[language]}
                span_color="graphical"
                span_text="Code"
                text={Text.text_07[language]}
                image={Image5}
                text_paragraph={Text.text_07bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id7"
                title={Text.title_08[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_08[language]}
                image={Image7}
                text_paragraph={Text.text_08bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id8"
                title={Text.title_09[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_09[language]}
                image={Image8}
                text_paragraph={Text.text_09bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id9"
                title={Text.title_10[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_10[language]}
                image={Image9}
                text_paragraph={Text.text_10bis[language]}
            />
        </main>
    )
}

export default Main