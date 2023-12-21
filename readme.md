<p align="center">
  <img src="https://github.com/Diabetless/.github/blob/main/assets/Diabetless%20Logo.png" alt="Konva logo" height="180" />
</p>

<h1 align="center">Diabetless Web Service</h1>

Diabetless web service is a collection of web services that have features like user authentication, content authorization, predict food, etc. Some of the endpoints require authorization using 
JWT(JSON Web Token). You need to login to access the service. The login is using email and password. If you don't have an account you can register to gain access to these services.

One of the cool features of this web service is predicting food by uploading food image. Once uploaded, user can see the food name and its nutrition fact such as glycemic index, glycemic load, protein,
carbohydrates, and more.

<h3>Architecture</h3>

![architecture](https://github.com/Diabetless/ML-Deployment/assets/101824833/e6ee50e0-5ba0-4b4b-8e1c-c4b3c8cc88d9)

This web services has two service available which is:
- backend
  <br/> base URL: https://backend-sggimrersq-et.a.run.app/
  <br/>If you want to see all of the features of the backend service you can visit the <a href="https://backend-sggimrersq-et.a.run.app/api-docs/">API DOCUMENTATION LINK</a>.
- deployed-model
  <br/> base URL: https://deployed-model-sggimrersq-et.a.run.app
  <br/>If you want to see all of the features of the deployed-ml service you can visit the <a href="https://deployed-model-sggimrersq-et.a.run.app/api-docs">API DOCUMENTATION LINK</a>.

<h2>Deployed Model Web Service</h2>

This repository is the repository of the deployed model service. The model that created by our ML devs is deployed on this service.

Endpoints available:
<pre>POST /detect-food (Detect foods with ML models</pre>

We have created the API Documentation for this service based on OPEN API specification. If you want to visit/see full API Documentation of this service you can visit this link: https://deployed-model-sggimrersq-et.a.run.app/api-docs/
<br/>
![image](https://github.com/Diabetless/ML-Deployment/assets/101824833/e5156c67-a9ef-4494-ae8c-f4de4f09107b)


<h3>Instructions</h3>
<h4>Detect Food Services</h4>
The detect food service uses a food image provided by the mobile app. The image will be given to the model to identify the type of food according to the classes available in the model. <br>
The image formats accepted by the model are <strong>.jpg, .jpeg, .png</strong> . The image will not be saved and will disappear when the identification is complete. <br>
If the prediction is successful, the service will return the type of food identified and provide recommendations if the identification results are unhealthy food in the <strong>JSON form</strong>.

