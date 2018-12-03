const educationOverviewRouter = (req, res) => {
    const { step } = req.params;
    const { data } =  req.session;

    let template = "education-and-qualifications/overview/index";
    let params = {
        params: req.params
    };
    
    res.render( template , params);
};
  
module.exports = educationOverviewRouter;