import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router";

function Recipedisplay() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);
  const [record, setRecord] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/get_recipes/`,
        {
          headers: {
            //'x-auth-token': localStorage.getItem('token'),
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await response.json();
      // if data is the same, don't update
      if (resData != recipes) {
        setRecipes(resData);
        console.log("recipe data", resData);
      }
    };
    fetchData();
  }, [record]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (recipes === null) {
    return (
      <div className="main-loader">
        <div class="loader"></div>
      </div>
    );
  }
  //   const handleUpdate = async (UserDetail) => {
  //     const response = await fetch(
  //       "https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/edit_recipe",
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(UserDetail),
  //       }
  //     );
  //     setRecord((prev) => prev + 1);
  //   };

  const handleDelete = async (DeleteId) => {
    const response = await fetch(
      `https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/delete_recipe/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: DeleteId }),
      }
    );
    setRecord((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="text-center">Recipes</h1>

      <Container className="recipe-container">
        <div className="row">
          {recipes?.map((recipe) => (
            <div className="col-md-4 py-2 px-2">
              <Card key={recipe.id} style={{ borderRadius: "25px" }}>
                <div
                  className="recipe-box view"
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <img
                    className="recipe-image"
                    src={recipe.image}
                    alt={recipe.recipename}
                  />
                  <div className="text-center py-2">
                    <h2 className="recipe-title text-center">
                      {recipe.recipename}
                    </h2>
                    <button>Details </button>
                  </div>
                </div>

                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div
                        className="card row flex-row-reverse"
                        style={{ borderRadius: "25px" }}
                      >
                        <div className="col-lg-4 image">
                          <img
                            className="card-img-end img-fluid p-0"
                            src={selectedRecipe ? selectedRecipe.image : ""}
                            alt={
                              selectedRecipe ? selectedRecipe.recipename : ""
                            }
                          />
                        </div>
                        <div className="col-lg-8 card-body">
                          <h4 className="card-title">
                            {selectedRecipe ? selectedRecipe.description : ""}
                          </h4>
                          <div className="card-text">
                            <div className="owner">
                              <b>Recipe Owner:</b>{" "}
                              {selectedRecipe ? selectedRecipe.name : ""}
                            </div>
                            <div>
                              <b>Cuisine:</b>{" "}
                              {selectedRecipe ? selectedRecipe.cuisines : ""}
                            </div>
                            <div>
                              <b>Difficulty</b>{" "}
                              {selectedRecipe ? selectedRecipe.difficulty : ""}
                            </div>
                            <div>
                              <b>Ingredients:</b>{" "}
                              {selectedRecipe ? selectedRecipe.ingredients : ""}
                            </div>
                            <div>
                              <b>Prep Time:</b>{" "}
                              {selectedRecipe ? selectedRecipe.preptime : ""}
                            </div>
                            <div>
                              <b>Cook Time:</b>{" "}
                              {selectedRecipe ? selectedRecipe.cooktime : ""}
                            </div>
                            <div>
                              <b>Ingredients:</b>{" "}
                              {selectedRecipe ? selectedRecipe.ingredients : ""}
                            </div>
                            <div>
                              <b>Directions: </b>{" "}
                              {selectedRecipe ? selectedRecipe.directions : ""}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                {recipes ? (
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn-cusine my-3 text-center"
                      onClick={() => handleDelete(recipe ? recipe.id : "")}
                    >
                      Delete
                    </button>
                    <button
                      className="btn-cusine-update my-3 text-center"
                      onClick={() =>
                        navigate("/newRecipe", { state: { data: recipe } })
                      }
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Recipedisplay;
