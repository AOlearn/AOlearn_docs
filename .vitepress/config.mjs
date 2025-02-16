import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aolearn docs",
  description: "aolearn docs site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Data format', link: '/DataFormat' },
          { text: 'modules and functions', link: '/ModulesandFunctions' },
        ]
      },
      {
        text:'ModulesandFunctions',
        items: [
          { text: "Clustering", link: "/ModulesandFunctions/Clustering" },
          { text: "k-Nearest Neighbors", link: "/ModulesandFunctions/k-NearestNeighbors" },
          { text: "Lasso Regression", link: "/ModulesandFunctions/LassoRegression" },
          { text: "Linear Regression", link: "/ModulesandFunctions/LinearRegression" },
          { text: "Logistic Regression", link: "/ModulesandFunctions/LogisticRegression" },
          { text: "Multiclass Logistic Regression", link: "/ModulesandFunctions/MulticlassLogisticRegression" },
          { text: "Naive Bayes", link: "/ModulesandFunctions/NaiveBayes" },
          { text: "Ridge Regression", link: "/ModulesandFunctions/RidgeRegression" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
