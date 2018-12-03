const educationRouter = (req, res) => {
    const { step } = req.params;
    const { data } =  req.session;
    let template = "education-and-qualifications/index";

    // generates a random string up to the number in the Array
    let params = {
      params: req.params
    };
    //
    if (step === 'degree-type') {
      let location = data['degree-where'];

      if (location === 'degree-uk') {
        res.redirect('/education-and-qualifications/degree')
      } else {
        res.redirect('/education-and-qualifications/degree-international')
      }
    } else if (step === 'statutory-gcse-science') {

      const type = data['gcse-or-equivalent'];
      const primary = data['teach-primary'];

      if( primary ) {
        if (type === 'gcse') {
          res.render('education-and-qualifications/statutory-gcse-science')
        } else {
          res.redirect('/education-and-qualifications/statutory-equivalent-science')
        }
      } else {
        if (type === 'gcse') {
          res.redirect('/education-and-qualifications/statutory-gcse-maths')
        } else {
          res.redirect('/education-and-qualifications/statutory-equivalent-maths')
        }
      }

    } 
      else if (step) {
        template = `education-and-qualifications/${step}`;
        res.render(template, params);
    } else {
      res.render(template, params);
    }
    
  };
  
  module.exports = educationRouter;