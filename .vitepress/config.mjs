import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //show the logo in the title
  title: " ",
  description: "aolearn docs site",
  themeConfig: {
    logo: '/orange.svg',
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
