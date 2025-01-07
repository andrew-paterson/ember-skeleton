# Alternative content

At times you may wish to replace the content on screen with a takeover message, for example if the server becomes unavailable.

To do this, simply set the `alternativeContent` property on the `emberSkeleton` service to anything which is not falsey.

## Using the built in component

There is a built in component for displaying alternative content. Simply set the `alternativeContent` property on the `emberSkeleton` service to an object witht he following properties:

* `title` - This will become the content of the main page header (H1)
* `icon` - the path to an icon to display above the header
* `iconFill` - if the icon above is an svg and can accept attributes, pass one of the theme color variants to set fill class on the icon.
* `message` - The text to siaply on the page.

Click the button below to toggle the alternative layout on and off for the two examples below.

<div class="ember-skeleton-styles">
  <button class="btn btn-primary" {{on "click" this.toggleAlternativeContent}}>Toggle alternative layout</button>
</div>

<DocsDemo class="body-text layout-container" as |demo|>
    <demo.example @name="alternative-content-sidebar.hbs" class="viewport ember-skeleton-styles">
      <EmberSkeleton::SidebarLayout::OuterWrapper>
        <EmberSkeleton::ContentWrapper @title="Default content - sidebar layout">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
      </EmberSkeleton::ContentWrapper>
      </EmberSkeleton::SidebarLayout::OuterWrapper>
    </demo.example>
  <demo.snippet @name="alternative-content-controller.js" @label="Controller JS" @language="javascript" />
  <demo.snippet @name="alternative-content-sidebar.hbs" @label="Template" @language="htmlbars"/>
</DocsDemo>


<DocsDemo class="body-text layout-container" as |demo|>
    <demo.example @name="alternative-content-panel.hbs" class="viewport ember-skeleton-styles">
      <EmberSkeleton::PanelLayout::OuterWrapper>
        <EmberSkeleton::ContentWrapper @title="Default content - panel layout">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
      </EmberSkeleton::ContentWrapper>
      </EmberSkeleton::PanelLayout::OuterWrapper>
    </demo.example>
  <demo.snippet @name="alternative-content-controller.js" @label="Controller JS" @language="javascript" />
  <demo.snippet @name="alternative-content-panel.hbs" @label="Template" @language="htmlbars"/>
</DocsDemo>

## Using a custom component

To create your own alternative content component, you can either create a component in your app with the path `ember-skeleton/alternative-content`, or specify a custom path in the `alternativeContentComponent` property in your <LinkTo class="docs-md__a" @route="docs.default-options">app wide default options</LinkTo>.