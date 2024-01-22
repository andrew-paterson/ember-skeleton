# Page loading state

By toggling the `hideContent` property in the `emberSkeleton` service, you can toggle the main content area of your layouts between loading and loaded state. Your loading state will likely show some form of loading animation or gif, to indicate that a network request is in process.

See <LinkTo @route="docs.layout-components">layout components"</LinkTo> on how to customise what displays in loading state.

The example below shows how the loading state can be toggled at anytime, and from any Ember class that the `emberSkeleton` service can be injected into.

<DocsSnippet @name="hide-content-explicit.js" />

## Automatically toggling the loading state

To automatically toggle the loading state of your layouts when Ember data is fetching data, define the `loading` action in your application route.

<DocsSnippet @name="loading-state-application-route.js" @title="routes/application.js" />

## Customising the loading component
