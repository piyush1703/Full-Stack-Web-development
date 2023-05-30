function evaluateExpression() {
  var expression = document.getElementById('expression').innerText;
  var result = evaluate(expression);
  document.getElementById('result').innerText = result;
}

function evaluate(expression) {
  try {
    var processedExpression = processExpression(expression);
    var result = eval(processedExpression);
    return result;
  } catch (error) {
    return 'Error';
  }
}

function processExpression(expression) {
  var processedExpression = expression;
  processedExpression = processTrigonometricFunctions(processedExpression);
  return processedExpression;
}

function processTrigonometricFunctions(expression) {
  var functions = ['sin', 'cos', 'tan'];

  for (var i = 0; i < functions.length; i++) {
    var functionName = functions[i];
    var startIndex = expression.indexOf(functionName + '(');

    while (startIndex !== -1) {
      var endIndex = findClosingParenthesisIndex(expression, startIndex + functionName.length + 1);
      if (endIndex === -1) {
        break;
      }

      var innerExpression = expression.substring(startIndex + functionName.length + 1, endIndex);
      var evaluatedValue;
      switch (functionName) {
        case 'sin':
          evaluatedValue = Math.sin(eval(innerExpression)).toString();
          break;
        case 'cos':
          evaluatedValue = Math.cos(eval(innerExpression)).toString();
          break;
        case 'tan':
          evaluatedValue = Math.tan(eval(innerExpression)).toString();
          break;
          
      }

      expression = expression.substring(0, startIndex) + evaluatedValue + expression.substring(endIndex + 1);

      startIndex = expression.indexOf(functionName + '(');
    }
  }

  return expression;
}

function findClosingParenthesisIndex(expression, startIndex) {
  var count = 1;
  var endIndex = startIndex + 1;
  while (count > 0 && endIndex < expression.length) {
    if (expression[endIndex] === '(') {
      count++;
    } else if (expression[endIndex] === ')') {
      count--;
    }
    endIndex++;
  }
  return count === 0 ? endIndex - 1 : -1;
}

function appendCharacter(character) {
  document.getElementById('expression').innerText += character;
}

function clearResult() {
  document.getElementById('expression').innerText = '';
  document.getElementById('result').innerText = '';
}

function deleteLastChar() {
  var expression = document.getElementById('expression').innerText;
  document.getElementById('expression').innerText = expression.slice(0, -1);
}
  