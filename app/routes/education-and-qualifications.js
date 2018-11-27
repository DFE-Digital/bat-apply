const educationRouter = (req, res) => {
    const { step } = req.params;
    let template = "education-and-qualifications/index";

    // generates a random string up to the number in the Array
    let params = {
      params: req.params
    };
    //
    if (step === 'degree-type') {
      let location = req.session.data['degree-where'];

      if (location === 'degree-uk') {
        res.redirect('/education-and-qualifications/degree')
      } else {
        res.redirect('/education-and-qualifications/degree-international')
      }
    } else if (step) {
        template = `education-and-qualifications/${step}`;
        res.render(template, params);
    } else {
      res.render(template, params);
    }
    
  };
  
  module.exports = educationRouter;