const workExperienceRouter = (req, res) => {
    const { step } = req.params;
    const { data } =  req.session;
    let template = "work-experience/index";
    // 
    if (step) {
        template = `work-experience/${ step }`
    }
    //    
    res.render(template);
  };
  
  module.exports = workExperienceRouter;