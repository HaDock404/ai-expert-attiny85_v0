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
            <ExpandableBox 
                title="Présentation BadUSB"
                span_color="documentation"
                span_text="Documentation"
                text="Une BadUSB est un périphérique USB modifié ou programmé pour exécuter des actions malveillantes sur un ordinateur une fois connecté. Elle exploite une vulnérabilité au niveau du firmware des périphériques USB, qui peut être reprogrammé pour se comporter différemment de ce qu'il est censé faire. Contrairement aux clés USB ordinaires, qui stockent et transfèrent des fichiers, une BadUSB se fait passer pour un périphérique de confiance tel qu'un clavier ou une souris, lui permettant ainsi d'exécuter des commandes ou des scripts automatiquement dès qu'elle est branchée sur un ordinateur. Cela peut inclure l'ouverture de ports réseau, le téléchargement de logiciels malveillants, ou même le vol de données sensibles. Ce type d'attaque est particulièrement dangereux car il est presque indétectable par les systèmes de sécurité traditionnels, puisque les périphériques USB sont généralement considérés comme sûrs par les systèmes d'exploitation. De plus, une fois que le firmware d'un périphérique a été modifié, il est très difficile, voire impossible, de revenir à son état d'origine sans outils spécifiques. Les BadUSB sont souvent utilisées par des attaquants ayant un accès physique à un ordinateur, mais elles peuvent également être introduites dans des environnements sécurisés à travers des campagnes de phishing ou en étant laissées dans des lieux publics pour être ramassées et utilisées par des victimes non méfiantes. La meilleure façon de se protéger contre ce type de menace est de restreindre l'accès aux ports USB, d'utiliser des périphériques USB de confiance uniquement, et de désactiver l'autorun pour empêcher l'exécution automatique de programmes dès que l'USB est branchée."
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
        </main>
    )
}

export default Main