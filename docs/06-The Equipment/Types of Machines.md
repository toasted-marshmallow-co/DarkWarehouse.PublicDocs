---
sidebar_position: 2
---

# Types of Machines
Discover the amazing machines that power our Omni-Mole AS/RS. These incredible electromechanical entities work tirelessly to move pallets around, making our operations smooth and efficient. Let’s dive in and meet our robotic heroes! 🤖

## Omni-Moles 🐀
The heart of our system lies with the Omni-Moles. Imagine these as the diligent worker ants of our AS/RS, buzzing around with energy. Powered by batteries, they can move pallets in a 2D plane, moving forwards/backwards in lanes and left/right in aisles. 

🎯 Their main mission? To pick up and place pallets exactly where they need to be.

Below is an example of one of our Omni-Moles.

:::note
Omni-Moles won't always look like the image below. They differ slightly in colour and shape from site to site.
:::

![Omni-Mole Depiction](/img/placeholder-image.png)

## Vertical Transfer Units (VTUs) 🛗
Think of VTUs as the elevators in our system, giving our Omni-Moles a lift to different levels. These stationary powerhouses use 3-phase AC power for their lifting magic, allowing up and down movements. 

🎯 By enabling Omni-Moles to hop on and off with or without a pallet, VTUs are essential for adding that extra vertical dimension to our AS/RS operations.


A picture of an VTU is given below. 

:::note
VTUs won't always look like the image below. They differ in number of levels, racking implementation, colour and shape from site to site.
:::

![VTU Depiction](/img/placeholder-image.png)

## Chargers & Charge Pads 🔌
To keep our Omni-Moles energized, we rely on chargers and charge pads. 

🎯 Chargers are the powerhouses, juicing up the charge pads where Omni-Moles come to recharge. 

This setup ensures our fleet is always ready to go. The specifics, such as power ratings (in kW), can vary by site to match different needs and fleet sizes.

:::note
It is important to note that chargers can sometimes be controlled by locally available VTU control cabinets or by conveyor control cabinets.
:::

An example of a Charger is given below. 

![Charger Depiction](/img/placeholder-image.png)

An example of an installed charge pad is given below.

:::note
Charge pad installation may differ from site to site. This is dependent on where the receiving charge pad is installed in the Omni-Mole machines for that site.
:::

![Installed Charge Pad Depiction](/img/placeholder-image.png)


## Conveyors 🛤️
Conveyor lines are the highways of the AS/RS, guiding pallets along predefined paths with ease. 

🎯 These stationary lines connect different parts of a site or even link different AS/RS systems together, ensuring smooth transitions and efficient handling of pallets.

Below is a depiction of a typical conveyor line.

![Conveyor Line Depiction](/img/placeholder-image.png)

A "conveyor station" is a conveyor machine that can store one pallet. There are various types of conveyor stations that move pallets in different directions / serve specific functions. These are discussed in the subsections to follow. 

Since conveyors are typically installed at entry/exit points for Omni-Mole AS/RS, they have to know what is coming in / going out. So some conveyor stations are outfitted with pallet barcode scanners. These are then called "scanning stations" or "scanner stations". 

### Bi-Directional Conveyor Stations ➡️⬅️
Simple yet effective, these conveyors move pallets forward and backward, serving as the foundational blocks of any conveyor line.

🎯 Bi-directional conveyors are the standard "building block" for a conveyor line.

:::note
Bi-directional conveyors typically have rollers and are then called "Bi-directional roller conveyors". 
:::

![Bi-directional Conveyor Station Depiction](/img/placeholder-image.png)

### Lane Conveyor Stations 🤝
Placed along lanes, these conveyors act as the handshake between a conveyor line and the domain of an Omni-Mole, facilitating smooth transitions.

🎯 Lane conveyors are a type of end/start point for a conveyor line. They allow for interfacing a conveyor line with an Omni-Mole AS/RS.

![Lane Conveyor Station Depiction](/img/placeholder-image.png)

### VTU Conveyor Stations 🛗🤝
Installed on VTU platforms, these conveyors marry vertical and horizontal transport, creating seamless connections between levels.

 🎯 These conveyor stations create a hand-off location between a conveyor line and a VTU. Coincidentally, an Omni-Mole can also drive into the VTU and access the pallet that was pulled onto the VTU conveyor. 

![VTU Conveyor Station Depiction](/img/placeholder-image.png)

### Pop-up Conveyor Stations ⤴️⤵️
Think of these stations as two overlapping bi-directional conveyors with perpendicular directions. One conveyor can move a pallet in the forward/backward direction, then once the pallet is on the conveyor stations it "pops up" and enables another conveyor allowing movement in the left/right direction. 

🎯 Pop-up conveyor stations are typically installed at intersections in a conveyor line. They are usually outfitted with pallet barcode scanners to ensure that pallets are (re)confirmed at every intersection.

![Pop-up Conveyor Station Depiction](/img/placeholder-image.png)

### Turn-table Conveyor Stations 🔄
Need a pallet turned? These stations spin pallets to the perfect orientation, ensuring smooth integration into the AS/RS flow.

🎯 Turn-table conveyor stations are typically installed to adjust the angle of the conveyor line. They are also used to turn a pallet. This is useful for cases where pallets come out of a manufacturing line in an "incorrect" orientation for the Omni-Mole AS/RS.

:::note
In most cases the Dark Warehouse software views turn-table conveyors as single direction machines. This is because typically a pallet goes in the one side and comes out the other side having been turned N degrees. 
:::

![Turn-table Conveyor Station Depiction](/img/placeholder-image.png)
