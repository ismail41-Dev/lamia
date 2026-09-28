export const BIRTH_DATE = "1986-08-13";

/**
 * Calculates current age from a birth date string (YYYY-MM-DD).
 * Accurately takes elapsed months and days into account.
 */
export function calculateAge(birthDateString: string): number {
  const today = new Date();
  const [yearStr, monthStr, dayStr] = birthDateString.split('-');
  const birthYear = parseInt(yearStr, 10);
  const birthMonth = parseInt(monthStr, 10) - 1;
  const birthDay = parseInt(dayStr, 10);

  const birthDate = (!isNaN(birthYear) && !isNaN(birthMonth) && !isNaN(birthDay))
    ? new Date(birthYear, birthMonth, birthDay)
    : new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const siteName = "khodja lamia";

export interface TranslationSchema {
  siteTitle: string;
  nav: {
    about: string;
    experience: string;
    skills: string;
  };
  hero: {
    name: string;
    title: string;
    birthDate?: string;
    age: string;
    description: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    order: string;
  };
  experience: {
    title: string;
    items: Array<{
      year: string;
      company: string;
      role: string;
      description?: string;
      tasks?: string[];
      hasGallery?: boolean;
      galleryTitle?: string;
      galleryImages?: string[];
    }>;
  };
  skills: {
    title: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  themeLabel: string;
  rightsReserved: string;
}

export const translations: TranslationSchema = {
  siteTitle: siteName,
  nav: {
    about: "À propos",
    experience: "Expériences",
    skills: "Compétences",
  },
  hero: {
    name: "Khodja Lamia",
    title: "Traductrice et Interpète",
    birthDate: BIRTH_DATE,
    get age(): string {
      return `${calculateAge(this.birthDate || BIRTH_DATE)} ans`;
    },
    description: "Titulaire d'une licence d'anglais, possédant d'une solide expérience dans l'administration et le service client et aussi l'interprétariat vu que je parle 3 langues notamment le français, anglais et arabe.",
  },
  contact: {
    title: "Informations de contact",
    email: "khodja.lamia86@gmail.com",
    phone: "06 12 51 79 69",
    order: "Commandez votre version de ce site web",
  },
  experience: {
    title: "Expériences professionnelles",
    items: [
      {
        year: "2013 - 2015",
        company: "COMPEX LLP (Entreprise englaise)",
        role: "interprète traductrice",
        description: "",
        tasks: [
          "Traduction de documents professionnels : Traitement de contrats, d'accords commerciaux, de cahiers des charges.",
          "Interprétation de liaison : Facilitation des échanges lors de réunions d'affaires, de négociations avec des partenaires britanniques.",
          "Médiation linguistique et culturelle : Explication des nuances culturelles et professionnelles propres aux contextes anglophone (UK) et nord-africain/algérien pour fluidifier la compréhension mutuelle.",
        ]
      },
      {
        year: "2011 - 2014",
        company: "Ooredoo",
        role: "conseillère clientèle",
        description: "",
        tasks: [
          "Analyser les besoins du client (particuliers ou professionnels) pour lui proposer les meilleures offres de téléphonie mobile, forfaits voix/Internet, puces (SIM), recharges ou services connectés.",
          "Gérer les activations de lignes, les modifications de forfaits, les migrations d'offres",
          "Assurer la saisie et la mise à jour rigoureuse des données clients dans le système informatique de l'entreprise, dans le respect des procédures internes.",
          "Recevoir, analyser et traiter les requêtes ou réclamations des abonnés (facturation, problèmes de réseau, dysfonctionnements de lignes).",
          "Fournir un premier niveau de support technique (paramétrage Internet/APN, configuration des mobiles) et orienter les cas complexes vers les structures techniques compétentes."
        ]
      },
      {
        year: "2010 - 2012",
        company: "N.A.C.E (Entreprise Turque)",
        role: "interprète traductrice",
        description: "",
        tasks: [
          "Traduction de documents professionnels : Traitement de contrats, d'accords commerciaux, de cahiers des charges.",
          "Interprétation de liaison : Facilitation des échanges lors de réunions d'affaires, de négociations avec des partenaires turcs.",
          "Médiation linguistique et culturelle : Explication des nuances culturelles et professionnelles propres aux contextes anglophone (UK) et nord-africain/algérien pour fluidifier la compréhension mutuelle.",
        ]
      },
      {
        year: "2008 - 2010",
        company: "centre culturel alger",
        role: "Enseignante de la langues Anglaise et Française",
        description: "donner des cours de soutiens de la langue Anglaise et Française à des élèves de différentes classe du collège",
      },
    ]
  },
  skills: {
    title: "Compétences",
    categories: [
      { name: "Langues", items: ["Arabe: langue maternelle", "français: C1", "anglais: C1"] },
      { name: "Informatique", items: ["pack office (word, excel, windows)", "outil de visioconférence (zoom, teams)"] },
      { name: "Atouts", items: ["Rigoureux", "Autonomie, polyvalence et adaptabilité", "Discrétion et confidentialité", "Esprit d'équipe"] },
    ]
  },
  themeLabel: "Thème",
  rightsReserved: "Tous droits réservés"
};
