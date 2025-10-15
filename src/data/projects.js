export const projects = [
  {
    id: 1,
    title: "LSTM-Based Portfolio Optimization",
    description: "A deep learning project using LSTM neural networks to forecast stock returns and simulate portfolio strategies, leveraging open financial datasets for experimentation.",
    longDescription: "This project investigates how Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) models can predict stock returns and aid portfolio optimization. Inspired by academic research, it adapts methods using open-access data—including Yahoo Finance, Kenneth French Data Library, and Kaggle financial metrics. The pipeline includes data gathering, feature engineering, model training with Keras/TensorFlow, custom loss functions for directional accuracy, and simulation of investment strategies. Results demonstrate that public data can achieve competitive predictive performance compared to private datasets, with detailed analysis of feature importance and model robustness.",
    technologies: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    category: "ML/AI",
    status: "Live",
    featured: false,
    image: "lstm-proj.png",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/cwoods05/Inspirit-LSTM-project",
    highlights: [
      "Replicated academic LSTM portfolio research with open datasets",
      "Used Yahoo Finance, Kenneth French Data, and Kaggle metrics",
      "Custom loss function for improved directional prediction",
      "Portfolio simulations showed marginal index outperformance",
      "Feature analysis revealed Fama-French factors as most influential",
      "Training pipeline with robust preprocessing and GPU support"
    ],
    year: 2024
  },
  {
    id: 2,
    title: "Turbofan Engine Remaining Useful Life (RUL) Prediction",
    description: "A machine learning pipeline for predicting the Remaining Useful Life (RUL) of turbofan engines using the NASA CMAPSS dataset, featuring feature engineering, baseline models, and visualization.",
    longDescription: "This project implements a baseline machine learning pipeline for estimating the Remaining Useful Life (RUL) of turbofan engines, utilizing the NASA CMAPSS FD001 dataset. It automatically loads and processes engine sensor data, generating rolling mean and first-order difference features. The pipeline includes train/validation splits, Z-score normalization, and supports two baseline models: Ridge Regression and Random Forest Regressor. Evaluation metrics include Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and the NASA Scoring Function. The workflow outputs visualizations (scatter plots), prediction CSVs, and a summary of metrics. The results provide a foundation for further research into prognostics and predictive maintenance for industrial engines.",
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    category: "ML/AI",
    status: "Live",
    featured: true,
    image: "turbofan.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/cwoods05/turbofan-rul-starter",
    highlights: [
      "Implements RUL prediction using NASA CMAPSS FD001 dataset",
      "Automatic data loading and preprocessing pipeline",
      "Rolling mean and first-order difference feature engineering",
      "Baseline models: Ridge Regression and Random Forest Regressor",
      "Evaluation metrics include MAE, RMSE, and NASA scoring",
      "Visualizations and outputs for validation predictions and metrics"
    ],
    year: 2025
  }
];

export const projectCategories = [
  "All",
  "Full Stack",
  "ML/AI",
  "Embedded",
];

