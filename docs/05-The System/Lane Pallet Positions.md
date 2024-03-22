---
sidebar_position: 3
---

# Lane Pallet Positions

Within a storage lane, there's a maximum number of pallets that can fit, much like how many books you can fit on a shelf. This number, for example, 10 pallets, depends on two main things:

📏 the lane's length **AND**

📐 the size of the pallets themselves.

:::note
The pallet sizes are settable within the application and we support multiple sizes for one facility. These topics are defined by [the Pallet Definition section](../07-Pallets/Pallet%20Definitions.md), which is discussed a bit later.
:::

Because of the way the Omni-Mole AS/RS warehouse works, pallets are stored and retrieved in a specific order, either first-in-first-out (FIFO) or last-in-first-out (LIFO). Imagine it like getting the first or last cookie from a cookie jar; the ones in the middle are a bit trickier to identify and reach.

![LIFO / FIFO](/img/placeholder-image.png)

To manage this, the Dark Warehouse software keeps track of where each pallet is placed in the lane, ensuring we always know which pallet is where, even the middle ones.

:::note
Pallet positions are tracked through careful indexing and logging the exact placement distance (from the entry point) as reported by the Omni-Moles.
:::

Lane pallet positions act as virtual parking spots of where each pallet sits within a lane, making it super easy for you, the user, to interact with them. These lane pallet positions are an important concept for understanding how to interact with pallets and potential pallet storage locations within the Omni-Mole AS/RS.

⤵️ Need to adjust a pallet's position? Perhaps a pallet was placed somewhere by a machine running in manual mode?

👍 No problem! Just select the right spot on our virtual map.

Here's a simple way to picture it: If a lane holds 10 pallets, then it has 10 designated lane pallet positions. Think of it as assigning a specific parking spot for each pallet. Check out the illustration below for a visual guide:

![Lane Pallet Positions](/img/placeholder-image.png)

### Numbering the Positions 📊

When it comes to figuring out where each pallet sits within a storage lane, we've got a simple system: positions are labeled from 1 to N (for an N-deep lane).

- Position 1 is the back-most position of a lane
- Position N is the front-most position of a lane
- The positions follow seqeuentially flowing forwards (i.e. Position 2 is the second back-most position after position 1. Position 3 follows. Then position 4. etc.)

If an Omni-Mole travels forwards in the lane, it travels from 1 to N. Likewise, if an Omni-Mole travels backwards in the lane it travels from position N to 1.

:::note
Directionality within the system is discussed further in the section 6 - The Equipment.
:::
