// Generated by CoffeeScript 1.11.1
(function() {
  var Liquid, Promise;

  Liquid = require("../liquid");

  Promise = require("native-or-bluebird");

  module.exports = Liquid.BlankFileSystem = (function() {
    function BlankFileSystem() {}

    BlankFileSystem.prototype.readTemplateFile = function(templatePath) {
      return Promise.reject(new Liquid.FileSystemError("This file system doesn't allow includes"));
    };

    BlankFileSystem.prototype.readSectionFile = function(sectionPath) {
      return Promise.reject(new Liquid.FileSystemError("This file system doesn't allow sections"));
    };

    return BlankFileSystem;

  })();

}).call(this);

//# sourceMappingURL=blank_file_system.js.map