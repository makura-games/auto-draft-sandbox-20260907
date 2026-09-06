const assert = require('node:assert/strict');
function canOpen(requiredChecks, feedbackResolved) {
  return requiredChecks && feedbackResolved;
}
assert.equal(canOpen(true, true), true);
assert.equal(canOpen(false, true), false);
assert.equal(canOpen(true, false), false);
