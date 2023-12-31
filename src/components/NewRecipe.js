import { useEffect, useLayoutEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import Card from "react-bootstrap/Card";

function NewRecipe() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state?.data;

  const [recipe, setRecipe] = useState({
    recipename: data?.recipename || "",
    image: data?.image || "",
    cuisines: data?.cuisines || "",
    difficulty: data?.difficulty || "",
    preptime: data?.preptime || "",
    cooktime: data?.cooktime || "",
    ingredients: data?.ingredients || "",
    directions: data?.directions || "",
    description: data?.description || "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let response;
    if (data) {
      response = await fetch(
        "https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/edit_recipe/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...recipe, id: data?.id }),
        }
      );
    } else {
      response = await fetch(
        `https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/create_recipe/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        }
      );
    }

    const result = await response.json();
    navigate("/recipes");
  }

  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <main>
            <h1 className="text-center">
              {data ? "Update a New Recipe" : "Add a New Recipe"}
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <label htmlFor="recipename">Recipe Name</label>
                <input
                  required
                  value={recipe.recipename}
                  onChange={(e) =>
                    setRecipe({ ...recipe, recipename: e.target.value })
                  }
                  className="form-control"
                  id="recipename"
                  name="recipename"
                />
                <div className="form-group">
                  <label htmlFor="image">Enter image URL</label>
                  <input
                    required
                    value={recipe.image}
                    onChange={(e) =>
                      setRecipe({ ...recipe, image: e.target.value })
                    }
                    className="form-control"
                    id="image"
                    name="image"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cuisines">Cuisine</label>
                  <input
                    required
                    value={recipe.cuisines}
                    onChange={(e) =>
                      setRecipe({ ...recipe, cuisines: e.target.value })
                    }
                    className="form-control"
                    id="cuisines"
                    name="cuisines"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="difficulty">Difficulty</label>
                  <input
                    required
                    value={recipe.difficulty}
                    onChange={(e) =>
                      setRecipe({ ...recipe, difficulty: e.target.value })
                    }
                    className="form-control"
                    id="difficulty"
                    name="difficulty"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preptime">Preptime</label>
                  <input
                    required
                    value={recipe.preptime}
                    onChange={(e) =>
                      setRecipe({ ...recipe, preptime: e.target.value })
                    }
                    className="form-control"
                    id="preptime"
                    name="preptime"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cooktime">Cooktime</label>
                  <input
                    required
                    value={recipe.cooktime}
                    onChange={(e) =>
                      setRecipe({ ...recipe, cooktime: e.target.value })
                    }
                    className="form-control"
                    id="cooktime"
                    name="cooktime"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="directions">Directions</label>
                  <input
                    required
                    value={recipe.directions}
                    onChange={(e) =>
                      setRecipe({ ...recipe, directions: e.target.value })
                    }
                    className="form-control"
                    id="directions"
                    name="directions"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ingredients">Ingredients</label>
                  <input
                    required
                    value={recipe.ingredients}
                    onChange={(e) =>
                      setRecipe({ ...recipe, ingredients: e.target.value })
                    }
                    className="form-control"
                    id="ingredients"
                    name="ingredients"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    required
                    value={recipe.description}
                    onChange={(e) =>
                      setRecipe({ ...recipe, description: e.target.value })
                    }
                    className="form-control"
                    id="description"
                    name="description"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cusine my-3 text-center" type="submit">
                  {data ? "Update Recipe" : "Add Recipe"}
                </button>
              </div>
            </form>
          </main>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewRecipe;
