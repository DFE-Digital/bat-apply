const personalDetailsRouter = (req, res) => {
    const { step } = req.params;
    let template = "personal-details/index";

    // generates a random string up to the number in the Array
    let params = {
      params: req.params
    };
    //
    if (step) {
        template = `personal-details/${step}`;
    };
  
    res.render(template, params);
  };
  
  module.exports = personalDetailsRouter;