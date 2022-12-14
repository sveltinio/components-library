# ResponsiveCard

## Examples

```html
import {
    ResponsiveCard,
    ResponsiveCardImage,
    ResponsiveCardBadge,
    ResponsiveCardInfo,
    ResponsiveCardAction
} from '@sveltinio/widgets';

<ResponsiveCard
    title="The microphone and the voice"
    headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
>
    <ResponsiveCardImage slot="cardImage"
        src="https://source.unsplash.com/600x400/?music"
        alt="microphone photo"
    />
    <ResponsiveCardBadge slot="cardBadge"
        data={{
            value: "music",
            color: "blue",
            url: ""
        }}
    />
    <ResponsiveCardInfo slot="cardInfo" author="John Foo" date="13 Dec 2022" />
    <ResponsiveCardAction slot="cardAction" href="" />
</ResponsiveCard>
```
