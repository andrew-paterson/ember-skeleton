# Panel layout

Created a layout with a horizontal panel spanning the full width of the screen. The content is centred within it. Invoked as below.

<div class="ember-skeleton-styles">
<DocsDemo class="body-text layout-container" as |demo|>
  <demo.example @name="panel-layout.hbs" class="viewport">
    <EmberSkeleton::PanelLayout::OuterWrapper>
      Content here.
    </EmberSkeleton::PanelLayout::OuterWrapper>
  </demo.example>
  <demo.snippet @name="panel-layout.hbs" />
</DocsDemo>
</div>