# TeamWork Egypt - Internationalization (i18n) Guide

This application supports English and Arabic languages using Angular's built-in i18n features.

## Features Implemented

✅ **Language Selector Component**: Dropdown in the header to switch between languages
✅ **English (Default)**: Served at root path `/`
✅ **Arabic with RTL Support**: Served at `/ar/` with right-to-left text direction
✅ **Translated Content**: Header, Footer, Landing page, and Career Tips sections
✅ **Dynamic Language Switching**: Users can switch languages and navigate to the correct path

## Supported Languages

| Language | Code | Path   | Direction |
| -------- | ---- | ------ | --------- |
| English  | en   | `/`    | LTR       |
| Arabic   | ar   | `/ar/` | RTL       |

## Usage

### For Development

1. **Serve English version**:

   ```bash
   npm start
   # or
   ng serve
   ```

   Access at: http://localhost:4200

2. **Serve Arabic version**:

   ```bash
   ng serve --configuration development --port 4201 --locale ar
   ```

   Access at: http://localhost:4201

3. **Build all locales**:
   ```bash
   ng build --localize
   ```

### Available VS Code Tasks

- `npm: start` - Start English development server
- `Serve Arabic` - Start Arabic development server on port 4201
- `Build All Locales` - Build production bundles for all languages
- `Extract i18n` - Extract new translatable strings

## Adding New Translations

### 1. Mark Text for Translation

Add `i18n` attributes to HTML elements:

```html
<!-- Simple text -->
<span i18n="@@unique.id">Text to translate</span>

<!-- With description -->
<span i18n="@@unique.id|Description">Text to translate</span>
```

### 2. Extract New Messages

Run the extraction command:

```bash
ng extract-i18n --output-path src/locale
```

This updates `src/locale/messages.xlf` with new translatable strings.

### 3. Add Arabic Translations

Add corresponding entries to `src/locale/messages.ar.xlf`:

```xml
<trans-unit id="unique.id" datatype="html">
  <source>Text to translate</source>
  <target>النص المترجم</target>
</trans-unit>
```

### 4. Test Your Changes

Build and test both languages:

```bash
ng build --localize
ng serve --locale ar
```

## File Structure

```
src/
├── locale/
│   ├── messages.xlf        # English source messages
│   └── messages.ar.xlf     # Arabic translations
├── index.html              # English HTML (LTR)
├── index.ar.html           # Arabic HTML (RTL)
└── app/
    └── shared/
        └── language-selector.component.ts  # Language switcher
```

## Language Selector Component

The language selector is automatically included in the header and provides:

- Visual language switcher with flags
- Automatic path detection and redirection
- Support for both English and Arabic paths
- Clean dropdown UI with hover effects

## Translated Sections

Currently translated sections include:

### Header Navigation

- Home, Features, How It Works, Testimonials
- Career Tips, For Employers
- Join Now / Join buttons

### Footer

- Quick Links section
- Support section
- All navigation and legal links

### Landing Page

- Hero section (Find Your Dream Job)
- About Team Work International section
- Country names (Saudi Arabia, UAE, Qatar, etc.)
- Call-to-action buttons

### Career Tips Page

- Page title and breadcrumbs
- Navigation elements

## Production Deployment

The build process creates separate bundles for each language:

```
dist/teamworkegypt/
├── browser/          # English version (default)
└── browser/ar/       # Arabic version
```

Configure your web server to:

- Serve `/` from `browser/` (English)
- Serve `/ar/` from `browser/ar/` (Arabic)

## Browser Compatibility

- All modern browsers support the i18n features
- RTL layout works in all major browsers
- Language detection and switching work across all platforms

## Future Enhancements

Consider adding:

- [ ] Automatic language detection based on browser preferences
- [ ] More languages (French, German, etc.)
- [ ] Date and number localization
- [ ] Currency formatting for different regions
- [ ] More granular translation sections
