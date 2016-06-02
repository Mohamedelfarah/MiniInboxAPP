var message = require('./models/message');
module.exports = function(app, passport) {

    
  /*app.get('/login', function(req, res) {
        res.render('login.html'); 
    });*/
    app.get('/profile', isLoggedIn, function(req, res) {
        
             
            res.json(req.user );
        
    });
     app.get('/messages', function(req, res) {
           
            message.find(function(err, messages) {

                
                if (err)
                    res.send(err);

                res.json(messages); 
            });
        });
          app.post('/messages', function(req, res) {

        
        message.create({
            de : req.body.de,
            destination : req.body.destination,
            content : req.body.content,
        }, function(err, msg) {
            if (err)
                res.send(err);

            message.find(function(err, messages) {
                if (err)
                    res.send(err)
                res.json(messages);
            });
        });

    });

app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
   app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/login'
        }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
    
        

        
     app.get('*', function(req, res) {
           res.sendfile('./public/views/index.html');
       });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

    


