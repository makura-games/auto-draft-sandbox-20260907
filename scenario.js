const assert = require('node:assert/strict');
function canOpen(requiredChecks, feedbackResolved) {
  return requiredChecks && feedbackResolved;
}
assert.equal(canOpen(true, true), true);
assert.equal(canOpen(false, true), false);
assert.equal(canOpen(true, false), false);

// Сценарий review-policy: независимая проверка нового коммита.
assert.equal(canOpen(false, false), false);

// Пауза позволяет проверить состояние ПР во время повторного запуска теста.
setTimeout(() => {}, 45_000);
