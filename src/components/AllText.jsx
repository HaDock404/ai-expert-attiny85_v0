export const intro_title = {
    en: "Welcome to this tutorial",
    fr: "Bienvenue dans ce tutoriel"
};
export const intro_text = {
    en: "This tutorial is designed exclusively for educational purposes, and it is imperative to never use an ATTiny85 in an illegal or harmful manner. The ATTiny85, although small, can have potentially dangerous applications if it falls into the wrong hands. It is essential to use it with discretion and always ensure that its use adheres to principles of safety and responsibility.",
    fr: "Ce tutoriel est conçu exclusivement à des fins éducatives, et il est impératif de ne jamais utiliser un ATTiny85 dans un cadre illégal ou nuisible. L'ATTiny85, bien que petit, peut avoir des applications potentiellement dangereuses s'il tombe entre de mauvaises mains. Il est essentiel de l'employer avec discernement et de toujours vous assurer que son utilisation respecte les principes de sécurité et de responsabilité."
};
export const intro_quote = {
    en: "Technology cannot replace moral conscience.",
    fr: "La technologie ne peut remplacer la conscience morale."
};

export const title_01 = {
    en: "Présentation BadUSB",
    fr: "Présentation BadUSB"
};
export const text_01 = {
    en: "Une BadUSB est un périphérique USB modifié ou programmé pour exécuter des actions malveillantes sur un ordinateur une fois connecté. Elle exploite une vulnérabilité au niveau du firmware des périphériques USB, qui peut être reprogrammé pour se comporter différemment de ce qu'il est censé faire. Contrairement aux clés USB ordinaires, qui stockent et transfèrent des fichiers, une BadUSB se fait passer pour un périphérique de confiance tel qu'un clavier ou une souris, lui permettant ainsi d'exécuter des commandes ou des scripts automatiquement dès qu'elle est branchée sur un ordinateur. Cela peut inclure l'ouverture de ports réseau, le téléchargement de logiciels malveillants, ou même le vol de données sensibles. Ce type d'attaque est particulièrement dangereux car il est presque indétectable par les systèmes de sécurité traditionnels, puisque les périphériques USB sont généralement considérés comme sûrs par les systèmes d'exploitation. De plus, une fois que le firmware d'un périphérique a été modifié, il est très difficile, voire impossible, de revenir à son état d'origine sans outils spécifiques. Les BadUSB sont souvent utilisées par des attaquants ayant un accès physique à un ordinateur, mais elles peuvent également être introduites dans des environnements sécurisés à travers des campagnes de phishing ou en étant laissées dans des lieux publics pour être ramassées et utilisées par des victimes non méfiantes. La meilleure façon de se protéger contre ce type de menace est de restreindre l'accès aux ports USB, d'utiliser des périphériques USB de confiance uniquement, et de désactiver l'autorun pour empêcher l'exécution automatique de programmes dès que l'USB est branchée.",
    fr: "Une BadUSB est un périphérique USB modifié ou programmé pour exécuter des actions malveillantes sur un ordinateur une fois connecté. Elle exploite une vulnérabilité au niveau du firmware des périphériques USB, qui peut être reprogrammé pour se comporter différemment de ce qu'il est censé faire. Contrairement aux clés USB ordinaires, qui stockent et transfèrent des fichiers, une BadUSB se fait passer pour un périphérique de confiance tel qu'un clavier ou une souris, lui permettant ainsi d'exécuter des commandes ou des scripts automatiquement dès qu'elle est branchée sur un ordinateur. Cela peut inclure l'ouverture de ports réseau, le téléchargement de logiciels malveillants, ou même le vol de données sensibles. Ce type d'attaque est particulièrement dangereux car il est presque indétectable par les systèmes de sécurité traditionnels, puisque les périphériques USB sont généralement considérés comme sûrs par les systèmes d'exploitation. De plus, une fois que le firmware d'un périphérique a été modifié, il est très difficile, voire impossible, de revenir à son état d'origine sans outils spécifiques. Les BadUSB sont souvent utilisées par des attaquants ayant un accès physique à un ordinateur, mais elles peuvent également être introduites dans des environnements sécurisés à travers des campagnes de phishing ou en étant laissées dans des lieux publics pour être ramassées et utilisées par des victimes non méfiantes. La meilleure façon de se protéger contre ce type de menace est de restreindre l'accès aux ports USB, d'utiliser des périphériques USB de confiance uniquement, et de désactiver l'autorun pour empêcher l'exécution automatique de programmes dès que l'USB est branchée."
};

