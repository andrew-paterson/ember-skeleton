# Loading component

This is what will display in the main content area of your layout when in loading state. See <LinkTo class="docs-md__a" @route="docs.page-loading-state">page loading state"</LinkTo> on how to show and hide the loading component.

To create your own loading component, you can either create a component in your app with the path `ember-skeleton/loading-page`, or specify a custom path in the `loadingComponent` property in your <LinkTo class="docs-md__a" @route="docs.default-options">app wide default options"</LinkTo>.

## loadingProps

When inserting either the `ember-skeleton/panel-layout` or `ember-skeleton/loading-layout` components, you can supply a hash as the `loadingProps` property, and that hash will be available in your loading component.

<DocsSnippet @name="loadingProps">
<EmberSkeleton::SidebarLayout::OuterWrapper @loadingProps={{hash
        userName="Ron Swanson"
      }}>
</EmberSkeleton::SidebarLayout::OuterWrapper>
</DocsSnippet>

<DocsSnippet @name="loadingPropsUsage" @title="Your loading component">
{{this.loadingProps.userName}}
</DocsSnippet>
