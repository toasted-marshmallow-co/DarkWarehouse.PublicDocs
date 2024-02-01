---
sidebar_position: 1
---
# Updating Machine Locations 🌍

This section deals with the tools available for updating machine locations throughout a system. 🛠️

:::note

Not all machine types can have their locations updated - only OmniMoles and Vtus. 🚫

:::

## OmniMole 🤖

The OmniMole location can be updated for any number of reasons. It is, however, important to consider that updating the OmniMole location in the system will not result in the physical machine's location updating in real life. 🌐 In order to do this, the operator would need to create a __Machine Task__. 📝 Updating the OmniMole location will result in the data stored within the database being updated to reflect the operator's changes. 💾

In order to update the OmniMole's location, the operator can follow these steps:

1. If the operator wishes to relocate the OmniMole within the system, they should select the location they wish to move the machine to. 📍

:::tip

Ensure the __cursor__ is in `Select Singular` mode. ✅

:::

![Selected Location](assets/systems-view-selected-location.png)


2. Locate the machine within the system that you wish to update the location for. 🔍

![Selected Machine](assets/systems-view-selected-machine.png)


3. Right-click on the machine once it's been located. This will trigger the context menu to appear. 🖱️

![Omnimole Context](assets/raw/systems-view-omnimole-context-raw.png)

4. Select `Update Location` in the context menu. 📌

![Update Location](assets/systems-view-omnimole-context.png)

5. At this point, the user can either update the machine to a specified location, or to be 'Outside the system'. If the user opts for the latter, step 1 can be safely ignored. 🌐
   
![Update Location Context](assets/systems-view-omnimole-context-update-location.png)
![Update Location Success](assets/systems-view-omnimole-context-update-location-success.png)

An alternative method to complete the same task, depending on what the operator prefers:

1. Open the tools menu on the left-hand side of the screen. 🧰

![Tools menu icon](assets/systems-view-tools-menu-icon.png)
![Tools menu open](assets/systems-view-tools-menu.png)

2. Select `Manage Traffic` and then `Machines`. 🚦

![Tools menu manage traffic](assets/systems-view-tools-menu-traffic.png)

3. Select `Update Machine Location` from the options available. 🔄

![Tools menu update machine location](assets/systems-view-tools-menu-traffic-machines.png)

4. Follow the steps presented by the form:
   1. Select a machine. This can be done either by opening the machine table using the `Select Machine` button or by clicking the machine on the canvas. 🖼️

![Tools menu update location form select machine](assets/systems-view-tools-menu-traffic-machines-select.png)
![Tools menu update location form select machine modal](assets/systems-view-tools-menu-traffic-machines-select-modal.png)

   2. Select a valid location following the same process as step one. Remember, OmniMoles can only be updated to Lanes, Vtus, and Aisles. 🗺️

![Tools menu update location form select location](assets/systems-view-tools-menu-traffic-machines-select-location.png)
![Tools menu update location form select location modal](assets/systems-view-tools-menu-traffic-machines-select-location-modal.png)

5. Complete the process by clicking the `Update` button. ✅

## Vtu 🚚

The Vtu location update can also occur for any number of reasons, and as stated previously, updating the location for a Vtu will **not** result in the physical machine location being updated. 🔄

In order to update the location for a particular Vtu, the operator can follow the same steps as they would for that of an OmniMole. 📊
For example:

1. If the operator wishes to relocate the Vtu within the system, they should select the location they wish to move the machine to. 📍

:::note

A Vtu can only be updated to Vtu Lanes. 🛣️

:::

2. Right-click on the Vtu that is to be relocated. 🖱️

3. Select `Update Machine Location` from the options available. 📌

4. At this point, again, the user can opt with whichever location update procedure is applicable. 🔄