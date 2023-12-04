# Recipe App

## Overview

Welcome to the Recipe Book App! This application allows users to discover, share, and manage their favorite recipes. Below, you'll find information on how to use the application, the technologies used in its development, and details on any outstanding bugs or unfinished functionality.

## Inspiration

The genesis of DishDiscovery, an inventive application enabling users to share and contribute their recipes, found its roots in Richard's deep-seated passion for culinary exploration and gastronomic diversity. Richard, an avid food enthusiast and aspiring chef, was inspired by his extensive travels, diverse culinary experiences, and interactions with various cultures. Throughout his journeys, he observed the absence of a cohesive platform where individuals could compile and exchange their unique recipes. Motivated by this realization, Richard envisioned DishDiscovery as a comprehensive solution—an online haven for culinary enthusiasts, chefs, and passionate home cooks to converge and curate a repository of diverse recipes. His aspiration was to foster a collaborative space that celebrated cultural richness, encouraged culinary creativity, and facilitated the sharing of cherished family recipes and innovative cooking techniques. DishDiscovery, under Richard's guidance, evolved into an inclusive community-driven application that not only documented recipes but also acted as a melting pot of culinary traditions, inviting individuals worldwide to contribute, explore, and revel in the joy of discovering new flavors. Richard's vision for DishDiscovery stemmed from his unwavering belief in the unifying power of food, aspiring to connect people through a shared love for cooking and the celebration of delicious meals from different corners of the globe.

## How to Use the Application

### Registration

To use the application, users must first register by providing a unique username, email, and password.

- [ ] Click on the \"Sign Up\" button.
- [ ] Fill in the required information: username, email, and password.
- [ ] Click \"Register\" to create your account.

### Login

After registration, users can log in to access the main features of the application.

1. Click on the \"Log In\" button.
2. Enter your username and password.
3. Click \"Login\" to access your account.

### Homepage

Upon successful login, users will be directed to the homepage, where they can explore a collection of recipes.

### Adding a Recipe

Users can contribute to the Recipe Book by adding their own recipes.

1. Navigate to the \"Add Recipe\" section.
2. Fill in the following fields for your recipe: recipe_name, cuisines, difficulty, prep_time, cook_time, ingredients, directions, description.
3. Click \"Add Recipe\" to save your recipe.

### Editing a Recipe

Users can contribute to the Recipe Book by editing their own recipes.

1. Navigate to the \"Edit Recipe\" section.
2. Fill in the following fields for your recipe: recipe_name, cuisines, difficulty, prep_time, cook_time, ingredients, directions, description.
3. Click \"Save\" to save your recipe.

### Delete a Recipe

Users can also delete their own recipes.

1. Navigate to the \"Delete Recipe\" section.
2. Click \"Delete Recipe\" to delete your recipe.

### Viewing All Recipes

Users can view all the recipes available on the platform.

1. Explore the homepage to find a list of recipes.
2. Click on any recipe to view its details.

## Technologies Used Out ##outstanding bugs or unfinished functionality

- **Backend:**
  - Python
  - Django
  - MongoDB

- **Frontend:**
  - React
  - Bootstrap

- **Deployment:**
  - Heroku

 ##outstanding bugs or unfinished functionality
 
In addressing the current state of the application, there are a couple of notable bugs that require immediate attention. One particular bug involves the disappearance of the "Add Recipe" functionality from the header when a user is logged in and then navigates through various links within the platform. This issue seems to persist because the logged-in session data remains active even after opening new links, resulting in the absence of the "Add Recipe" option. A potential solution might involve implementing a mechanism that automatically logs off the user upon closing the tab or navigating away from the site, ensuring a refreshed session upon return.

Additionally, the application is still in need of several essential functionalities that remain unfinished. For instance, a prominent feature on the development roadmap involves enabling videos to play when users hover over different recipe pictures. Integrating this interactive element could significantly enhance the user experience, providing engaging multimedia content as they explore various recipes. Furthermore, there's an incomplete aspect regarding the addition of a recipe owner's name when a new recipe is submitted. Automating this process to include the user's name in the recipe owner field upon submission would streamline the process, attributing ownership and giving due credit to the contributor seamlessly.

Resolving these bugs and implementing the pending functionalities will not only enhance the overall user experience but also ensure smoother navigation and interaction within the platform. These improvements align with the application's goal of providing a user-friendly and feature-rich environment for sharing, exploring, and contributing to a diverse collection of recipes.

Certainly! Here's the information formatted into a table for a README file:

### API Endpoints (http://localhost:5000)

| Method | Path               | Purpose                                    |
|--------|--------------------|--------------------------------------------|
| GET    | /                  | Recipe Dashboard                           |
| GET    | /Recipe            | Index of all Recipes added to the program |
| POST   | /Recipe            | Add a new Recipe to the program            |
| GET    | /Recipe/:recipeId  | Details about a particular recipe          |
| PUT    | /Recipe/:recipeId  | Update a particular recipe                  |
| DELETE | /recipe/:recipeId  | Delete a particular recipe                 |

### App Endpoints (http://localhost:3000)

| Path          | Component                | Purpose                                   |
|---------------|--------------------------|-------------------------------------------|
| /             | About.js                 | Home page                                 |
| /sign-up      | users/SignUpForm.js      | Form for creating a new user               |
| /recipe       | Recipe/RecipeDisplay.js  | List of recipes                           |
| /recipe/new   | recipe/Recipe.js         | Form for creating a new recipe             |
| /recipe/:recipeId | recipe/SirCards.js   | Display details of a specific recipe      |

Feel free to adjust the formatting or add more details as needed for your README file.

## Application Link

The deployed version of the Recipe App can be accessed [here](https://culinary-front-e03d74ce4209.herokuapp.com/).

