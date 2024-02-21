---
sidebar_position: 2
---

# Location Control Points (LCPs)
The Dark Warehouse software needs to create a virtual map of the physical warehouse space so that it can navigate, manage, and optimize operations efficiently. LCPs are our way of translating real-world objects and areas into data that our software can understand and work with. Think of LCPs as the digital twins of certain spots in our warehouse that hold key information like size, location, and connectivity.

:::note

Location Control Points or "LCPs" are a data abstraction. The underlying properties for these locations in the system (i.e. dimensions, where they are, what they connect to, etc.) are stored in the Dark Warehouse database. 

:::

LCPs are crucial for the Dark Warehouse software to operate smoothly. Let’s dive into what these points are all about! 🌐

## Types of Location Control Points
We categorize our warehouse into different types of LCPs, based on what they represent in the real world. However, not everything is converted into a digital format. For instance, we don’t include staircases because our software does not handle human movement—only the paths and places our Omni-Moles and goods need to know about.

The 3 types of LCPs discussed below are locations in the environment that are relevant to the Dark Warehouse software. 

### 1. Lanes 📦
In the virtual world of our software, lanes represent the areas where our Omni-Moles move back and forth and where pallets are stored (though not all lanes store pallets). 

Here’s what defines a lane in our software:
- Omni-Moles can move through them forwards or backwards.
- They might or might not store pallets. For instance, travel lanes typically don’t store any pallets.
- They have a defined length (referred to as Y length).
- Their width (referred to as X length) is equal to the width of the aisles they connect to.
- They are uniquely numbered for easy identification (like lane 205, lane 6017, etc.).

The image below shows how lanes look in the system.
![LCP Lane](/img/placeholder-image.png)

#### Lane Extension Pieces 🧩
Sometimes, our warehouse structure has elements like pillars or a slightly offset VTU, requiring small lane pieces to connect the dots within our system. These are called "lane extension pieces" in our software. Although they're part of the lane family, they typically can’t store pallets.

The image below shows how lane extension pieces look in the system.
![LCP Lane Extension Piece](/img/placeholder-image.png)

:::note

Lane extension pieces typically cannot store pallets.

:::

### 2. Aisles ↔️
Aisles in our software mirror the cross-travel aisles in the warehouse. 

They are defined by:

- Omni-Moles’ ability to move through them sideways (port/starboard direction).
- Their inability to store pallets.
- Having a defined width (referred to as X length).
- Having a fixed length (Y length) which is usually a standard value for all aisles that are connected.

Aisles are split into two further categories for clarity:

#### 2.1. An Aisle "Position" ℹ️
An aisle position is a specific spot within an aisle where an Omni-Mole can stop and align itself to enter a lane. These positions are uniquely identified, often through RFID tags, allowing the Dark Warehouse software to pinpoint an Omni-Mole's exact location.

An "aisle position" meets the following criteria:
- An Omni-Mole can stop and "align" on an aisle position and be aligned such that it can enter a lane thereafter.
- An aisle position has a unique identifier. This is usually an RFID tag with a unique number for that aisle position. This unique location identification number of "location ID" is used by the Dark Warehouse to know exactly where an Omni-Mole is.

:::note

Most Omni-Mole instructions start and end on an aisle position. Thus upon reporting completion of the instruction the Omni-Mole provides the aisle position's unique identifier to the Dark Warehouse, giving the Dark Warehouse knowledge on its position in the system. 

:::

The image below shows a typical aisle position in the system.
![LCP Aisle Position](/img/placeholder-image.png)

#### 2.2. Aisle Extension Pieces 🧩
Similar to lane extension pieces, these are meant to bridge gaps in aisles. However, Omni-Moles can only pass through these pieces without stopping, and they don’t have a unique identifier.

The aisle extension piece meets the following criteria:
- An Omni-Mole can only pass through an aisle extension piece.
- An Omni-Mole cannot stop or be instructed to stop and "align" at an aisle extension piece.
- No unique identifier is associated with the aisle extension piece.

The image below shows a typical aisle extension piece in the system.
![LCP Aisle Extension Piece](/img/placeholder-image.png)

### 3. VTU Lanes 🛗
VTU lanes are largely an abstraction for the routing algorithms in the Dark Warehouse software, allowing routes to pass through different levels. However, these can be understood as the VTU or elevator shaft from the environment documentation. 

A VTU lane meets the following criteria:
- A VTU can travel to/through them in an upward/downward direction.
- They can never store pallets, they can only be empty or occupied by the VTU itself.
- They have a non-zero height and a fixed Y length as an Omni-Mole needs to travel onto a VTU by travelling the appropriate forward/reverse distance (Y length).

The image below shows a typical VTU lane in the system.
![LCP VTU lane](/img/placeholder-image.png)