export const title_02 = {
    en: "ATTiny85",
    fr: "ATTiny85"
};
export const text_02 = {
    en: "L'ATTiny85 est un microcontrôleur 8 bits de la famille AVR développé par Atmel (désormais Microchip Technology) qui se distingue par sa petite taille et sa polyvalence. Bien qu'il soit compact, avec seulement 8 broches, il est extrêmement puissant pour les projets d'électronique embarquée nécessitant une faible consommation d'énergie et un espace réduit. L'ATTiny85 est équipé de 8 Ko de mémoire flash, 512 octets de SRAM et 512 octets d'EEPROM, ce qui en fait un choix idéal pour des applications simples mais efficaces, comme la gestion de capteurs, la commande de moteurs ou même des projets de domotique. Grâce à sa capacité à être programmé via l'IDE Arduino, il est accessible aux amateurs et aux professionnels de l'électronique, facilitant son intégration dans une multitude de projets. Il peut être alimenté par une tension allant de 2,7 V à 5,5 V, ce qui lui permet de fonctionner aussi bien sur des piles que sur des alimentations classiques, rendant son usage flexible dans différents contextes. Bien qu'il ait moins de broches qu'un Arduino traditionnel, comme l'UNO, cela ne le limite pas forcément, car il supporte des fonctionnalités comme la communication I2C, SPI, et PWM, et peut utiliser des bibliothèques optimisées pour étendre ses capacités. Une autre de ses forces réside dans sa faible consommation d'énergie, ce qui le rend idéal pour des projets nécessitant une alimentation autonome sur le long terme, comme les dispositifs portables ou les objets connectés. Il est souvent utilisé dans des projets créatifs où l'espace est limité, comme les wearables ou les systèmes intégrés discrets. Cependant, son faible coût et sa simplicité d'utilisation le rendent tout aussi populaire dans l'enseignement et les projets de prototypage rapide.",
    fr: "L'ATTiny85 est un microcontrôleur 8 bits de la famille AVR développé par Atmel (désormais Microchip Technology) qui se distingue par sa petite taille et sa polyvalence. Bien qu'il soit compact, avec seulement 8 broches, il est extrêmement puissant pour les projets d'électronique embarquée nécessitant une faible consommation d'énergie et un espace réduit. L'ATTiny85 est équipé de 8 Ko de mémoire flash, 512 octets de SRAM et 512 octets d'EEPROM, ce qui en fait un choix idéal pour des applications simples mais efficaces, comme la gestion de capteurs, la commande de moteurs ou même des projets de domotique. Grâce à sa capacité à être programmé via l'IDE Arduino, il est accessible aux amateurs et aux professionnels de l'électronique, facilitant son intégration dans une multitude de projets. Il peut être alimenté par une tension allant de 2,7 V à 5,5 V, ce qui lui permet de fonctionner aussi bien sur des piles que sur des alimentations classiques, rendant son usage flexible dans différents contextes. Bien qu'il ait moins de broches qu'un Arduino traditionnel, comme l'UNO, cela ne le limite pas forcément, car il supporte des fonctionnalités comme la communication I2C, SPI, et PWM, et peut utiliser des bibliothèques optimisées pour étendre ses capacités. Une autre de ses forces réside dans sa faible consommation d'énergie, ce qui le rend idéal pour des projets nécessitant une alimentation autonome sur le long terme, comme les dispositifs portables ou les objets connectés. Il est souvent utilisé dans des projets créatifs où l'espace est limité, comme les wearables ou les systèmes intégrés discrets. Cependant, son faible coût et sa simplicité d'utilisation le rendent tout aussi populaire dans l'enseignement et les projets de prototypage rapide."
};
export const text_02bis = {
    en: "L'ATTiny85 coûte en moyenne 1$. Vous pouvez vous en procurez très facilement sur AliExpress.",
    fr: "L'ATTiny85 coûte en moyenne 1$. Vous pouvez vous en procurez très facilement sur AliExpress."
};

export const title_03 = {
    en: "Installation de l'IDE Arduino",
    fr: "Installation de l'IDE Arduino"
};
export const text_03 = {
    en: "Ce tutoriel s'adresse principalement aux utilisateurs de macOS. Pour les autres systèmes d'exploitation, les étapes d'installation et de programmation sont similaires et peuvent être facilement trouvées en ligne ou via des outils comme ChatGPT. Pour commencer, rendez-vous sur le site officiel d'Arduino à l'adresse suivante : https://www.arduino.cc/en/software et téléchargez la version adaptée à macOS. Au moment de la rédaction de ce tutoriel, la dernière version disponible est la 2.3.2.",
    fr: "Ce tutoriel s'adresse principalement aux utilisateurs de macOS. Pour les autres systèmes d'exploitation, les étapes d'installation et de programmation sont similaires et peuvent être facilement trouvées en ligne ou via des outils comme ChatGPT. Pour commencer, rendez-vous sur le site officiel d'Arduino à l'adresse suivante : https://www.arduino.cc/en/software et téléchargez la version adaptée à macOS. Au moment de la rédaction de ce tutoriel, la dernière version disponible est la 2.3.2."
};
export const text_03bis = {
    en: "Localisez le fichier d'installation dans votre dossier 'Téléchargements', puis double-cliquez dessus pour lancer l'installation. Suivez ensuite les instructions à l'écran pour terminer l'installation de l'IDE.",
    fr: "Localisez le fichier d'installation dans votre dossier 'Téléchargements', puis double-cliquez dessus pour lancer l'installation. Suivez ensuite les instructions à l'écran pour terminer l'installation de l'IDE."
};

