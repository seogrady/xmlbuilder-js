// Generated by CoffeeScript 1.8.0
(function() {
  var XMLComment, XMLNode, create,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  create = require('lodash-node/modern/objects/create');

  XMLNode = require('./XMLNode');

  module.exports = XMLComment = (function(_super) {
    __extends(XMLComment, _super);

    function XMLComment(parent, text) {
      XMLComment.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing comment text");
      }
      this.text = this.stringify.comment(text);
    }

    XMLComment.prototype.clone = function() {
      return create(XMLComment.prototype, this);
    };

    XMLComment.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, space, _ref, _ref1, _ref2;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (_ref = options != null ? options.indent : void 0) != null ? _ref : '  ';
      offset = (_ref1 = options != null ? options.offset : void 0) != null ? _ref1 : 0;
      newline = (_ref2 = options != null ? options.newline : void 0) != null ? _ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!-- ' + this.text + ' -->';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLComment;

  })(XMLNode);

}).call(this);