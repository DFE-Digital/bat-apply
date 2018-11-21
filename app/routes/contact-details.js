const contactDetailsRouter = (req, res) => {
    let template = `dashboard`;
    res.render( template , req.params);
  };
  
  module.exports = contactDetailsRouter;