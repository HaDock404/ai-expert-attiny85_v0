import Intro from "./Intro"
import ExpandableBox from "./ExpandableBox"
import ExpandableBoxWithImage from "./ExpandableBoxWithImage"

import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'

function Main() {
    return (
        <main>
            <Intro 
                title="Bienvenue dans ce tutoriel"
                text="Ce tutoriel est conçu exclusivement à des fins éducatives, et il est impératif de ne jamais utiliser un ATTiny85 dans un cadre illégal ou nuisible. L'ATTiny85, bien que petit, peut avoir des applications potentiellement dangereuses s'il tombe entre de mauvaises mains. Il est essentiel de l'employer avec discernement et de toujours vous assurer que son utilisation respecte les principes de sécurité et de responsabilité."
                quote="La technologie ne peut remplacer la conscience morale."
            />
            <ExpandableBoxWithImage 
                id="id1"
                title="Installation de l'IDE Arduino"
                span_color="documentation"
                span_text="Documentation"
                text="Ce tutoriel s'adresse principalement aux utilisateurs de macOS. Pour les autres systèmes d'exploitation, les étapes d'installation et de programmation sont similaires et peuvent être facilement trouvées en ligne ou via des outils comme ChatGPT. Pour commencer, rendez-vous sur le site officiel d'Arduino à l'adresse suivante : https://www.arduino.cc/en/software et téléchargez la version adaptée à macOS. Au moment de la rédaction de ce tutoriel, la dernière version disponible est la 2.3.2."
                image={Image1}
                text_paragraph="Localisez le fichier d'installation dans votre dossier 'Téléchargements', puis double-cliquez dessus pour lancer l'installation. Suivez ensuite les instructions à l'écran pour terminer l'installation de l'IDE."
            />
            <ExpandableBoxWithImage 
                id="id2"
                title="Mise à jour des bibliothèques"
                span_color="documentation"
                span_text="Documentation"
                text="Pour utiliser la bibliothèque correspondant à l'ATTiny85, vous devez d'abord mettre à jour les bibliothèques disponibles dans l'IDE Arduino. Pour cela, allez dans 'Préférences' et entrez l'adresse suivante dans le champ prévu à cet effet, comme illustré : https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json."
                image={Image2}
                text_paragraph="Cliquez ensuite sur 'OK' pour confirmer."
            />
            <ExpandableBoxWithImage 
                id="id3"
                title="Installation de la bibliothèque Digistump AVR Board"
                span_color="documentation"
                span_text="Documentation"
                text="Dans le menu 'Outils', ouvrez le Gestionnaire de cartes, recherchez Digistump AVR Boards, puis procédez à son installation."
                image={Image3}
                text_paragraph=""
            />
            <ExpandableBox 
                title=""
                span_color="documentation"
                span_text="Documentation"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum."
            />
            <ExpandableBoxWithImage 
                title="Présentation du projet"
                span_color="documentation"
                span_text="Documentation"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum."
                image={Image1}
                text_paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum."
            />
        </main>
    )
}

export default Main