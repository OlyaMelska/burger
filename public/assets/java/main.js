let addNewBurger = () => {
  let newBurger = {
    burger_name: $("#new-burger").val()
  };

  console.log("burger ", newBurger);
  $.post("/api/burgers", newBurger).then(response => {
    console.log("Response " + response);
  });
  $.get("/api/burgers").then(response => {
    console.log("success");
  });
};

$("#submit").on("click", addNewBurger);
$(".devour").on("click", element => {
  let id = element.target.getAttribute("value");
  //   element.target.remove();
  let devoured = {
    devoured: true
  };
  console.log(`id = ${id}`);
  let url = "/api/burgers/" + id;
  console.log("url ", url);
  $.ajax({
    url: url,
    type: "PUT",
    success: function(response) {
      console.log("Devoured successfully!");
    }
  });
});
