# Astro Landing Page

This project is a static landing page built using Astro, a modern static site generator. The landing page showcases a product or service and is structured to be easily maintainable and scalable.

## Project Structure

The project is organized as follows:

```
astro-landing-page
├── public
│   └── assets
│       └── images          # Directory for image assets
├── src
│   ├── components           # Reusable UI components
│   │   ├── Hero.astro      # Hero section component
│   │   ├── Features.astro   # Features section component
│   │   └── Footer.astro     # Footer component
│   ├── layouts              # Layouts for the site
│   │   └── MainLayout.astro # Main layout component
│   ├── pages                # Pages of the site
│   │   └── index.astro      # Main entry point of the site
│   └── styles               # Styles for the site
│       └── global.css       # Global CSS styles
├── astro.config.mjs         # Configuration for Astro
├── package.json             # NPM configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Getting Started

To run and build the project, follow these steps:

1. **Install Dependencies**  
   Run the following command to install the necessary dependencies:
   ```
   npm install
   ```

2. **Build the Static Site**  
   To build the static site for production, use:
   ```
   npm run build
   ```

3. **Preview the Built Site**  
   To preview the built site locally, run:
   ```
   npm run preview
   ```

## Deployment

This project is configured for deployment on GitHub Pages. Ensure that the `astro.config.mjs` file is set with the correct base path for your repository.

## Components

- **Hero**: The main introductory section of the landing page, including a title, subtitle, and call-to-action button.
- **Features**: A section that highlights the key features of the product or service, presented in card format.
- **Footer**: Contains copyright information and relevant links.

## Styles

The project reuses an existing CSS framework to maintain consistent styling across the site. Global styles are imported in the `MainLayout.astro` file.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. 

## License

This project is open-source and available under the MIT License.