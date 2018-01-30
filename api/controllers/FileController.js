/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
        console.log(req.file('avatar'));
       
        req.file('avatar').upload(
            { dirname: require('path').resolve(sails.config.appPath, 'assets/images')},
            function (err, files) {
          if (err)
            return res.serverError(err);
    
          return res.json({
            message: files.length + ' file(s) uploaded successfully!',
            files: files
          });
        });
      }
    
};

