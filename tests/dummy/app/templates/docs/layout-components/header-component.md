# Header component

To create your own header component, you can either create a component in your app with the path `ember-skeleton/header`, or specify a custom path in the `headerComponent` property in your <LinkTo @route="docs.default-options">app wide default options</LinkTo>.

## headerProps

When inserting either the `ember-skeleton/panel-layout` or `ember-skeleton/sidebar-layout` components, you can supply a hash as the `headerProps` property, and that hash will be available in your header component.

<DocsSnippet @name="headerProps">
<EmberSkeleton::SidebarLayout::OuterWrapper @headerProps={{hash
        userName="Ron Swanson"
      }}>
</EmberSkeleton::SidebarLayout::OuterWrapper>
</DocsSnippet>

<DocsSnippet @name="headerPropsUsage" @title="Your header component">
{{this.headerProps.userName}} {{!-- Ron Swanson --}}
</DocsSnippet>