export const title_04 = {
    en: "Mise à jour des bibliothèques",
    fr: "Mise à jour des bibliothèques"
};
export const text_04 = {
    en: "Pour utiliser la bibliothèque correspondant à l'ATTiny85, vous devez d'abord mettre à jour les bibliothèques disponibles dans l'IDE Arduino. Pour cela, allez dans 'Préférences' et entrez l'adresse suivante dans le champ prévu à cet effet, comme illustré : https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json.",
    fr: "Pour utiliser la bibliothèque correspondant à l'ATTiny85, vous devez d'abord mettre à jour les bibliothèques disponibles dans l'IDE Arduino. Pour cela, allez dans 'Préférences' et entrez l'adresse suivante dans le champ prévu à cet effet, comme illustré : https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json."
};
export const text_04bis = {
    en: "Cliquez ensuite sur 'OK' pour confirmer.",
    fr: "Cliquez ensuite sur 'OK' pour confirmer."
};

export const title_05 = {
    en: "Installation de la bibliothèque Digistump AVR Board",
    fr: "Installation de la bibliothèque Digistump AVR Board"
};
export const text_05 = {
    en: "Dans le menu 'Outils', ouvrez le Gestionnaire de cartes, recherchez Digistump AVR Boards, puis procédez à son installation.",
    fr: "Dans le menu 'Outils', ouvrez le Gestionnaire de cartes, recherchez Digistump AVR Boards, puis procédez à son installation."
};
export const text_05bis = {
    en: "",
    fr: ""
};

export const title_06 = {
    en: "Importation des bibliothèques",
    fr: "Importation des bibliothèques"
};
export const text_06 = {
    en: "Avant de commencer à coder, il est essentiel d'importer les bibliothèques que vous avez installées précédemment pour l'ATTiny85. Pour cela, allez dans la section 'Croquis' de l'IDE Arduino, puis sélectionnez 'Importer bibliothèque'. Choisissez ensuite la bibliothèque correspondante : DigisparkKeyboard.",
    fr: "Avant de commencer à coder, il est essentiel d'importer les bibliothèques que vous avez installées précédemment pour l'ATTiny85. Pour cela, allez dans la section 'Croquis' de l'IDE Arduino, puis sélectionnez 'Importer bibliothèque'. Choisissez ensuite la bibliothèque correspondante : DigisparkKeyboard."
};
export const text_06bis = {
    en: "Vous verez alors apparaitre dans votre interface de code les différentes bibliothèques nécessaires.",
    fr: "Vous verez alors apparaitre dans votre interface de code les différentes bibliothèques nécessaires."
};

export const title_07 = {
    en: "Exemple de code",
    fr: "Exemple de code"
};
export const text_07 = {
    en: "Voici un exemple de code simple qui fonctionne et ne cause aucun dégat à votre machine.",
    fr: "Voici un exemple de code simple qui fonctionne et ne cause aucun dégat à votre machine."
};
export const text_07bis = {
    en: "",
    fr: ""
};

export const title_08 = {
    en: "Téléversement du code",
    fr: "Téléversement du code"
};
export const text_08 = {
    en: "Le téléversement du code se fait par le biais de la flèche tourné vers la droite en haut à gauche de votre IDE. Vous avez alors 60secondes pour brancher l'ATTiny85 avec votre machine.",
    fr: "Le téléversement du code se fait par le biais de la flèche tourné vers la droite en haut à gauche de votre IDE. Vous avez alors 60secondes pour brancher l'ATTiny85 avec votre machine."
};
export const text_08bis = {
    en: "Retirez rapidement votre ATTiny85 à la fin du téléversement, celui ci voudra immédiatement injecter son programme sur votre machine. Il est préférable de le tester sur un page vierge de textEdit ou tout autre outil de traitement de texte.",
    fr: "Retirez rapidement votre ATTiny85 à la fin du téléversement, celui ci voudra immédiatement injecter son programme sur votre machine. Il est préférable de le tester sur un page vierge de textEdit ou tout autre outil de traitement de texte."
};

export const title_09 = {
    en: "MAJ ATTiny85",
    fr: "MAJ ATTiny85"
};
export const text_09 = {
    en: "Il peut être parfois important de mettre à jour l'ATTiny85, pour cela suivez les instructions ci dessous.",
    fr: "Il peut être parfois important de mettre à jour l'ATTiny85, pour cela suivez les instructions ci dessous."
};
export const text_09bis = {
    en: "",
    fr: ""
};

export const title_10 = {
    en: "Remise à zéro",
    fr: "Remise à zéro"
};
export const text_10 = {
    en: "Pour remettre l'ATTiny85 à zéro, suivez les instructions ci-dessous.",
    fr: "Pour remettre l'ATTiny85 à zéro, suivez les instructions ci-dessous."
};
export const text_10bis = {
    en: "",
    fr: ""
};