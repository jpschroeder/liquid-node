// Generated by CoffeeScript 1.11.1
(function() {
  var Promise, Tag,
    slice = [].slice;

  Promise = require("native-or-bluebird");

  module.exports = Tag = (function() {
    function Tag(template, tagName, markup) {
      this.template = template;
      this.tagName = tagName;
      this.markup = markup;
    }

    Tag.prototype.parseWithCallbacks = function() {
      var args, parse;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (this.afterParse) {
        parse = (function(_this) {
          return function() {
            return _this.parse.apply(_this, args).then(function() {
              return _this.afterParse.apply(_this, args);
            });
          };
        })(this);
      } else {
        parse = (function(_this) {
          return function() {
            return _this.parse.apply(_this, args);
          };
        })(this);
      }
      if (this.beforeParse) {
        return Promise.resolve(this.beforeParse.apply(this, args)).then(parse);
      } else {
        return parse();
      }
    };

    Tag.prototype.parse = function() {};

    Tag.prototype.name = function() {
      return this.constructor.name.toLowerCase();
    };

    Tag.prototype.render = function() {
      return "";
    };

    return Tag;

  })();

}).call(this);

//# sourceMappingURL=tag.js.map
