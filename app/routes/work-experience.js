const workHistoryRouter = (req, res) => {
    const { step } = req.params;
    const { data } =  req.session;
    let template = "work-history/index";
    // 
    if (step) {
        template = `work-history/${ step }`
    }
    //    
    res.render(template);
  };
  
  module.exports = workHistoryRouter;