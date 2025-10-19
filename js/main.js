document.addEventListener('DOMContentLoaded', function() {
  // Language dictionaries
  const languages = {
    'de': {
      'nav.home': 'Startseite',
      'nav.features': 'Funktionen',
      'nav.contact': 'Kontakt',
      'hero.subtitle': 'Vereinfachen Sie Ihre persönlichen Finanzen',
      'hero.description': 'Verpassen Sie keine Transaktion mehr - Sparen Sie Zeit & bleiben Sie organisiert',
      'hero.download': 'App herunterladen',
      'hero.explore': 'Funktionen erkunden',
      'features.title': 'Hauptfunktionen',
      'features.tracking.title': 'Umfassendes Finanztracking',
      'features.tracking.desc': 'Verfolgen Sie Ausgaben, Einkommen und Transfers zwischen Konten mit anpassbaren Kategorien.',
      'features.reports.title': 'Visuelle Berichte',
      'features.reports.desc': 'Sehen Sie Ihre Ausgabenmuster mit intuitiven Diagrammen und überwachen Sie Kontostände im Zeitverlauf.',
      'features.secure.title': 'Sicher & Privat',
      'features.secure.desc': 'Alle Ihre Finanzdaten bleiben auf Ihrem Gerät oder in Ihrem persönlichen iCloud-Konto.',
      'features.receipts.title': 'Belegverwaltung',
      'features.receipts.desc': 'Scannen Sie Belege direkt mit Ihrer Kamera und speichern Sie sie lokal mit Ihren Transaktionen.',
      'features.sync.title': 'iCloud Synchronisation',
      'features.sync.desc': 'Synchronisieren Sie nahtlos über alle Ihre Apple-Geräte und greifen Sie überall auf Ihre Finanzdaten zu.',
      'features.automation.title': 'Intelligente Automatisierung',
      'features.automation.desc': 'Schnellzugriff, wiederkehrende Transaktionen und Home-Screen-Widgets für schnelle Transaktionseingabe.',
      'features.customize.title': 'Anpassbare Erfahrung',
      'features.customize.desc': 'Wählen Sie zwischen Hell- und Dunkelmodus und nutzen Sie die App in mehreren Sprachen.',
      'features.ai.title': 'KI-Finanzcoach',
      'features.ai.desc': 'Budgetplanung, Ausgabenanalyse und Spartipps basierend auf Ihren echten Transaktionsdaten.',
      'features.export.title': 'Import & Export',
      'features.export.desc': 'Importieren Sie Transaktionen aus CSV-Dateien und exportieren Sie Ihre Daten für andere Tools.',
      'screenshots.title': 'App Screenshots',
      'overview.title1': 'Finanztracking',
      'overview.title2': 'einfach gemacht',
      'overview.desc': 'CashProtector macht das Tracking Ihrer Finanzen mühelos. Keine vergessenen Ausgaben mehr und keine Zeitverschwendung durch komplizierte App-Navigation.',
      'overview.feature1.title': 'Einfach tippen',
      'overview.feature1.desc': 'Verwenden Sie Home-Screen-Widgets, um Ausgaben sofort zu erfassen, ohne die App zu öffnen.',
      'overview.feature2.title': 'Einfach halten',
      'overview.feature2.desc': 'Drücken Sie das App-Symbol, um direkt zum Transaktionserstellungsbildschirm zu gelangen.',
      'overview.feature3.title': 'Einmal einrichten',
      'overview.feature3.desc': 'Automatische Verfolgung wiederkehrender Rechnungen und Einkommen.',
      'quote.title': 'Verfolgen Sie Ihre Finanzen, ohne Ihren Tag zu unterbrechen.',
      'quote.subtitle': 'CashProtector passt sich Ihrem Leben an, nicht umgekehrt.',
      'privacy.title1': 'Ihre Finanzdaten gehören',
      'privacy.title2': 'nur Ihnen',
      'privacy.subtitle': 'Bei CashProtector steht Ihre finanzielle Privatsphäre an erster Stelle.',
      'privacy.feature1.title': 'Keine Datenweitergabe:',
      'privacy.feature1.desc': 'Wir sammeln, greifen nicht auf Ihre Finanzdaten zu und speichern sie nicht.',
      'privacy.feature2.title': 'Keine Werbung:',
      'privacy.feature2.desc': 'Keine Anzeigen, kein Tracking und keine Datenweitergabe.',
      'privacy.feature3.title': 'Lokale Speicherung:',
      'privacy.feature3.desc': 'Alle Ihre Daten bleiben sicher auf Ihrem Gerät oder in Ihrer persönlichen iCloud.',
      'privacy.feature4.title': 'Volle Kontrolle:',
      'privacy.feature4.desc': 'Sie können Ihre Daten jederzeit exportieren oder löschen.',
      'languages.title': 'Verfügbar in mehreren Sprachen',
      'languages.subtitle': 'Die App ist in den folgenden Sprachen verfügbar:',
      'languages.english': 'Englisch',
      'languages.german': 'Deutsch',
      'languages.spanish': 'Spanisch',
      'languages.french': 'Französisch',
      'languages.italian': 'Italienisch',
      'languages.russian': 'Russisch',
      'download.title': 'Jetzt herunterladen',
      'download.subtitle': 'Nehmen Sie die Kontrolle über Ihre persönlichen Finanzen, ohne Kompromisse bei Privatsphäre oder Sicherheit einzugehen.',
      'download.button': 'App herunterladen',
      'download.compatibility': 'CashProtector ist für iPhone und iPad mit iOS 18 oder neuer verfügbar.',
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Haben Sie Fragen zur App? Kontaktieren Sie mich gerne!',
      'contact.support.title': 'Support erhalten',
      'contact.support.desc': 'Bei Fragen zur App oder für Feedback können Sie mich über folgende Wege erreichen:',
      'contact.support.email': 'E-Mail',
      'ai.title1': 'Treffen Sie Ihren persönlichen',
      'ai.title2': 'KI-Finanzcoach',
      'ai.description': 'Lassen Sie sich von künstlicher Intelligenz dabei helfen, bessere Finanzentscheidungen zu treffen. Unser KI-Coach analysiert Ihre Ausgabenmuster und gibt Ihnen personalisierte Empfehlungen.',
      'ai.feature1.title': 'Intelligente Budgetplanung',
      'ai.feature1.desc': 'Erstellen Sie automatisch Budgets basierend auf der bewährten 50/30/20-Regel und Ihren echten Ausgabendaten.',
      'ai.feature2.title': 'Ausgabenanalyse',
      'ai.feature2.desc': 'Entdecken Sie versteckte Sparpotentiale und erhalten Sie Tipps zur Optimierung Ihrer Ausgaben.',
      'ai.feature3.title': 'Personalisierte Spartipps',
      'ai.feature3.desc': 'Erhalten Sie maßgeschneiderte Empfehlungen basierend auf Ihren individuellen Finanzgewohnheiten.',
      'ai.demo.title': 'KI-Finanzcoach',
      'ai.demo.input': 'Fragen Sie nach Budgettipps...',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.app-privacy': 'Datenschutz CashProtector'
    },
    'en': {
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.contact': 'Contact',
      'hero.subtitle': 'Simplify Your Personal Finances',
      'hero.description': 'Never miss a transaction again - Save time & stay organized',
      'hero.download': 'Download App',
      'hero.explore': 'Explore Features',
      'features.title': 'Main Features',
      'features.tracking.title': 'Comprehensive Financial Tracking',
      'features.tracking.desc': 'Track expenses, income, and transfers between accounts with customizable categories.',
      'features.reports.title': 'Visual Reports',
      'features.reports.desc': 'See your spending patterns with intuitive charts and monitor account balances over time.',
      'features.secure.title': 'Secure & Private',
      'features.secure.desc': 'All your financial data stays on your device or in your personal iCloud account.',
      'features.receipts.title': 'Receipt Management',
      'features.receipts.desc': 'Scan receipts directly with your camera and store them locally with your transactions.',
      'features.sync.title': 'iCloud Synchronization',
      'features.sync.desc': 'Sync seamlessly across all your Apple devices and access your financial data anywhere.',
      'features.automation.title': 'Intelligent Automation',
      'features.automation.desc': 'Quick access, recurring transactions, and home screen widgets for fast transaction entry.',
      'features.customize.title': 'Customizable Experience',
      'features.customize.desc': 'Choose between light and dark mode and use the app in multiple languages.',
      'features.ai.title': 'AI Financial Coach',
      'features.ai.desc': 'Budget planning, expense analysis, and savings tips based on your real transaction data.',
      'features.export.title': 'Import & Export',
      'features.export.desc': 'Import transactions from CSV files and export your data for use with other tools.',
      'screenshots.title': 'App Screenshots',
      'overview.title1': 'Financial tracking',
      'overview.title2': 'made easy',
      'overview.desc': 'CashProtector makes tracking your finances effortless. No more forgotten expenses and no time wasted on complicated app navigation.',
      'overview.feature1.title': 'Just tap',
      'overview.feature1.desc': 'Use home screen widgets to capture expenses instantly without opening the app.',
      'overview.feature2.title': 'Just hold',
      'overview.feature2.desc': 'Press the app icon to go directly to the transaction creation screen.',
      'overview.feature3.title': 'Set up once',
      'overview.feature3.desc': 'Automatic tracking of recurring bills and income.',
      'quote.title': 'Track your finances without interrupting your day.',
      'quote.subtitle': 'CashProtector adapts to your life, not the other way around.',
      'privacy.title1': 'Your financial data belongs',
      'privacy.title2': 'only to you',
      'privacy.subtitle': 'At CashProtector, your financial privacy comes first.',
      'privacy.feature1.title': 'No Data Sharing:',
      'privacy.feature1.desc': 'We don\'t collect, access, or store your financial data.',
      'privacy.feature2.title': 'No Ads:',
      'privacy.feature2.desc': 'No advertisements, no tracking, and no data sharing.',
      'privacy.feature3.title': 'Local Storage:',
      'privacy.feature3.desc': 'All your data stays secure on your device or in your personal iCloud.',
      'privacy.feature4.title': 'Full Control:',
      'privacy.feature4.desc': 'You can export or delete your data at any time.',
      'languages.title': 'Available in Multiple Languages',
      'languages.subtitle': 'The app is available in the following languages:',
      'languages.english': 'English',
      'languages.german': 'German',
      'languages.spanish': 'Spanish',
      'languages.french': 'French',
      'languages.italian': 'Italian',
      'languages.russian': 'Russian',
      'download.title': 'Download Now',
      'download.subtitle': 'Take control of your personal finances without compromising on privacy or security.',
      'download.button': 'Download App',
      'download.compatibility': 'CashProtector is available for iPhone and iPad with iOS 18 or newer.',
      'contact.title': 'Contact',
      'contact.subtitle': 'Have questions about the app? Feel free to reach out!',
      'contact.support.title': 'Get Support',
      'contact.support.desc': 'For questions about the app or to provide feedback, you can reach me through:',
      'contact.support.email': 'Email',
      'ai.title1': 'Meet Your Personal',
      'ai.title2': 'AI Financial Coach',
      'ai.description': 'Let artificial intelligence help you make better financial decisions. Our AI coach analyzes your spending patterns and gives you personalized recommendations.',
      'ai.feature1.title': 'Smart Budget Planning',
      'ai.feature1.desc': 'Automatically create budgets based on the proven 50/30/20 rule and your real spending data.',
      'ai.feature2.title': 'Expense Analysis',
      'ai.feature2.desc': 'Discover hidden savings potential and get tips to optimize your spending.',
      'ai.feature3.title': 'Personalized Savings Tips',
      'ai.feature3.desc': 'Get tailored recommendations based on your individual financial habits.',
      'ai.demo.title': 'AI Financial Coach',
      'ai.demo.input': 'Ask for budget tips...',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',
      'footer.app-privacy': 'CashProtector Privacy Policy'
    }
  };
  
  // Set the language on page load (default to German)
  let currentLang = 'de';
  
  // Function to update content based on selected language
  function updateContent(lang) {
    // Update HTML elements with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (languages[lang][key]) {
        element.textContent = languages[lang][key];
      }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (languages[lang][key]) {
        element.placeholder = languages[lang][key];
      }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update screenshot images
    document.querySelectorAll('.screenshot-img').forEach(img => {
      const imgId = img.getAttribute('data-img-id');
      if (lang === 'en') {
        img.src = `./img/Englisch/${imgId}.jpg`;
      } else {
        img.src = `./img/Deutsch/${imgId}.jpg`;
      }
    });
    
    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Update current language
    currentLang = lang;
  }
  
  // Add event listeners to language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      updateContent(lang);
      
      // Close the mobile navbar if it's open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
  
  // Initialize with German
  updateContent('de');
  
  // Add click handler to close mobile navbar when any nav link is clicked
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
      
      // Handle anchor links with manual scrolling
      const href = this.getAttribute('href');
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Get the navbar height
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          
          // Calculate the target scroll position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
          
          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // AI Chat Demo Functionality
  const aiChatMessages = document.getElementById('aiChatMessages');
  
  const demoConversations = {
    'de': [
      {
        type: 'ai',
        text: 'Hallo! Ich bin Ihr persönlicher KI-Finanzcoach. Wie kann ich Ihnen heute bei Ihren Finanzen helfen?',
        delay: 500
      },
      {
        type: 'user',
        text: 'Kannst du mir bei der Budgetplanung helfen?',
        delay: 2000
      },
      {
        type: 'ai',
        text: 'Gerne! Basierend auf Ihren Ausgabendaten der letzten 3 Monate empfehle ich die 50/30/20-Regel:\n\n💰 50% für Notwendigkeiten (Miete, Lebensmittel)\n🎉 30% für Wünsche (Entertainment, Hobbys)\n💳 20% für Sparen und Schuldenabbau\n\nMöchten Sie ein personalisiertes Budget erstellen?',
        delay: 3500
      },
      {
        type: 'user',
        text: 'Ja, das klingt gut!',
        delay: 5500
      },
      {
        type: 'ai',
        text: 'Perfekt! Ich analysiere Ihre Transaktionen und erstelle ein maßgeschneidertes Budget. Sie können alles in der App anpassen. 📊',
        delay: 6500
      }
    ],
    'en': [
      {
        type: 'ai',
        text: 'Hello! I\'m your personal AI financial coach. How can I help you with your finances today?',
        delay: 500
      },
      {
        type: 'user',
        text: 'Can you help me with budget planning?',
        delay: 2000
      },
      {
        type: 'ai',
        text: 'Of course! Based on your spending data from the last 3 months, I recommend the 50/30/20 rule:\n\n💰 50% for needs (rent, groceries)\n🎉 30% for wants (entertainment, hobbies)\n💳 20% for savings and debt repayment\n\nWould you like to create a personalized budget?',
        delay: 3500
      },
      {
        type: 'user',
        text: 'Yes, that sounds great!',
        delay: 5500
      },
      {
        type: 'ai',
        text: 'Perfect! I\'ll analyze your transactions and create a tailored budget. You can adjust everything in the app. 📊',
        delay: 6500
      }
    ]
  };

  function createMessage(type, text, isTyping = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const avatar = document.createElement('div');
    avatar.className = `message-avatar ${type}`;
    avatar.innerHTML = type === 'ai' ? '🤖' : '👤';
    
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${type}`;
    
    if (isTyping) {
      bubble.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    } else {
      bubble.textContent = text;
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    
    return messageDiv;
  }

  function addMessage(type, text, delay = 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Add typing indicator for AI messages
        let typingMessage;
        if (type === 'ai') {
          typingMessage = createMessage('ai', '', true);
          aiChatMessages.appendChild(typingMessage);
          aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
        }

        // Remove typing indicator and add real message after a delay
        setTimeout(() => {
          if (typingMessage) {
            typingMessage.remove();
          }
          
          const message = createMessage(type, text);
          aiChatMessages.appendChild(message);
          aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
          resolve();
        }, type === 'ai' ? 1500 : 0);
      }, delay);
    });
  }

  async function startAIChatDemo() {
    if (!aiChatMessages) return;
    
    // Clear existing messages
    aiChatMessages.innerHTML = '';
    
    const conversation = demoConversations[currentLang] || demoConversations['de'];
    
    for (const message of conversation) {
      await addMessage(message.type, message.text, message.delay);
    }
    
    // Restart demo after completion
    setTimeout(() => {
      startAIChatDemo();
    }, 8000);
  }

  // Start demo when page loads
  setTimeout(() => {
    startAIChatDemo();
  }, 1000);

  // Restart demo when language changes
  const originalUpdateContent = updateContent;
  updateContent = function(lang) {
    originalUpdateContent(lang);
    setTimeout(() => {
      startAIChatDemo();
    }, 500);
  };
});