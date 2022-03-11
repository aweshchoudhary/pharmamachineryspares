const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/category", (req, res) => {
  res.render("pages/category");
});
router.get("/product-view", (req, res) => {
  res.render("pages/product-view");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});
router.get("/contact", (req, res) => {
  res.render("pages/contact");
});
router.get("/enquiry", (req, res) => {
  res.render("pages/enquiry");
});

router.get("/upload", (req, res) => {
  res.render("pages/upload");
});
// router.post("/upload-product", (req, res) => {
//   const { title, category, desc, img } = req.body;
//   console.log(title + " " + category + " " + desc);
//   res.redirect("/");
// });

module.exports = router;
