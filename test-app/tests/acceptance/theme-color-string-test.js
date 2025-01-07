import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module(
  'Acceptance | Usage of theme-color-string helper in JavaScript',
  function (hooks) {
    setupApplicationTest(hooks);

    test('Basic', async function (assert) {
      await visit('/docs/helpers/theme-color-string');
      await this.pauseTest();
      assert.equal(
        find('[data-test-id="fallback-option"]').textContent,
        'gray-medium',
        'Fallback defined in ember-skeleton works where no matches are found in the defaults or hash.',
      );
      assert.equal(
        find('[data-test-id="defaults-included"]').textContent,
        'success',
        'Defaults work when included in the call to the helper function.',
      );
      assert.equal(
        find('[data-test-id="hash-included"]').textContent,
        'warning',
        'Hash is applied when included in the call to the helper function.',
      );
      assert.equal(
        find('[data-test-id="hash-overrides-defaults"]').textContent,
        'warning',
        'Hash overrides the defaults when both match the string passed.',
      );
    });
  },
);
