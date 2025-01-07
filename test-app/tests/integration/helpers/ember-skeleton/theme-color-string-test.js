import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Helper | ember-skeleton/theme-color-string',
  function (hooks) {
    setupRenderingTest(hooks);

    // Replace this with your real tests.
    test('Basics', async function (assert) {
      this.set('inputValue', 'active');
      await render(hbs`{{ember-skeleton/theme-color-string this.inputValue}}`);
      assert.equal(
        this.element.textContent.trim(),
        'success',
        'Default associations in the ember-skeleton service are applied correctly.',
      );
      this.set('inputValue', `does-not-exist`);
      await render(hbs`{{ember-skeleton/theme-color-string this.inputValue}}`);
      assert.equal(
        this.element.textContent.trim(),
        'gray-medium',
        'Default return string in the ember-skeleton service is applied when nothing else matches.',
      );
      this.set('inputValue', 'active');
      await render(
        hbs`{{ember-skeleton/theme-color-string this.inputValue active="warning"}}`,
      );
      assert.equal(
        this.element.textContent.trim(),
        'warning',
        'Value in hash passed to the helper is applied correctly.',
      );
      this.set('inputValue', 'test');
      await render(
        hbs`{{ember-skeleton/theme-color-string this.inputValue active="warning" test="warning"}}`,
      );
      assert.equal(
        this.element.textContent.trim(),
        'warning',
        'Value in hash passed to the helper is applied correctly where there are mutliple key valu pairs.',
      );
    });
  },
);
