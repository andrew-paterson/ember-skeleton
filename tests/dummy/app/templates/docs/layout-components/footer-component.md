# Footer component

To create your own footer component, you can either create a component in your app with the path `ember-skeleton/footer`, or specify a custom path in the `footerComponent` property in your <LinkTo @route="docs.default-options"> "app wide default options" </LinkTo>.

## footerProps

When inserting either the `ember-skeleton/panel-layout` or `ember-skeleton/footer-layout` components, you can supply a hash as the `footerProps` property, and that hash will be available in your footer component.

<DocsSnippet @name="footerProps">
<EmberSkeleton::SidebarLayout::OuterWrapper @footerProps={{hash userName="Ron Swanson"}}>
</EmberSkeleton::SidebarLayout::OuterWrapper>
</DocsSnippet>

<DocsSnippet @name="footerPropsUsage" @title="Your footer component">
{{this.footerProps.userName}}
</DocsSnippet>
