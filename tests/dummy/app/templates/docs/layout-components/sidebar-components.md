# Sidebar component

To create your own sidebar component, you can either create a component in your app with the path `ember-skeleton/sidebar`, or specify a custom path in the `sidebarContentComponent` property in your <LinkTo @route="docs.default-options">app wide default options"</LinkTo>.

## sidebarProps

When inserting the `ember-skeleton/sidebar-layout` component, you can supply a hash as the `sidebarProps` property, and that hash will be available in your sidebar component.

<DocsSnippet @name="sidebarProps">
<EmberSkeleton::SidebarLayout::OuterWrapper @sidebarProps={{hash
        userName="Admin"
      }}>
</EmberSkeleton::SidebarLayout::OuterWrapper>
</DocsSnippet>

<DocsSnippet @name="sidebarPropsUsage" @title="Your sidebar component">
{{this.sidebarProps.userName}} {{!-- Admin --}}
</DocsSnippet>

## collapseSideBarIconComponent

By default, the sidebar is collapsible, and features an expand/collapse icon, which rotates 180 degress when the sidebar is collapsed or expanded.

To create your own icon, you can either create a component in your app with the path `ember-skeleton/svg/icon-collapse-sidebar`, or specify a custom path in the `collapseSideBarIconComponent` property in your <LinkTo @route="docs.default-options">app wide default options"</LinkTo>.
