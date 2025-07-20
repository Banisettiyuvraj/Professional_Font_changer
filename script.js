class ProfessionalFontChanger {
    constructor() {
        // Complete curated font collection as specified
        this.fonts = [
            // Sans-Serif Fonts (Modern, Clean)
            { 
                name: 'Helvetica', 
                category: 'sans-serif', 
                description: 'The king of clarity and neutrality',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Arial', 
                category: 'sans-serif', 
                description: 'Web-safe alternative to Helvetica',
                fallback: 'sans-serif'
            },
            { 
                name: 'Roboto', 
                category: 'sans-serif', 
                description: "Google's favorite for Android and web",
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Open Sans', 
                category: 'sans-serif', 
                description: 'Excellent readability, widely used in web UI',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Lato', 
                category: 'sans-serif', 
                description: 'Elegant yet readable, great for body text',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Montserrat', 
                category: 'sans-serif', 
                description: 'Popular for headers and modern UI',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Poppins', 
                category: 'sans-serif', 
                description: 'Geometric style, great for tech and startups',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Futura', 
                category: 'sans-serif', 
                description: 'Bold, geometric, modernist',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Proxima Nova', 
                category: 'sans-serif', 
                description: 'Social media favorite (used in BuzzFeed)',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'SF Pro', 
                category: 'sans-serif', 
                description: 'Default for Apple/macOS interfaces',
                fallback: 'system-ui, -apple-system, sans-serif'
            },

            // Serif Fonts (Formal, Traditional)
            { 
                name: 'Times New Roman', 
                category: 'serif', 
                description: 'Classic newspaper/editorial',
                fallback: 'serif'
            },
            { 
                name: 'Georgia', 
                category: 'serif', 
                description: 'Designed for screen readability',
                fallback: 'serif'
            },
            { 
                name: 'Merriweather', 
                category: 'serif', 
                description: 'Elegant serif great for online articles',
                fallback: 'Georgia, serif'
            },
            { 
                name: 'Garamond', 
                category: 'serif', 
                description: 'Sophisticated and traditional print feel',
                fallback: 'serif'
            },
            { 
                name: 'Playfair Display', 
                category: 'serif', 
                description: 'High contrast, used in editorial designs',
                fallback: 'Georgia, serif'
            },

            // Stylized Fonts
            { 
                name: 'Clash Display', 
                category: 'experimental', 
                description: 'Bold, trendy display font',
                fallback: 'Impact, Arial Black, sans-serif'
            },
            { 
                name: 'Recoleta', 
                category: 'experimental', 
                description: 'Soft vintage serif with modern vibes',
                fallback: 'Georgia, serif'
            },
            { 
                name: 'Canela', 
                category: 'experimental', 
                description: 'Elegant serif used in premium branding',
                fallback: 'Georgia, serif'
            },
            { 
                name: 'Noe Display', 
                category: 'experimental', 
                description: 'Strong editorial serif with punch',
                fallback: 'Georgia, serif'
            },
            { 
                name: 'GT America', 
                category: 'experimental', 
                description: 'Fusion of American and European grotesques',
                fallback: 'Arial, sans-serif'
            },

            // Monospace Fonts
            { 
                name: 'Fira Code', 
                category: 'monospace', 
                description: 'With ligatures, ideal for developers',
                fallback: 'Courier New, monospace'
            },
            { 
                name: 'JetBrains Mono', 
                category: 'monospace', 
                description: 'Designed by JetBrains, dev-friendly',
                fallback: 'Courier New, monospace'
            },
            { 
                name: 'Courier New', 
                category: 'monospace', 
                description: 'Classic monospace',
                fallback: 'monospace'
            },
            { 
                name: 'IBM Plex Mono', 
                category: 'monospace', 
                description: "IBM's open-source font for code",
                fallback: 'Courier New, monospace'
            },
            { 
                name: 'SF Mono', 
                category: 'monospace', 
                description: "Apple's monospace for Terminal and code",
                fallback: 'Monaco, Courier New, monospace'
            },

            // Handwritten / Calligraphic
            { 
                name: 'Pacifico', 
                category: 'handwritten', 
                description: 'Casual handwritten script',
                fallback: 'cursive'
            },
            { 
                name: 'Lobster', 
                category: 'handwritten', 
                description: 'Bold cursive, used in informal web banners',
                fallback: 'cursive'
            },
            { 
                name: 'Dancing Script', 
                category: 'handwritten', 
                description: 'Elegant flowing script',
                fallback: 'cursive'
            },
            { 
                name: 'Great Vibes', 
                category: 'handwritten', 
                description: 'Calligraphic style, wedding invites etc.',
                fallback: 'cursive'
            },
            { 
                name: 'Satisfy', 
                category: 'handwritten', 
                description: 'Natural handwriting feel',
                fallback: 'cursive'
            },

            // Experimental / Unique
            { 
                name: 'Orbitron', 
                category: 'experimental', 
                description: 'Futuristic, good for sci-fi themes',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Space Grotesk', 
                category: 'experimental', 
                description: 'Sleek and modern, good for tech brands',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Be Vietnam Pro', 
                category: 'experimental', 
                description: 'Modern Vietnamese-type design',
                fallback: 'Arial, sans-serif'
            },
            { 
                name: 'Bebas Neue', 
                category: 'experimental', 
                description: 'All caps, bold display font',
                fallback: 'Impact, Arial Black, sans-serif'
            },
            { 
                name: 'Zilla Slab', 
                category: 'experimental', 
                description: "Mozilla's custom slab serif",
                fallback: 'Georgia, serif'
            }
        ];

        this.currentFont = 'Helvetica';
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.customText = 'The quick brown fox jumps over the lazy dog';
        this.fontSize = 24;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderFonts();
        this.updateLivePreview();
        this.updateCharCounter();
    }

    setupEventListeners() {
        // Text input
        const customTextInput = document.getElementById('customText');
        const resetBtn = document.getElementById('resetText');
        
        customTextInput.addEventListener('input', (e) => {
            this.customText = e.target.value;
            this.updateCharCounter();
            this.updateAllPreviews();
            this.updateLivePreview();
        });

        resetBtn.addEventListener('click', () => {
            const defaultText = 'The quick brown fox jumps over the lazy dog';
            customTextInput.value = defaultText;
            this.customText = defaultText;
            this.updateCharCounter();
            this.updateAllPreviews();
            this.updateLivePreview();
        });

        // Font size control
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        const fontSizeValue = document.getElementById('fontSizeValue');
        
        fontSizeSlider.addEventListener('input', (e) => {
            this.fontSize = e.target.value;
            fontSizeValue.textContent = `${this.fontSize}px`;
            this.updateLivePreview();
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('clearSearch');
        
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.renderFonts();
            this.toggleClearButton();
        });

        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            this.searchTerm = '';
            this.renderFonts();
            this.toggleClearButton();
            searchInput.focus();
        });

        // Category filters
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.category-btn.active').classList.remove('active');
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.renderFonts();
            });
        });

        // Copy buttons
        const copyPlainBtn = document.getElementById('copyPlainBtn');
        const copyStyledBtn = document.getElementById('copyStyledBtn');
        
        copyPlainBtn.addEventListener('click', () => this.copyText(false));
        copyStyledBtn.addEventListener('click', () => this.copyText(true));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }

    updateCharCounter() {
        const charCounter = document.getElementById('charCounter');
        const length = this.customText.length;
        const maxLength = 300;
        
        charCounter.textContent = `${length}/${maxLength}`;
        
        charCounter.classList.remove('warning', 'danger');
        if (length >= 250 && length < 300) {
            charCounter.classList.add('warning');
        } else if (length >= 300) {
            charCounter.classList.add('danger');
        }
    }

    updateAllPreviews() {
        document.querySelectorAll('.font-preview').forEach(preview => {
            const truncatedText = this.customText.length > 80 
                ? this.customText.substring(0, 80) + '...' 
                : this.customText;
            preview.textContent = truncatedText;
        });
    }

    updateLivePreview() {
        const livePreviewText = document.getElementById('livePreviewText');
        const currentFontDisplay = document.getElementById('currentFontDisplay');
        
        livePreviewText.textContent = this.customText;
        livePreviewText.style.fontSize = `${this.fontSize}px`;
        
        const font = this.fonts.find(f => f.name === this.currentFont);
        const fontFamily = font ? `"${font.name}", ${font.fallback}` : this.currentFont;
        livePreviewText.style.fontFamily = fontFamily;
        
        currentFontDisplay.textContent = this.currentFont;
    }

    loadFont(fontName) {
        this.currentFont = fontName;
        this.updateSelectedCard();
        this.updateLivePreview();
        
        // Smooth transition animation
        const livePreviewText = document.getElementById('livePreviewText');
        livePreviewText.style.transform = 'scale(0.95)';
        livePreviewText.style.opacity = '0.7';
        
        setTimeout(() => {
            livePreviewText.style.transform = 'scale(1)';
            livePreviewText.style.opacity = '1';
        }, 150);
    }

    updateSelectedCard() {
        document.querySelectorAll('.font-card').forEach(card => {
            card.classList.remove('selected');
            if (card.dataset.font === this.currentFont) {
                card.classList.add('selected');
            }
        });
    }

    toggleClearButton() {
        const clearBtn = document.getElementById('clearSearch');
        const searchInput = document.getElementById('searchInput');
        
        if (searchInput.value.length > 0) {
            clearBtn.classList.add('show');
        } else {
            clearBtn.classList.remove('show');
        }
    }

    filterFonts() {
        return this.fonts.filter(font => {
            const matchesCategory = this.currentCategory === 'all' || font.category === this.currentCategory;
            const matchesSearch = font.name.toLowerCase().includes(this.searchTerm) || 
                                font.description.toLowerCase().includes(this.searchTerm);
            return matchesCategory && matchesSearch;
        });
    }

    createFontCard(font) {
        const card = document.createElement('div');
        card.className = 'font-card';
        card.dataset.font = font.name;
        
        if (font.name === this.currentFont) {
            card.classList.add('selected');
        }

        const truncatedText = this.customText.length > 60 
            ? this.customText.substring(0, 60) + '...' 
            : this.customText;

        const fontFamily = `"${font.name}", ${font.fallback}`;
        
        card.innerHTML = `
            <div class="font-category">${this.getCategoryEmoji(font.category)} ${font.category}</div>
            <h3 class="font-name" style="font-family: ${fontFamily}">${font.name}</h3>
            <p class="font-preview" style="font-family: ${fontFamily}">${truncatedText}</p>
            <p class="font-description">${font.description}</p>
        `;

        card.addEventListener('click', () => {
            this.loadFont(font.name);
            this.animateCardSelection(card);
        });

        return card;
    }

    getCategoryEmoji(category) {
        const emojis = {
            'sans-serif': '✅',
            'serif': '📚',
            'monospace': '🧠',
            'handwritten': '✍️',
            'experimental': '🦄'
        };
        return emojis[category] || '🔤';
    }

    animateCardSelection(card) {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'pulse 0.6s ease-in-out';
        }, 10);
        
        setTimeout(() => {
            card.style.animation = '';
        }, 600);
    }

    renderFonts() {
        const grid = document.getElementById('fontsGrid');
        const filteredFonts = this.filterFonts();
        
        grid.innerHTML = '';
        
        if (filteredFonts.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <h3>No fonts found</h3>
                <p>Try adjusting your search or filter criteria</p>
            `;
            noResults.style.cssText = `
                grid-column: 1 / -1;
                text-align: center;
                padding: 3rem;
                color: var(--text-secondary);
            `;
            grid.appendChild(noResults);
            return;
        }
        
        filteredFonts.forEach((font, index) => {
            const card = this.createFontCard(font);
            card.style.animationDelay = `${index * 0.1}s`;
            grid.appendChild(card);
        });
    }

    async copyText(styled = false) {
        const btn = styled ? document.getElementById('copyStyledBtn') : document.getElementById('copyPlainBtn');
        
        try {
            const textToCopy = this.customText;
            await navigator.clipboard.writeText(textToCopy);
            
            const originalText = btn.textContent;
            btn.textContent = styled ? '✔ Styled Copied!' : '✔ Copied!';
            btn.classList.add('copied');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            alert('Failed to copy text. Please try again.');
            console.error(err);
        }
    }
}

// Initialize the font changer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.fontChanger = new ProfessionalFontChanger();
    
    // Add ripple effect for font cards
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('font-card') || e.target.closest('.font-card')) {
            const card = e.target.classList.contains('font-card') ? e.target : e.target.closest('.font-card');
            
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(0, 212, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 1;
            `;
            
            card.style.position = 'relative';
            card.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// Add ripple animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
