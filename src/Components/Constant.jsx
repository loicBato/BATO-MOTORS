

import logoToyota from '../assets/toyota.jpg';
import logoNissan from '../assets/nissan.jpeg';
import logoBMW from '../assets/bmw.jpeg';
import logoMazda from '../assets/mazda.jpg';
import logoHonda from '../assets/honda.jpeg';
import logoKia from '../assets/kia.jpg';
import logoVolkswagen from '../assets/volkswagen.jpeg';
import logoMercedes from '../assets/mercedes.jpeg';
import logoAudi from '../assets/audi.jpeg';
import logoFord from '../assets/ford.jpeg';
import logoRenault from '../assets/renault.jpeg';

export const BRANDS_DATA = [
    {
        id: 'toyota',
        name: 'Toyota',
        logoUrl: logoToyota,
        models: [
            {
                id: 'corolla',
                name: 'Corolla Hybrid',
                parts: [
                    {
                        id: 'toy-corolla-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre haute performance pour moteur hybride.',
                        imageUrl: 'https://picsum.photos/seed/corolla1/400/300',
                        price: 24000
                    },
                    {
                        id: 'toy-corolla-brake',
                        name: 'Plaquettes de frein',
                        category: 'Freinage',
                        description: 'Jeu complet pour freinage optimal.',
                        imageUrl: 'https://picsum.photos/seed/corolla2/400/300',
                        price: 60000
                    },
                    {
                        id: 'toy-corolla-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/corolla3/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-corolla-shock',
                        name: 'Amortisseur avant',
                        category: 'Suspension',
                        description: 'Amortisseur pour une conduite souple.',
                        imageUrl: 'https://picsum.photos/seed/corolla4/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-corolla-battery',
                        name: 'Batterie 12V',
                        category: 'Électronique',
                        description: 'Batterie de démarrage fiable.',
                        imageUrl: 'https://picsum.photos/seed/corolla5/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-corolla-spark',
                        name: "Bougie d'allumage",
                        category: 'Moteur',
                        description: "Bougie d'allumage haute performance.",
                        imageUrl: 'https://picsum.photos/seed/corolla6/400/300',
                        price: 15000
                    },
                    {
                        id: 'toy-corolla-wiper',
                        name: "Balai d'essuie-glace",
                        category: 'Accessoires',
                        description: "Balai d'essuie-glace avant.",
                        imageUrl: 'https://picsum.photos/seed/corolla7/400/300',
                        price: 12000
                    },
                    {
                        id: 'toy-corolla-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare LED de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/corolla8/400/300',
                        price: 180000
                    },
                    {
                        id: 'toy-corolla-mirror',
                        name: 'Rétroviseur droit',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur avec clignotant.',
                        imageUrl: 'https://picsum.photos/seed/corolla9/400/300',
                        price: 75000
                    },
                    {
                        id: 'toy-corolla-radiator',
                        name: 'Radiateur moteur',
                        category: 'Refroidissement',
                        description: 'Radiateur pour un refroidissement efficace.',
                        imageUrl: 'https://picsum.photos/seed/corolla10/400/300',
                        price: 130000
                    },
                    {
                        id: 'toy-corolla-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de charge pour système électrique.',
                        imageUrl: 'https://picsum.photos/seed/corolla11/400/300',
                        price: 250000
                    },
                    {
                        id: 'toy-corolla-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/corolla12/400/300',
                        price: 110000
                    },
                    {
                        id: 'toy-corolla-sensor',
                        name: 'Capteur ABS',
                        category: 'Électronique',
                        description: 'Capteur de vitesse de roue.',
                        imageUrl: 'https://picsum.photos/seed/corolla13/400/300',
                        price: 55000
                    },
                    {
                        id: 'toy-corolla-muffler',
                        name: "Silencieux d'échappement",
                        category: 'Échappement',
                        description: "Silencieux arrière pour Corolla.",
                        imageUrl: 'https://picsum.photos/seed/corolla14/400/300',
                        price: 95000
                    },
                    {
                        id: 'toy-corolla-belt',
                        name: "Courroie de distribution",
                        category: 'Moteur',
                        description: "Kit courroie de distribution.",
                        imageUrl: 'https://picsum.photos/seed/corolla15/400/300',
                        price: 160000
                    }
                ]
            },
            {
                id: 'rav4',
                name: 'RAV4',
                parts: [
                    {
                        id: 'toy-rav4-airfilter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtration renforcée pour SUV hybride.',
                        imageUrl: 'https://picsum.photos/seed/rav41/400/300',
                        price: 28000
                    },
                    {
                        id: 'toy-rav4-rad',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/rav42/400/300',
                        price: 155000
                    },
                    {
                        id: 'toy-rav4-brake-disc',
                        name: 'Disque de frein avant',
                        category: 'Freinage',
                        description: 'Disque de frein ventilé.',
                        imageUrl: 'https://picsum.photos/seed/rav43/400/300',
                        price: 75000
                    },
                    {
                        id: 'toy-rav4-strut',
                        name: 'Jambe de force',
                        category: 'Suspension',
                        description: 'Jambe de force complète avant.',
                        imageUrl: 'https://picsum.photos/seed/rav44/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-rav4-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant pour RAV4.',
                        imageUrl: 'https://picsum.photos/seed/rav45/400/300',
                        price: 35000
                    },
                    {
                        id: 'toy-rav4-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur pour système électrique.',
                        imageUrl: 'https://picsum.photos/seed/rav46/400/300',
                        price: 280000
                    },
                    {
                        id: 'toy-rav4-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de refroidissement.',
                        imageUrl: 'https://picsum.photos/seed/rav47/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-rav4-cv-joint',
                        name: 'Joint homocinétique',
                        category: 'Transmission',
                        description: 'Joint homocinétique pour arbre de transmission.',
                        imageUrl: 'https://picsum.photos/seed/rav48/400/300',
                        price: 60000
                    },
                    {
                        id: 'toy-rav4-headlight',
                        name: 'Phare avant gauche',
                        category: 'Éclairage',
                        description: 'Phare LED avec DRL.',
                        imageUrl: 'https://picsum.photos/seed/rav49/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-rav4-tail-light',
                        name: 'Feu arrière droit',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/rav410/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-rav4-bumper',
                        name: 'Pare-chocs avant',
                        category: 'Carrosserie',
                        description: 'Pare-chocs avant non peint.',
                        imageUrl: 'https://picsum.photos/seed/rav411/400/300',
                        price: 150000
                    },
                    {
                        id: 'toy-rav4-grille',
                        name: 'Calandre',
                        category: 'Carrosserie',
                        description: 'Calandre avant chromée.',
                        imageUrl: 'https://picsum.photos/seed/rav412/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-rav4-window-regulator',
                        name: 'Lève-vitre électrique',
                        category: 'Intérieur',
                        description: 'Lève-vitre avant gauche.',
                        imageUrl: 'https://picsum.photos/seed/rav413/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-rav4-ac-compressor',
                        name: 'Compresseur de climatisation',
                        category: 'Climatisation',
                        description: 'Compresseur de climatisation complet.',
                        imageUrl: 'https://picsum.photos/seed/rav414/400/300',
                        price: 300000
                    },
                    {
                        id: 'toy-rav4-power-steering-pump',
                        name: 'Pompe de direction assistée',
                        category: 'Direction',
                        description: 'Pompe de direction assistée hydraulique.',
                        imageUrl: 'https://picsum.photos/seed/rav415/400/300',
                        price: 140000
                    }
                ]
            },
            {
                id: 'camry',
                name: 'Camry',
                parts: [
                    {
                        id: 'toy-camry-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Camry.',
                        imageUrl: 'https://picsum.photos/seed/camry1/400/300',
                        price: 25000
                    },
                    {
                        id: 'toy-camry-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/camry2/400/300',
                        price: 65000
                    },
                    {
                        id: 'toy-camry-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/camry3/400/300',
                        price: 30000
                    },
                    {
                        id: 'toy-camry-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/camry4/400/300',
                        price: 50000
                    },
                    {
                        id: 'toy-camry-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/camry5/400/300',
                        price: 160000
                    },
                    {
                        id: 'toy-camry-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/camry6/400/300',
                        price: 260000
                    },
                    {
                        id: 'toy-camry-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/camry7/400/300',
                        price: 110000
                    },
                    {
                        id: 'toy-camry-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/camry8/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-camry-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Camry.',
                        imageUrl: 'https://picsum.photos/seed/camry9/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-camry-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/camry10/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-camry-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/camry11/400/300',
                        price: 190000
                    },
                    {
                        id: 'toy-camry-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/camry12/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-camry-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/camry13/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-camry-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/camry14/400/300',
                        price: 20000
                    },
                    {
                        id: 'toy-camry-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu été haute performance.',
                        imageUrl: 'https://picsum.photos/seed/camry15/400/300',
                        price: 90000
                    }
                ]
            },
            {
                id: 'yaris',
                name: 'Yaris',
                parts: [
                    {
                        id: 'toy-yaris-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Yaris.',
                        imageUrl: 'https://picsum.photos/seed/yaris1/400/300',
                        price: 22000
                    },
                    {
                        id: 'toy-yaris-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/yaris2/400/300',
                        price: 55000
                    },
                    {
                        id: 'toy-yaris-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/yaris3/400/300',
                        price: 25000
                    },
                    {
                        id: 'toy-yaris-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/yaris4/400/300',
                        price: 40000
                    },
                    {
                        id: 'toy-yaris-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/yaris5/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-yaris-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/yaris6/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-yaris-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/yaris7/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-yaris-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/yaris8/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-yaris-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Yaris.',
                        imageUrl: 'https://picsum.photos/seed/yaris9/400/300',
                        price: 65000
                    },
                    {
                        id: 'toy-yaris-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/yaris10/400/300',
                        price: 60000
                    },
                    {
                        id: 'toy-yaris-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/yaris11/400/300',
                        price: 150000
                    },
                    {
                        id: 'toy-yaris-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/yaris12/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-yaris-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/yaris13/400/300',
                        price: 65000
                    },
                    {
                        id: 'toy-yaris-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/yaris14/400/300',
                        price: 18000
                    },
                    {
                        id: 'toy-yaris-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/yaris15/400/300',
                        price: 75000
                    }
                ]
            },
            {
                id: 'prius',
                name: 'Prius',
                parts: [
                    {
                        id: 'toy-prius-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Prius hybride.',
                        imageUrl: 'https://picsum.photos/seed/prius1/400/300',
                        price: 26000
                    },
                    {
                        id: 'toy-prius-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein régénératives.',
                        imageUrl: 'https://picsum.photos/seed/prius2/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-prius-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/prius3/400/300',
                        price: 32000
                    },
                    {
                        id: 'toy-prius-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage Iridium.",
                        imageUrl: 'https://picsum.photos/seed/prius4/400/300',
                        price: 55000
                    },
                    {
                        id: 'toy-prius-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/prius5/400/300',
                        price: 170000
                    },
                    {
                        id: 'toy-prius-inverter',
                        name: 'Onduleur hybride',
                        category: 'Électronique',
                        description: 'Onduleur pour système hybride.',
                        imageUrl: 'https://picsum.photos/seed/prius6/400/300',
                        price: 500000
                    },
                    {
                        id: 'toy-prius-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique.',
                        imageUrl: 'https://picsum.photos/seed/prius7/400/300',
                        price: 130000
                    },
                    {
                        id: 'toy-prius-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/prius8/400/300',
                        price: 125000
                    },
                    {
                        id: 'toy-prius-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Prius.',
                        imageUrl: 'https://picsum.photos/seed/prius9/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-prius-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/prius10/400/300',
                        price: 75000
                    },
                    {
                        id: 'toy-prius-headlight',
                        name: 'Phare avant gauche',
                        category: 'Éclairage',
                        description: 'Phare avant LED.',
                        imageUrl: 'https://picsum.photos/seed/prius11/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-prius-tail-light',
                        name: 'Feu arrière droit',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/prius12/400/300',
                        price: 95000
                    },
                    {
                        id: 'toy-prius-mirror',
                        name: 'Rétroviseur droit',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/prius13/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-prius-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/prius14/400/300',
                        price: 22000
                    },
                    {
                        id: 'toy-prius-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu à faible résistance au roulement.',
                        imageUrl: 'https://picsum.photos/seed/prius15/400/300',
                        price: 95000
                    }
                ]
            },
            {
                id: 'hilux',
                name: 'Hilux',
                parts: [
                    {
                        id: 'toy-hilux-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Hilux diesel.',
                        imageUrl: 'https://picsum.photos/seed/hilux1/400/300',
                        price: 28000
                    },
                    {
                        id: 'toy-hilux-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein robustes.',
                        imageUrl: 'https://picsum.photos/seed/hilux2/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-hilux-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/hilux3/400/300',
                        price: 35000
                    },
                    {
                        id: 'toy-hilux-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/hilux4/400/300',
                        price: 40000
                    },
                    {
                        id: 'toy-hilux-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/hilux5/400/300',
                        price: 180000
                    },
                    {
                        id: 'toy-hilux-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute puissance.',
                        imageUrl: 'https://picsum.photos/seed/hilux6/400/300',
                        price: 300000
                    },
                    {
                        id: 'toy-hilux-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/hilux7/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-hilux-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/hilux8/400/300',
                        price: 250000
                    },
                    {
                        id: 'toy-hilux-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur tout-terrain.',
                        imageUrl: 'https://picsum.photos/seed/hilux9/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-hilux-leaf-spring',
                        name: 'Lame de ressort',
                        category: 'Suspension',
                        description: 'Lame de ressort arrière.',
                        imageUrl: 'https://picsum.photos/seed/hilux10/400/300',
                        price: 110000
                    },
                    {
                        id: 'toy-hilux-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant halogène.',
                        imageUrl: 'https://picsum.photos/seed/hilux11/400/300',
                        price: 160000
                    },
                    {
                        id: 'toy-hilux-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/hilux12/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-hilux-bumper',
                        name: 'Pare-chocs arrière',
                        category: 'Carrosserie',
                        description: 'Pare-chocs arrière chromé.',
                        imageUrl: 'https://picsum.photos/seed/hilux13/400/300',
                        price: 130000
                    },
                    {
                        id: 'toy-hilux-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain robuste.',
                        imageUrl: 'https://picsum.photos/seed/hilux14/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-hilux-winch',
                        name: 'Treuil électrique',
                        category: 'Accessoires',
                        description: 'Treuil pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/hilux15/400/300',
                        price: 400000
                    }
                ]
            },
            {
                id: 'c-hr',
                name: 'C-HR',
                parts: [
                    {
                        id: 'toy-chr-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour C-HR.',
                        imageUrl: 'https://picsum.photos/seed/chr1/400/300',
                        price: 23000
                    },
                    {
                        id: 'toy-chr-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein céramique.',
                        imageUrl: 'https://picsum.photos/seed/chr2/400/300',
                        price: 68000
                    },
                    {
                        id: 'toy-chr-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/chr3/400/300',
                        price: 27000
                    },
                    {
                        id: 'toy-chr-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen et charbon actif.',
                        imageUrl: 'https://picsum.photos/seed/chr4/400/300',
                        price: 20000
                    },
                    {
                        id: 'toy-chr-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/chr5/400/300',
                        price: 140000
                    },
                    {
                        id: 'toy-chr-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/chr6/400/300',
                        price: 240000
                    },
                    {
                        id: 'toy-chr-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique.',
                        imageUrl: 'https://picsum.photos/seed/chr7/400/300',
                        price: 105000
                    },
                    {
                        id: 'toy-chr-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/chr8/400/300',
                        price: 115000
                    },
                    {
                        id: 'toy-chr-shock-absorber',
                        name: 'Amortisseur avant',
                        category: 'Suspension',
                        description: 'Amortisseur avant pour C-HR.',
                        imageUrl: 'https://picsum.photos/seed/chr9/400/300',
                        price: 78000
                    },
                    {
                        id: 'toy-chr-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/chr10/400/300',
                        price: 68000
                    },
                    {
                        id: 'toy-chr-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant LED.',
                        imageUrl: 'https://picsum.photos/seed/chr11/400/300',
                        price: 195000
                    },
                    {
                        id: 'toy-chr-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/chr12/400/300',
                        price: 88000
                    },
                    {
                        id: 'toy-chr-mirror',
                        name: 'Rétroviseur droit',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/chr13/400/300',
                        price: 78000
                    },
                    {
                        id: 'toy-chr-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/chr14/400/300',
                        price: 21000
                    },
                    {
                        id: 'toy-chr-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/chr15/400/300',
                        price: 88000
                    }
                ]
            },
            {
                id: 'land-cruiser',
                name: 'Land Cruiser',
                parts: [
                    {
                        id: 'toy-lc-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile robuste pour Land Cruiser.',
                        imageUrl: 'https://picsum.photos/seed/lc1/400/300',
                        price: 30000
                    },
                    {
                        id: 'toy-lc-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance pour SUV.',
                        imageUrl: 'https://picsum.photos/seed/lc2/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-lc-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/lc3/400/300',
                        price: 40000
                    },
                    {
                        id: 'toy-lc-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/lc4/400/300',
                        price: 45000
                    },
                    {
                        id: 'toy-lc-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur surdimensionné pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/lc5/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-lc-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/lc6/400/300',
                        price: 320000
                    },
                    {
                        id: 'toy-lc-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/lc7/400/300',
                        price: 130000
                    },
                    {
                        id: 'toy-lc-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/lc8/400/300',
                        price: 280000
                    },
                    {
                        id: 'toy-lc-shock-absorber',
                        name: 'Amortisseur tout-terrain',
                        category: 'Suspension',
                        description: 'Amortisseur renforcé pour tout-terrain.',
                        imageUrl: 'https://picsum.photos/seed/lc9/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-lc-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant robuste.',
                        imageUrl: 'https://picsum.photos/seed/lc10/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-lc-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant LED.',
                        imageUrl: 'https://picsum.photos/seed/lc11/400/300',
                        price: 220000
                    },
                    {
                        id: 'toy-lc-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/lc12/400/300',
                        price: 98000
                    },
                    {
                        id: 'toy-lc-bumper',
                        name: 'Pare-chocs avant',
                        category: 'Carrosserie',
                        description: 'Pare-chocs avant renforcé.',
                        imageUrl: 'https://picsum.photos/seed/lc13/400/300',
                        price: 180000
                    },
                    {
                        id: 'toy-lc-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain pour Land Cruiser.',
                        imageUrl: 'https://picsum.photos/seed/lc14/400/300',
                        price: 130000
                    },
                    {
                        id: 'toy-lc-winch',
                        name: 'Treuil',
                        category: 'Accessoires',
                        description: 'Treuil électrique haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/lc15/400/300',
                        price: 450000
                    }
                ]
            },
            {
                id: 'supra',
                name: 'Supra',
                parts: [
                    {
                        id: 'toy-supra-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile haute performance.',
                        imageUrl: 'https://picsum.photos/seed/supra1/400/300',
                        price: 35000
                    },
                    {
                        id: 'toy-supra-brake-pads',
                        name: 'Plaquettes de frein sport',
                        category: 'Freinage',
                        description: 'Plaquettes de frein sport pour performance.',
                        imageUrl: 'https://picsum.photos/seed/supra2/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-supra-air-filter',
                        name: 'Filtre à air sport',
                        category: 'Moteur',
                        description: 'Filtre à air sport pour admission améliorée.',
                        imageUrl: 'https://picsum.photos/seed/supra3/400/300',
                        price: 45000
                    },
                    {
                        id: 'toy-supra-spark-plugs',
                        name: "Bougies d'allumage performance",
                        category: 'Moteur',
                        description: "Bougies d'allumage pour moteur turbo.",
                        imageUrl: 'https://picsum.photos/seed/supra4/400/300',
                        price: 60000
                    },
                    {
                        id: 'toy-supra-radiator',
                        name: 'Radiateur sport',
                        category: 'Refroidissement',
                        description: 'Radiateur haute capacité pour usage piste.',
                        imageUrl: 'https://picsum.photos/seed/supra5/400/300',
                        price: 250000
                    },
                    {
                        id: 'toy-supra-turbo',
                        name: 'Turbocompresseur',
                        category: 'Moteur',
                        description: 'Turbocompresseur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/supra6/400/300',
                        price: 700000
                    },
                    {
                        id: 'toy-supra-exhaust',
                        name: "Ligne d'échappement sport",
                        category: 'Échappement',
                        description: "Ligne d'échappement en acier inoxydable.",
                        imageUrl: 'https://picsum.photos/seed/supra7/400/300',
                        price: 350000
                    },
                    {
                        id: 'toy-supra-clutch',
                        name: 'Kit embrayage renforcé',
                        category: 'Transmission',
                        description: 'Embrayage sport pour forte puissance.',
                        imageUrl: 'https://picsum.photos/seed/supra8/400/300',
                        price: 300000
                    },
                    {
                        id: 'toy-supra-coilover',
                        name: 'Combinés filetés',
                        category: 'Suspension',
                        description: 'Combinés filetés réglables.',
                        imageUrl: 'https://picsum.photos/seed/supra9/400/300',
                        price: 400000
                    },
                    {
                        id: 'toy-supra-spoiler',
                        name: 'Aileron arrière',
                        category: 'Carrosserie',
                        description: 'Aileron arrière en fibre de carbone.',
                        imageUrl: 'https://picsum.photos/seed/supra10/400/300',
                        price: 150000
                    },
                    {
                        id: 'toy-supra-rim',
                        name: 'Jante alliage 19 pouces',
                        category: 'Roues',
                        description: 'Jante alliage légère.',
                        imageUrl: 'https://picsum.photos/seed/supra11/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-supra-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/supra12/400/300',
                        price: 250000
                    },
                    {
                        id: 'toy-supra-intercooler',
                        name: 'Intercooler',
                        category: 'Moteur',
                        description: 'Intercooler haute performance.',
                        imageUrl: 'https://picsum.photos/seed/supra13/400/300',
                        price: 180000
                    },
                    {
                        id: 'toy-supra-diffuser',
                        name: 'Diffuseur arrière',
                        category: 'Carrosserie',
                        description: 'Diffuseur arrière sport.',
                        imageUrl: 'https://picsum.photos/seed/supra14/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-supra-seats',
                        name: 'Sièges baquets',
                        category: 'Intérieur',
                        description: 'Sièges baquets sport.',
                        imageUrl: 'https://picsum.photos/seed/supra15/400/300',
                        price: 300000
                    }
                ]
            },
            {
                id: 'auris',
                name: 'Auris',
                parts: [
                    {
                        id: 'toy-auris-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Auris.',
                        imageUrl: 'https://picsum.photos/seed/auris1/400/300',
                        price: 23000
                    },
                    {
                        id: 'toy-auris-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/auris2/400/300',
                        price: 58000
                    },
                    {
                        id: 'toy-auris-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/auris3/400/300',
                        price: 26000
                    },
                    {
                        id: 'toy-auris-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen.',
                        imageUrl: 'https://picsum.photos/seed/auris4/400/300',
                        price: 18000
                    },
                    {
                        id: 'toy-auris-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/auris5/400/300',
                        price: 135000
                    },
                    {
                        id: 'toy-auris-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/auris6/400/300',
                        price: 230000
                    },
                    {
                        id: 'toy-auris-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/auris7/400/300',
                        price: 98000
                    },
                    {
                        id: 'toy-auris-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/auris8/400/300',
                        price: 108000
                    },
                    {
                        id: 'toy-auris-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Auris.',
                        imageUrl: 'https://picsum.photos/seed/auris9/400/300',
                        price: 72000
                    },
                    {
                        id: 'toy-auris-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/auris10/400/300',
                        price: 65000
                    },
                    {
                        id: 'toy-auris-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/auris11/400/300',
                        price: 160000
                    },
                    {
                        id: 'toy-auris-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/auris12/400/300',
                        price: 75000
                    },
                    {
                        id: 'toy-auris-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/auris13/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-auris-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/auris14/400/300',
                        price: 19000
                    },
                    {
                        id: 'toy-auris-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/auris15/400/300',
                        price: 80000
                    }
                ]
            },
            {
                id: 'aygo',
                name: 'Aygo',
                parts: [
                    {
                        id: 'toy-aygo-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Aygo.',
                        imageUrl: 'https://picsum.photos/seed/aygo1/400/300',
                        price: 20000
                    },
                    {
                        id: 'toy-aygo-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein compactes.',
                        imageUrl: 'https://picsum.photos/seed/aygo2/400/300',
                        price: 50000
                    },
                    {
                        id: 'toy-aygo-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/aygo3/400/300',
                        price: 22000
                    },
                    {
                        id: 'toy-aygo-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen.',
                        imageUrl: 'https://picsum.photos/seed/aygo4/400/300',
                        price: 15000
                    },
                    {
                        id: 'toy-aygo-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/aygo5/400/300',
                        price: 110000
                    },
                    {
                        id: 'toy-aygo-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/aygo6/400/300',
                        price: 190000
                    },
                    {
                        id: 'toy-aygo-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/aygo7/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-aygo-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/aygo8/400/300',
                        price: 95000
                    },
                    {
                        id: 'toy-aygo-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Aygo.',
                        imageUrl: 'https://picsum.photos/seed/aygo9/400/300',
                        price: 60000
                    },
                    {
                        id: 'toy-aygo-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/aygo10/400/300',
                        price: 55000
                    },
                    {
                        id: 'toy-aygo-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/aygo11/400/300',
                        price: 140000
                    },
                    {
                        id: 'toy-aygo-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/aygo12/400/300',
                        price: 65000
                    },
                    {
                        id: 'toy-aygo-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/aygo13/400/300',
                        price: 60000
                    },
                    {
                        id: 'toy-aygo-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/aygo14/400/300',
                        price: 17000
                    },
                    {
                        id: 'toy-aygo-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/aygo15/400/300',
                        price: 70000
                    }
                ]
            },
            {
                id: 'chr-ev',
                name: 'C-HR EV',
                parts: [
                    {
                        id: 'toy-chrev-battery-module',
                        name: 'Module de batterie',
                        category: 'Électrique',
                        description: 'Module de batterie haute tension.',
                        imageUrl: 'https://picsum.photos/seed/chrev1/400/300',
                        price: 500000
                    },
                    {
                        id: 'toy-chrev-electric-motor',
                        name: 'Moteur électrique',
                        category: 'Électrique',
                        description: 'Moteur électrique principal.',
                        imageUrl: 'https://picsum.photos/seed/chrev2/400/300',
                        price: 400000
                    },
                    {
                        id: 'toy-chrev-inverter',
                        name: 'Onduleur',
                        category: 'Électrique',
                        description: 'Onduleur de puissance.',
                        imageUrl: 'https://picsum.photos/seed/chrev3/400/300',
                        price: 350000
                    },
                    {
                        id: 'toy-chrev-charging-port',
                        name: 'Port de charge',
                        category: 'Électrique',
                        description: 'Port de charge AC/DC.',
                        imageUrl: 'https://picsum.photos/seed/chrev4/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-chrev-brake-pads',
                        name: 'Plaquettes de frein',
                        category: 'Freinage',
                        description: 'Plaquettes de frein régénératives.',
                        imageUrl: 'https://picsum.photos/seed/chrev5/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-chrev-shock-absorber',
                        name: 'Amortisseur',
                        category: 'Suspension',
                        description: 'Amortisseur avant.',
                        imageUrl: 'https://picsum.photos/seed/chrev6/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-chrev-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu à faible résistance au roulement.',
                        imageUrl: 'https://picsum.photos/seed/chrev7/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-chrev-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/chrev8/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-chrev-tail-light',
                        name: 'Feu arrière LED',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/chrev9/400/300',
                        price: 95000
                    },
                    {
                        id: 'toy-chrev-mirror',
                        name: 'Rétroviseur',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/chrev10/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-chrev-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/chrev11/400/300',
                        price: 22000
                    },
                    {
                        id: 'toy-chrev-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à air d\'habitacle.',
                        imageUrl: 'https://picsum.photos/seed/chrev12/400/300',
                        price: 25000
                    },
                    {
                        id: 'toy-chrev-dc-converter',
                        name: 'Convertisseur DC-DC',
                        category: 'Électrique',
                        description: 'Convertisseur de tension.',
                        imageUrl: 'https://picsum.photos/seed/chrev13/400/300',
                        price: 150000
                    },
                    {
                        id: 'toy-chrev-cooling-pump',
                        name: 'Pompe de refroidissement batterie',
                        category: 'Refroidissement',
                        description: 'Pompe pour système de refroidissement batterie.',
                        imageUrl: 'https://picsum.photos/seed/chrev14/400/300',
                        price: 110000
                    },
                    {
                        id: 'toy-chrev-charging-cable',
                        name: 'Câble de charge',
                        category: 'Accessoires',
                        description: 'Câble de charge Type 2.',
                        imageUrl: 'https://picsum.photos/seed/chrev15/400/300',
                        price: 60000
                    }
                ]
            },
            {
                id: 'gr86',
                name: 'GR86',
                parts: [
                    {
                        id: 'toy-gr86-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile performance.',
                        imageUrl: 'https://picsum.photos/seed/gr861/400/300',
                        price: 30000
                    },
                    {
                        id: 'toy-gr86-brake-pads',
                        name: 'Plaquettes de frein sport',
                        category: 'Freinage',
                        description: 'Plaquettes de frein sport.',
                        imageUrl: 'https://picsum.photos/seed/gr862/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-gr86-air-filter',
                        name: 'Filtre à air sport',
                        category: 'Moteur',
                        description: 'Filtre à air performance.',
                        imageUrl: 'https://picsum.photos/seed/gr863/400/300',
                        price: 40000
                    },
                    {
                        id: 'toy-gr86-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Bougies d'allumage Iridium.",
                        imageUrl: 'https://picsum.photos/seed/gr864/400/300',
                        price: 55000
                    },
                    {
                        id: 'toy-gr86-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/gr865/400/300',
                        price: 180000
                    },
                    {
                        id: 'toy-gr86-exhaust',
                        name: "Ligne d'échappement sport",
                        category: 'Échappement',
                        description: "Ligne d'échappement en acier inoxydable.",
                        imageUrl: 'https://picsum.photos/seed/gr866/400/300',
                        price: 300000
                    },
                    {
                        id: 'toy-gr86-clutch',
                        name: 'Kit embrayage sport',
                        category: 'Transmission',
                        description: 'Embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/gr867/400/300',
                        price: 280000
                    },
                    {
                        id: 'toy-gr86-shock-absorber',
                        name: 'Amortisseur sport',
                        category: 'Suspension',
                        description: 'Amortisseur sport réglable.',
                        imageUrl: 'https://picsum.photos/seed/gr868/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-gr86-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/gr869/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-gr86-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/gr8610/400/300',
                        price: 210000
                    },
                    {
                        id: 'toy-gr86-tail-light',
                        name: 'Feu arrière LED',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/gr8611/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-gr86-spoiler',
                        name: 'Aileron arrière',
                        category: 'Carrosserie',
                        description: 'Aileron arrière sport.',
                        imageUrl: 'https://picsum.photos/seed/gr8612/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-gr86-rim',
                        name: 'Jante alliage 18 pouces',
                        category: 'Roues',
                        description: 'Jante alliage légère.',
                        imageUrl: 'https://picsum.photos/seed/gr8613/400/300',
                        price: 95000
                    },
                    {
                        id: 'toy-gr86-tire',
                        name: 'Pneu sport',
                        category: 'Roues',
                        description: 'Pneu sport haute adhérence.',
                        imageUrl: 'https://picsum.photos/seed/gr8614/400/300',
                        price: 110000
                    },
                    {
                        id: 'toy-gr86-seats',
                        name: 'Sièges sport',
                        category: 'Intérieur',
                        description: 'Sièges sport avec support latéral.',
                        imageUrl: 'https://picsum.photos/seed/gr8615/400/300',
                        price: 250000
                    }
                ]
            },
            {
                id: 'sienna',
                name: 'Sienna',
                parts: [
                    {
                        id: 'toy-sienna-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Sienna.',
                        imageUrl: 'https://picsum.photos/seed/sienna1/400/300',
                        price: 25000
                    },
                    {
                        id: 'toy-sienna-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein pour monospace.',
                        imageUrl: 'https://picsum.photos/seed/sienna2/400/300',
                        price: 70000
                    },
                    {
                        id: 'toy-sienna-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/sienna3/400/300',
                        price: 30000
                    },
                    {
                        id: 'toy-sienna-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen et charbon actif.',
                        imageUrl: 'https://picsum.photos/seed/sienna4/400/300',
                        price: 22000
                    },
                    {
                        id: 'toy-sienna-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/sienna5/400/300',
                        price: 170000
                    },
                    {
                        id: 'toy-sienna-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/sienna6/400/300',
                        price: 280000
                    },
                    {
                        id: 'toy-sienna-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/sienna7/400/300',
                        price: 115000
                    },
                    {
                        id: 'toy-sienna-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/sienna8/400/300',
                        price: 125000
                    },
                    {
                        id: 'toy-sienna-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Sienna.',
                        imageUrl: 'https://picsum.photos/seed/sienna9/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-sienna-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/sienna10/400/300',
                        price: 75000
                    },
                    {
                        id: 'toy-sienna-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/sienna11/400/300',
                        price: 190000
                    },
                    {
                        id: 'toy-sienna-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/sienna12/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-sienna-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/sienna13/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-sienna-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/sienna14/400/300',
                        price: 20000
                    },
                    {
                        id: 'toy-sienna-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/sienna15/400/300',
                        price: 95000
                    }
                ]
            },
            {
                id: 'highlander',
                name: 'Highlander',
                parts: [
                    {
                        id: 'toy-highlander-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Highlander.',
                        imageUrl: 'https://picsum.photos/seed/highlander1/400/300',
                        price: 27000
                    },
                    {
                        id: 'toy-highlander-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/highlander2/400/300',
                        price: 75000
                    },
                    {
                        id: 'toy-highlander-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/highlander3/400/300',
                        price: 32000
                    },
                    {
                        id: 'toy-highlander-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen et charbon actif.',
                        imageUrl: 'https://picsum.photos/seed/highlander4/400/300',
                        price: 24000
                    },
                    {
                        id: 'toy-highlander-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/highlander5/400/300',
                        price: 180000
                    },
                    {
                        id: 'toy-highlander-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/highlander6/400/300',
                        price: 290000
                    },
                    {
                        id: 'toy-highlander-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/highlander7/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-highlander-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/highlander8/400/300',
                        price: 130000
                    },
                    {
                        id: 'toy-highlander-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Highlander.',
                        imageUrl: 'https://picsum.photos/seed/highlander9/400/300',
                        price: 90000
                    },
                    {
                        id: 'toy-highlander-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/highlander10/400/300',
                        price: 80000
                    },
                    {
                        id: 'toy-highlander-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/highlander11/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-highlander-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/highlander12/400/300',
                        price: 95000
                    },
                    {
                        id: 'toy-highlander-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/highlander13/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-highlander-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/highlander14/400/300',
                        price: 21000
                    },
                    {
                        id: 'toy-highlander-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/highlander15/400/300',
                        price: 100000
                    }
                ]
            },
            {
                id: 'tundra',
                name: 'Tundra',
                parts: [
                    {
                        id: 'toy-tundra-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Tundra.',
                        imageUrl: 'https://picsum.photos/seed/tundra1/400/300',
                        price: 35000
                    },
                    {
                        id: 'toy-tundra-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein robustes.',
                        imageUrl: 'https://picsum.photos/seed/tundra2/400/300',
                        price: 85000
                    },
                    {
                        id: 'toy-tundra-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/tundra3/400/300',
                        price: 40000
                    },
                    {
                        id: 'toy-tundra-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/tundra4/400/300',
                        price: 45000
                    },
                    {
                        id: 'toy-tundra-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur surdimensionné.',
                        imageUrl: 'https://picsum.photos/seed/tundra5/400/300',
                        price: 220000
                    },
                    {
                        id: 'toy-tundra-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/tundra6/400/300',
                        price: 350000
                    },
                    {
                        id: 'toy-tundra-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/tundra7/400/300',
                        price: 140000
                    },
                    {
                        id: 'toy-tundra-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/tundra8/400/300',
                        price: 300000
                    },
                    {
                        id: 'toy-tundra-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur robuste.',
                        imageUrl: 'https://picsum.photos/seed/tundra9/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-tundra-leaf-spring',
                        name: 'Lame de ressort',
                        category: 'Suspension',
                        description: 'Lame de ressort arrière.',
                        imageUrl: 'https://picsum.photos/seed/tundra10/400/300',
                        price: 120000
                    },
                    {
                        id: 'toy-tundra-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/tundra11/400/300',
                        price: 240000
                    },
                    {
                        id: 'toy-tundra-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/tundra12/400/300',
                        price: 100000
                    },
                    {
                        id: 'toy-tundra-bumper',
                        name: 'Pare-chocs avant',
                        category: 'Carrosserie',
                        description: 'Pare-chocs avant renforcé.',
                        imageUrl: 'https://picsum.photos/seed/tundra13/400/300',
                        price: 200000
                    },
                    {
                        id: 'toy-tundra-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain robuste.',
                        imageUrl: 'https://picsum.photos/seed/tundra14/400/300',
                        price: 150000
                    },
                    {
                        id: 'toy-tundra-winch',
                        name: 'Treuil',
                        category: 'Accessoires',
                        description: 'Treuil électrique haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/tundra15/400/300',
                        price: 500000
                    }
                ]
            }
        ]
    },
    {
        id: 'nissan',
        name: 'Nissan',
        logoUrl: logoNissan,
        models: [
            {
                id: 'qashqai',
                name: 'Qashqai III',
                parts: [
                    {
                        id: 'niss-qashqai-abs',
                        name: 'Capteur ABS',
                        category: 'Électronique',
                        description: 'Capteur de vitesse de roue pour ABS.',
                        imageUrl: 'https://picsum.photos/seed/qashqai1/400/300',
                        price: 63000
                    },
                    {
                        id: 'niss-qashqai-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur électrique rabattable.',
                        imageUrl: 'https://picsum.photos/seed/qashqai2/400/300',
                        price: 88000
                    },
                    {
                        id: 'niss-qashqai-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Qashqai.',
                        imageUrl: 'https://picsum.photos/seed/qashqai3/400/300',
                        price: 25000
                    },
                    {
                        id: 'niss-qashqai-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/qashqai4/400/300',
                        price: 60000
                    },
                    {
                        id: 'niss-qashqai-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/qashqai5/400/300',
                        price: 30000
                    },
                    {
                        id: 'niss-qashqai-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/qashqai6/400/300',
                        price: 150000
                    },
                    {
                        id: 'niss-qashqai-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/qashqai7/400/300',
                        price: 250000
                    },
                    {
                        id: 'niss-qashqai-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/qashqai8/400/300',
                        price: 100000
                    },
                    {
                        id: 'niss-qashqai-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/qashqai9/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-qashqai-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Qashqai.',
                        imageUrl: 'https://picsum.photos/seed/qashqai10/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-qashqai-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/qashqai11/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-qashqai-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/qashqai12/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-qashqai-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/qashqai13/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-qashqai-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/qashqai14/400/300',
                        price: 20000
                    },
                    {
                        id: 'niss-qashqai-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/qashqai15/400/300',
                        price: 90000
                    }
                ]
            },
            {
                id: 'micra',
                name: 'Micra V',
                parts: [
                    {
                        id: 'niss-micra-battery',
                        name: 'Batterie',
                        category: 'Électronique',
                        description: 'Batterie 12V longue durée.',
                        imageUrl: 'https://picsum.photos/seed/micra1/400/300',
                        price: 105000
                    },
                    {
                        id: 'niss-micra-clutch',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Embrayage complet pour boîte manuelle.',
                        imageUrl: 'https://picsum.photos/seed/micra2/400/300',
                        price: 215000
                    },
                    {
                        id: 'niss-micra-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Micra.',
                        imageUrl: 'https://picsum.photos/seed/micra3/400/300',
                        price: 20000
                    },
                    {
                        id: 'niss-micra-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/micra4/400/300',
                        price: 50000
                    },
                    {
                        id: 'niss-micra-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/micra5/400/300',
                        price: 22000
                    },
                    {
                        id: 'niss-micra-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/micra6/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-micra-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/micra7/400/300',
                        price: 190000
                    },
                    {
                        id: 'niss-micra-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/micra8/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-micra-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/micra9/400/300',
                        price: 95000
                    },
                    {
                        id: 'niss-micra-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Micra.',
                        imageUrl: 'https://picsum.photos/seed/micra10/400/300',
                        price: 60000
                    },
                    {
                        id: 'niss-micra-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/micra11/400/300',
                        price: 55000
                    },
                    {
                        id: 'niss-micra-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/micra12/400/300',
                        price: 140000
                    },
                    {
                        id: 'niss-micra-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/micra13/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-micra-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/micra14/400/300',
                        price: 17000
                    },
                    {
                        id: 'niss-micra-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/micra15/400/300',
                        price: 70000
                    }
                ]
            },
            {
                id: 'juke',
                name: 'Juke',
                parts: [
                    {
                        id: 'niss-juke-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Juke.',
                        imageUrl: 'https://picsum.photos/seed/juke1/400/300',
                        price: 24000
                    },
                    {
                        id: 'niss-juke-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/juke2/400/300',
                        price: 58000
                    },
                    {
                        id: 'niss-juke-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/juke3/400/300',
                        price: 28000
                    },
                    {
                        id: 'niss-juke-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen.',
                        imageUrl: 'https://picsum.photos/seed/juke4/400/300',
                        price: 20000
                    },
                    {
                        id: 'niss-juke-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/juke5/400/300',
                        price: 140000
                    },
                    {
                        id: 'niss-juke-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/juke6/400/300',
                        price: 240000
                    },
                    {
                        id: 'niss-juke-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/juke7/400/300',
                        price: 98000
                    },
                    {
                        id: 'niss-juke-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/juke8/400/300',
                        price: 108000
                    },
                    {
                        id: 'niss-juke-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Juke.',
                        imageUrl: 'https://picsum.photos/seed/juke9/400/300',
                        price: 72000
                    },
                    {
                        id: 'niss-juke-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/juke10/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-juke-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/juke11/400/300',
                        price: 160000
                    },
                    {
                        id: 'niss-juke-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/juke12/400/300',
                        price: 75000
                    },
                    {
                        id: 'niss-juke-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/juke13/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-juke-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/juke14/400/300',
                        price: 19000
                    },
                    {
                        id: 'niss-juke-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/juke15/400/300',
                        price: 80000
                    }
                ]
            },
            {
                id: 'x-trail',
                name: 'X-Trail',
                parts: [
                    {
                        id: 'niss-xtrail-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour X-Trail.',
                        imageUrl: 'https://picsum.photos/seed/xtrail1/400/300',
                        price: 28000
                    },
                    {
                        id: 'niss-xtrail-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/xtrail2/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-xtrail-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/xtrail3/400/300',
                        price: 35000
                    },
                    {
                        id: 'niss-xtrail-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/xtrail4/400/300',
                        price: 40000
                    },
                    {
                        id: 'niss-xtrail-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/xtrail5/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-xtrail-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/xtrail6/400/300',
                        price: 290000
                    },
                    {
                        id: 'niss-xtrail-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/xtrail7/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-xtrail-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage pour X-Trail.',
                        imageUrl: 'https://picsum.photos/seed/xtrail8/400/300',
                        price: 250000
                    },
                    {
                        id: 'niss-xtrail-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour X-Trail.',
                        imageUrl: 'https://picsum.photos/seed/xtrail9/400/300',
                        price: 90000
                    },
                    {
                        id: 'niss-xtrail-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/xtrail10/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-xtrail-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/xtrail11/400/300',
                        price: 200000
                    },
                    {
                        id: 'niss-xtrail-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/xtrail12/400/300',
                        price: 95000
                    },
                    {
                        id: 'niss-xtrail-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/xtrail13/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-xtrail-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/xtrail14/400/300',
                        price: 21000
                    },
                    {
                        id: 'niss-xtrail-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/xtrail15/400/300',
                        price: 100000
                    }
                ]
            },
            {
                id: 'leaf',
                name: 'Leaf',
                parts: [
                    {
                        id: 'niss-leaf-battery-module',
                        name: 'Module de batterie',
                        category: 'Électrique',
                        description: 'Module de batterie haute tension.',
                        imageUrl: 'https://picsum.photos/seed/leaf1/400/300',
                        price: 550000
                    },
                    {
                        id: 'niss-leaf-electric-motor',
                        name: 'Moteur électrique',
                        category: 'Électrique',
                        description: 'Moteur électrique principal.',
                        imageUrl: 'https://picsum.photos/seed/leaf2/400/300',
                        price: 450000
                    },
                    {
                        id: 'niss-leaf-inverter',
                        name: 'Onduleur',
                        category: 'Électrique',
                        description: 'Onduleur de puissance.',
                        imageUrl: 'https://picsum.photos/seed/leaf3/400/300',
                        price: 380000
                    },
                    {
                        id: 'niss-leaf-charging-port',
                        name: 'Port de charge',
                        category: 'Électrique',
                        description: 'Port de charge CHAdeMO.',
                        imageUrl: 'https://picsum.photos/seed/leaf4/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-leaf-brake-pads',
                        name: 'Plaquettes de frein',
                        category: 'Freinage',
                        description: 'Plaquettes de frein régénératives.',
                        imageUrl: 'https://picsum.photos/seed/leaf5/400/300',
                        price: 75000
                    },
                    {
                        id: 'niss-leaf-shock-absorber',
                        name: 'Amortisseur',
                        category: 'Suspension',
                        description: 'Amortisseur avant.',
                        imageUrl: 'https://picsum.photos/seed/leaf6/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-leaf-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu à faible résistance au roulement.',
                        imageUrl: 'https://picsum.photos/seed/leaf7/400/300',
                        price: 95000
                    },
                    {
                        id: 'niss-leaf-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/leaf8/400/300',
                        price: 210000
                    },
                    {
                        id: 'niss-leaf-tail-light',
                        name: 'Feu arrière LED',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/leaf9/400/300',
                        price: 100000
                    },
                    {
                        id: 'niss-leaf-mirror',
                        name: 'Rétroviseur',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/leaf10/400/300',
                        price: 90000
                    },
                    {
                        id: 'niss-leaf-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/leaf11/400/300',
                        price: 23000
                    },
                    {
                        id: 'niss-leaf-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à air d\'habitacle.',
                        imageUrl: 'https://picsum.photos/seed/leaf12/400/300',
                        price: 28000
                    },
                    {
                        id: 'niss-leaf-dc-converter',
                        name: 'Convertisseur DC-DC',
                        category: 'Électrique',
                        description: 'Convertisseur de tension.',
                        imageUrl: 'https://picsum.photos/seed/leaf13/400/300',
                        price: 160000
                    },
                    {
                        id: 'niss-leaf-cooling-pump',
                        name: 'Pompe de refroidissement batterie',
                        category: 'Refroidissement',
                        description: 'Pompe pour système de refroidissement batterie.',
                        imageUrl: 'https://picsum.photos/seed/leaf14/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-leaf-charging-cable',
                        name: 'Câble de charge',
                        category: 'Accessoires',
                        description: 'Câble de charge Type 1.',
                        imageUrl: 'https://picsum.photos/seed/leaf15/400/300',
                        price: 65000
                    }
                ]
            },
            {
                id: 'gt-r',
                name: 'GT-R',
                parts: [
                    {
                        id: 'niss-gtr-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile haute performance.',
                        imageUrl: 'https://picsum.photos/seed/gtr1/400/300',
                        price: 40000
                    },
                    {
                        id: 'niss-gtr-brake-pads',
                        name: 'Plaquettes de frein céramique',
                        category: 'Freinage',
                        description: 'Plaquettes de frein carbone-céramique.',
                        imageUrl: 'https://picsum.photos/seed/gtr2/400/300',
                        price: 150000
                    },
                    {
                        id: 'niss-gtr-air-filter',
                        name: 'Filtre à air sport',
                        category: 'Moteur',
                        description: 'Filtre à air sport pour admission améliorée.',
                        imageUrl: 'https://picsum.photos/seed/gtr3/400/300',
                        price: 50000
                    },
                    {
                        id: 'niss-gtr-spark-plugs',
                        name: "Bougies d'allumage performance",
                        category: 'Moteur',
                        description: "Bougies d'allumage pour moteur turbo.",
                        imageUrl: 'https://picsum.photos/seed/gtr4/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-gtr-radiator',
                        name: 'Radiateur sport',
                        category: 'Refroidissement',
                        description: 'Radiateur haute capacité pour usage piste.',
                        imageUrl: 'https://picsum.photos/seed/gtr5/400/300',
                        price: 300000
                    },
                    {
                        id: 'niss-gtr-turbo',
                        name: 'Turbocompresseur',
                        category: 'Moteur',
                        description: 'Turbocompresseur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/gtr6/400/300',
                        price: 800000
                    },
                    {
                        id: 'niss-gtr-exhaust',
                        name: "Ligne d'échappement titane",
                        category: 'Échappement',
                        description: "Ligne d'échappement en titane.",
                        imageUrl: 'https://picsum.photos/seed/gtr7/400/300',
                        price: 400000
                    },
                    {
                        id: 'niss-gtr-clutch',
                        name: 'Kit embrayage renforcé',
                        category: 'Transmission',
                        description: 'Embrayage sport pour forte puissance.',
                        imageUrl: 'https://picsum.photos/seed/gtr8/400/300',
                        price: 350000
                    },
                    {
                        id: 'niss-gtr-coilover',
                        name: 'Combinés filetés',
                        category: 'Suspension',
                        description: 'Combinés filetés réglables.',
                        imageUrl: 'https://picsum.photos/seed/gtr9/400/300',
                        price: 450000
                    },
                    {
                        id: 'niss-gtr-spoiler',
                        name: 'Aileron arrière',
                        category: 'Carrosserie',
                        description: 'Aileron arrière en fibre de carbone.',
                        imageUrl: 'https://picsum.photos/seed/gtr10/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-gtr-rim',
                        name: 'Jante alliage 20 pouces',
                        category: 'Roues',
                        description: 'Jante alliage forgée.',
                        imageUrl: 'https://picsum.photos/seed/gtr11/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-gtr-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/gtr12/400/300',
                        price: 280000
                    },
                    {
                        id: 'niss-gtr-intercooler',
                        name: 'Intercooler',
                        category: 'Moteur',
                        description: 'Intercooler haute performance.',
                        imageUrl: 'https://picsum.photos/seed/gtr13/400/300',
                        price: 200000
                    },
                    {
                        id: 'niss-gtr-diffuser',
                        name: 'Diffuseur arrière',
                        category: 'Carrosserie',
                        description: 'Diffuseur arrière sport.',
                        imageUrl: 'https://picsum.photos/seed/gtr14/400/300',
                        price: 150000
                    },
                    {
                        id: 'niss-gtr-seats',
                        name: 'Sièges baquets',
                        category: 'Intérieur',
                        description: 'Sièges baquets Recaro.',
                        imageUrl: 'https://picsum.photos/seed/gtr15/400/300',
                        price: 350000
                    }
                ]
            },
            {
                id: 'titan',
                name: 'Titan',
                parts: [
                    {
                        id: 'niss-titan-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Titan.',
                        imageUrl: 'https://picsum.photos/seed/titan1/400/300',
                        price: 30000
                    },
                    {
                        id: 'niss-titan-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein robustes.',
                        imageUrl: 'https://picsum.photos/seed/titan2/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-titan-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/titan3/400/300',
                        price: 38000
                    },
                    {
                        id: 'niss-titan-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/titan4/400/300',
                        price: 42000
                    },
                    {
                        id: 'niss-titan-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur surdimensionné.',
                        imageUrl: 'https://picsum.photos/seed/titan5/400/300',
                        price: 200000
                    },
                    {
                        id: 'niss-titan-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/titan6/400/300',
                        price: 320000
                    },
                    {
                        id: 'niss-titan-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/titan7/400/300',
                        price: 130000
                    },
                    {
                        id: 'niss-titan-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/titan8/400/300',
                        price: 280000
                    },
                    {
                        id: 'niss-titan-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur robuste.',
                        imageUrl: 'https://picsum.photos/seed/titan9/400/300',
                        price: 100000
                    },
                    {
                        id: 'niss-titan-leaf-spring',
                        name: 'Lame de ressort',
                        category: 'Suspension',
                        description: 'Lame de ressort arrière.',
                        imageUrl: 'https://picsum.photos/seed/titan10/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-titan-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/titan11/400/300',
                        price: 220000
                    },
                    {
                        id: 'niss-titan-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/titan12/400/300',
                        price: 98000
                    },
                    {
                        id: 'niss-titan-bumper',
                        name: 'Pare-chocs avant',
                        category: 'Carrosserie',
                        description: 'Pare-chocs avant renforcé.',
                        imageUrl: 'https://picsum.photos/seed/titan13/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-titan-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain robuste.',
                        imageUrl: 'https://picsum.photos/seed/titan14/400/300',
                        price: 130000
                    },
                    {
                        id: 'niss-titan-winch',
                        name: 'Treuil',
                        category: 'Accessoires',
                        description: 'Treuil électrique haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/titan15/400/300',
                        price: 450000
                    }
                ]
            },
            {
                id: 'sentra',
                name: 'Sentra',
                parts: [
                    {
                        id: 'niss-sentra-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Sentra.',
                        imageUrl: 'https://picsum.photos/seed/sentra1/400/300',
                        price: 22000
                    },
                    {
                        id: 'niss-sentra-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/sentra2/400/300',
                        price: 55000
                    },
                    {
                        id: 'niss-sentra-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/sentra3/400/300',
                        price: 25000
                    },
                    {
                        id: 'niss-sentra-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/sentra4/400/300',
                        price: 40000
                    },
                    {
                        id: 'niss-sentra-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/sentra5/400/300',
                        price: 130000
                    },
                    {
                        id: 'niss-sentra-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/sentra6/400/300',
                        price: 220000
                    },
                    {
                        id: 'niss-sentra-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/sentra7/400/300',
                        price: 95000
                    },
                    {
                        id: 'niss-sentra-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/sentra8/400/300',
                        price: 105000
                    },
                    {
                        id: 'niss-sentra-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Sentra.',
                        imageUrl: 'https://picsum.photos/seed/sentra9/400/300',
                        price: 68000
                    },
                    {
                        id: 'niss-sentra-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/sentra10/400/300',
                        price: 60000
                    },
                    {
                        id: 'niss-sentra-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/sentra11/400/300',
                        price: 150000
                    },
                    {
                        id: 'niss-sentra-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/sentra12/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-sentra-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/sentra13/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-sentra-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/sentra14/400/300',
                        price: 18000
                    },
                    {
                        id: 'niss-sentra-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/sentra15/400/300',
                        price: 75000
                    }
                ]
            },
            {
                id: 'versa',
                name: 'Versa',
                parts: [
                    {
                        id: 'niss-versa-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Versa.',
                        imageUrl: 'https://picsum.photos/seed/versa1/400/300',
                        price: 20000
                    },
                    {
                        id: 'niss-versa-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/versa2/400/300',
                        price: 50000
                    },
                    {
                        id: 'niss-versa-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/versa3/400/300',
                        price: 22000
                    },
                    {
                        id: 'niss-versa-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/versa4/400/300',
                        price: 38000
                    },
                    {
                        id: 'niss-versa-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/versa5/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-versa-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/versa6/400/300',
                        price: 190000
                    },
                    {
                        id: 'niss-versa-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/versa7/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-versa-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/versa8/400/300',
                        price: 95000
                    },
                    {
                        id: 'niss-versa-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Versa.',
                        imageUrl: 'https://picsum.photos/seed/versa9/400/300',
                        price: 60000
                    },
                    {
                        id: 'niss-versa-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/versa10/400/300',
                        price: 55000
                    },
                    {
                        id: 'niss-versa-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/versa11/400/300',
                        price: 140000
                    },
                    {
                        id: 'niss-versa-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/versa12/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-versa-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/versa13/400/300',
                        price: 60000
                    },
                    {
                        id: 'niss-versa-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/versa14/400/300',
                        price: 17000
                    },
                    {
                        id: 'niss-versa-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/versa15/400/300',
                        price: 70000
                    }
                ]
            },
            {
                id: 'rogue',
                name: 'Rogue',
                parts: [
                    {
                        id: 'niss-rogue-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Rogue.',
                        imageUrl: 'https://picsum.photos/seed/rogue1/400/300',
                        price: 26000
                    },
                    {
                        id: 'niss-rogue-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/rogue2/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-rogue-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/rogue3/400/300',
                        price: 32000
                    },
                    {
                        id: 'niss-rogue-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen et charbon actif.',
                        imageUrl: 'https://picsum.photos/seed/rogue4/400/300',
                        price: 24000
                    },
                    {
                        id: 'niss-rogue-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/rogue5/400/300',
                        price: 160000
                    },
                    {
                        id: 'niss-rogue-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/rogue6/400/300',
                        price: 270000
                    },
                    {
                        id: 'niss-rogue-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/rogue7/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-rogue-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/rogue8/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-rogue-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Rogue.',
                        imageUrl: 'https://picsum.photos/seed/rogue9/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-rogue-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/rogue10/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-rogue-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/rogue11/400/300',
                        price: 190000
                    },
                    {
                        id: 'niss-rogue-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/rogue12/400/300',
                        price: 90000
                    },
                    {
                        id: 'niss-rogue-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/rogue13/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-rogue-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/rogue14/400/300',
                        price: 20000
                    },
                    {
                        id: 'niss-rogue-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/rogue15/400/300',
                        price: 95000
                    }
                ]
            },
            {
                id: 'pathfinder',
                name: 'Pathfinder',
                parts: [
                    {
                        id: 'niss-pathfinder-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Pathfinder.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder1/400/300',
                        price: 28000
                    },
                    {
                        id: 'niss-pathfinder-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder2/400/300',
                        price: 75000
                    },
                    {
                        id: 'niss-pathfinder-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder3/400/300',
                        price: 35000
                    },
                    {
                        id: 'niss-pathfinder-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder4/400/300',
                        price: 40000
                    },
                    {
                        id: 'niss-pathfinder-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder5/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-pathfinder-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder6/400/300',
                        price: 290000
                    },
                    {
                        id: 'niss-pathfinder-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder7/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-pathfinder-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage pour Pathfinder.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder8/400/300',
                        price: 250000
                    },
                    {
                        id: 'niss-pathfinder-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Pathfinder.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder9/400/300',
                        price: 90000
                    },
                    {
                        id: 'niss-pathfinder-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder10/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-pathfinder-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder11/400/300',
                        price: 200000
                    },
                    {
                        id: 'niss-pathfinder-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder12/400/300',
                        price: 95000
                    },
                    {
                        id: 'niss-pathfinder-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder13/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-pathfinder-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/pathfinder14/400/300',
                        price: 21000
                    },
                    {
                        id: 'niss-pathfinder-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/pathfinder15/400/300',
                        price: 100000
                    }
                ]
            },
            {
                id: 'maxima',
                name: 'Maxima',
                parts: [
                    {
                        id: 'niss-maxima-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Maxima.',
                        imageUrl: 'https://picsum.photos/seed/maxima1/400/300',
                        price: 25000
                    },
                    {
                        id: 'niss-maxima-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/maxima2/400/300',
                        price: 65000
                    },
                    {
                        id: 'niss-maxima-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/maxima3/400/300',
                        price: 30000
                    },
                    {
                        id: 'niss-maxima-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/maxima4/400/300',
                        price: 50000
                    },
                    {
                        id: 'niss-maxima-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/maxima5/400/300',
                        price: 160000
                    },
                    {
                        id: 'niss-maxima-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/maxima6/400/300',
                        price: 260000
                    },
                    {
                        id: 'niss-maxima-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/maxima7/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-maxima-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/maxima8/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-maxima-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Maxima.',
                        imageUrl: 'https://picsum.photos/seed/maxima9/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-maxima-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/maxima10/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-maxima-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/maxima11/400/300',
                        price: 190000
                    },
                    {
                        id: 'niss-maxima-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/maxima12/400/300',
                        price: 85000
                    },
                    {
                        id: 'niss-maxima-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/maxima13/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-maxima-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/maxima14/400/300',
                        price: 20000
                    },
                    {
                        id: 'niss-maxima-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu été haute performance.',
                        imageUrl: 'https://picsum.photos/seed/maxima15/400/300',
                        price: 90000
                    }
                ]
            },
            {
                id: 'armada',
                name: 'Armada',
                parts: [
                    {
                        id: 'niss-armada-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Armada.',
                        imageUrl: 'https://picsum.photos/seed/armada1/400/300',
                        price: 30000
                    },
                    {
                        id: 'niss-armada-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein robustes.',
                        imageUrl: 'https://picsum.photos/seed/armada2/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-armada-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/armada3/400/300',
                        price: 38000
                    },
                    {
                        id: 'niss-armada-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/armada4/400/300',
                        price: 42000
                    },
                    {
                        id: 'niss-armada-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur surdimensionné.',
                        imageUrl: 'https://picsum.photos/seed/armada5/400/300',
                        price: 200000
                    },
                    {
                        id: 'niss-armada-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/armada6/400/300',
                        price: 320000
                    },
                    {
                        id: 'niss-armada-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/armada7/400/300',
                        price: 130000
                    },
                    {
                        id: 'niss-armada-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/armada8/400/300',
                        price: 280000
                    },
                    {
                        id: 'niss-armada-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur robuste.',
                        imageUrl: 'https://picsum.photos/seed/armada9/400/300',
                        price: 100000
                    },
                    {
                        id: 'niss-armada-leaf-spring',
                        name: 'Lame de ressort',
                        category: 'Suspension',
                        description: 'Lame de ressort arrière.',
                        imageUrl: 'https://picsum.photos/seed/armada10/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-armada-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/armada11/400/300',
                        price: 220000
                    },
                    {
                        id: 'niss-armada-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/armada12/400/300',
                        price: 98000
                    },
                    {
                        id: 'niss-armada-bumper',
                        name: 'Pare-chocs avant',
                        category: 'Carrosserie',
                        description: 'Pare-chocs avant renforcé.',
                        imageUrl: 'https://picsum.photos/seed/armada13/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-armada-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain robuste.',
                        imageUrl: 'https://picsum.photos/seed/armada14/400/300',
                        price: 130000
                    },
                    {
                        id: 'niss-armada-winch',
                        name: 'Treuil',
                        category: 'Accessoires',
                        description: 'Treuil électrique haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/armada15/400/300',
                        price: 450000
                    }
                ]
            },
            {
                id: 'frontier',
                name: 'Frontier',
                parts: [
                    {
                        id: 'niss-frontier-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Frontier.',
                        imageUrl: 'https://picsum.photos/seed/frontier1/400/300',
                        price: 28000
                    },
                    {
                        id: 'niss-frontier-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein robustes.',
                        imageUrl: 'https://picsum.photos/seed/frontier2/400/300',
                        price: 70000
                    },
                    {
                        id: 'niss-frontier-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/frontier3/400/300',
                        price: 35000
                    },
                    {
                        id: 'niss-frontier-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/frontier4/400/300',
                        price: 40000
                    },
                    {
                        id: 'niss-frontier-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/frontier5/400/300',
                        price: 180000
                    },
                    {
                        id: 'niss-frontier-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute puissance.',
                        imageUrl: 'https://picsum.photos/seed/frontier6/400/300',
                        price: 300000
                    },
                    {
                        id: 'niss-frontier-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/frontier7/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-frontier-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/frontier8/400/300',
                        price: 250000
                    },
                    {
                        id: 'niss-frontier-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur tout-terrain.',
                        imageUrl: 'https://picsum.photos/seed/frontier9/400/300',
                        price: 90000
                    },
                    {
                        id: 'niss-frontier-leaf-spring',
                        name: 'Lame de ressort',
                        category: 'Suspension',
                        description: 'Lame de ressort arrière.',
                        imageUrl: 'https://picsum.photos/seed/frontier10/400/300',
                        price: 110000
                    },
                    {
                        id: 'niss-frontier-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant halogène.',
                        imageUrl: 'https://picsum.photos/seed/frontier11/400/300',
                        price: 160000
                    },
                    {
                        id: 'niss-frontier-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/frontier12/400/300',
                        price: 80000
                    },
                    {
                        id: 'niss-frontier-bumper',
                        name: 'Pare-chocs arrière',
                        category: 'Carrosserie',
                        description: 'Pare-chocs arrière chromé.',
                        imageUrl: 'https://picsum.photos/seed/frontier13/400/300',
                        price: 130000
                    },
                    {
                        id: 'niss-frontier-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain robuste.',
                        imageUrl: 'https://picsum.photos/seed/frontier14/400/300',
                        price: 120000
                    },
                    {
                        id: 'niss-frontier-winch',
                        name: 'Treuil électrique',
                        category: 'Accessoires',
                        description: 'Treuil pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/frontier15/400/300',
                        price: 400000
                    }
                ]
            }
        ]
    },
    {
        id: 'mazda',
        name: 'Mazda',
        logoUrl: logoMazda,
        models: [
            {
                id: 'cx5',
                name: 'CX-5',
                parts: [
                    {
                        id: 'mazda-cx5-blade',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: 'Balais avant haute résistance.',
                        imageUrl: 'https://picsum.photos/seed/cx51/400/300',
                        price: 18000
                    },
                    {
                        id: 'mazda-cx5-pads',
                        name: 'Plaquettes arrière',
                        category: 'Freinage',
                        description: 'Freinage souple et efficace.',
                        imageUrl: 'https://picsum.photos/seed/cx52/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-cx5-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour CX-5.',
                        imageUrl: 'https://picsum.photos/seed/cx53/400/300',
                        price: 25000
                    },
                    {
                        id: 'mazda-cx5-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx54/400/300',
                        price: 30000
                    },
                    {
                        id: 'mazda-cx5-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx55/400/300',
                        price: 150000
                    },
                    {
                        id: 'mazda-cx5-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/cx56/400/300',
                        price: 250000
                    },
                    {
                        id: 'mazda-cx5-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx57/400/300',
                        price: 100000
                    },
                    {
                        id: 'mazda-cx5-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx58/400/300',
                        price: 110000
                    },
                    {
                        id: 'mazda-cx5-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour CX-5.',
                        imageUrl: 'https://picsum.photos/seed/cx59/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-cx5-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/cx510/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-cx5-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/cx511/400/300',
                        price: 180000
                    },
                    {
                        id: 'mazda-cx5-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/cx512/400/300',
                        price: 85000
                    },
                    {
                        id: 'mazda-cx5-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx513/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-cx5-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/cx514/400/300',
                        price: 20000
                    },
                    {
                        id: 'mazda-cx5-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/cx515/400/300',
                        price: 90000
                    }
                ]
            },
            {
                id: 'mazda3',
                name: 'Mazda 3',
                parts: [
                    {
                        id: 'mazda-m3-oil',
                        name: 'Huile moteur 5W30',
                        category: 'Lubrifiants',
                        description: 'Huile synthétique adaptée aux moteurs SKYACTIV.',
                        imageUrl: 'https://picsum.photos/seed/mz31/400/300',
                        price: 40000
                    },
                    {
                        id: 'mazda-m3-timing',
                        name: 'Courroie de distribution',
                        category: 'Moteur',
                        description: 'Kit complet de distribution.',
                        imageUrl: 'https://picsum.photos/seed/mz32/400/300',
                        price: 180000
                    },
                    {
                        id: 'mazda-m3-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Mazda 3.',
                        imageUrl: 'https://picsum.photos/seed/mz33/400/300',
                        price: 22000
                    },
                    {
                        id: 'mazda-m3-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/mz34/400/300',
                        price: 55000
                    },
                    {
                        id: 'mazda-m3-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz35/400/300',
                        price: 25000
                    },
                    {
                        id: 'mazda-m3-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz36/400/300',
                        price: 130000
                    },
                    {
                        id: 'mazda-m3-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/mz37/400/300',
                        price: 220000
                    },
                    {
                        id: 'mazda-m3-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz38/400/300',
                        price: 95000
                    },
                    {
                        id: 'mazda-m3-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/mz39/400/300',
                        price: 105000
                    },
                    {
                        id: 'mazda-m3-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Mazda 3.',
                        imageUrl: 'https://picsum.photos/seed/mz310/400/300',
                        price: 68000
                    },
                    {
                        id: 'mazda-m3-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/mz311/400/300',
                        price: 60000
                    },
                    {
                        id: 'mazda-m3-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/mz312/400/300',
                        price: 150000
                    },
                    {
                        id: 'mazda-m3-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/mz313/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-m3-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/mz314/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-m3-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/mz315/400/300',
                        price: 75000
                    }
                ]
            },
            {
                id: 'mazda6',
                name: 'Mazda 6',
                parts: [
                    {
                        id: 'mazda-m6-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Mazda 6.',
                        imageUrl: 'https://picsum.photos/seed/mz61/400/300',
                        price: 25000
                    },
                    {
                        id: 'mazda-m6-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/mz62/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-m6-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz63/400/300',
                        price: 30000
                    },
                    {
                        id: 'mazda-m6-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/mz64/400/300',
                        price: 50000
                    },
                    {
                        id: 'mazda-m6-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz65/400/300',
                        price: 160000
                    },
                    {
                        id: 'mazda-m6-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/mz66/400/300',
                        price: 260000
                    },
                    {
                        id: 'mazda-m6-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz67/400/300',
                        price: 110000
                    },
                    {
                        id: 'mazda-m6-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/mz68/400/300',
                        price: 120000
                    },
                    {
                        id: 'mazda-m6-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Mazda 6.',
                        imageUrl: 'https://picsum.photos/seed/mz69/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-m6-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/mz610/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-m6-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/mz611/400/300',
                        price: 190000
                    },
                    {
                        id: 'mazda-m6-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/mz612/400/300',
                        price: 85000
                    },
                    {
                        id: 'mazda-m6-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/mz613/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-m6-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/mz614/400/300',
                        price: 20000
                    },
                    {
                        id: 'mazda-m6-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu été haute performance.',
                        imageUrl: 'https://picsum.photos/seed/mz615/400/300',
                        price: 90000
                    }
                ]
            },
            {
                id: 'mx-5',
                name: 'MX-5',
                parts: [
                    {
                        id: 'mazda-mx5-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour MX-5.',
                        imageUrl: 'https://picsum.photos/seed/mx51/400/300',
                        price: 28000
                    },
                    {
                        id: 'mazda-mx5-brake-pads',
                        name: 'Plaquettes de frein sport',
                        category: 'Freinage',
                        description: 'Plaquettes de frein sport.',
                        imageUrl: 'https://picsum.photos/seed/mx52/400/300',
                        price: 75000
                    },
                    {
                        id: 'mazda-mx5-air-filter',
                        name: 'Filtre à air sport',
                        category: 'Moteur',
                        description: 'Filtre à air performance.',
                        imageUrl: 'https://picsum.photos/seed/mx53/400/300',
                        price: 35000
                    },
                    {
                        id: 'mazda-mx5-spark-plugs',
                        name: "Bougies d'allumage performance",
                        category: 'Moteur',
                        description: "Bougies d'allumage Iridium.",
                        imageUrl: 'https://picsum.photos/seed/mx54/400/300',
                        price: 50000
                    },
                    {
                        id: 'mazda-mx5-radiator',
                        name: 'Radiateur sport',
                        category: 'Refroidissement',
                        description: 'Radiateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/mx55/400/300',
                        price: 180000
                    },
                    {
                        id: 'mazda-mx5-exhaust',
                        name: "Ligne d'échappement sport",
                        category: 'Échappement',
                        description: "Ligne d'échappement en acier inoxydable.",
                        imageUrl: 'https://picsum.photos/seed/mx56/400/300',
                        price: 300000
                    },
                    {
                        id: 'mazda-mx5-clutch',
                        name: 'Kit embrayage sport',
                        category: 'Transmission',
                        description: 'Embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/mx57/400/300',
                        price: 280000
                    },
                    {
                        id: 'mazda-mx5-shock-absorber',
                        name: 'Amortisseur sport',
                        category: 'Suspension',
                        description: 'Amortisseur sport réglable.',
                        imageUrl: 'https://picsum.photos/seed/mx58/400/300',
                        price: 90000
                    },
                    {
                        id: 'mazda-mx5-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/mx59/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-mx5-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/mx510/400/300',
                        price: 210000
                    },
                    {
                        id: 'mazda-mx5-tail-light',
                        name: 'Feu arrière LED',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/mx511/400/300',
                        price: 90000
                    },
                    {
                        id: 'mazda-mx5-spoiler',
                        name: 'Aileron arrière',
                        category: 'Carrosserie',
                        description: 'Aileron arrière sport.',
                        imageUrl: 'https://picsum.photos/seed/mx512/400/300',
                        price: 100000
                    },
                    {
                        id: 'mazda-mx5-rim',
                        name: 'Jante alliage 17 pouces',
                        category: 'Roues',
                        description: 'Jante alliage légère.',
                        imageUrl: 'https://picsum.photos/seed/mx513/400/300',
                        price: 85000
                    },
                    {
                        id: 'mazda-mx5-tire',
                        name: 'Pneu sport',
                        category: 'Roues',
                        description: 'Pneu sport haute adhérence.',
                        imageUrl: 'https://picsum.photos/seed/mx514/400/300',
                        price: 100000
                    },
                    {
                        id: 'mazda-mx5-seats',
                        name: 'Sièges sport',
                        category: 'Intérieur',
                        description: 'Sièges sport avec support latéral.',
                        imageUrl: 'https://picsum.photos/seed/mx515/400/300',
                        price: 250000
                    }
                ]
            },
            {
                id: 'cx-30',
                name: 'CX-30',
                parts: [
                    {
                        id: 'mazda-cx30-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour CX-30.',
                        imageUrl: 'https://picsum.photos/seed/cx301/400/300',
                        price: 24000
                    },
                    {
                        id: 'mazda-cx30-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/cx302/400/300',
                        price: 60000
                    },
                    {
                        id: 'mazda-cx30-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx303/400/300',
                        price: 28000
                    },
                    {
                        id: 'mazda-cx30-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen et charbon actif.',
                        imageUrl: 'https://picsum.photos/seed/cx304/400/300',
                        price: 20000
                    },
                    {
                        id: 'mazda-cx30-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx305/400/300',
                        price: 140000
                    },
                    {
                        id: 'mazda-cx30-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/cx306/400/300',
                        price: 240000
                    },
                    {
                        id: 'mazda-cx30-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx307/400/300',
                        price: 98000
                    },
                    {
                        id: 'mazda-cx30-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx308/400/300',
                        price: 108000
                    },
                    {
                        id: 'mazda-cx30-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour CX-30.',
                        imageUrl: 'https://picsum.photos/seed/cx309/400/300',
                        price: 72000
                    },
                    {
                        id: 'mazda-cx30-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/cx3010/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-cx30-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/cx3011/400/300',
                        price: 160000
                    },
                    {
                        id: 'mazda-cx30-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/cx3012/400/300',
                        price: 75000
                    },
                    {
                        id: 'mazda-cx30-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx3013/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-cx30-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/cx3014/400/300',
                        price: 19000
                    },
                    {
                        id: 'mazda-cx30-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/cx3015/400/300',
                        price: 80000
                    }
                ]
            },
            {
                id: 'cx-9',
                name: 'CX-9',
                parts: [
                    {
                        id: 'mazda-cx9-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour CX-9.',
                        imageUrl: 'https://picsum.photos/seed/cx91/400/300',
                        price: 28000
                    },
                    {
                        id: 'mazda-cx9-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/cx92/400/300',
                        price: 75000
                    },
                    {
                        id: 'mazda-cx9-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx93/400/300',
                        price: 35000
                    },
                    {
                        id: 'mazda-cx9-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant.',
                        imageUrl: 'https://picsum.photos/seed/cx94/400/300',
                        price: 40000
                    },
                    {
                        id: 'mazda-cx9-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx95/400/300',
                        price: 180000
                    },
                    {
                        id: 'mazda-cx9-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/cx96/400/300',
                        price: 290000
                    },
                    {
                        id: 'mazda-cx9-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx97/400/300',
                        price: 120000
                    },
                    {
                        id: 'mazda-cx9-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx98/400/300',
                        price: 130000
                    },
                    {
                        id: 'mazda-cx9-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour CX-9.',
                        imageUrl: 'https://picsum.photos/seed/cx99/400/300',
                        price: 90000
                    },
                    {
                        id: 'mazda-cx9-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/cx910/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-cx9-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/cx911/400/300',
                        price: 200000
                    },
                    {
                        id: 'mazda-cx9-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/cx912/400/300',
                        price: 95000
                    },
                    {
                        id: 'mazda-cx9-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx913/400/300',
                        price: 85000
                    },
                    {
                        id: 'mazda-cx9-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/cx914/400/300',
                        price: 21000
                    },
                    {
                        id: 'mazda-cx9-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/cx915/400/300',
                        price: 100000
                    }
                ]
            },
            {
                id: 'cx-3',
                name: 'CX-3',
                parts: [
                    {
                        id: 'mazda-cx3-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour CX-3.',
                        imageUrl: 'https://picsum.photos/seed/cx31/400/300',
                        price: 23000
                    },
                    {
                        id: 'mazda-cx3-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/cx32/400/300',
                        price: 58000
                    },
                    {
                        id: 'mazda-cx3-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx33/400/300',
                        price: 26000
                    },
                    {
                        id: 'mazda-cx3-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen.',
                        imageUrl: 'https://picsum.photos/seed/cx34/400/300',
                        price: 18000
                    },
                    {
                        id: 'mazda-cx3-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx35/400/300',
                        price: 135000
                    },
                    {
                        id: 'mazda-cx3-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/cx36/400/300',
                        price: 230000
                    },
                    {
                        id: 'mazda-cx3-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx37/400/300',
                        price: 98000
                    },
                    {
                        id: 'mazda-cx3-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx38/400/300',
                        price: 108000
                    },
                    {
                        id: 'mazda-cx3-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour CX-3.',
                        imageUrl: 'https://picsum.photos/seed/cx39/400/300',
                        price: 72000
                    },
                    {
                        id: 'mazda-cx3-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/cx310/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-cx3-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/cx311/400/300',
                        price: 160000
                    },
                    {
                        id: 'mazda-cx3-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/cx312/400/300',
                        price: 75000
                    },
                    {
                        id: 'mazda-cx3-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx313/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-cx3-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/cx314/400/300',
                        price: 19000
                    },
                    {
                        id: 'mazda-cx3-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/cx315/400/300',
                        price: 80000
                    }
                ]
            },
            {
                id: 'mazda2',
                name: 'Mazda 2',
                parts: [
                    {
                        id: 'mazda-m2-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour Mazda 2.',
                        imageUrl: 'https://picsum.photos/seed/mz21/400/300',
                        price: 20000
                    },
                    {
                        id: 'mazda-m2-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein standard.',
                        imageUrl: 'https://picsum.photos/seed/mz22/400/300',
                        price: 50000
                    },
                    {
                        id: 'mazda-m2-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz23/400/300',
                        price: 22000
                    },
                    {
                        id: 'mazda-m2-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à pollen.',
                        imageUrl: 'https://picsum.photos/seed/mz24/400/300',
                        price: 15000
                    },
                    {
                        id: 'mazda-m2-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz25/400/300',
                        price: 110000
                    },
                    {
                        id: 'mazda-m2-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/mz26/400/300',
                        price: 190000
                    },
                    {
                        id: 'mazda-m2-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/mz27/400/300',
                        price: 85000
                    },
                    {
                        id: 'mazda-m2-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/mz28/400/300',
                        price: 95000
                    },
                    {
                        id: 'mazda-m2-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Mazda 2.',
                        imageUrl: 'https://picsum.photos/seed/mz29/400/300',
                        price: 60000
                    },
                    {
                        id: 'mazda-m2-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/mz210/400/300',
                        price: 55000
                    },
                    {
                        id: 'mazda-m2-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/mz211/400/300',
                        price: 140000
                    },
                    {
                        id: 'mazda-m2-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/mz212/400/300',
                        price: 65000
                    },
                    {
                        id: 'mazda-m2-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/mz213/400/300',
                        price: 60000
                    },
                    {
                        id: 'mazda-m2-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/mz214/400/300',
                        price: 17000
                    },
                    {
                        id: 'mazda-m2-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/mz215/400/300',
                        price: 70000
                    }
                ]
            },
            {
                id: 'cx-7',
                name: 'CX-7',
                parts: [
                    {
                        id: 'mazda-cx7-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour CX-7.',
                        imageUrl: 'https://picsum.photos/seed/cx71/400/300',
                        price: 26000
                    },
                    {
                        id: 'mazda-cx7-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/cx72/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-cx7-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx73/400/300',
                        price: 32000
                    },
                    {
                        id: 'mazda-cx7-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant.',
                        imageUrl: 'https://picsum.photos/seed/cx74/400/300',
                        price: 38000
                    },
                    {
                        id: 'mazda-cx7-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx75/400/300',
                        price: 170000
                    },
                    {
                        id: 'mazda-cx7-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/cx76/400/300',
                        price: 280000
                    },
                    {
                        id: 'mazda-cx7-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau de moteur.',
                        imageUrl: 'https://picsum.photos/seed/cx77/400/300',
                        price: 115000
                    },
                    {
                        id: 'mazda-cx7-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx78/400/300',
                        price: 125000
                    },
                    {
                        id: 'mazda-cx7-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour CX-7.',
                        imageUrl: 'https://picsum.photos/seed/cx79/400/300',
                        price: 85000
                    },
                    {
                        id: 'mazda-cx7-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/cx710/400/300',
                        price: 75000
                    },
                    {
                        id: 'mazda-cx7-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/cx711/400/300',
                        price: 190000
                    },
                    {
                        id: 'mazda-cx7-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/cx712/400/300',
                        price: 90000
                    },
                    {
                        id: 'mazda-cx7-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/cx713/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-cx7-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/cx714/400/300',
                        price: 20000
                    },
                    {
                        id: 'mazda-cx7-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu toutes saisons.',
                        imageUrl: 'https://picsum.photos/seed/cx715/400/300',
                        price: 95000
                    }
                ]
            },
            {
                id: 'rx-8',
                name: 'RX-8',
                parts: [
                    {
                        id: 'mazda-rx8-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour moteur rotatif.',
                        imageUrl: 'https://picsum.photos/seed/rx81/400/300',
                        price: 30000
                    },
                    {
                        id: 'mazda-rx8-spark-plugs',
                        name: "Bougies d'allumage rotatives",
                        category: 'Moteur',
                        description: "Bougies d'allumage spécifiques pour RX-8.",
                        imageUrl: 'https://picsum.photos/seed/rx82/400/300',
                        price: 60000
                    },
                    {
                        id: 'mazda-rx8-ignition-coil',
                        name: "Bobine d'allumage",
                        category: 'Moteur',
                        description: "Bobine d'allumage haute performance.",
                        imageUrl: 'https://picsum.photos/seed/rx83/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-rx8-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/rx84/400/300',
                        price: 190000
                    },
                    {
                        id: 'mazda-rx8-clutch',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/rx85/400/300',
                        price: 300000
                    },
                    {
                        id: 'mazda-rx8-exhaust',
                        name: "Ligne d'échappement sport",
                        category: 'Échappement',
                        description: "Ligne d'échappement en acier inoxydable.",
                        imageUrl: 'https://picsum.photos/seed/rx86/400/300',
                        price: 350000
                    },
                    {
                        id: 'mazda-rx8-shock-absorber',
                        name: 'Amortisseur sport',
                        category: 'Suspension',
                        description: 'Amortisseur sport réglable.',
                        imageUrl: 'https://picsum.photos/seed/rx87/400/300',
                        price: 95000
                    },
                    {
                        id: 'mazda-rx8-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant.',
                        imageUrl: 'https://picsum.photos/seed/rx88/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-rx8-headlight',
                        name: 'Phare avant Xénon',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/rx89/400/300',
                        price: 220000
                    },
                    {
                        id: 'mazda-rx8-tail-light',
                        name: 'Feu arrière LED',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/rx810/400/300',
                        price: 95000
                    },
                    {
                        id: 'mazda-rx8-spoiler',
                        name: 'Aileron arrière',
                        category: 'Carrosserie',
                        description: 'Aileron arrière sport.',
                        imageUrl: 'https://picsum.photos/seed/rx811/400/300',
                        price: 110000
                    },
                    {
                        id: 'mazda-rx8-rim',
                        name: 'Jante alliage 18 pouces',
                        category: 'Roues',
                        description: 'Jante alliage légère.',
                        imageUrl: 'https://picsum.photos/seed/rx812/400/300',
                        price: 90000
                    },
                    {
                        id: 'mazda-rx8-tire',
                        name: 'Pneu sport',
                        category: 'Roues',
                        description: 'Pneu sport haute adhérence.',
                        imageUrl: 'https://picsum.photos/seed/rx813/400/300',
                        price: 105000
                    },
                    {
                        id: 'mazda-rx8-seats',
                        name: 'Sièges sport',
                        category: 'Intérieur',
                        description: 'Sièges sport Recaro.',
                        imageUrl: 'https://picsum.photos/seed/rx814/400/300',
                        price: 280000
                    },
                    {
                        id: 'mazda-rx8-rotor',
                        name: 'Rotor moteur',
                        category: 'Moteur',
                        description: 'Rotor de remplacement pour moteur Renesis.',
                        imageUrl: 'https://picsum.photos/seed/rx815/400/300',
                        price: 600000
                    }
                ]
            },
            {
                id: 'bt-50',
                name: 'BT-50',
                parts: [
                    {
                        id: 'mazda-bt50-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour BT-50 diesel.',
                        imageUrl: 'https://picsum.photos/seed/bt501/400/300',
                        price: 28000
                    },
                    {
                        id: 'mazda-bt50-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein robustes.',
                        imageUrl: 'https://picsum.photos/seed/bt502/400/300',
                        price: 70000
                    },
                    {
                        id: 'mazda-bt50-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air renforcé.',
                        imageUrl: 'https://picsum.photos/seed/bt503/400/300',
                        price: 35000
                    },
                    {
                        id: 'mazda-bt50-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/bt504/400/300',
                        price: 40000
                    },
                    {
                        id: 'mazda-bt50-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/bt505/400/300',
                        price: 180000
                    },
                    {
                        id: 'mazda-bt50-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute puissance.',
                        imageUrl: 'https://picsum.photos/seed/bt506/400/300',
                        price: 300000
                    },
                    {
                        id: 'mazda-bt50-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau robuste.',
                        imageUrl: 'https://picsum.photos/seed/bt507/400/300',
                        price: 120000
                    },
                    {
                        id: 'mazda-bt50-clutch-kit',
                        name: 'Kit embrayage',
                        category: 'Transmission',
                        description: 'Kit embrayage renforcé.',
                        imageUrl: 'https://picsum.photos/seed/bt508/400/300',
                        price: 250000
                    },
                    {
                        id: 'mazda-bt50-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur tout-terrain.',
                        imageUrl: 'https://picsum.photos/seed/bt509/400/300',
                        price: 90000
                    },
                    {
                        id: 'mazda-bt50-leaf-spring',
                        name: 'Lame de ressort',
                        category: 'Suspension',
                        description: 'Lame de ressort arrière.',
                        imageUrl: 'https://picsum.photos/seed/bt5010/400/300',
                        price: 110000
                    },
                    {
                        id: 'mazda-bt50-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant halogène.',
                        imageUrl: 'https://picsum.photos/seed/bt5011/400/300',
                        price: 160000
                    },
                    {
                        id: 'mazda-bt50-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/bt5012/400/300',
                        price: 80000
                    },
                    {
                        id: 'mazda-bt50-bumper',
                        name: 'Pare-chocs arrière',
                        category: 'Carrosserie',
                        description: 'Pare-chocs arrière chromé.',
                        imageUrl: 'https://picsum.photos/seed/bt5013/400/300',
                        price: 130000
                    },
                    {
                        id: 'mazda-bt50-tire',
                        name: 'Pneu tout-terrain',
                        category: 'Roues',
                        description: 'Pneu tout-terrain robuste.',
                        imageUrl: 'https://picsum.photos/seed/bt5014/400/300',
                        price: 120000
                    },
                    {
                        id: 'mazda-bt50-winch',
                        name: 'Treuil électrique',
                        category: 'Accessoires',
                        description: 'Treuil pour usage intensif.',
                        imageUrl: 'https://picsum.photos/seed/bt5015/400/300',
                        price: 400000
                    }
                ]
            }
        ]
    },
    {
        id: 'bmw',
        name: 'BMW',
        logoUrl: logoBMW,
        models: [
            {
                id: 'series3',
                name: 'Série 3 (G20)',
                parts: [
                    {
                        id: 'bmw3-waterpump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique pour BMW Série 3 G20.',
                        imageUrl: 'https://picsum.photos/seed/waterpump/400/300',
                        price: 280000
                    },
                    {
                        id: 'bmw3-thermo',
                        name: 'Thermostat',
                        category: 'Moteur',
                        description: 'Thermostat de liquide de refroidissement haute fiabilité.',
                        imageUrl: 'https://picsum.photos/seed/thermo/400/300',
                        price: 95000
                    },
                    {
                        id: 'bmw3-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour BMW Série 3.',
                        imageUrl: 'https://picsum.photos/seed/bmw31/400/300',
                        price: 30000
                    },
                    {
                        id: 'bmw3-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/bmw32/400/300',
                        price: 80000
                    },
                    {
                        id: 'bmw3-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw33/400/300',
                        price: 35000
                    },
                    {
                        id: 'bmw3-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/bmw34/400/300',
                        price: 60000
                    },
                    {
                        id: 'bmw3-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw35/400/300',
                        price: 190000
                    },
                    {
                        id: 'bmw3-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/bmw36/400/300',
                        price: 300000
                    },
                    {
                        id: 'bmw3-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw37/400/300',
                        price: 130000
                    },
                    {
                        id: 'bmw3-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Série 3.',
                        imageUrl: 'https://picsum.photos/seed/bmw38/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmw3-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/bmw39/400/300',
                        price: 80000
                    },
                    {
                        id: 'bmw3-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant LED.',
                        imageUrl: 'https://picsum.photos/seed/bmw310/400/300',
                        price: 220000
                    },
                    {
                        id: 'bmw3-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/bmw311/400/300',
                        price: 95000
                    },
                    {
                        id: 'bmw3-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw312/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmw3-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/bmw313/400/300',
                        price: 25000
                    }
                ]
            },
            {
                id: 'series5',
                name: 'Série 5 (G30)',
                parts: [
                    {
                        id: 'bmw5-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour BMW Série 5.',
                        imageUrl: 'https://picsum.photos/seed/bmw51/400/300',
                        price: 32000
                    },
                    {
                        id: 'bmw5-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/bmw52/400/300',
                        price: 85000
                    },
                    {
                        id: 'bmw5-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw53/400/300',
                        price: 38000
                    },
                    {
                        id: 'bmw5-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/bmw54/400/300',
                        price: 65000
                    },
                    {
                        id: 'bmw5-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw55/400/300',
                        price: 200000
                    },
                    {
                        id: 'bmw5-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/bmw56/400/300',
                        price: 320000
                    },
                    {
                        id: 'bmw5-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw57/400/300',
                        price: 140000
                    },
                    {
                        id: 'bmw5-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw58/400/300',
                        price: 150000
                    },
                    {
                        id: 'bmw5-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Série 5.',
                        imageUrl: 'https://picsum.photos/seed/bmw59/400/300',
                        price: 95000
                    },
                    {
                        id: 'bmw5-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/bmw510/400/300',
                        price: 85000
                    },
                    {
                        id: 'bmw5-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant LED adaptatif.',
                        imageUrl: 'https://picsum.photos/seed/bmw511/400/300',
                        price: 250000
                    },
                    {
                        id: 'bmw5-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/bmw512/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmw5-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique et chauffant.',
                        imageUrl: 'https://picsum.photos/seed/bmw513/400/300',
                        price: 95000
                    },
                    {
                        id: 'bmw5-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/bmw514/400/300',
                        price: 28000
                    },
                    {
                        id: 'bmw5-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu Runflat.',
                        imageUrl: 'https://picsum.photos/seed/bmw515/400/300',
                        price: 110000
                    }
                ]
            },
            {
                id: 'x5',
                name: 'X5 (G05)',
                parts: [
                    {
                        id: 'bmwx5-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour BMW X5.',
                        imageUrl: 'https://picsum.photos/seed/bmwx51/400/300',
                        price: 35000
                    },
                    {
                        id: 'bmwx5-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance pour SUV.',
                        imageUrl: 'https://picsum.photos/seed/bmwx52/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmwx5-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmwx53/400/300',
                        price: 40000
                    },
                    {
                        id: 'bmwx5-fuel-filter',
                        name: 'Filtre à carburant',
                        category: 'Moteur',
                        description: 'Filtre à carburant diesel.',
                        imageUrl: 'https://picsum.photos/seed/bmwx54/400/300',
                        price: 45000
                    },
                    {
                        id: 'bmwx5-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmwx55/400/300',
                        price: 220000
                    },
                    {
                        id: 'bmwx5-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur haute capacité.',
                        imageUrl: 'https://picsum.photos/seed/bmwx56/400/300',
                        price: 350000
                    },
                    {
                        id: 'bmwx5-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmwx57/400/300',
                        price: 150000
                    },
                    {
                        id: 'bmwx5-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmwx58/400/300',
                        price: 160000
                    },
                    {
                        id: 'bmwx5-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour X5.',
                        imageUrl: 'https://picsum.photos/seed/bmwx59/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmwx5-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/bmwx510/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmwx5-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant LED adaptatif.',
                        imageUrl: 'https://picsum.photos/seed/bmwx511/400/300',
                        price: 280000
                    },
                    {
                        id: 'bmwx5-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/bmwx512/400/300',
                        price: 110000
                    },
                    {
                        id: 'bmwx5-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique et chauffant.',
                        imageUrl: 'https://picsum.photos/seed/bmwx513/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmwx5-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/bmwx514/400/300',
                        price: 30000
                    },
                    {
                        id: 'bmwx5-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu Runflat.',
                        imageUrl: 'https://picsum.photos/seed/bmwx515/400/300',
                        price: 120000
                    }
                ]
            },
            {
                id: 'series1',
                name: 'Série 1 (F40)',
                parts: [
                    {
                        id: 'bmw1-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour BMW Série 1.',
                        imageUrl: 'https://picsum.photos/seed/bmw11/400/300',
                        price: 28000
                    },
                    {
                        id: 'bmw1-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/bmw12/400/300',
                        price: 75000
                    },
                    {
                        id: 'bmw1-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw13/400/300',
                        price: 32000
                    },
                    {
                        id: 'bmw1-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/bmw14/400/300',
                        price: 55000
                    },
                    {
                        id: 'bmw1-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw15/400/300',
                        price: 170000
                    },
                    {
                        id: 'bmw1-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/bmw16/400/300',
                        price: 280000
                    },
                    {
                        id: 'bmw1-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw17/400/300',
                        price: 120000
                    },
                    {
                        id: 'bmw1-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw18/400/300',
                        price: 130000
                    },
                    {
                        id: 'bmw1-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière pour Série 1.',
                        imageUrl: 'https://picsum.photos/seed/bmw19/400/300',
                        price: 85000
                    },
                    {
                        id: 'bmw1-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/bmw110/400/300',
                        price: 75000
                    },
                    {
                        id: 'bmw1-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant LED.',
                        imageUrl: 'https://picsum.photos/seed/bmw111/400/300',
                        price: 200000
                    },
                    {
                        id: 'bmw1-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière LED.',
                        imageUrl: 'https://picsum.photos/seed/bmw112/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmw1-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw113/400/300',
                        price: 85000
                    },
                    {
                        id: 'bmw1-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/bmw114/400/300',
                        price: 22000
                    },
                    {
                        id: 'bmw1-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu Runflat.',
                        imageUrl: 'https://picsum.photos/seed/bmw115/400/300',
                        price: 100000
                    }
                ]
            },
            {
                id: 'series7',
                name: 'Série 7 (G11/G12)',
                parts: [
                    {
                        id: 'bmw7-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile pour BMW Série 7.',
                        imageUrl: 'https://picsum.photos/seed/bmw71/400/300',
                        price: 40000
                    },
                    {
                        id: 'bmw7-brake-pads',
                        name: 'Plaquettes de frein avant',
                        category: 'Freinage',
                        description: 'Plaquettes de frein haute performance.',
                        imageUrl: 'https://picsum.photos/seed/bmw72/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmw7-air-filter',
                        name: 'Filtre à air',
                        category: 'Moteur',
                        description: 'Filtre à air moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw73/400/300',
                        price: 45000
                    },
                    {
                        id: 'bmw7-spark-plugs',
                        name: "Bougies d'allumage",
                        category: 'Moteur',
                        description: "Jeu de bougies d'allumage.",
                        imageUrl: 'https://picsum.photos/seed/bmw74/400/300',
                        price: 70000
                    },
                    {
                        id: 'bmw7-radiator',
                        name: 'Radiateur',
                        category: 'Refroidissement',
                        description: 'Radiateur de refroidissement moteur.',
                        imageUrl: 'https://picsum.photos/seed/bmw75/400/300',
                        price: 250000
                    },
                    {
                        id: 'bmw7-alternator',
                        name: 'Alternateur',
                        category: 'Électronique',
                        description: 'Alternateur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/bmw76/400/300',
                        price: 380000
                    },
                    {
                        id: 'bmw7-water-pump',
                        name: 'Pompe à eau',
                        category: 'Moteur',
                        description: 'Pompe à eau électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw77/400/300',
                        price: 160000
                    },
                    {
                        id: 'bmw7-fuel-pump',
                        name: 'Pompe à carburant',
                        category: 'Moteur',
                        description: 'Pompe à carburant électrique.',
                        imageUrl: 'https://picsum.photos/seed/bmw78/400/300',
                        price: 180000
                    },
                    {
                        id: 'bmw7-shock-absorber',
                        name: 'Amortisseur arrière',
                        category: 'Suspension',
                        description: 'Amortisseur arrière adaptatif.',
                        imageUrl: 'https://picsum.photos/seed/bmw79/400/300',
                        price: 120000
                    },
                    {
                        id: 'bmw7-control-arm',
                        name: 'Bras de suspension',
                        category: 'Suspension',
                        description: 'Bras de suspension avant inférieur.',
                        imageUrl: 'https://picsum.photos/seed/bmw710/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmw7-headlight',
                        name: 'Phare avant droit',
                        category: 'Éclairage',
                        description: 'Phare avant Laserlight.',
                        imageUrl: 'https://picsum.photos/seed/bmw711/400/300',
                        price: 350000
                    },
                    {
                        id: 'bmw7-tail-light',
                        name: 'Feu arrière gauche',
                        category: 'Éclairage',
                        description: 'Feu arrière OLED.',
                        imageUrl: 'https://picsum.photos/seed/bmw712/400/300',
                        price: 150000
                    },
                    {
                        id: 'bmw7-mirror',
                        name: 'Rétroviseur gauche',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique, chauffant et rabattable.',
                        imageUrl: 'https://picsum.photos/seed/bmw713/400/300',
                        price: 120000
                    },
                    {
                        id: 'bmw7-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/bmw714/400/300',
                        price: 35000
                    },
                    {
                        id: 'bmw7-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu Runflat haute performance.',
                        imageUrl: 'https://picsum.photos/seed/bmw715/400/300',
                        price: 150000
                    }
                ]
            },
            {
                id: 'i3',
                name: 'i3',
                parts: [
                    {
                        id: 'bmwi3-battery-module',
                        name: 'Module de batterie',
                        category: 'Électrique',
                        description: 'Module de batterie haute tension.',
                        imageUrl: 'https://picsum.photos/seed/i31/400/300',
                        price: 600000
                    },
                    {
                        id: 'bmwi3-electric-motor',
                        name: 'Moteur électrique',
                        category: 'Électrique',
                        description: 'Moteur électrique principal.',
                        imageUrl: 'https://picsum.photos/seed/i32/400/300',
                        price: 500000
                    },
                    {
                        id: 'bmwi3-inverter',
                        name: 'Onduleur',
                        category: 'Électrique',
                        description: 'Onduleur de puissance.',
                        imageUrl: 'https://picsum.photos/seed/i33/400/300',
                        price: 400000
                    },
                    {
                        id: 'bmwi3-charging-port',
                        name: 'Port de charge',
                        category: 'Électrique',
                        description: 'Port de charge Type 2.',
                        imageUrl: 'https://picsum.photos/seed/i34/400/300',
                        price: 120000
                    },
                    {
                        id: 'bmwi3-brake-pads',
                        name: 'Plaquettes de frein',
                        category: 'Freinage',
                        description: 'Plaquettes de frein régénératives.',
                        imageUrl: 'https://picsum.photos/seed/i35/400/300',
                        price: 80000
                    },
                    {
                        id: 'bmwi3-shock-absorber',
                        name: 'Amortisseur',
                        category: 'Suspension',
                        description: 'Amortisseur avant.',
                        imageUrl: 'https://picsum.photos/seed/i36/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmwi3-tire',
                        name: 'Pneu',
                        category: 'Roues',
                        description: 'Pneu à faible résistance au roulement.',
                        imageUrl: 'https://picsum.photos/seed/i37/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmwi3-headlight',
                        name: 'Phare avant LED',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/i38/400/300',
                        price: 220000
                    },
                    {
                        id: 'bmwi3-tail-light',
                        name: 'Feu arrière LED',
                        category: 'Éclairage',
                        description: 'Feu arrière complet.',
                        imageUrl: 'https://picsum.photos/seed/i39/400/300',
                        price: 100000
                    },
                    {
                        id: 'bmwi3-mirror',
                        name: 'Rétroviseur',
                        category: 'Carrosserie',
                        description: 'Rétroviseur extérieur électrique.',
                        imageUrl: 'https://picsum.photos/seed/i310/400/300',
                        price: 90000
                    },
                    {
                        id: 'bmwi3-wiper-blades',
                        name: "Balais d'essuie-glace",
                        category: 'Accessoires',
                        description: "Jeu de balais d'essuie-glace.",
                        imageUrl: 'https://picsum.photos/seed/i311/400/300',
                        price: 25000
                    },
                    {
                        id: 'bmwi3-cabin-filter',
                        name: 'Filtre d\'habitacle',
                        category: 'Climatisation',
                        description: 'Filtre à air d\'habitacle.',
                        imageUrl: 'https://picsum.photos/seed/i312/400/300',
                        price: 30000
                    },
                    {
                        id: 'bmwi3-dc-converter',
                        name: 'Convertisseur DC-DC',
                        category: 'Électrique',
                        description: 'Convertisseur de tension.',
                        imageUrl: 'https://picsum.photos/seed/i313/400/300',
                        price: 180000
                    },
                    {
                        id: 'bmwi3-cooling-pump',
                        name: 'Pompe de refroidissement batterie',
                        category: 'Refroidissement',
                        description: 'Pompe pour système de refroidissement batterie.',
                        imageUrl: 'https://picsum.photos/seed/i314/400/300',
                        price: 130000
                    },
                    {
                        id: 'bmwi3-charging-cable',
                        name: 'Câble de charge',
                        category: 'Accessoires',
                        description: 'Câble de charge Type 2.',
                        imageUrl: 'https://picsum.photos/seed/i315/400/300',
                        price: 70000
                    }
                ]
            },
            {
                id: 'm4',
                name: 'M4 (G82)',
                parts: [
                    {
                        id: 'bmwm4-oil-filter',
                        name: 'Filtre à huile',
                        category: 'Moteur',
                        description: 'Filtre à huile haute performance.',
                        imageUrl: 'https://picsum.photos/seed/m41/400/300',
                        price: 40000
                    },
                    {
                        id: 'bmwm4-brake-pads',
                        name: 'Plaquettes de frein céramique',
                        category: 'Freinage',
                        description: 'Plaquettes de frein carbone-céramique.',
                        imageUrl: 'https://picsum.photos/seed/m42/400/300',
                        price: 160000
                    },
                    {
                        id: 'bmwm4-air-filter',
                        name: 'Filtre à air sport',
                        category: 'Moteur',
                        description: 'Filtre à air sport pour admission améliorée.',
                        imageUrl: 'https://picsum.photos/seed/m43/400/300',
                        price: 50000
                    },
                    {
                        id: 'bmwm4-spark-plugs',
                        name: "Bougies d'allumage performance",
                        category: 'Moteur',
                        description: "Bougies d'allumage pour moteur turbo.",
                        imageUrl: 'https://picsum.photos/seed/m44/400/300',
                        price: 70000
                    },
                    {
                        id: 'bmwm4-radiator',
                        name: 'Radiateur sport',
                        category: 'Refroidissement',
                        description: 'Radiateur haute capacité pour usage piste.',
                        imageUrl: 'https://picsum.photos/seed/m45/400/300',
                        price: 300000
                    },
                    {
                        id: 'bmwm4-turbo',
                        name: 'Turbocompresseur',
                        category: 'Moteur',
                        description: 'Turbocompresseur de remplacement.',
                        imageUrl: 'https://picsum.photos/seed/m46/400/300',
                        price: 800000
                    },
                    {
                        id: 'bmwm4-exhaust',
                        name: "Ligne d'échappement sport",
                        category: 'Échappement',
                        description: "Ligne d'échappement en titane.",
                        imageUrl: 'https://picsum.photos/seed/m47/400/300',
                        price: 400000
                    },
                    {
                        id: 'bmwm4-clutch',
                        name: 'Kit embrayage renforcé',
                        category: 'Transmission',
                        description: 'Embrayage sport pour forte puissance.',
                        imageUrl: 'https://picsum.photos/seed/m48/400/300',
                        price: 350000
                    },
                    {
                        id: 'bmwm4-coilover',
                        name: 'Combinés filetés',
                        category: 'Suspension',
                        description: 'Combinés filetés réglables.',
                        imageUrl: 'https://picsum.photos/seed/m49/400/300',
                        price: 450000
                    },
                    {
                        id: 'bmwm4-spoiler',
                        name: 'Aileron arrière',
                        category: 'Carrosserie',
                        description: 'Aileron arrière en fibre de carbone.',
                        imageUrl: 'https://picsum.photos/seed/m410/400/300',
                        price: 180000
                    },
                    {
                        id: 'bmwm4-rim',
                        name: 'Jante alliage 20 pouces',
                        category: 'Roues',
                        description: 'Jante alliage forgée.',
                        imageUrl: 'https://picsum.photos/seed/m411/400/300',
                        price: 120000
                    },
                    {
                        id: 'bmwm4-headlight',
                        name: 'Phare avant Laserlight',
                        category: 'Éclairage',
                        description: 'Phare avant complet.',
                        imageUrl: 'https://picsum.photos/seed/m412/400/300',
                        price: 300000
                    }


                ],
            }],
    },
    {
        id: 'honda',
        name: 'Honda',
        logoUrl: logoHonda,
    },
    {
        id: 'kia',
        name: 'Kia',
        logoUrl: logoKia,
    },
    {
        id: 'volkswagen',
        name: 'Volkswagen',
        logoUrl: logoVolkswagen,
    },
    {
        id: 'mercedes',
        name: 'Mercedes-Benz',
        logoUrl: logoMercedes,
    },
    {
        id: 'audi',
        name: 'Audi',
        logoUrl: logoAudi,
    },
    {
        id: 'ford',
        name: 'Ford',
        logoUrl: logoFord,
    },
    {
        id: 'renault',
        name: 'Renault',
        logoUrl: logoRenault,
    },
]   