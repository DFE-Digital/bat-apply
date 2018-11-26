const educationRouter = (req, res) => {
    const { step } = req.params;
    let template = "education-and-qualifications/index";

    // generates a random string up to the number in the Array
    let params = {
      params: req.params
    };
    //
    if (step) {
        template = `education-and-qualifications/${step}`;
    };
  
    res.render(template, params);
  };
  
  module.exports = educationRouter;