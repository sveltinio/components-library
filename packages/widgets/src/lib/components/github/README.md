# GitHub

## GitHubButton

### Properties

The `GitHubButton` component exposes the following properties:

| Property | Type   | Required | Description                                  |
| :------- | :----: | :------: | :------------------------------------------- |
| type     | string |   yes    | onw of: ["star", "follow", "watch", "issue"] |
| username | string |   yes    | username                                     |
| repo     | string |   yes    | repository name                              |

```html
<script>
    import {GitHubButton} from '@sveltinio/widgets';
</script>

<!-- star -->
<GitHubButton type="star" username="sveltinio" repo="sveltin" />
<!-- follow -->
<GitHubButton type="follow" username="sveltinio" repo="sveltin" />
<!-- watch -->
<GitHubButton type="watch" username="sveltinio" repo="sveltin" />
<!-- issue -->
<GitHubButton type="issue" username="sveltinio" repo="sveltin" />

```

## GitHubForkRibbon

### Properties

The `GitHubForkRibbon` component exposes the following properties:

| Property | Type   | Required | Default                                                      | Description     |
| :------- | :----: | :------: | :----------------------------------------------------------: | :-------------- |
| username | string |    yes   |                                                              | username        |
| repo     | string |    yes   |                                                              | repository name |
| color    | string |    no    | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) |                 |
| bgColor  | string |    no    | ![#a60042](https://via.placeholder.com/15/a60042/a60042.png) |                 |

```html
<script>
    import {GitHubForkRibbon} from '@sveltinio/widgets';
</script>

<GitHubForkRibbon username="sveltinio" repo="sveltin" />

<GitHubForkRibbon username="sveltinio" repo="sveltin" bgColor="#7e22ce" />
```
