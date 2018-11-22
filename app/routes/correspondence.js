const correspondenceRouter = (req, res) => {
    // main/correspondence
    const area = req.session.data['correspondence-where-do-you-live'];
    const correspondence = req.session.data['correspondence_address'];
    
    if (area) {
        if (area === 'correspondence_uk') {
            res.redirect('/contact-details/correspondence-uk');
        } else if (area === 'correspondence_international') {
            res.redirect('/contact-details/correspondence-international');
        } else {
            res.redirect('/contact-details/correspondence-bfpo');
        }
    } else {
        res.render('contact-details/correspondence');
    }

  };
  
module.exports = correspondenceRouter;