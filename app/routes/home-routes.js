const trustName = (req, res) => {
    let template = `home/${req.params.route}`;
    res.render( template , req.params);
  };
  
  module.exports = trustName;