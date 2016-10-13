Liquid = require "../../liquid"


module.exports = class Include extends Liquid.Tag
  Syntax = /([\'\.a-z0-9\/\\_-]+)/i
  SyntaxHelp = "Syntax Error in 'include' -
                    Valid syntax: include [templateName]"

  constructor: (template, tagName, markup, tokens) ->
    match = Syntax.exec(markup)
    throw new Liquid.SyntaxError(SyntaxHelp) unless match

    @filepath = match[1]
    @template = template

    super

  render: (context) ->
    fileVariable = new Liquid.Variable(@filepath)
    templ = @template
    fileVariable.render context
      .then (actualfile) -> 
        templ.engine.fileSystem.readTemplateFile(actualfile)
      .then (src) ->
        templ.engine.parse(src)
      .then (i) -> i.render context
