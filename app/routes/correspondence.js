const correspondenceRouter = (req, res) => {
    // main/correspondence
    const area = req.session.data['where-do-you-live'];
    const correspondence = req.session.data['correspondence_address'];
    
    if (correspondence === 'yes') {
        if (area === 'uk') {
            res.redirect('/contact-details/correspondence-uk');
        } else if (area === 'international') {
            res.redirect('/contact-details/correspondence-international');
        } else {
            res.redirect('/contact-details/correspondence-bfpo');
        }
    } else {
        res.redirect('/your-application');
    }

  };
  
module.exports = correspondenceRouter;