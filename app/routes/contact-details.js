const contactDetailsRouter = (req, res) => {
    const { data } = req.session;
    const { step } = req.params;
    let template = "personal-details/index";
    // generates a random string up to the number in the Array
    let address_location = data['where-do-you-live']
  
    if (address_location === 'uk') {
      res.redirect(`personal-details/contact-${ step }.html`)
    }
    
    let params = {
      params: req.params
    };
    //
    if (step) {
        template = `register/${step}`;
    };

  
    res.render(template, params);
  };
  
module.exports = contactDetailsRouter;