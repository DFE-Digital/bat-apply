const referenceRouter = (req, res) => {
    const { data } = req.session;
    const { step } = req.params;
    let template = "register/index";
    // generates a random string up to the number in the Array
    const random = () => { 
      return [...Array(4)].map(i=>(Math.floor(Math.random()*36)).toString(36)).join('');
    };
    const uid = `${random()}-${random()}`;
    
    let params = {
      params: req.params
    };
    //
    if (step) {
        template = `register/${step}`;
    };

    data.uid = uid.toUpperCase();
  
    res.render(template, params);
  };
  
  module.exports = referenceRouter;