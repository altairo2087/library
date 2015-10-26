// Generated by CoffeeScript 1.10.0
(function() {
  Handlebars.registerHelper('x', function(expression, options) {
    var e, error, error1, fn, result;
    fn = function() {};
    try {
      fn = function() {
        return Function.apply(this, ['window', 'return ' + expression + ';']);
      };
    } catch (error) {
      e = error;
      console.warn("[warning] {{x " + expression + "}} is invalid javascript", e);
    }
    try {
      result = fn.call(this, window);
    } catch (error1) {
      e = error1;
      console.warn("[warning] {{x " + expression + "}} is runtime error", e);
    }
    return result;
  });

}).call(this);

//# sourceMappingURL=x.js.map