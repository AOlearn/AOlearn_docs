import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //show the logo in the title
  title: " ",
  description: "aolearn docs site",
  head: [
    [
      'style',
      {},
      `
      :root {
        --vp-c-brand: #94490f;
        --vp-c-brand-light: #b35c14;
        --vp-c-brand-dark: #6d350b;
        --vp-c-brand-1: #94490f;
        --vp-c-brand-2: #b35c14;
        --vp-c-brand-3: #6d350b;
        --vp-c-brand-4: #94490f;
        --vp-c-brand-light: #b35c14;
        --vp-c-brand-dark: #6d350b;
      .vp-theme-default .vp-nav .vp-nav-item--active {
        color: var(--vp-c-brand);
      }

      html.dark {
        --vp-c-brand: #94490f;
      }
      `
    ]
  ],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/AOlearn/AOlearn_docs/refs/heads/main/orange.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/init' },

    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'setup', link: '/init' },
          { text: 'Data format', link: '/DataFormat' },
          { text: 'modules and functions', link: '/ModulesandFunctions' },
        ]
      },
      {
        text:'ModulesandFunctions',
        items: [
          { text: "Linear Regression", link: "/ModulesandFunctions/LinearRegression" },
          { text: "Ridge Regression", link: "/ModulesandFunctions/RidgeRegression" },
          { text: "Lasso Regression", link: "/ModulesandFunctions/LassoRegression" },
          { text: "Logistic Regression", link: "/ModulesandFunctions/LogisticRegression" },
          { text: "Multiclass Logistic Regression", link: "/ModulesandFunctions/MulticlassLogisticRegression" },
          { text: "Naive Bayes", link: "/ModulesandFunctions/NaiveBayes" },
          { text: "k-Nearest Neighbors", link: "/ModulesandFunctions/k-NearestNeighbors" },
          { text: "Clustering", link: "/ModulesandFunctions/Clustering" },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AOlearn/docs' }
    ]
  }
})
