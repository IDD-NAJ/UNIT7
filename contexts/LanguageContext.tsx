'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'ES' | 'FR' | 'DE' | 'ZH' | 'JA';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'nav.search': 'Search',
    'nav.searchPlaceholder': 'Search services, projects, or content...',
    'nav.cancel': 'Cancel',
    'nav.language': 'Language',
    
    // Hero Section
    'hero.title': 'Transform Your Business with',
    'hero.titleHighlight': 'Cutting-Edge Technology',
    'hero.subtitle': 'Expert IT consultation, innovative software development, and comprehensive tech solutions to accelerate your digital transformation journey.',
    'hero.getStarted': 'Get Started Today',
    'hero.watchDemo': 'Watch Demo',
    'hero.projectsCompleted': 'Projects Completed',
    'hero.happyClients': 'Happy Clients',
    'hero.yearsExperience': 'Years Experience',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive technology solutions tailored to your business needs',
    'services.itConsultation': 'IT Consultation',
    'services.itConsultationDesc': 'Strategic technology consulting to optimize your business processes and infrastructure.',
    'services.hardwareDev': 'Hardware Development',
    'services.hardwareDevDesc': 'Custom hardware solutions designed and manufactured to meet your specific requirements.',
    'services.softwareDev': 'Software Development',
    'services.softwareDevDesc': 'Full-stack software solutions built with modern technologies and best practices.',
    'services.productDev': 'Product Development',
    'services.productDevDesc': 'End-to-end product development from ideation to market launch.',
    'services.webDev': 'Web Development',
    'services.webDevDesc': 'Responsive, high-performance websites and web applications.',
    'services.appDev': 'App Development',
    'services.appDevDesc': 'Native and cross-platform mobile applications for iOS and Android.',
    'services.viewAll': 'View All Services',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Showcasing our expertise through successful client projects',
    'projects.ecommerce': 'E-commerce Platform',
    'projects.ecommerceDesc': 'Full-stack e-commerce solution with advanced analytics and inventory management.',
    'projects.iot': 'IoT Dashboard',
    'projects.iotDesc': 'Real-time monitoring dashboard for industrial IoT devices with predictive analytics.',
    'projects.mobile': 'Mobile Banking App',
    'projects.mobileDesc': 'Secure mobile banking application with biometric authentication and real-time transactions.',
    'projects.viewAll': 'View All Projects',
    
    // Why Choose Us
    'whyChoose.title': 'Why Choose Unit-7ing?',
    'whyChoose.subtitle': 'We combine technical expertise with business acumen to deliver exceptional results',
    'whyChoose.security': 'Security First',
    'whyChoose.securityDesc': 'Enterprise-grade security measures and compliance with industry standards.',
    'whyChoose.onTime': 'On-Time Delivery',
    'whyChoose.onTimeDesc': 'Agile development process ensuring timely project completion.',
    'whyChoose.expertTeam': 'Expert Team',
    'whyChoose.expertTeamDesc': 'Skilled professionals with extensive experience in modern technologies.',
    'whyChoose.proven': 'Proven Track Record',
    'whyChoose.provenDesc': '500+ successful projects and satisfied clients across various industries.',
    'whyChoose.cuttingEdge': 'Cutting-Edge Tech',
    'whyChoose.cuttingEdgeDesc': 'Latest technologies and frameworks for optimal performance.',
    'whyChoose.support': '24/7 Support',
    'whyChoose.supportDesc': 'Round-the-clock technical support and maintenance services.',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': "Let's discuss how our technology solutions can accelerate your growth and digital transformation journey.",
    'cta.startProject': 'Start Your Project',
    'cta.scheduleCall': 'Schedule a Call',
    
    // Footer
    'footer.description': 'Leading technology solutions provider specializing in IT consultation, software development, and innovative digital transformation services.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': '© 2024 Unit-7ing Solutions. All rights reserved.',
    
    // About Page
    'about.title': 'About Unit-7ing Solutions',
    'about.subtitle': "We're a forward-thinking technology company dedicated to helping businesses thrive in the digital age through innovative solutions and expert consultation.",
    'about.ourStory': 'Our Story',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.values': 'Our Values',
    'about.team': 'Meet Our Team',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your business with cutting-edge technology? Let\'s discuss your project and how we can help you achieve your goals.',
    'contact.sendMessage': 'Send Us a Message',
    'contact.contactInfo': 'Contact Information',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company',
    'contact.phone': 'Phone Number',
    'contact.service': 'Service Interested In',
    'contact.message': 'Project Description',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
  },
  ES: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    'nav.search': 'Buscar',
    'nav.searchPlaceholder': 'Buscar servicios, proyectos o contenido...',
    'nav.cancel': 'Cancelar',
    'nav.language': 'Idioma',
    
    // Hero Section
    'hero.title': 'Transforma Tu Negocio con',
    'hero.titleHighlight': 'Tecnología de Vanguardia',
    'hero.subtitle': 'Consultoría IT experta, desarrollo de software innovador y soluciones tecnológicas integrales para acelerar tu transformación digital.',
    'hero.getStarted': 'Comenzar Hoy',
    'hero.watchDemo': 'Ver Demo',
    'hero.projectsCompleted': 'Proyectos Completados',
    'hero.happyClients': 'Clientes Satisfechos',
    'hero.yearsExperience': 'Años de Experiencia',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones tecnológicas integrales adaptadas a las necesidades de tu negocio',
    'services.itConsultation': 'Consultoría IT',
    'services.itConsultationDesc': 'Consultoría tecnológica estratégica para optimizar tus procesos de negocio e infraestructura.',
    'services.hardwareDev': 'Desarrollo de Hardware',
    'services.hardwareDevDesc': 'Soluciones de hardware personalizadas diseñadas y fabricadas para cumplir tus requisitos específicos.',
    'services.softwareDev': 'Desarrollo de Software',
    'services.softwareDevDesc': 'Soluciones de software full-stack construidas con tecnologías modernas y mejores prácticas.',
    'services.productDev': 'Desarrollo de Productos',
    'services.productDevDesc': 'Desarrollo de productos de extremo a extremo desde la ideación hasta el lanzamiento al mercado.',
    'services.webDev': 'Desarrollo Web',
    'services.webDevDesc': 'Sitios web y aplicaciones web responsivos y de alto rendimiento.',
    'services.appDev': 'Desarrollo de Apps',
    'services.appDevDesc': 'Aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    'services.viewAll': 'Ver Todos los Servicios',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Mostrando nuestra experiencia a través de proyectos exitosos de clientes',
    'projects.ecommerce': 'Plataforma E-commerce',
    'projects.ecommerceDesc': 'Solución e-commerce full-stack con análisis avanzado y gestión de inventario.',
    'projects.iot': 'Dashboard IoT',
    'projects.iotDesc': 'Dashboard de monitoreo en tiempo real para dispositivos IoT industriales con análisis predictivo.',
    'projects.mobile': 'App Bancaria Móvil',
    'projects.mobileDesc': 'Aplicación bancaria móvil segura con autenticación biométrica y transacciones en tiempo real.',
    'projects.viewAll': 'Ver Todos los Proyectos',
    
    // Why Choose Us
    'whyChoose.title': '¿Por Qué Elegir Unit-7ing?',
    'whyChoose.subtitle': 'Combinamos experiencia técnica con conocimiento empresarial para entregar resultados excepcionales',
    'whyChoose.security': 'Seguridad Primero',
    'whyChoose.securityDesc': 'Medidas de seguridad de nivel empresarial y cumplimiento con estándares de la industria.',
    'whyChoose.onTime': 'Entrega a Tiempo',
    'whyChoose.onTimeDesc': 'Proceso de desarrollo ágil que asegura la finalización oportuna del proyecto.',
    'whyChoose.expertTeam': 'Equipo Experto',
    'whyChoose.expertTeamDesc': 'Profesionales capacitados con amplia experiencia en tecnologías modernas.',
    'whyChoose.proven': 'Historial Comprobado',
    'whyChoose.provenDesc': '500+ proyectos exitosos y clientes satisfechos en diversas industrias.',
    'whyChoose.cuttingEdge': 'Tecnología de Vanguardia',
    'whyChoose.cuttingEdgeDesc': 'Últimas tecnologías y frameworks para rendimiento óptimo.',
    'whyChoose.support': 'Soporte 24/7',
    'whyChoose.supportDesc': 'Soporte técnico y servicios de mantenimiento las 24 horas.',
    
    // CTA Section
    'cta.title': '¿Listo para Transformar Tu Negocio?',
    'cta.subtitle': 'Discutamos cómo nuestras soluciones tecnológicas pueden acelerar tu crecimiento y transformación digital.',
    'cta.startProject': 'Iniciar Tu Proyecto',
    'cta.scheduleCall': 'Programar una Llamada',
    
    // Footer
    'footer.description': 'Proveedor líder de soluciones tecnológicas especializado en consultoría IT, desarrollo de software y servicios innovadores de transformación digital.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contactInfo': 'Información de Contacto',
    'footer.copyright': '© 2024 Unit-7ing Solutions. Todos los derechos reservados.',
    
    // About Page
    'about.title': 'Acerca de Unit-7ing Solutions',
    'about.subtitle': 'Somos una empresa tecnológica visionaria dedicada a ayudar a las empresas a prosperar en la era digital a través de soluciones innovadoras y consultoría experta.',
    'about.ourStory': 'Nuestra Historia',
    'about.mission': 'Nuestra Misión',
    'about.vision': 'Nuestra Visión',
    'about.values': 'Nuestros Valores',
    'about.team': 'Conoce Nuestro Equipo',
    
    // Contact Page
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para transformar tu negocio con tecnología de vanguardia? Discutamos tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos.',
    'contact.sendMessage': 'Envíanos un Mensaje',
    'contact.contactInfo': 'Información de Contacto',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Dirección de Email',
    'contact.company': 'Empresa',
    'contact.phone': 'Número de Teléfono',
    'contact.service': 'Servicio de Interés',
    'contact.message': 'Descripción del Proyecto',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
  },
  FR: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    'nav.search': 'Rechercher',
    'nav.searchPlaceholder': 'Rechercher services, projets ou contenu...',
    'nav.cancel': 'Annuler',
    'nav.language': 'Langue',
    
    // Hero Section
    'hero.title': 'Transformez Votre Entreprise avec',
    'hero.titleHighlight': 'une Technologie de Pointe',
    'hero.subtitle': 'Consultation IT experte, développement logiciel innovant et solutions technologiques complètes pour accélérer votre transformation numérique.',
    'hero.getStarted': 'Commencer Aujourd\'hui',
    'hero.watchDemo': 'Voir la Démo',
    'hero.projectsCompleted': 'Projets Terminés',
    'hero.happyClients': 'Clients Satisfaits',
    'hero.yearsExperience': 'Années d\'Expérience',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions technologiques complètes adaptées aux besoins de votre entreprise',
    'services.itConsultation': 'Consultation IT',
    'services.itConsultationDesc': 'Conseil technologique stratégique pour optimiser vos processus métier et infrastructure.',
    'services.hardwareDev': 'Développement Hardware',
    'services.hardwareDevDesc': 'Solutions hardware personnalisées conçues et fabriquées pour répondre à vos exigences spécifiques.',
    'services.softwareDev': 'Développement Logiciel',
    'services.softwareDevDesc': 'Solutions logicielles full-stack construites avec des technologies modernes et les meilleures pratiques.',
    'services.productDev': 'Développement de Produits',
    'services.productDevDesc': 'Développement de produits de bout en bout de l\'idéation au lancement sur le marché.',
    'services.webDev': 'Développement Web',
    'services.webDevDesc': 'Sites web et applications web responsifs et haute performance.',
    'services.appDev': 'Développement d\'Apps',
    'services.appDevDesc': 'Applications mobiles natives et multiplateformes pour iOS et Android.',
    'services.viewAll': 'Voir Tous les Services',
    
    // Projects
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Démontrant notre expertise à travers des projets clients réussis',
    'projects.ecommerce': 'Plateforme E-commerce',
    'projects.ecommerceDesc': 'Solution e-commerce full-stack avec analyses avancées et gestion d\'inventaire.',
    'projects.iot': 'Tableau de Bord IoT',
    'projects.iotDesc': 'Tableau de bord de surveillance en temps réel pour appareils IoT industriels avec analyses prédictives.',
    'projects.mobile': 'App Bancaire Mobile',
    'projects.mobileDesc': 'Application bancaire mobile sécurisée avec authentification biométrique et transactions en temps réel.',
    'projects.viewAll': 'Voir Tous les Projets',
    
    // Why Choose Us
    'whyChoose.title': 'Pourquoi Choisir Unit-7ing?',
    'whyChoose.subtitle': 'Nous combinons expertise technique et sens des affaires pour livrer des résultats exceptionnels',
    'whyChoose.security': 'Sécurité d\'Abord',
    'whyChoose.securityDesc': 'Mesures de sécurité de niveau entreprise et conformité aux standards de l\'industrie.',
    'whyChoose.onTime': 'Livraison à Temps',
    'whyChoose.onTimeDesc': 'Processus de développement agile assurant l\'achèvement ponctuel du projet.',
    'whyChoose.expertTeam': 'Équipe Experte',
    'whyChoose.expertTeamDesc': 'Professionnels qualifiés avec une vaste expérience des technologies modernes.',
    'whyChoose.proven': 'Historique Prouvé',
    'whyChoose.provenDesc': '500+ projets réussis et clients satisfaits dans diverses industries.',
    'whyChoose.cuttingEdge': 'Technologie de Pointe',
    'whyChoose.cuttingEdgeDesc': 'Dernières technologies et frameworks pour une performance optimale.',
    'whyChoose.support': 'Support 24/7',
    'whyChoose.supportDesc': 'Support technique et services de maintenance 24h/24.',
    
    // CTA Section
    'cta.title': 'Prêt à Transformer Votre Entreprise?',
    'cta.subtitle': 'Discutons de comment nos solutions technologiques peuvent accélérer votre croissance et transformation numérique.',
    'cta.startProject': 'Démarrer Votre Projet',
    'cta.scheduleCall': 'Programmer un Appel',
    
    // Footer
    'footer.description': 'Fournisseur leader de solutions technologiques spécialisé en consultation IT, développement logiciel et services innovants de transformation numérique.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contactInfo': 'Informations de Contact',
    'footer.copyright': '© 2024 Unit-7ing Solutions. Tous droits réservés.',
    
    // About Page
    'about.title': 'À Propos de Unit-7ing Solutions',
    'about.subtitle': 'Nous sommes une entreprise technologique avant-gardiste dédiée à aider les entreprises à prospérer à l\'ère numérique grâce à des solutions innovantes et une consultation experte.',
    'about.ourStory': 'Notre Histoire',
    'about.mission': 'Notre Mission',
    'about.vision': 'Notre Vision',
    'about.values': 'Nos Valeurs',
    'about.team': 'Rencontrez Notre Équipe',
    
    // Contact Page
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à transformer votre entreprise avec une technologie de pointe? Discutons de votre projet et comment nous pouvons vous aider à atteindre vos objectifs.',
    'contact.sendMessage': 'Envoyez-Nous un Message',
    'contact.contactInfo': 'Informations de Contact',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.company': 'Entreprise',
    'contact.phone': 'Numéro de Téléphone',
    'contact.service': 'Service d\'Intérêt',
    'contact.message': 'Description du Projet',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi...',
  },
  DE: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.getStarted': 'Loslegen',
    'nav.search': 'Suchen',
    'nav.searchPlaceholder': 'Dienstleistungen, Projekte oder Inhalte suchen...',
    'nav.cancel': 'Abbrechen',
    'nav.language': 'Sprache',
    
    // Hero Section
    'hero.title': 'Transformieren Sie Ihr Unternehmen mit',
    'hero.titleHighlight': 'Modernster Technologie',
    'hero.subtitle': 'Experte IT-Beratung, innovative Softwareentwicklung und umfassende Tech-Lösungen zur Beschleunigung Ihrer digitalen Transformation.',
    'hero.getStarted': 'Heute Beginnen',
    'hero.watchDemo': 'Demo Ansehen',
    'hero.projectsCompleted': 'Abgeschlossene Projekte',
    'hero.happyClients': 'Zufriedene Kunden',
    'hero.yearsExperience': 'Jahre Erfahrung',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Umfassende Technologielösungen maßgeschneidert für Ihre Geschäftsanforderungen',
    'services.itConsultation': 'IT-Beratung',
    'services.itConsultationDesc': 'Strategische Technologieberatung zur Optimierung Ihrer Geschäftsprozesse und Infrastruktur.',
    'services.hardwareDev': 'Hardware-Entwicklung',
    'services.hardwareDevDesc': 'Maßgeschneiderte Hardware-Lösungen, entwickelt und hergestellt für Ihre spezifischen Anforderungen.',
    'services.softwareDev': 'Software-Entwicklung',
    'services.softwareDevDesc': 'Full-Stack-Software-Lösungen mit modernen Technologien und bewährten Praktiken.',
    'services.productDev': 'Produktentwicklung',
    'services.productDevDesc': 'End-to-End-Produktentwicklung von der Ideenfindung bis zur Markteinführung.',
    'services.webDev': 'Web-Entwicklung',
    'services.webDevDesc': 'Responsive, hochperformante Websites und Webanwendungen.',
    'services.appDev': 'App-Entwicklung',
    'services.appDevDesc': 'Native und plattformübergreifende mobile Anwendungen für iOS und Android.',
    'services.viewAll': 'Alle Dienstleistungen Anzeigen',
    
    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.subtitle': 'Unsere Expertise durch erfolgreiche Kundenprojekte demonstrieren',
    'projects.ecommerce': 'E-Commerce-Plattform',
    'projects.ecommerceDesc': 'Full-Stack-E-Commerce-Lösung mit erweiterten Analysen und Bestandsverwaltung.',
    'projects.iot': 'IoT-Dashboard',
    'projects.iotDesc': 'Echtzeit-Überwachungs-Dashboard für industrielle IoT-Geräte mit prädiktiven Analysen.',
    'projects.mobile': 'Mobile Banking-App',
    'projects.mobileDesc': 'Sichere mobile Banking-Anwendung mit biometrischer Authentifizierung und Echtzeit-Transaktionen.',
    'projects.viewAll': 'Alle Projekte Anzeigen',
    
    // Why Choose Us
    'whyChoose.title': 'Warum Unit-7ing Wählen?',
    'whyChoose.subtitle': 'Wir kombinieren technische Expertise mit Geschäftssinn für außergewöhnliche Ergebnisse',
    'whyChoose.security': 'Sicherheit Zuerst',
    'whyChoose.securityDesc': 'Unternehmensklasse-Sicherheitsmaßnahmen und Compliance mit Industriestandards.',
    'whyChoose.onTime': 'Pünktliche Lieferung',
    'whyChoose.onTimeDesc': 'Agiler Entwicklungsprozess für rechtzeitige Projektfertigstellung.',
    'whyChoose.expertTeam': 'Expertenteam',
    'whyChoose.expertTeamDesc': 'Qualifizierte Fachkräfte mit umfangreicher Erfahrung in modernen Technologien.',
    'whyChoose.proven': 'Bewährte Erfolgsbilanz',
    'whyChoose.provenDesc': '500+ erfolgreiche Projekte und zufriedene Kunden in verschiedenen Branchen.',
    'whyChoose.cuttingEdge': 'Modernste Technologie',
    'whyChoose.cuttingEdgeDesc': 'Neueste Technologien und Frameworks für optimale Leistung.',
    'whyChoose.support': '24/7 Support',
    'whyChoose.supportDesc': 'Rund-um-die-Uhr technischer Support und Wartungsdienstleistungen.',
    
    // CTA Section
    'cta.title': 'Bereit, Ihr Unternehmen zu Transformieren?',
    'cta.subtitle': 'Lassen Sie uns besprechen, wie unsere Technologielösungen Ihr Wachstum und Ihre digitale Transformation beschleunigen können.',
    'cta.startProject': 'Ihr Projekt Starten',
    'cta.scheduleCall': 'Anruf Planen',
    
    // Footer
    'footer.description': 'Führender Anbieter von Technologielösungen spezialisiert auf IT-Beratung, Softwareentwicklung und innovative digitale Transformationsdienstleistungen.',
    'footer.quickLinks': 'Schnelllinks',
    'footer.contactInfo': 'Kontaktinformationen',
    'footer.copyright': '© 2024 Unit-7ing Solutions. Alle Rechte vorbehalten.',
    
    // About Page
    'about.title': 'Über Unit-7ing Solutions',
    'about.subtitle': 'Wir sind ein zukunftsorientiertes Technologieunternehmen, das sich darauf spezialisiert hat, Unternehmen durch innovative Lösungen und Expertenberatung im digitalen Zeitalter zum Erfolg zu verhelfen.',
    'about.ourStory': 'Unsere Geschichte',
    'about.mission': 'Unsere Mission',
    'about.vision': 'Unsere Vision',
    'about.values': 'Unsere Werte',
    'about.team': 'Lernen Sie Unser Team Kennen',
    
    // Contact Page
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Bereit, Ihr Unternehmen mit modernster Technologie zu transformieren? Lassen Sie uns Ihr Projekt besprechen und wie wir Ihnen helfen können, Ihre Ziele zu erreichen.',
    'contact.sendMessage': 'Senden Sie Uns eine Nachricht',
    'contact.contactInfo': 'Kontaktinformationen',
    'contact.name': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.company': 'Unternehmen',
    'contact.phone': 'Telefonnummer',
    'contact.service': 'Interessierter Service',
    'contact.message': 'Projektbeschreibung',
    'contact.send': 'Nachricht Senden',
    'contact.sending': 'Senden...',
  },
  ZH: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.projects': '项目',
    'nav.contact': '联系我们',
    'nav.getStarted': '开始',
    'nav.search': '搜索',
    'nav.searchPlaceholder': '搜索服务、项目或内容...',
    'nav.cancel': '取消',
    'nav.language': '语言',
    
    // Hero Section
    'hero.title': '用',
    'hero.titleHighlight': '尖端技术改变您的业务',
    'hero.subtitle': '专业的IT咨询、创新的软件开发和全面的技术解决方案，加速您的数字化转型之旅。',
    'hero.getStarted': '立即开始',
    'hero.watchDemo': '观看演示',
    'hero.projectsCompleted': '已完成项目',
    'hero.happyClients': '满意客户',
    'hero.yearsExperience': '年经验',
    
    // Services
    'services.title': '我们的服务',
    'services.subtitle': '为您的业务需求量身定制的综合技术解决方案',
    'services.itConsultation': 'IT咨询',
    'services.itConsultationDesc': '战略技术咨询，优化您的业务流程和基础设施。',
    'services.hardwareDev': '硬件开发',
    'services.hardwareDevDesc': '定制硬件解决方案，设计和制造以满足您的特定要求。',
    'services.softwareDev': '软件开发',
    'services.softwareDevDesc': '使用现代技术和最佳实践构建的全栈软件解决方案。',
    'services.productDev': '产品开发',
    'services.productDevDesc': '从构思到市场推出的端到端产品开发。',
    'services.webDev': '网站开发',
    'services.webDevDesc': '响应式、高性能的网站和网络应用程序。',
    'services.appDev': '应用开发',
    'services.appDevDesc': 'iOS和Android的原生和跨平台移动应用程序。',
    'services.viewAll': '查看所有服务',
    
    // Projects
    'projects.title': '精选项目',
    'projects.subtitle': '通过成功的客户项目展示我们的专业知识',
    'projects.ecommerce': '电商平台',
    'projects.ecommerceDesc': '具有高级分析和库存管理的全栈电商解决方案。',
    'projects.iot': '物联网仪表板',
    'projects.iotDesc': '工业物联网设备的实时监控仪表板，具有预测分析功能。',
    'projects.mobile': '移动银行应用',
    'projects.mobileDesc': '具有生物识别认证和实时交易的安全移动银行应用程序。',
    'projects.viewAll': '查看所有项目',
    
    // Why Choose Us
    'whyChoose.title': '为什么选择Unit-7ing？',
    'whyChoose.subtitle': '我们将技术专长与商业智慧相结合，提供卓越的成果',
    'whyChoose.security': '安全第一',
    'whyChoose.securityDesc': '企业级安全措施和符合行业标准的合规性。',
    'whyChoose.onTime': '按时交付',
    'whyChoose.onTimeDesc': '敏捷开发流程确保项目按时完成。',
    'whyChoose.expertTeam': '专家团队',
    'whyChoose.expertTeamDesc': '在现代技术方面具有丰富经验的熟练专业人员。',
    'whyChoose.proven': '经过验证的记录',
    'whyChoose.provenDesc': '500+成功项目和各行业满意客户。',
    'whyChoose.cuttingEdge': '尖端技术',
    'whyChoose.cuttingEdgeDesc': '最新的技术和框架以获得最佳性能。',
    'whyChoose.support': '24/7支持',
    'whyChoose.supportDesc': '全天候技术支持和维护服务。',
    
    // CTA Section
    'cta.title': '准备好改变您的业务了吗？',
    'cta.subtitle': '让我们讨论我们的技术解决方案如何加速您的增长和数字化转型之旅。',
    'cta.startProject': '开始您的项目',
    'cta.scheduleCall': '安排通话',
    
    // Footer
    'footer.description': '领先的技术解决方案提供商，专门从事IT咨询、软件开发和创新的数字化转型服务。',
    'footer.quickLinks': '快速链接',
    'footer.contactInfo': '联系信息',
    'footer.copyright': '© 2024 Unit-7ing Solutions. 保留所有权利。',
    
    // About Page
    'about.title': '关于Unit-7ing Solutions',
    'about.subtitle': '我们是一家前瞻性的技术公司，致力于通过创新解决方案和专家咨询帮助企业在数字时代蓬勃发展。',
    'about.ourStory': '我们的故事',
    'about.mission': '我们的使命',
    'about.vision': '我们的愿景',
    'about.values': '我们的价值观',
    'about.team': '认识我们的团队',
    
    // Contact Page
    'contact.title': '联系我们',
    'contact.subtitle': '准备用尖端技术改变您的业务？让我们讨论您的项目以及我们如何帮助您实现目标。',
    'contact.sendMessage': '给我们发消息',
    'contact.contactInfo': '联系信息',
    'contact.name': '全名',
    'contact.email': '电子邮件地址',
    'contact.company': '公司',
    'contact.phone': '电话号码',
    'contact.service': '感兴趣的服务',
    'contact.message': '项目描述',
    'contact.send': '发送消息',
    'contact.sending': '发送中...',
  },
  JA: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '会社概要',
    'nav.services': 'サービス',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',
    'nav.getStarted': '始める',
    'nav.search': '検索',
    'nav.searchPlaceholder': 'サービス、プロジェクト、またはコンテンツを検索...',
    'nav.cancel': 'キャンセル',
    'nav.language': '言語',
    
    // Hero Section
    'hero.title': 'ビジネスを',
    'hero.titleHighlight': '最先端技術で変革',
    'hero.subtitle': '専門的なITコンサルティング、革新的なソフトウェア開発、包括的な技術ソリューションで、デジタル変革の旅を加速します。',
    'hero.getStarted': '今すぐ始める',
    'hero.watchDemo': 'デモを見る',
    'hero.projectsCompleted': '完了プロジェクト',
    'hero.happyClients': '満足したクライアント',
    'hero.yearsExperience': '年の経験',
    
    // Services
    'services.title': '私たちのサービス',
    'services.subtitle': 'お客様のビジネスニーズに合わせた包括的な技術ソリューション',
    'services.itConsultation': 'ITコンサルティング',
    'services.itConsultationDesc': 'ビジネスプロセスとインフラストラクチャを最適化する戦略的技術コンサルティング。',
    'services.hardwareDev': 'ハードウェア開発',
    'services.hardwareDevDesc': '特定の要件を満たすために設計・製造されたカスタムハードウェアソリューション。',
    'services.softwareDev': 'ソフトウェア開発',
    'services.softwareDevDesc': '最新技術とベストプラクティスで構築されたフルスタックソフトウェアソリューション。',
    'services.productDev': '製品開発',
    'services.productDevDesc': 'アイデアから市場投入まで、エンドツーエンドの製品開発。',
    'services.webDev': 'ウェブ開発',
    'services.webDevDesc': 'レスポンシブで高性能なウェブサイトとウェブアプリケーション。',
    'services.appDev': 'アプリ開発',
    'services.appDevDesc': 'iOSとAndroid向けのネイティブおよびクロスプラットフォームモバイルアプリケーション。',
    'services.viewAll': 'すべてのサービスを見る',
    
    // Projects
    'projects.title': '注目プロジェクト',
    'projects.subtitle': '成功したクライアントプロジェクトを通じて専門知識を紹介',
    'projects.ecommerce': 'Eコマースプラットフォーム',
    'projects.ecommerceDesc': '高度な分析と在庫管理を備えたフルスタックEコマースソリューション。',
    'projects.iot': 'IoTダッシュボード',
    'projects.iotDesc': '予測分析機能を備えた産業用IoTデバイスのリアルタイム監視ダッシュボード。',
    'projects.mobile': 'モバイルバンキングアプリ',
    'projects.mobileDesc': '生体認証とリアルタイム取引を備えた安全なモバイルバンキングアプリケーション。',
    'projects.viewAll': 'すべてのプロジェクトを見る',
    
    // Why Choose Us
    'whyChoose.title': 'なぜUnit-7ingを選ぶのか？',
    'whyChoose.subtitle': '技術的専門知識とビジネス洞察を組み合わせて、優れた結果を提供します',
    'whyChoose.security': 'セキュリティ第一',
    'whyChoose.securityDesc': 'エンタープライズグレードのセキュリティ対策と業界標準への準拠。',
    'whyChoose.onTime': '時間通りの納期',
    'whyChoose.onTimeDesc': 'プロジェクトの適時完了を保証するアジャイル開発プロセス。',
    'whyChoose.expertTeam': '専門チーム',
    'whyChoose.expertTeamDesc': '最新技術に豊富な経験を持つ熟練した専門家。',
    'whyChoose.proven': '実績のある記録',
    'whyChoose.provenDesc': '様々な業界で500+の成功プロジェクトと満足したクライアント。',
    'whyChoose.cuttingEdge': '最先端技術',
    'whyChoose.cuttingEdgeDesc': '最適なパフォーマンスのための最新技術とフレームワーク。',
    'whyChoose.support': '24/7サポート',
    'whyChoose.supportDesc': '24時間体制の技術サポートとメンテナンスサービス。',
    
    // CTA Section
    'cta.title': 'ビジネスを変革する準備はできていますか？',
    'cta.subtitle': '私たちの技術ソリューションがどのように成長とデジタル変革の旅を加速できるかを話し合いましょう。',
    'cta.startProject': 'プロジェクトを開始',
    'cta.scheduleCall': '通話をスケジュール',
    
    // Footer
    'footer.description': 'ITコンサルティング、ソフトウェア開発、革新的なデジタル変革サービスを専門とする主要な技術ソリューションプロバイダー。',
    'footer.quickLinks': 'クイックリンク',
    'footer.contactInfo': '連絡先情報',
    'footer.copyright': '© 2024 Unit-7ing Solutions. 全著作権所有。',
    
    // About Page
    'about.title': 'Unit-7ing Solutionsについて',
    'about.subtitle': '私たちは、革新的なソリューションと専門的なコンサルティングを通じて、企業がデジタル時代に繁栄するのを支援することに専念する先進的な技術会社です。',
    'about.ourStory': '私たちの物語',
    'about.mission': '私たちの使命',
    'about.vision': '私たちのビジョン',
    'about.values': '私たちの価値観',
    'about.team': 'チームに会う',
    
    // Contact Page
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '最先端技術でビジネスを変革する準備はできていますか？プロジェクトについて話し合い、目標達成をどのようにサポートできるかをお聞かせください。',
    'contact.sendMessage': 'メッセージを送信',
    'contact.contactInfo': '連絡先情報',
    'contact.name': '氏名',
    'contact.email': 'メールアドレス',
    'contact.company': '会社',
    'contact.phone': '電話番号',
    'contact.service': '興味のあるサービス',
    'contact.message': 'プロジェクトの説明',
    'contact.send': 'メッセージを送信',
    'contact.sending': '送信中...',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}