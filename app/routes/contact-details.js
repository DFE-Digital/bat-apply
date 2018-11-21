const contactDetailsRouter = (req, res) => {
    const page = req.session.data['where-do-you-live'];
    
    if (page === 'uk') {
        res.redirect('/contact-details/uk')
      } else if (page === 'international') {
        res.redirect('/contact-details/international')
      } else {
        res.redirect('/contact-details/bfpo')
      }
  };
  
module.exports = contactDetailsRouter;