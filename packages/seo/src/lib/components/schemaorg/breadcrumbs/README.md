# JsonLdBreadcrumbs

`JsonLdBreadcrumbs` component adds a [breadcrumb] schema.org property to the page header, a set of links (_BreadcrumbList_) that can help a user understand and navigate a website hierarchy.

A [BreadcrumbList] is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.

## Usage

```html
<script>
    import { JsonLdBreadcrumbs } from '@sveltinio/seo/schemaorg';

    <JsonLdBreadcrumbs url="https://example.com/blog/welcome" />
</script>
```

**Output**

```html
<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "url": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "blog",
      "url": "https://example.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "welcome",
      "url": "https://example.com/blog/welcome"
    }
  ]
}</script>

```

### SvelteKit Example

```html
<script>
    import { page } from '$app/stores';
    import { JsonLdBreadcrumbs } from '@sveltinio/seo/schemaorg';

    <JsonLdBreadcrumbs url={$page.url.href} />
</script>
```

## Properties

The `JsonLdBreadcrumbs` component exposes the following properties:

| Property  | Type     | Required |
| :-------- | :------: | :------: |
| url       | `string` |    yes   |

[breadcrumb]: https://schema.org/breadcrumb
[BreadcrumbList]: https://schema.org/BreadcrumbList
