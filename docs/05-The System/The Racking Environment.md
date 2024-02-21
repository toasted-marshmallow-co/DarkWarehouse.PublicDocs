---
sidebar_position: 1
---

# The Environment
This guide is for getting familiar with the terms used in the Omni-Mole system. Below, you'll find an easy-to-understand breakdown of the different pieces of the environment. Let's dive in!

![Omni-Mole AS/RS](/img/omni-mole-asrs.webp)

:::note

Everything on this page refers to something that physically exists. Nothing on this page is an abstraction for data/software purposes.

:::

## The AS/RS 🖼️
This term refers to the full Omni-Mole system. AS/RS is an abbreviation for **Automated Storage and Retrieval System**. The Omni-Mole AS/RS is a type of AS/RS for palletised goods storage. 

Imagine the AS/RS as a giant robot that knows exactly where to pick up and drop off your stuff, making sure your pallets of goods are stored or retrieved without a hitch. The image above is a full AS/RS.


## Racking 🏗️
Think of racking as the bones of our system. It's a sturdy framework designed to hold all the machinery and your goods safely. The term "racking" refers to the physical structure that hosts the machinery and pallets. 

This is generally built from roll-formed racking members (columns, beams, etc.). Some systems also utilise structural steel for the racking.

Within the racking there are different concepts that are discussed in the subheadings to follow. 

### Rails 🛤️
Rails are like tracks for our Omni-Moles to glide on. Just as trains travel on train tracks, our Omni-Moles use "rails" to move smoothly and carry goods around. These are usually thick steel extrusions that do not deform when loaded Omni-Moles travel upon them.

![Omni-Mole AS/RS Rails](/img/placeholder-image.png)

### Storage Lanes / Lanes / Travel Lanes 📦
Storage Lanes are special spots within the racking where goods stored. But not all lanes are for storing; some are just for travel, letting Omni-Moles or our team members move freely without bumping into pallets.

The formal definition for a "lane" is any position in which an Omni-Mole is travelling forward/backward. Typically lanes are the racking used where Omni-Moles can store pallets (i.e. they provide a surface for pallets to be placed upon). There are lanes that serve no pallet storing purpose, either programmatically or by being mechanically unable to store pallets. Those are termed "travel lanes" as Omni-Moles/human operators can travel down these lanes unobstracted by pallets.

![Omni-Mole AS/RS Lanes](/img/placeholder-image.png)

#### Lane End Stops 🚧
Lane end stops are physical barriers designed to prevent an Omni-Mole from exiting the racking structure through the storage lane orientation. Sometimes lane end stops also prevent a pallet from exiting the racking when travelling ontop of an Omni-Mole or when being pushed by an Omni-Mole carrying another pallet.

![Omni-Mole AS/RS Lane End Stops](/img/placeholder-image.png)

### Cross-travel Aisles / Aisles ↔️
Aisles allow Omni-Moles to zip from one side to the other, kind of like crossing the street but for robots. These paths are strictly for moving around; no parking allowed!

The formal definition for an "aisle" is any position in which an Omni-Mole can travel in the port/starboard direction between lanes. Aisles are used to "cross-travel" between storage/travel lanes, hence why they are termed "cross-travel aisles". Pallets can never be stored in aisles. 

![Omni-Mole AS/RS Aisles](/img/placeholder-image.png)

#### Aisle End Stops 🚧
Much like their lane counterparts, aisle end stops are physical barriers designed to prevent an Omni-Mole from exiting the racking structure through the cross travel aisles. Sometimes lane aisle end stops also prevent a pallet from exiting the racking when ontop of an Omni-Mole that tries to exit.

![Omni-Mole AS/RS Aisle End Stops](/img/placeholder-image.png)

### Grating / Walkways 👣
For those times humans need to step in, we've got Grating / Walkways. These are safe paths that let us walk around the racking area, especially up high, without any worries.

Grating / walkways can exist in both storage lanes / cross-travel aisles. These locations will have been outfitted with a metal grating structure allowing humans to walk there. 

This becomes an essential requirement for technical assistance on upper levels of the AS/RS. 

![Omni-Mole AS/RS Walkways](/img/placeholder-image.png)

### Staircases / Stairways / Access Ladders 🪜
They're our way to climb up and reach the upper levels whenever needed.

Much like walkways, staircases / stairways / access ladders provide a means for humans to access the upper levels of an AS/RS. Once again, critical for technical assistance on upper levels of the AS/RS.

### VTU Shaft 🛗
The VTU Shaft is basically an elevator shaft for pallets. It's where the Vertical Travel Unit (our fancy pallet elevator) goes up and down, carrying goods to different levels.

The VTU shaft is actually the structure that surrounds the VTU. This structure forms a vertical tunnel in which the elevator travels within. The structure is mechanically engineered to handle the dynamic vertical load.

![Omni-Mole AS/RS VTU Shaft](/img/placeholder-image.png)

#### Anti-fall Devices ⛔
To make sure our Omni-Moles don't take a tumble when the elevator isn't there, we've installed Anti-fall Devices. They're like safety nets that only disappear when it's safe to enter.

When Omni-Moles interact with a docked VTU, they are able to travel into/out of the VTU. However, when the VTU is not docked on that level, the Omni-Mole should not be able to drive into the void where the VTU would be. This would result in the Omni-Mole falling down the VTU shaft. 

The Anti-fall devices are put in place to ensure that this does not happen. These are mechanically disabled when the VTU docks with a level.

![Omni-Mole AS/RS Anti-fall Devices](/img/placeholder-image.png)