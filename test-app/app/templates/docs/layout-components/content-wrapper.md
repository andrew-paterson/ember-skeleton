# Content wrapper

To be used inside either of the they panel or sidebar layouts. Creates what you could think of as the main content area of the page, and implements text styles for "main content" text.

Accepts one argument- the main title to be displayed on the page.

<DocsDemo class="body-text layout-container" as |demo|>
  <demo.example @name="content-wrapper-panel-layout.hbs" class="viewport ember-skeleton-styles">
    <EmberSkeleton::PanelLayout::OuterWrapper>
      <EmberSkeleton::ContentWrapper @title="Panel Layout">
        <div class="text-column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
        </div>
      </EmberSkeleton::ContentWrapper>
    </EmberSkeleton::PanelLayout::OuterWrapper>
  </demo.example>
  <demo.snippet @name="content-wrapper-panel-layout.hbs" />
</DocsDemo>


<DocsDemo class="body-text layout-container" as |demo|>
  <demo.example @name="content-wrapper-sidebar-layout.hbs" class="viewport ember-skeleton-styles">
    <EmberSkeleton::SidebarLayout::OuterWrapper>
      <EmberSkeleton::ContentWrapper @title="Sidebar Layout">
        <div class="text-column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>           
        </div>
      </EmberSkeleton::ContentWrapper>
    </EmberSkeleton::SidebarLayout::OuterWrapper>
  </demo.example>
  <demo.snippet @name="content-wrapper-sidebar-layout.hbs" />
</DocsDemo>
