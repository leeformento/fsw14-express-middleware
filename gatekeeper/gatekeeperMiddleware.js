module.exports = (req, res, next) => {
    
    if (req.query.pass === 'mellon') {
        console.log('welcome travelers');
    
        req.welcomeMessage = 'welcome to the mines of Moria';
    
        next(); // continue to the next middleware
      } else {
        res.send('you shall not pass!');
      }
    }
