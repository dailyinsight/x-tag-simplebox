# Description

A container that always shows exactly one of its children at a time.

Sadly no tests are available at this time.

# Workflow

1. `make`
1. Make changes...
1. Rinse, repeat

# Syntax

```html
<x-simplebox>
    <div class="section_a">
        The letter "A" is for "apotome".
    </div>
    <div class="section_b">
        The letter "B" is for "bijection".
    </div>
    <div class="section_c">
        The letter "C" is for "counter example".
    </div>
</x-simplebox>
```

When a `reveal` event is fired on one of `<x-simplebox>`'s children, that child will be shown and the other children hidden. On creation, the `x-simplebox` will show its first child and hide the rest.

# Usage

Designed to be drop-in usable with [`x-tag-tabbar`](https://github.com/x-tag/tabbar):

```html
<x-tabbar>
    <x-tabbar-tab target-selector=".section_a">
        Apotome
    </x-tabbar-tab>
    <x-tabbar-tab target-selector=".section_b">
        Bijection
    </x-tabbar-tab>
    <x-tabbar-tab target-selector=".section_c">
        Counter example
    </x-tabbar-tab>
</x-tabbar>
```

# Demo

Be sure you've built the project. Open demo.html from the demo directory in your browser.
