var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    developersHelper.getAllDevelopers().then(function(developers) {

        var staticContent = {
            title: 'Hackspace',
            subtitle: 'Batch 2017.',
            app: {
                title: 'Hackspace'
            }
        };

        var data = {
            developers: developers
        };

        res.render('developers-landing/view', model(staticContent,
            data));

    })

};
