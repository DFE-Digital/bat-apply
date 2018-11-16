const dashBoard = (req, res) => {
    let template = `dashboard`;
    res.render( template , req.params);
  };
  
  module.exports = dashBoard;