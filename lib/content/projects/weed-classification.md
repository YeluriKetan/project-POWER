---
title: "Multiclass Weed Identification"
date: "2022-12"
intro: "Detection and classification of Australian weed species"
---

# DeepWeeds CNN - [Repo](https://github.com/YeluriKetan/deepweeds-cnn)

Part of a team project for Machine Learning (CS3244) course taken in AY 2022/23 Sem 1.

## Background

Our team (of 5 members) was tasked with choosing a dataset from a given list and frame a motivated problem statement around that dataset. We are then intended to spend the next **10 weeks** exploring the problem using various machine learning techniques. As part of this project, I took upon the task of exploring the problem using **Convolutional Neural Networks (CNN)**, while other team members explored methods such as KNN, Decision Trees, SVM and Tranfer Learning.

You can additionally also checkout the [project proposal](https://github.com/YeluriKetan/deepweeds-cnn/blob/f6dacb99c15dbad06d50833322aa4415fd137649/resources/Project%20Proposal.pdf).

# Dataset - [Repo](https://github.com/AlexOlsen/DeepWeeds), [Kaggle](https://www.kaggle.com/datasets/imsparsh/deepweeds), [TFDS](https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=deep_weeds)

<img alt="Dataset" src="/images/weeds-dataset.png" width="600" />

> The **DeepWeeds** dataset consists of **17,509** unique **256x256** colour images in **9 classes**. There are **15,007** training images and **2,501** test images. These images were collected in situ from eight rangeland environments across **northern Australia**.

## Preprocessing and Augmentation

- The data was already cleaned, formatted and labelled appropriately, prompting no further cleaning.
- The labelled dataset was randomly split into 3 categories for train, validation and testing in 8:1:1 ratio. All models were trained using the same initial split.
- To improve the visibility of important features and reduce noise in the images, we employed a three step processing technique.
  - Histogram equalisation
  - HSV mask for slicing greens
  - Gabor filter
    > This transformation looks as follows

<img alt="weed-image-processing" src="/images/weed-processing.jpg" width="800" />

- Since the negative class (7000+ images) was much bigger than the positive classes (900 each), each positive class was augmented over itself 4 more times with random rotation and flips.

## Models

We used **micro-averaged recall score** on the validation set as the performance measure - to account for the imbalanced class sizes as well as high cost consequence of misclassifying an instance as negative.

- Starting off with a simple network, we have 3 convolutional-pooling blocks followed by dense layers. This model trained with non-augmented data gave a recall score of **66.78%**.

<img alt="cnn-simple" src="https://raw.githubusercontent.com/YeluriKetan/deepweeds-cnn/master/resources/cnn-simple.JPG" width="600" />

- Building upon the previous model and adding an additional convolutional layer to each block, we increase the recall score to **75.38%**.

<img alt="cnn-2-con" src="https://raw.githubusercontent.com/YeluriKetan/deepweeds-cnn/master/resources/cnn-2-con.JPG" width="600" />

- Adding a batch normalisation layer to each block unfortunately bumps the recall score slightly down to **73.18%**.

<img alt="cnn-2-con-bnorm" src="https://raw.githubusercontent.com/YeluriKetan/deepweeds-cnn/master/resources/cnn-2-con-bnorm.JPG" width="600" />

- Training the same model again on augmented data, we see a massive rise in the recall score to **92.23%**.

<img alt="cnn-2-con-bnorm-aug" src="https://raw.githubusercontent.com/YeluriKetan/deepweeds-cnn/master/resources/cnn-2-con-bnorm-aug.JPG" width="600" />

- Finally, we increase the number of (conv-conv-bnorm-pooling) blocks to 5 and use augmented training data to get a sweet recall score of **93.66%**.

<img alt="cnn-5-aug" src="https://raw.githubusercontent.com/YeluriKetan/deepweeds-cnn/master/resources/cnn-5-aug.JPG" width="600" />

## Not good enough...

The problem with the last model above is that, while it is good at classifying weed species, it is unable to detect the presence/absence of weeds accurately. This is measured using **N-Recall score** i.e. recall score calculated on the negative class. CNN-5-Aug only had a N-Recall score of **65.7%**.

At this point, my teammate Bryan used transfer learning to build a really good weed detector with a N-Recall score **94.9%**.

I came up with the crazy idea of using the output label probabilites from both of these models as inputs into a dense neural network and use the outputs from this ensemble network to make the final prediction.

<img alt="ensemble-nn" src="https://raw.githubusercontent.com/YeluriKetan/deepweeds-cnn/master/resources/ensemble-nn.JPG" width="600" />

This ensemble model had the best validation accuracy at **90.84%** and best testing accuracy at **91.70%**.

## Put together using

- [Tensorflow](https://www.tensorflow.org/) - Open-source library for machine learning
- [Keras](https://keras.io/) - High-level neural network library on top of TensorFlow
- [Seaborn](https://seaborn.pydata.org/) - Python data visualization library
- [Google Colab](https://colab.research.google.com/?utm_source=scs-index) - Hosted Jupyter Notebook service with free access to GPUs

## Teamwork makes the dreamwork

- [Bryan Tee Pak Hong](https://github.com/SpdPnd98)
- Cheong Yee Ming
- Cheah Yan (Xie Yan)
- Kong Fanji
- Yeluri Ketan
