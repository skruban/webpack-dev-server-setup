;(function(window) {
  const greet = 'Hello';
  const message = 'World';

  const sayHello = () => window.alert(greet + message);

  Object.assign(window, {
    sayHello
  });
})(window);