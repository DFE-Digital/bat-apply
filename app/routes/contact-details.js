const contactDetailsRouter = (req, res) => {
    // main/correspondence
    const area = req.session.data['where-do-you-live'];

    if (area === 'uk') {
        res.redirect('/contact-details/uk');
    } else if (area === 'international') {
        res.redirect('/contact-details/international');
    } else {
        res.redirect('/contact-details/bfpo');
    }
  };
  
module.exports = contactDetailsRouter;