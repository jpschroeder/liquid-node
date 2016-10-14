// Generated by CoffeeScript 1.11.1
(function() {
  var Include, Liquid,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Liquid = require("../../liquid");

  module.exports = Include = (function(superClass) {
    var Syntax, SyntaxHelp;

    extend(Include, superClass);

    Syntax = /([\'\.a-z0-9\/\\_-]+)/i;

    SyntaxHelp = "Syntax Error in 'include' - Valid syntax: include [templateName]";

    function Include(template, tagName, markup, tokens) {
      var match;
      match = Syntax.exec(markup);
      if (!match) {
        throw new Liquid.SyntaxError(SyntaxHelp);
      }
      this.filepath = match[1];
      this.template = template;
      Include.__super__.constructor.apply(this, arguments);
    }

    Include.prototype.render = function(context) {
      var fileVariable, templ;
      fileVariable = new Liquid.Variable(this.filepath);
      templ = this.template;
      return fileVariable.render(context).then(function(actualfile) {
        return templ.engine.fileSystem.readTemplateFile(actualfile);
      }).then(function(src) {
        return templ.engine.parse(src);
      }).then(function(i) {
        return i.render(context);
      });
    };

    return Include;

  })(Liquid.Tag);

}).call(this);

//# sourceMappingURL=include.js.map