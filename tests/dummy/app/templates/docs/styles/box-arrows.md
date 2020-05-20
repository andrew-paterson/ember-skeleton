# Box arrows

Adds an arrow to a box. The examples below show all the available combinations of arrow direction and position.

{{#docs-demo as |demo|}}
  {{#demo.example name="box-arrows.scss" class="box-arrow-example"}}
      <div class="box-arrow arrow-direction-up arrow-position-left">
        .box-arrow.arrow-direction-up.arrow-position-left
      </div>
      <div class="box-arrow arrow-direction-up arrow-position-right">
        .box-arrow.arrow-direction-up.arrow-position-right
      </div>
      <div class="box-arrow arrow-direction-left arrow-position-top">
        .box-arrow.arrow-direction-left.arrow-position-top
      </div>
      <div class="box-arrow arrow-direction-left arrow-position-bottom">
        .box-arrow.arrow-direction-left.arrow-position-bottom
      </div>
      <div class="box-arrow arrow-direction-down arrow-position-right">
        .box-arrow.arrow-direction-down.arrow-position-right
      </div>
      <div class="box-arrow arrow-direction-down arrow-position-left">
        .box-arrow.arrow-direction-down.arrow-position-left
      </div>
      <div class="box-arrow arrow-direction-right arrow-position-bottom">
        .box-arrow.arrow-direction-right.arrow-position-bottom
      </div>
      <div class="box-arrow arrow-direction-right arrow-position-top">
        .box-arrow.arrow-direction-right.arrow-position-top
      </div>
    {{/demo.example}}
  {{demo.snippet "box-arrows.scss"}}
{{/docs-demo}}

By default, the arrow fill will be white, but if the element in question has any of the theme colours applied as a backgroud, the arrow fill will take in that colour.

{{#docs-demo as |demo|}}
  {{#demo.example name="box-arrows-bg.hbs" class="box-arrow-bg-example"}}
      <div class="box-arrow arrow-direction-up arrow-position-left bg-success">
        .box-arrow.arrow-direction-up.arrow-position-left.bg-success
      </div>
      <div class="box-arrow arrow-direction-up arrow-position-right bg-warning">
        .box-arrow.arrow-direction-up.arrow-position-right.bg-warning
      </div>
    {{/demo.example}}
  {{demo.snippet "box-arrows-bg.hbs"}}
{{/docs-demo}}